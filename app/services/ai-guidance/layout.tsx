import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | CELLA",
  alternates: { canonical: "/services" },
  robots: { index: false, follow: true },
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children }
