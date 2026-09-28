import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Content Creation, Creative Strategy & Brand Partnerships | CELLA",
  description: "Content creation and creative strategy for businesses and brands. Explore CELLA’s video, photography, campaign content and brand partnerships.",
  path: "/services",
})

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
