import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/partner-kit/",
    },
    sitemap: "https://www.heycella.com/sitemap.xml",
  }
}
