"use client"

import { Analytics, type AnalyticsProps } from "@vercel/analytics/next"
import { usePathname } from "next/navigation"

type BeforeSendEvent = Parameters<NonNullable<AnalyticsProps["beforeSend"]>>[0]

function isPartnerKitPath(pathname: string) {
  try {
    const path = decodeURIComponent(pathname).toLowerCase()
    return path === "/partner-kit" || path.startsWith("/partner-kit/")
  } catch {
    return true
  }
}

// This callback also remains protective if the analytics script was loaded on a
// public page before a client-side navigation into an unlisted kit.
export function filterAnalyticsEvent(event: BeforeSendEvent): BeforeSendEvent | null {
  try {
    const url = new URL(event.url, "https://www.heycella.com")
    if (isPartnerKitPath(url.pathname) ||
      (typeof window !== "undefined" && isPartnerKitPath(window.location.pathname))) {
      return null
    }

    // Query strings may contain enquiry details or access tokens.
    url.search = ""
    url.hash = ""
    return { ...event, url: url.toString() }
  } catch {
    return null
  }
}

export function SiteAnalytics() {
  const pathname = usePathname()
  if (!pathname || isPartnerKitPath(pathname)) return null

  return <Analytics beforeSend={filterAnalyticsEvent} />
}
