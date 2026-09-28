import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Enquire About Content & Creative Strategy | CELLA",
  description: "Partner with CELLA on content creation, creative strategy and brand campaigns. Share your business, goals and brief for a detailed proposal.",
  path: "/contact",
})

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
