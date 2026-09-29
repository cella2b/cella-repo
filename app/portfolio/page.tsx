import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { BrandStories } from "@/components/brand-stories"
import { BreadcrumbData } from "@/components/page-structured-data"

export default function Portfolio() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1} className="cella-home pt-24">
    <BreadcrumbData items={[{ name: "Work", path: "/portfolio" }]} />
    <section className="cella-section"><div className="cella-section-heading"><div><p className="cella-eyebrow">Food, travel & experiences</p><h1>Stories worth sharing.</h1></div></div><p className="cella-portfolio-intro">A selection of creator partnerships and content for brands. Explore the brief, CELLA’s role and the published work, including content programmes developed across multiple months.</p><BrandStories /></section>
    <section className="cella-section editorial-cta"><p className="cella-eyebrow">Your story could be next</p><h2>Let’s make something<br /><em>worth sharing.</em></h2><Link href="/contact" className="cella-button mt-8">Enquire now <ArrowUpRight size={18} /></Link></section>
  </main><Footer /></>
}
