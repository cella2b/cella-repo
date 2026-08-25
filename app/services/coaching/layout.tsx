import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coaching and Mentoring | CELLA",
  description: "Practical coaching for creators and entrepreneurs building stronger content, positioning and business systems.",
  alternates: { canonical: "/services/coaching" },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
