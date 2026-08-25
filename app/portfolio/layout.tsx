import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Selected Work | CELLA",
  description: "Explore CELLA content and social campaigns for hospitality, travel, lifestyle and experience-led brands.",
  alternates: { canonical: "/portfolio" },
}

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
