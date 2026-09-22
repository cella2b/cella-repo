import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Content Creation & Social Media Services in Sydney | CELLA",
  description: "Video, photography, social strategy and creator coaching for hospitality, travel and lifestyle businesses. Explore ways to work with CELLA in Sydney.",
  path: "/services",
})

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
