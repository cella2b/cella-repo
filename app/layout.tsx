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
  title: "CELLA | Content That Books",
  description: "Content creator specializing in food, travel, and lifestyle. Creating content that actually books.",
  keywords: "content creator, food content, travel content, lifestyle, video, CELLA",
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
