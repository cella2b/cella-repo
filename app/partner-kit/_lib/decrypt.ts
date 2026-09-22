import "server-only"

import { createDecipheriv, pbkdf2 } from "node:crypto"
import { promisify } from "node:util"
import { encryptedKits } from "./encrypted-vault"
import type { KitContent } from "./types"

const deriveKey = promisify(pbkdf2)

export function isKitId(value: unknown): value is keyof typeof encryptedKits {
  return typeof value === "string" && Object.hasOwn(encryptedKits, value)
}

function isKitContent(value: unknown): value is KitContent {
  if (!value || typeof value !== "object") return false
  const kit = value as Partial<KitContent>
  return (kit.kind === "partnership" || kit.kind === "content") &&
    Array.isArray(kit.sections) && kit.sections.length > 0 &&
    kit.sections.every(section => section && typeof section.title === "string" &&
      (section.notes === undefined || (Array.isArray(section.notes) && section.notes.every(note => typeof note === "string"))) &&
      Array.isArray(section.items) && section.items.every(item =>
        Array.isArray(item) && item.length >= 2 && item.length <= 3 &&
        item.every(part => typeof part === "string")))
}

export async function unlockKit(id: keyof typeof encryptedKits, password: string): Promise<KitContent | null> {
  try {
    const vault = encryptedKits[id]
    const ciphertext = Buffer.from(vault.ciphertext, "base64")
    const key = await deriveKey(password, Buffer.from(vault.salt, "base64"), vault.iterations, 32, "sha256")
    const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(vault.iv, "base64"))
    decipher.setAuthTag(ciphertext.subarray(-16))
    const plaintext = Buffer.concat([decipher.update(ciphertext.subarray(0, -16)), decipher.final()])
    const content: unknown = JSON.parse(plaintext.toString("utf8"))
    return isKitContent(content) ? content : null
  } catch {
    return null
  }
}
