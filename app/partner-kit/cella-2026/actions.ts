"use server"

import { createHash, timingSafeEqual } from "node:crypto"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const accessCookie = "cella_media_kit_access"
const mediaKitPath = "/partner-kit/cella-2026"

export type RateItem = [label: string, price: string, badge?: string]

export type MediaKitRates = {
  oneOffPosts: RateItem[]
  packages: RateItem[]
  extras: RateItem[]
  bulkCreation: RateItem[]
  socialManagement: RateItem[]
}

function digest(value: string) {
  return createHash("sha256").update(value).digest()
}

function matches(left: string, right: string) {
  const leftDigest = digest(left)
  const rightDigest = digest(right)

  return timingSafeEqual(leftDigest, rightDigest)
}

function accessToken(password: string) {
  return digest(password).toString("hex")
}

export async function hasMediaKitAccess() {
  const password = process.env.MEDIA_KIT_PASSWORD
  const cookieStore = await cookies()
  const currentToken = cookieStore.get(accessCookie)?.value

  if (!password || !currentToken) return false

  return matches(currentToken, accessToken(password))
}

export async function unlockMediaKit(formData: FormData) {
  const password = process.env.MEDIA_KIT_PASSWORD
  const suppliedPassword = String(formData.get("password") ?? "")

  if (!password || !matches(suppliedPassword, password)) {
    redirect(`${mediaKitPath}?error=incorrect-password`)
  }

  const cookieStore = await cookies()
  cookieStore.set(accessCookie, accessToken(password), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: mediaKitPath,
    maxAge: 60 * 60 * 12,
  })

  redirect(mediaKitPath)
}

export async function lockMediaKit() {
  const cookieStore = await cookies()
  cookieStore.delete(accessCookie)
  redirect(mediaKitPath)
}

export async function getMediaKitRates(): Promise<MediaKitRates | null> {
  if (!(await hasMediaKitAccess())) return null

  const encodedRates = process.env.MEDIA_KIT_RATES_JSON
  if (!encodedRates) return null

  try {
    return JSON.parse(encodedRates) as MediaKitRates
  } catch {
    return null
  }
}
