import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { MoreWork, CampaignResults } from "@/components/featured-work"
import { BrandStories } from "@/components/brand-stories"
import { FlowWork } from "@/components/flow-work"
import { BreadcrumbData } from "@/components/page-structured-data"
import { projectLinks } from "@/lib/projects"

export default function Portfolio() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1} className="cella-home pt-24">
    <BreadcrumbData items={[{ name: "Work", path: "/portfolio" }]} />
    <section className="cella-section"><div className="cella-section-heading"><div><p className="cella-eyebrow">Food, travel & experiences</p><h1>Stories worth sharing.</h1></div></div><p className="cella-portfolio-intro">A selection of creator partnerships and content for brands. Explore the brief, my role and the published work, including content programmes developed across multiple months.</p><BrandStories /><div className="flow-follow-on"><FlowWork compact /></div><MoreWork /></section>
    <CampaignResults />
    <section className="cella-section" aria-labelledby="case-studies-heading"><p className="cella-eyebrow">Behind the content</p><h2 id="case-studies-heading">A little more of the story.</h2><div className="mt-10 grid gap-x-10 sm:grid-cols-2">{projectLinks.map(project => <Link href={project.href} key={project.href} className="cella-text-link justify-between border-t border-[#d7cec4] py-6">{project.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div></section>
    <section className="cella-section editorial-cta"><p className="cella-eyebrow">Your story could be next</p><h2>Let’s make something<br /><em>worth sharing.</em></h2><Link href="/contact" className="cella-button mt-8">Start a conversation <ArrowUpRight size={18} /></Link></section>
  </main><Footer /></>
}
