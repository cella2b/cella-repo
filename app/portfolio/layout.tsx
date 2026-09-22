import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Food, Travel & Hospitality Content Portfolio | CELLA",
  description: "Explore CELLA content and social campaigns for hospitality, travel, lifestyle and experience-led brands.",
  path: "/portfolio",
})

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
