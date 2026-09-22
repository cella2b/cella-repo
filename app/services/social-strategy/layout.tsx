import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Social Media Strategy & Management in Sydney | CELLA",
  description: "Social media strategy, content planning and ongoing management for hospitality, travel and lifestyle brands. Find a clear direction with CELLA.",
  path: "/services/social-strategy",
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
