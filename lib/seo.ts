import type { Metadata } from "next"

export const SITE_URL = "https://www.heycella.com"
export const SITE_NAME = "CELLA"
export const SITE_DESCRIPTION =
  "Social-first content and strategy for hospitality, travel, lifestyle and experience-led brands, created by Marcella in Sydney."

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/images/projects/barangaroo-house.jpg",
  alt: "CELLA destination content at Barangaroo, Sydney",
}

type PageMetadata = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
}

export function createPageMetadata({ title, description, path, image, imageAlt }: PageMetadata): Metadata {
  const socialImage = image ? { url: image, alt: imageAlt ?? title } : DEFAULT_SOCIAL_IMAGE

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  }
}
