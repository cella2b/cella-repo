import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Start a Content Project with Marcella | CELLA Sydney",
  description: "Start a content creation, social strategy, coaching or brand partnership project with CELLA in Sydney.",
  path: "/contact",
})

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
