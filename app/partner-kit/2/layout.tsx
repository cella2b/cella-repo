import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CELLA | Private Mid-Tier Rates",
  description: "Private mid-tier partnership rates for CELLA.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true, noimageindex: true },
}

export default function MidTierLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
