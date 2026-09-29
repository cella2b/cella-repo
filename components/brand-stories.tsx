"use client"

import { useState, type PointerEvent } from "react"
import * as Accordion from "@radix-ui/react-accordion"
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

const previewArtwork: Record<string, { src: string; logo?: boolean }> = {
  mirvac: { src: "/images/projects/mirvac-shed.jpg" },
  kitchenaid: { src: "/images/brands/kitchenaid-logo.png", logo: true },
  placemaking: { src: "/images/projects/barangaroo-house.jpg" },
  merivale: { src: "/images/brands/merivale-logo.png", logo: true },
  google: { src: "/images/projects/paddys-markets.jpg" },
}

function movePreview(event: PointerEvent<HTMLButtonElement>) {
  if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const button = event.currentTarget
  const bounds = button.getBoundingClientRect()
  const x = Math.max(115, Math.min(bounds.width - 115, event.clientX - bounds.left + 100))
  const y = Math.max(160, Math.min(window.innerHeight - 160, event.clientY)) - bounds.top
  button.style.setProperty("--preview-x", `${x}px`)
  button.style.setProperty("--preview-y", `${y}px`)
  button.style.setProperty("--preview-turn", `${((event.clientX - bounds.left) / bounds.width - .5) * 10}deg`)
}

function ProjectDropdown({ project, index }: { project: PortfolioProject; index: number }) {
  const artwork = previewArtwork[project.id] ?? (project.image ? { src: project.image.src, logo: false } : undefined)
  const hasMedia = Boolean(project.video || project.posts?.length || project.image)
  const links = [...(project.posts ?? []), ...(project.links ?? [])]
  return <Accordion.Item className="project-dropdown" value={project.id} id={`work-${project.id}`}>
    <Accordion.Header className="project-dropdown-heading">
    <Accordion.Trigger className="project-dropdown-summary" onPointerMove={movePreview} onFocus={event => {
      event.currentTarget.style.removeProperty("--preview-x")
      event.currentTarget.style.removeProperty("--preview-y")
      event.currentTarget.style.removeProperty("--preview-turn")
    }}>
      <span className={`project-hover-preview${artwork?.logo ? " is-logo" : ""}`} aria-hidden="true">
        <span className="project-preview-label">CELLA / SELECTED WORK</span>
        {artwork ? <Image src={artwork.src} alt="" width={230} height={240} sizes="230px" /> : <span className="project-preview-title">{project.brand}</span>}
        <span className="project-preview-caption">{project.headline}<ArrowUpRight size={15} /></span>
      </span>
      <span className="project-dropdown-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <span className="project-dropdown-brand">{project.brand}</span>
      <span className="project-dropdown-category">{project.category}</span>
      <span className="project-dropdown-toggle" aria-hidden="true"><Plus size={22} /></span>
    </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="project-folder">
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
      {hasMedia ? <ProjectMedia project={project} /> : null}
    </div>
    </Accordion.Content>
  </Accordion.Item>
}

export function BrandStories() {
  const [active, setActive] = useState("")
  return <div className="project-dropdowns">
    <p className="project-dropdown-hint">Explore a brand to see the work.</p>
    <Accordion.Root type="single" collapsible value={active} onValueChange={setActive}>
    {portfolioProjects.map((project, index) => <ProjectDropdown key={project.id} project={project} index={index} />)}
    </Accordion.Root>
  </div>
}
