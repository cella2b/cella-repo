import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Creative Strategy & Social Content Planning | CELLA Sydney",
  description: "Creative strategy, content planning and ongoing social support for businesses and brands. Shape a clear direction for your campaigns and channels with CELLA.",
  path: "/services/social-strategy",
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
