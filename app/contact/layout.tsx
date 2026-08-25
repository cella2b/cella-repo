import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | CELLA",
  description: "Start a content, social strategy, coaching or AI guidance project with CELLA in Sydney.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
