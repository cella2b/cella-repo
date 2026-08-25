import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.heycella.com"
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
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }))
}
