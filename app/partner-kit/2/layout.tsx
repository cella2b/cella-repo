import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CELLA | Private Partner Kit",
  description: "Private partnership information and rates for CELLA.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true, noimageindex: true },
}

export default function MidTierLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
