import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Content Creation | CELLA",
  description: "Social-first video and visual storytelling shaped around your brand, audience and business goals.",
  path: "/services/content-creation",
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
