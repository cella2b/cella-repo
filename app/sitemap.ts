import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  // Explicit public-route allowlist: never include private kits or redirects.
  const routes = [
    "",
    "/services",
    "/services/content-creation",
    "/services/social-strategy",
    "/services/coaching",
    "/portfolio",
    "/contact",
    "/projects/kings-cross",
    "/projects/google-gemini-paddys",
    "/projects/barangaroo",
    "/projects/doordash-opentable",
    "/projects/prince-shiomi",
    "/projects/milford-sound",
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }))
}
