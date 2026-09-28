import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Sydney Content Creation & Brand Partnerships | CELLA",
  description: "Short-form video, photography and campaign content for businesses and brands. Partner with CELLA on content for your channels or campaigns through @cella.channel.",
  path: "/services/content-creation",
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
