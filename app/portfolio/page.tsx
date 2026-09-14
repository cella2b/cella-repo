import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { FeaturedWork, MoreWork, CampaignResults } from "@/components/featured-work"

export default function Portfolio() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1} className="cella-home pt-24">
    <section className="cella-section"><div className="cella-section-heading"><div><p className="cella-eyebrow">Food, travel & experiences</p><h1 className="text-5xl md:text-8xl font-medium tracking-tight uppercase">Stories worth sharing.</h1></div></div><p className="cella-portfolio-intro">A selection of creator partnerships, destination campaigns and content made for businesses. Explore the work and watch the published stories.</p><FeaturedWork /><MoreWork /></section>
    <CampaignResults />
    <section className="cella-section"><p className="cella-eyebrow">Your story could be next</p><h2>LET’S MAKE SOMETHING<br />WORTH SHARING.</h2><Link href="/#contact" className="cella-button mt-8">Start a conversation <ArrowUpRight size={18} /></Link></section>
  </main><Footer /></>
}
