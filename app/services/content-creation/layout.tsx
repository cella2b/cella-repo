import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Creation | CELLA",
  description: "Social-first video and visual storytelling shaped around your brand, audience and business goals.",
  alternates: { canonical: "/services/content-creation" },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
