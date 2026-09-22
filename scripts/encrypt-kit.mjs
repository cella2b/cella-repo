// Input: JSON on stdin with {content, password}. Output: ciphertext record only.
// Keep source data and credentials OUTSIDE this public repository and shell history.
import { randomBytes, pbkdf2Sync, createCipheriv } from "node:crypto"

export function encryptKit(content, password) {
  if (!password || password.length < 12) throw new Error("Use a password of at least 12 characters")
  if (!content || !["partnership", "content"].includes(content.kind) || !Array.isArray(content.sections)) throw new Error("Invalid kit")
  const salt = randomBytes(16), iv = randomBytes(12), iterations = 310000
  const key = pbkdf2Sync(password, salt, iterations, 32, "sha256")
  const cipher = createCipheriv("aes-256-gcm", key, iv)
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(content), "utf8"), cipher.final(), cipher.getAuthTag()])
  return { salt: salt.toString("base64"), iv: iv.toString("base64"), iterations, ciphertext: encrypted.toString("base64") }
}

if (import.meta.url === new URL(process.argv[1], "file:").href) {
  let input = ""
  for await (const chunk of process.stdin) input += chunk
  const { content, password } = JSON.parse(input)
  console.log(JSON.stringify(encryptKit(content, password), null, 2))
}
