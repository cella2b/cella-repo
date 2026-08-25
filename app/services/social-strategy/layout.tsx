import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Strategy | CELLA",
  description: "Brand positioning and social strategy that clarifies who you want to reach and how to be remembered.",
  alternates: { canonical: "/services/social-strategy" },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
