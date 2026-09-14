import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredWork } from "@/lib/featured-work"

export function FeaturedWork() {
  return <div className="cella-project-grid">{featuredWork.map((project, index) => {
    const external = project.href.startsWith("https://")
    return <article key={project.id} className="cella-project">
      <Link href={project.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`cella-project-image block ${project.artwork ? "cella-project-artwork" : ""}`} aria-label={`${project.title}: ${project.cta}`}>
        {project.artwork ? <div className="cella-artwork-logo"><Image src={project.image} alt={project.alt} width={500} height={44} sizes="(max-width: 600px) 65vw, 30vw" /></div> : <Image src={project.image} alt={project.alt} fill sizes="(max-width: 600px) 90vw, 45vw" className="object-cover" />}
        {project.artwork && <span className="cella-artwork-caption">A little taste of summer.</span>}
        <span className="cella-project-open" aria-hidden="true"><ArrowUpRight size={22} /></span>
      </Link>
      <div className="cella-project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><span className="cella-project-number" aria-hidden="true">0{index + 1}</span></div>
      <p className="cella-project-description">{project.description}</p>
      <p className="cella-project-proof">{project.proof}</p>
      <div className="cella-project-links"><Link href={project.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="cella-text-link">{project.cta}<ArrowUpRight size={17} /></Link>{project.secondary && <a href={project.secondary.href} target="_blank" rel="noopener noreferrer" className="cella-text-link">{project.secondary.label}<ArrowUpRight size={17} /></a>}</div>
    </article>
  })}</div>
}

export function MoreWork() {
  return <div className="cella-more-work">
    <article><p className="cella-eyebrow">Restaurant discovery</p><h3>Penelope’s, Circular Quay</h3><p>A harbour-side dining story, featured in the campaign agency’s own wrap-up.</p><a href="https://www.instagram.com/reel/C6bBOP4Pk-B/" target="_blank" rel="noopener noreferrer" className="cella-text-link">Watch on Instagram <ArrowUpRight size={17} /></a></article>
    <article><p className="cella-eyebrow">Local food campaign</p><h3>EAT Parramatta</h3><p>Afterglow Eatery, through its coffee, dishes and atmosphere. A Reel, TikTok and three Story frames created for City of Parramatta.</p><span className="cella-project-proof">Campaign delivered · 2025</span></article>
  </div>
}

export function CampaignResults() {
  return <section id="results" className="cella-section cella-results" aria-labelledby="results-heading">
    <div className="cella-results-intro"><div><p className="cella-eyebrow">A story people shared</p><h2 id="results-heading">GOOD LUCK.<br />GREAT FOOD.</h2></div><div><p>A dining story for Merivale’s Good Luck Restaurant Lounge, sharing its 2-for-1 crab offer and the experience around the table.</p><p className="cella-results-caption">Instagram insights supplied December 2024. Results for this campaign at that time.</p></div></div>
    <dl className="cella-metrics"><div><dt>Instagram accounts reached</dt><dd>13,903</dd></div><div><dt>Shares</dt><dd>330</dd></div><div><dt>Saves</dt><dd>181</dd></div></dl>
  </section>
}
