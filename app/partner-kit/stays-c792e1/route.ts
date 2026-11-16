import { createDecipheriv, pbkdf2 } from "node:crypto"
import { promisify } from "node:util"
import { brotliDecompressSync } from "node:zlib"
import { vault } from "./vault"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const deriveKey = promisify(pbkdf2)
const headers = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "private, no-store, max-age=0",
  "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet, noimageindex",
  "Referrer-Policy": "no-referrer",
  "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; img-src 'self' data:; base-uri 'none'; form-action 'self'; frame-ancestors 'none'",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
}
const attempts = new Map<string, { count: number; resetAt: number }>()
const maxSize = 1024
const interval = 15 * 60 * 1000

function gate(error = "") {
  return `<!doctype html>
<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow,noarchive,nosnippet,noimageindex"><title>Private media kit | CELLA</title>
<style>
:root{color-scheme:light;font:100%/1.5 system-ui,-apple-system,BlinkMacSystemFont,sans-serif;background:#faf3ed;color:#27151d}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:1.15rem}
main{width:min(100%,29rem);padding:clamp(1.25rem,6vw,3rem);background:#fffaf6;border:1px solid #decbd1;border-radius:1.25rem}
.wordmark{color:#651638;font-size:1.05rem;font-weight:900;letter-spacing:.13em}
h1{font-size:clamp(2.1rem,8vw,3.4rem);line-height:1.03;letter-spacing:-.05em;margin:.9rem 0 1rem}
p{margin:0 0 1.4rem;color:#5c4a51}label{display:block;font-weight:700;margin-bottom:.4rem}
input,button{width:100%;font:inherit;border-radius:.6rem;min-height:3rem}input{background:#fff;border:1px solid #856f79;padding:.5rem .8rem}
button{margin-top:.7rem;border:0;background:#651638;color:#fff;font-weight:750;padding:.6rem;cursor:pointer}button:hover{background:#481028}
a{color:#651638;text-underline-offset:.2em}:focus-visible{outline:3px solid #722047;outline-offset:3px}
.help{font-size:.9rem;margin:1rem 0 0}.error{margin:.8rem 0 0;color:#8d1237;font-weight:650}
</style></head><body><main><span class="wordmark">CELLA</span><h1>Private media kit</h1>
<p>Enter the access code Marcella shared with you.</p>
<form method="post" autocomplete="off">
<label for="access">Access code</label>
<input id="access" type="password" name="access" maxlength="128" autocomplete="off" required${error ? ' aria-invalid="true" aria-describedby="error"' : ""}>
<button type="submit">Open media kit</button>
${error ? `<p id="error" class="error" role="alert">${error}</p>` : ""}
</form><p class="help">Need help? <a href="mailto:info@heycella.com">Email Marcella</a>.</p></main></body></html>`
}

function respond(body: string, status = 200) {
  return new Response(body, { status, headers: status === 429 ? { ...headers, "Retry-After": "900" } : headers })
}

function validOrigin(request: Request) {
  const supplied = request.headers.get("origin")
  if (!supplied) return request.headers.get("sec-fetch-site") !== "cross-site"
  const url = new URL(request.url)
  const host = request.headers.get("host") ?? url.host
  if (!host || /[\s/\\?#@,]/.test(host)) return false
  const protocol = process.env.VERCEL === "1" ? "https:" : url.protocol
  return supplied === `${protocol}//${host}`
}

async function readForm(request: Request): Promise<string | null> {
  if (!request.body || Number(request.headers.get("content-length")) > maxSize) return null
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let size = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > maxSize) {
        await reader.cancel()
        return null
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }
  return new URLSearchParams(Buffer.concat(chunks, size).toString("utf8")).get("access")
}

function recordAttempt(client: string) {
  const now = Date.now()
  for (const [key, entry] of attempts) if (entry.resetAt <= now) attempts.delete(key)
  let entry = attempts.get(client)
  if (!entry) {
    if (attempts.size >= 5000) return false
    entry = { count: 0, resetAt: now + interval }
    attempts.set(client, entry)
  }
  if (entry.count >= 12) return false
  entry.count++
  return true
}

export function GET() {
  return respond(gate())
}

export async function POST(request: Request) {
  if (!validOrigin(request)) return respond(gate("Open the kit link again to continue."), 403)
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/x-www-form-urlencoded") {
    return respond(gate("Use the access form to open the kit."), 415)
  }
  let access: string | null
  try { access = (await readForm(request))?.trim() ?? null } catch { access = null }
  const invalid = "That code did not open the kit. Check it and try again."
  if (!access || access.length > 128) return respond(gate(invalid), 400)

  const client = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (!recordAttempt(client)) return respond(gate("Too many attempts. Please try again in 15 minutes."), 429)

  try {
    const encrypted = Buffer.from(vault.payload, "base64")
    const key = await deriveKey(access, Buffer.from(vault.salt, "base64"), vault.iterations, 32, "sha256")
    const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(vault.iv, "base64"))
    decipher.setAuthTag(encrypted.subarray(-16))
    const clear = Buffer.concat([decipher.update(encrypted.subarray(0, -16)), decipher.final()])
    const html = brotliDecompressSync(clear).toString("utf8")
    attempts.delete(client)
    return respond(html)
  } catch {
    return respond(gate(invalid), 401)
  }
}
