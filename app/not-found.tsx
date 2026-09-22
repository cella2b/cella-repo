import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1} className="cella-home cella-page-hero min-h-[80svh] px-[5%] pb-24 pt-44">
    <p className="cella-eyebrow mb-6">404 / A little off track</p><h1 className="text-6xl md:text-8xl uppercase leading-none">A different<br /><span className="cella-accent">kind of discovery.</span></h1>
    <p className="mt-8 max-w-lg leading-8 text-muted-foreground">This page could not be found. If you were sent a private link, check the complete address with Marcella. Otherwise, there’s plenty to explore.</p>
    <div className="cella-actions"><Link href="/" className="cella-button">Back to CELLA</Link><Link href="/portfolio" className="cella-text-link">Explore the work</Link></div>
  </main><Footer /></>
}
