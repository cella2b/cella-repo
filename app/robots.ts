import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Unlisted kits send noindex themselves; crawlers must be able to read it.
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
