import type { Metadata } from "next"

export const kitMetadata: Metadata = {
  referrer: "no-referrer",
  title: { absolute: "CELLA | Private Partner Kit" },
  description: "A private invitation to create with CELLA. Access with the password supplied by Marcella.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true, noimageindex: true },
  openGraph: {
    title: "CELLA | Private Partner Kit",
    description: "A private invitation to create with CELLA.",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "CELLA | Private Partner Kit",
    description: "A private invitation to create with CELLA.",
    images: [],
  },
}
