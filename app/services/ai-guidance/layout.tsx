import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Guidance | CELLA",
  description: "Practical AI guidance, workflow design and automation support shaped around your business.",
  alternates: { canonical: "/services/ai-guidance" },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
