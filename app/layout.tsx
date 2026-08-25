import type React from "react"
import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heycella.com"),
  title: "CELLA | Content That Books",
  description:
    "Social-first content and strategy for hospitality, travel, lifestyle and experience-led brands, created by Marcella in Sydney.",
  keywords: ["content creator", "social media strategy", "hospitality content", "travel content", "Sydney", "CELLA"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "CELLA",
    title: "CELLA | Content That Books",
    description: "Social-first content and strategy for hospitality, travel, lifestyle and experience-led brands.",
  },
  twitter: {
    card: "summary",
    title: "CELLA | Content That Books",
    description: "Social-first content and strategy for hospitality, travel, lifestyle and experience-led brands.",
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
    <html lang="en">
      <body className={oswald.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
