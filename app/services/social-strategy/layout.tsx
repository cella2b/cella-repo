import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Social Strategy | CELLA",
  description: "Brand positioning and social strategy that clarifies who you want to reach and how to be remembered.",
  path: "/services/social-strategy",
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
