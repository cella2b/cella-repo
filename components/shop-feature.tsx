import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
export function ShopFeature() {
  return <section className="cella-section editorial-shop"><div><p className="cella-eyebrow">From my saved places to your next plan</p><h2>A little Cella,<br /><em>to take with you.</em></h2><p>Sydney Date Nights, Sorted. Eight evenings built around restaurants I’d send my friends to, with dish picks, budgets for two and the useful bits in one place.</p><p className="editorial-product-detail">22-page PDF + searchable companion · A$29 · Coming soon</p><Link href="/guides/sydney-date-nights" className="cella-button">Take a look inside <ArrowUpRight size={18} /></Link><Link href="/shop" className="cella-text-link">Explore the shop <ArrowUpRight size={17} /></Link></div><Link href="/guides/sydney-date-nights" className="editorial-guide-art" aria-label="Explore Sydney Date Nights, Sorted"><Image src="/images/guides/sydney-date-nights/cover.jpg" alt="Sydney Date Nights, Sorted digital guide cover" width={667} height={1000} sizes="(max-width: 750px) 64vw, 320px" /></Link></section>
}
