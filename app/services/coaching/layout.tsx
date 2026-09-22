import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Creator Coaching & Mentoring | CELLA",
  description: "Practical coaching for creators and entrepreneurs building stronger content, positioning and business systems.",
  path: "/services/coaching",
})

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
