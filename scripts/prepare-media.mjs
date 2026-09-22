// Transport-safe source chunks keep the video reproducible through text-only tools.
// Only the decoded MP4 is deployed; source chunks are outside public/ and JS bundles.
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"

const source = new URL("../assets/cover-video/", import.meta.url)
const parts = (await readdir(source)).filter(name => /^\d{2}\.b64$/.test(name)).sort()
const encoded = (await Promise.all(parts.map(name => readFile(new URL(name, source), "utf8")))).join("")
const video = Buffer.from(encoded.replace(/\s/g, ""), "base64")
if (createHash("sha256").update(video).digest("hex") !== "4292532b429fe79cc8be9202e758297b81cfe32723b4fbf08f17b3496568c7b0") {
  throw new Error("Cover video source is incomplete or has changed. Regenerate source and checksum together.")
}
await mkdir(new URL("../public/video/", import.meta.url), { recursive: true })
await writeFile(new URL("../public/video/cella-cover.mp4", import.meta.url), video)
console.log(`Prepared CELLA cover film (${video.byteLength} bytes)`)
