import type React from "react"
import { Suspense } from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Montserrat } from "next/font/google"
import { SiteAnalytics } from "@/components/site-analytics"
import { SiteStructuredData } from "@/components/site-structured-data"
import { DEFAULT_SOCIAL_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo"
import "./globals.css"

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const montserrat = Montserrat({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" })

export const viewport: Viewport = { themeColor: "#0a0a0f", colorScheme: "dark" }

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CELLA | Sydney Content Creator",
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: SITE_NAME,
    title: "CELLA | Sydney Content Creator",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "CELLA | Sydney Content Creator",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <body className={`${oswald.variable} ${montserrat.variable}`}>
        <SiteStructuredData />
        {children}
        <Suspense fallback={null}>
          <SiteAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
