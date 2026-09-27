import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredWork } from "@/lib/featured-work"
import { workNotes } from "@/lib/work-notes"

export function FlowWork() {
  return <div className="flow-work">{featuredWork.map((project, index) => {
    const notes = workNotes[project.id]
    const href = notes.caseStudy || project.href
    const external = href.startsWith("https://")
    return <article className={`flow-project ${project.artwork ? "flow-project-artwork" : ""}`} key={project.id}>
      <Link className="flow-image" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={`Explore ${project.title}`}>
        {project.artwork ? <div className="flow-recipe"><Image src={project.image} alt={project.alt} width={500} height={44} /><span>A little taste<br /><em>of summer.</em></span><span className="flow-recipe-foot">Mango granita · Pure Power Blender</span></div> : <Image src={project.image} alt={project.alt} fill sizes="(max-width: 750px) 88vw, 55vw" />}
        <span className="flow-open"><ArrowUpRight size={25} /><span>Explore story</span></span>
      </Link>
      <div className="flow-caption"><span className="flow-index">0{index + 1}</span><div><p className="cella-eyebrow">{project.category}</p><h3><Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{project.title}</Link></h3><p className="flow-line">{notes.line}</p>
      <details className="flow-details"><summary>The thinking behind it <span aria-hidden="true">+</span></summary><p>{notes.idea}</p><Link href={href} className="cella-text-link" target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>See the work <ArrowUpRight size={16} /></Link></details></div></div>
    </article>
  })}</div>
}
