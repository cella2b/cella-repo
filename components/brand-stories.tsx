"use client"

import { useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Play, Plus } from "lucide-react"
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-projects"

function ProjectMedia({ project }: { project: PortfolioProject }) {
  const [loaded, setLoaded] = useState(false)
  if (project.video) {
    return <figure className="project-dropdown-film">
      <video controls playsInline preload="none" poster={project.video.poster} aria-label={project.video.title}>
        <source src={project.video.src} type="video/mp4" />
      </video>
      <figcaption>{project.video.title}</figcaption>
    </figure>
  }
  if (project.posts?.length) {
    return <div className="project-dropdown-film">
      {loaded ? <iframe src={`${project.posts[0].href}embed/`} title={`${project.brand}: published content`} allow="encrypted-media; fullscreen" /> :
        <button className="brand-film-cover" type="button" onClick={() => setLoaded(true)} aria-label={`Play ${project.brand} content`}>
          <span className="cella-eyebrow">Watch the work</span>
          <span className="brand-film-name">{project.brand}</span>
          <span className="brand-film-play"><Play size={27} aria-hidden="true" /></span>
          <span>Play this story</span>
          <small>Loads the original Instagram post</small>
        </button>}
    </div>
  }
  if (project.image) {
    return <div className="project-dropdown-image">
      <Image src={project.image.src} alt={project.image.alt} width={900} height={900} sizes="(max-width: 750px) 88vw, 36vw" />
    </div>
  }
  return null
}

function ProjectDropdown({ project, index, group }: { project: PortfolioProject; index: number; group: string }) {
  const [open, setOpen] = useState(false)
  const hasMedia = Boolean(project.video || project.posts?.length || project.image)
  const links = [...(project.posts ?? []), ...(project.links ?? [])]
  return <details className="project-dropdown" name={group} id={`work-${project.id}`} onToggle={event => setOpen(event.currentTarget.open)}>
    <summary className="project-dropdown-summary">
      <span className="project-dropdown-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <h3>{project.brand}</h3>
      <span className="project-dropdown-category">{project.category}</span>
      <span className="project-dropdown-toggle" aria-hidden="true"><Plus size={22} /></span>
    </summary>
    <div className={`project-dropdown-body${hasMedia ? " has-media" : ""}`}>
      <div className="project-dropdown-copy">
        <h4>{project.headline}</h4>
        <p>{project.description}</p>
        {project.scope?.length ? <ul className="brand-proof" aria-label="Project scope">{project.scope.map(item => <li key={item}>{item}</li>)}</ul> : null}
        {project.role ? <div className="project-dropdown-note"><h5>CELLA’s role</h5><p>{project.role}</p></div> : null}
        {project.thought ? <div className="project-dropdown-note"><h5>The thinking</h5><p>{project.thought}</p></div> : null}
        {project.results ? <div className="project-dropdown-results">
          <dl>{project.results.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
          <p>{project.results.caption}</p>
        </div> : null}
        {project.caseStudy || links.length ? <div className="project-dropdown-links">
          {project.caseStudy ? <Link href={project.caseStudy} className="cella-text-link">Explore the full project <ArrowUpRight size={17} aria-hidden="true" /></Link> : null}
          {links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="cella-text-link">{link.label} <ArrowUpRight size={16} aria-hidden="true" /></a>)}
        </div> : null}
      </div>
      {open && hasMedia ? <ProjectMedia project={project} /> : null}
    </div>
  </details>
}

export function BrandStories() {
  const group = useId()
  return <div className="project-dropdowns">
    <p className="project-dropdown-hint">Explore a brand to see the work.</p>
    {portfolioProjects.map((project, index) => <ProjectDropdown key={project.id} project={project} index={index} group={group} />)}
  </div>
}
