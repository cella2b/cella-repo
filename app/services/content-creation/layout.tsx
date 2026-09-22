import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Sydney Content Creation & Brand Partnerships | CELLA",
  description: "Short-form video and photography for food, travel and hospitality businesses. Content for your channels or creator partnerships with @cella.channel.",
  path: "/services/content-creation",
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
