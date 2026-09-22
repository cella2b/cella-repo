"use client"

import { Analytics, type AnalyticsProps } from "@vercel/analytics/next"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { track } from "@vercel/analytics"

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
  useEffect(() => {
    if (!pathname || isPartnerKitPath(pathname)) return
    const onClick = (event: MouseEvent) => {
      if (isPartnerKitPath(window.location.pathname)) return
      const anchor = event.target instanceof Element ? event.target.closest("a") : null
      if (!anchor) return
      try {
        const destination = new URL(anchor.href, window.location.origin)
        // Only fixed event names. Never send the URL, query, label or form values.
        if (destination.protocol === "mailto:") track("email_link_clicked")
        else if (destination.hostname === "www.instagram.com") track("instagram_link_clicked")
        else if (destination.origin === window.location.origin && destination.pathname === "/contact") track("enquiry_page_opened")
      } catch { /* Malformed links should never break navigation. */ }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [pathname])
  if (!pathname || isPartnerKitPath(pathname)) return null

  return <Analytics beforeSend={filterAnalyticsEvent} />
}
