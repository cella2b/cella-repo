// Read-only HTTP checks. Optional credentials JSON stays outside the public repo.
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const origin = process.argv[2] || "http://localhost:3000"
const access = process.argv[3] ? JSON.parse(readFileSync(process.argv[3], "utf8")) : null
const routes = ["/", "/services", "/services/content-creation", "/services/social-strategy", "/services/coaching", "/portfolio", "/contact", "/projects/kings-cross", "/projects/barangaroo", "/projects/google-gemini-paddys", "/projects/doordash-opentable", "/projects/prince-shiomi", "/projects/milford-sound"]
const titles = new Set()
const publicHtml = []
for (const path of routes) {
  const response = await fetch(origin + path)
  assert.equal(response.status, 200, path)
  const html = await response.text()
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: one H1`)
  assert.match(html, /rel="canonical"/)
  assert.doesNotMatch(html, /content="noindex/)
  assert.match(html, /application\/ld\+json/)
  assert.doesNotMatch(html, /(?:href|src)="[^"\s]*partner-kit/)
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert.ok(title && !titles.has(title), `${path}: unique title`)
  titles.add(title); publicHtml.push(html)
  console.log(`PASS public ${path}`)
}
const sitemap = await (await fetch(origin + "/sitemap.xml")).text()
assert.doesNotMatch(sitemap, /partner-kit|ai-guidance/)
for (const id of ["1", "2", "3", "content", "cella-2026", "p-7f3a9c", "p-c4e8b2"]) {
  const response = await fetch(`${origin}/partner-kit/${id}`)
  assert.equal(response.status, 200)
  assert.match(response.headers.get("x-robots-tag"), /noindex/)
  assert.equal(response.headers.get("referrer-policy"), "no-referrer")
  const html = await response.text()
  assert.match(html, /CELLA \| Private Partner Kit/)
  assert.doesNotMatch(html, /mid.tier|low.tier|high.tier|ciphertext/)
  // React Flight uses $-prefixed references; inspect rendered markup for prices.
  assert.doesNotMatch(html.replace(/<script\b[\s\S]*?<\/script>/g, ""), /\$\d/)
  console.log(`PASS locked kit ${id}`)
}
const retired = await fetch(origin + "/services/ai-guidance", { redirect: "manual" })
assert.equal(retired.status, 308)
assert.equal(retired.headers.get("location"), "/services")
assert.equal((await fetch(origin + "/this-page-does-not-exist")).status, 404)
const image = await fetch(origin + "/share-image")
assert.equal(image.status, 200); assert.match(image.headers.get("content-type"), /image\/png/)
assert.equal((await fetch(origin + "/video/cella-cover.mp4", { method: "HEAD" })).status, 200)

async function unlock(body, headers = {}) {
  return fetch(origin + "/partner-kit/access", { method: "POST", headers: { "content-type": "application/json", origin, ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) })
}
assert.equal((await unlock({})).status, 400)
assert.equal((await unlock({}, { origin: "https://unrelated.invalid" })).status, 403)
assert.equal((await unlock({}, { "content-type": "text/plain" })).status, 415)
assert.equal((await unlock("x".repeat(5000))).status, 413)
if (access) {
  for (const [kitId, password] of Object.entries(access)) {
    assert.equal((await unlock({ kitId, password: "incorrect-test-password" })).status, 401)
    const response = await unlock({ kitId, password })
    assert.equal(response.status, 200, `valid password: ${kitId}`)
    assert.match(response.headers.get("cache-control"), /no-store/)
    const { kit } = await response.json()
    assert.ok(kit.sections.length >= (kitId === "content" ? 2 : 3))
    for (const section of kit.sections) for (const [, price] of section.items) {
      if (price.startsWith("$")) assert.ok(publicHtml.every(html => !html.includes(price)), "no commercial rates in public HTML")
    }
    if (kitId === "content") assert.equal(kit.kind, "content")
    console.log(`PASS authenticated response ${kitId}: ${kit.sections.length} sections, no-store`)
  }
  assert.equal((await unlock({ kitId: "3", password: access["1"] })).status, 401)
  assert.equal((await unlock({ kitId: "cella-2026", password: access["2"] })).status, 200)
}
console.log("PASS sitemap, social image, video, redirect, 404 and API validation")
