import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | CELLA",
  description: "Content creation, social strategy, coaching and practical AI guidance from CELLA.",
  alternates: { canonical: "/services" },
}

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
