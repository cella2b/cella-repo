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

// Restore the original homepage film from binary source pieces.
const originalSource = new URL("../assets/original-video/", import.meta.url)
const originalParts = (await readdir(originalSource)).filter(name => /^\d{2}\.part$/.test(name)).sort()
if (originalParts.length !== 12) throw new Error("Original cover film source is incomplete")
const originalVideo = Buffer.concat(await Promise.all(originalParts.map(name => readFile(new URL(name, originalSource)))))
if (createHash("sha256").update(originalVideo).digest("hex") !== "962da7ed2fecbc175c6cf13542413b5dca8f1cde464dd330fb132608aad86119") throw new Error("Original cover film checksum mismatch")
await writeFile(new URL("../public/video/cella-original-cover.mp4", import.meta.url), originalVideo)
console.log(`Prepared original CELLA cover film (${originalVideo.byteLength} bytes)`)

// Approved Mirvac portfolio film, optimised for on-demand playback.
const mirvacSource = new URL("../assets/mirvac-video/", import.meta.url)
const mirvacParts = (await readdir(mirvacSource)).filter(name => /^\d{2}\.part$/.test(name)).sort()
const mirvacVideo = Buffer.concat(await Promise.all(mirvacParts.map(name => readFile(new URL(name, mirvacSource)))))
if (createHash("sha256").update(mirvacVideo).digest("hex") !== "3e6cf1b53d629cd3b9a63bfc3c3cc6a41cc738b093370fd8feef24232738b928") throw new Error("Mirvac film checksum mismatch")
await writeFile(new URL("../public/video/mirvac-shed.mp4", import.meta.url), mirvacVideo)
