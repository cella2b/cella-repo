export type RateItem = [label: string, price: string, badge?: string]

export type MediaKitRates = {
  oneOffPosts: RateItem[]
  packages: RateItem[]
  extras: RateItem[]
  bulkCreation: RateItem[]
  socialManagement: RateItem[]
}

const vault = {
  salt: "lVuOIGELHPr+LeNrdO6M1A==",
  iv: "2SY0XMu8pB8e9L+/",
  ciphertext:
    "GFpXcEfaPiKlKfGRNUmqOkgbll8diYBJ2NnqlL/Jsf6sJZE9ucxvEz4ezFyolzKy+wHAoSWlzEoZkd6AGdlCrqZBXjRfsdAMqwt58J7N4WzSduiq8KqjrRaaq3zGhgoTCXAl+T+gDmytbJnEgyybPr3py2g+nqAs8V5zDSKeW3GV59JbrCcJ9b1Dla4tBp3EiD9JRCr8Qam7wHsGWR00V+bjFSMjUfW3/goZqTwkhxilMtnDqxVTEkE/4e7dvmayazri2TQudvigO5orNEyz2P8whqy5Eghoe15OR/8vPFqoiorg8/ffhp5lbSBDpvNKIjsgnnv7gCm7VUsyV5wErp4dZ8dDbZ2v/fKGRoftRvoYelsLWLxRTIdMxLUrHfdSiQAmUvhh9hO5DQZG8la9Kdbw2IOEXo1xFBd7+myUU/Hq3x2gpT4XuwSAfOOHqJtAZxwKOJFGdHlVWH/+P5nVj7K0AZuY1AFh3jeNxHHExNUE8evbqxxWJhzMuL9+J/8VEmApTRiy7Woin+DZn6Y00hIEsUpFWEHM7TPQaG/dtZNxOFlREl4/2O4qjVx+xy0ISv0z+H5+UJ/1D7L1b5odwzQf8ZABDiHYcdVrn9Tkx1c4tENkl9r6RzAGQ8cQSViS7dpRwEGaOIXeyx6jTmFoRT0Ukq+NYGcA8VSPeeT8tJvheq86N2C6/q3kt3gEe7K3Vq1uaq32c+uNC7z2iu3UyYyjwWhgDbj1S+Ejvi2PTba0HkPMQF5PjZtwCh45cN8dlik/47etR2syUDZ34im8UfXPXIYciY2NqfmxzcsJO+iXHWBy5uQswOHRT9alM9iffTiMek8/LKtjUSZdlcqPCAnaSY8m+IKs5WTMwKM4Yg7qvrz17WYg5B5p8cAfnGAYJGzSvyu5yWNPiu+JBDEQkiWCqsM32fueT1Jbng14C7Wjkx0p851EHwna",
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
