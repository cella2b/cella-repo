import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Services | CELLA",
  description: "Content creation, social strategy, coaching and mentoring from CELLA.",
  path: "/services",
})

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
