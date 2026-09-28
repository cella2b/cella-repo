import type { Metadata } from "next"

export const SITE_URL = "https://www.heycella.com"
export const SITE_NAME = "CELLA"
export const SITE_DESCRIPTION =
  "CELLA is a Sydney creative studio partnering with businesses and brands on content creation, creative strategy and brand campaigns."

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/share-image",
  alt: "CELLA creative studio",
  width: 1200,
  height: 630,
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
