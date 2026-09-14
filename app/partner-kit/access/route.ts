import { isKitId, unlockKit } from "../_lib/decrypt"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const responseHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
}

// A bounded per-instance brake on repeated password attempts. Authentication itself
// is AES-GCM verification and does not rely on this optional abuse control.
const attempts = new Map<string, { count: number; resetsAt: number }>()
const attemptWindow = 15 * 60 * 1000
const maxBodyBytes = 4096

async function readBody(request: Request): Promise<string | null> {
  if (!request.body) return ""
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let size = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > maxBodyBytes) {
        await reader.cancel()
        return null
      }
      chunks.push(value)
    }
    return Buffer.concat(chunks, size).toString("utf8")
  } finally {
    reader.releaseLock()
  }
}

function takeAttempt(key: string) {
  const now = Date.now()
  for (const [entryKey, value] of attempts) if (value.resetsAt <= now) attempts.delete(entryKey)
  let entry = attempts.get(key)
  if (!entry) {
    if (attempts.size >= 5000) return false
    entry = { count: 0, resetsAt: now + attemptWindow }
    attempts.set(key, entry)
  }
  if (entry.count >= 12) return false
  entry.count += 1
  return true
}

function reply(body: unknown, status: number) {
  return Response.json(body, { status, headers: responseHeaders })
}

function hasSameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (origin === null) return true

  try {
    const requestUrl = new URL(request.url)
    // Next can reconstruct request.url with its listening hostname. Host keeps
    // the address actually visited, including Vercel custom and preview domains.
    // Do not let caller-supplied forwarded-host headers override that authority.
    const host = request.headers.get("host") ?? requestUrl.host
    if (!host || /[\s/\\?#@,]/.test(host)) return false
    // Vercel terminates HTTPS before invoking the function; local next start can
    // use HTTP. A forwarded-proto header cannot widen the accepted protocol.
    const protocol = process.env.VERCEL === "1" ? "https:" : requestUrl.protocol
    if (protocol !== "http:" && protocol !== "https:") return false
    const expected = new URL(`${protocol}//${host}`)
    const supplied = new URL(origin)
    return supplied.origin === origin && supplied.origin === expected.origin
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return reply({ error: "Please open the kit link and try again." }, 403)
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return reply({ error: "Please submit the password form." }, 415)
  }
  if (Number(request.headers.get("content-length")) > maxBodyBytes) {
    return reply({ error: "Please check your password and try again." }, 413)
  }
  let body: unknown
  try {
    const raw = await readBody(request)
    if (raw === null) return reply({ error: "Please check your password and try again." }, 413)
    body = JSON.parse(raw)
  } catch {
    return reply({ error: "Please check your password and try again." }, 400)
  }
  if (!body || typeof body !== "object") return reply({ error: "Please submit the password form." }, 400)
  const { kitId, password } = body as Record<string, unknown>
  if (!isKitId(kitId) || typeof password !== "string" || password.length === 0 || password.length > 512) {
    return reply({ error: "Please check the link and password supplied by CELLA." }, 400)
  }
  const client = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (!takeAttempt(client)) {
    return Response.json({ error: "Too many attempts. Please try again in 15 minutes." }, {
      status: 429, headers: { ...responseHeaders, "Retry-After": "900" },
    })
  }
  const kit = await unlockKit(kitId, password)
  if (!kit) return reply({ error: "That password is not correct. Please try again." }, 401)
  attempts.delete(client)
  return reply({ kit }, 200)
}
