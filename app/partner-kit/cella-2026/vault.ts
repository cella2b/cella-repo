export type RateItem = [label: string, price: string, badge?: string]

export type MediaKitRates = {
  oneOffPosts: RateItem[]
  packages: RateItem[]
  extras: RateItem[]
  bulkCreation: RateItem[]
  socialManagement: RateItem[]
}

const vault = {
  salt: "2pzaJlgUMTZppL5fUkuc/Q==",
  iv: "EEzVzQk54OV+3XaS",
  ciphertext:
    "GuDr7Gd5N5aTQO6n/Me/xPDy8ufgTpaDY5AyfHrhn2WKOvdutjRWcTybNmodsjNyoRWLgUZMaK4zFwJ+5xoenLmLx/iE+Ss80KttKVN1oZGN5R4A7gxF6rXj0GOJ/VFyCp/DC7El68yDxwU9kCzg2NdetuU5uLso56So5iAm2Jv3l64Hl+aGA9zhC5TssEl/hXFA9OjIhNoDS6vACmYVV0OTdGk4zIJJLj34qtiPrMwFW44Ivvkyx2iXC5z/TbK7VQ/8YHW4MLzRaUMQ6kKW+zkauKnrE4X8ke2AnH0A2NmYTszMVCPLNPycRTENQXCr7NAf2sMsDWYSYlC3ny6p34vXs2NT83/xgIB7auSCHZpzs+Wrl/HHMA6cR6yz1DEC+PmPW/kU9xqIh7hBe5h0RB4wcX/UfELtsHSmfE0l2oZUR7ZmBGtul0xPWlAMjyHshlh5Bna2kpVspgDrWCvAecVLvgVKhESRsG1Q55poh464xHl8DyQ8j8Q08gcj00hi/KkVhQCXNtGStTQLODGNZ1/ojODJM1C1m3G0eL72kEZ3tCHsGHUhSEcAK4SkdPaOWJgq3dj3l9tSr4VSaja5lfKzVYFcpzFjGC0gDm9Hc23KNSv59q7gwgjNAvTatjLVLtrKetF9Sx5IAEdzFsNVtn0HyoRbXeNIDB3V/Mrl4Y407EccZudt8PJbAe5Y0BaESdZw6g5JseBowgAp1uu9TEzAvd6+8Y3K62jKappZyg9qdvosnOrx2+13XaC4RGEkKCF2brXiJkedV0NK5/5sy0vFPw9RI529BTNgIhmhNVuVEE2xxddeeICcuCb18yc20qAuCrCK+XktJs9/0De5LIVmiWSXAtvDRXTFJPU2PS3iyM4nHz/NUVrhMPihUMX/fuSAJ1+d2z+RU7c0EJCmC1wdB1QobFqwNLdt2yaYpRE+Hlm0M60ZniLO",
  iterations: 310_000,
}

function fromBase64(value: string) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0))
}

function isMediaKitRates(value: unknown): value is MediaKitRates {
  if (!value || typeof value !== "object") return false
  const record = value as Record<string, unknown>
  return ["oneOffPosts", "packages", "extras", "bulkCreation", "socialManagement"].every((key) =>
    Array.isArray(record[key]),
  )
}

export async function decryptMediaKitRates(password: string): Promise<MediaKitRates | null> {
  try {
    const passwordBytes = new TextEncoder().encode(password)
    const keyMaterial = await crypto.subtle.importKey("raw", passwordBytes, "PBKDF2", false, ["deriveKey"])
    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: fromBase64(vault.salt),
        iterations: vault.iterations,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"],
    )
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64(vault.iv) },
      key,
      fromBase64(vault.ciphertext),
    )
    const parsed: unknown = JSON.parse(new TextDecoder().decode(decrypted))

    return isMediaKitRates(parsed) ? parsed : null
  } catch {
    return null
  }
}
