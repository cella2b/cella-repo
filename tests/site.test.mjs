import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { createDecipheriv, pbkdf2Sync } from "node:crypto"
import { encryptKit } from "../scripts/encrypt-kit.mjs"

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")
const decrypt = (record, password) => {
  const bytes = Buffer.from(record.ciphertext, "base64")
  const key = pbkdf2Sync(password, Buffer.from(record.salt, "base64"), record.iterations, 32, "sha256")
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(record.iv, "base64"))
  decipher.setAuthTag(bytes.subarray(-16))
  return JSON.parse(Buffer.concat([decipher.update(bytes.subarray(0, -16)), decipher.final()]).toString())
}

test("kit encryption authenticates its data and uses independent randomness", () => {
  // Entirely synthetic fixture. Real commercial rates/passwords must never be in tests.
  const fixture = { kind: "content", sections: [{ title: "Demo", items: [["Example", "Enquire"]] }] }
  const password = "synthetic-test-only-credential"
  const a = encryptKit(fixture, password), b = encryptKit(fixture, password)
  assert.deepEqual(decrypt(a, password), fixture)
  assert.notEqual(a.salt, b.salt)
  assert.notEqual(a.iv, b.iv)
  assert.throws(() => decrypt(a, "incorrect-password"))
  const damaged = Buffer.from(a.ciphertext, "base64"); damaged[0] ^= 1
  assert.throws(() => decrypt({ ...a, ciphertext: damaged.toString("base64") }, password))
})

test("primary and legacy kit routes exist and stay out of the sitemap", () => {
  for (const id of ["1", "2", "3", "content", "cella-2026", "p-7f3a9c", "p-c4e8b2"]) {
    assert.match(read(`app/partner-kit/${id}/page.tsx`), new RegExp(`kitId="${id}"`))
  }
  assert.doesNotMatch(read("app/sitemap.ts"), /["']\/partner-kit/)
  assert.match(read("app/partner-kit/_lib/metadata.ts"), /index: false/)
  assert.doesNotMatch(read("app/partner-kit/_lib/metadata.ts"), /mid.tier|low tier|high tier/i)
})

test("private data is server-only and never embedded in client source", () => {
  assert.match(read("app/partner-kit/_lib/encrypted-vault.ts"), /^import "server-only"/)
  assert.match(read("app/partner-kit/_lib/decrypt.ts"), /^import "server-only"/)
  const client = read("app/partner-kit/_components/partner-kit.tsx")
  assert.doesNotMatch(client, /encrypted-vault|localStorage|sessionStorage|\$[0-9]/)
  assert.match(read("app/partner-kit/access/route.ts"), /private, no-store/)
})

test("public catalogue is shared and retired offering stays retired", () => {
  assert.match(read("app/page.tsx"), /@\/lib\/services/)
  assert.match(read("app/services/page.tsx"), /@\/lib\/services/)
  assert.match(read("components/enquiry-form.tsx"), /@\/lib\/services/)
  assert.match(read("app/services/ai-guidance/page.tsx"), /permanentRedirect\("\/services"\)/)
})

test("the social image is a dedicated public image, not inherited by private metadata", () => {
  assert.match(read("lib/seo.ts"), /\/share-image/)
  assert.match(read("app/partner-kit/_lib/metadata.ts"), /images: \[\]/)
  assert.ok(!readdirSync(new URL("../app", import.meta.url)).some(file => file.startsWith("opengraph-image.")))
})
