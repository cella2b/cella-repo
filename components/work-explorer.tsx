"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { useId, useState, type KeyboardEvent } from "react"
import { featuredWork } from "@/lib/featured-work"
import { workNotes } from "@/lib/work-notes"

const chapters = [{ id: "brief", label: "The brief" }, { id: "idea", label: "The idea" }, { id: "craft", label: "The craft" }] as const

export function WorkExplorer() {
  const [selected, setSelected] = useState(0)
  const [chapter, setChapter] = useState(0)
  const id = useId()
  const project = featuredWork[selected]
  const notes = workNotes[project.id]
  const external = project.href.startsWith("https://")

  function changeChapter(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === "ArrowRight") next = (index + 1) % chapters.length
    else if (event.key === "ArrowLeft") next = (index + chapters.length - 1) % chapters.length
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = chapters.length - 1
    else return
    event.preventDefault()
    setChapter(next)
    document.getElementById(`${id}-tab-${next}`)?.focus()
  }

  return <div className="work-explorer">
    <div className="work-selector" role="group" aria-label="Choose a project">
      {featuredWork.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} aria-controls={`${id}-story`} onClick={() => { setSelected(index); setChapter(0) }}>
        <span className="work-selector-number" aria-hidden="true">0{index + 1}</span><span>{item.title}</span><ArrowUpRight size={15} aria-hidden="true" />
      </button>)}
    </div>
    <div className="work-stage" id={`${id}-story`}>
      <div key={project.id} className={`work-visual craft-enter ${project.artwork ? "work-visual-artwork" : ""}`}>
        {project.artwork ? <><Image src={project.image} alt={project.alt} width={500} height={44} sizes="(max-width: 750px) 65vw, 32vw" /><span className="work-artwork-line">A little taste<br /><em>of summer.</em></span></> : <Image src={project.image} alt={project.alt} fill sizes="(max-width: 750px) 88vw, 52vw" className="object-cover" />}
        <div className="work-image-caption"><span>{project.category}</span><span aria-hidden="true">0{selected + 1} / 04</span></div>
        <Link className="work-watch" href={project.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{external ? "Watch the story" : "Explore the series"}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className="work-thinking">
        <div className="work-heading" aria-live="polite" aria-atomic="true"><p className="cella-eyebrow">{project.title}</p><h3 key={project.id} className="craft-enter">{notes.line}</h3></div>
        <div role="tablist" aria-label="Behind the story" className="work-chapters">
          {chapters.map((item, index) => <button key={item.id} id={`${id}-tab-${index}`} type="button" role="tab" aria-selected={chapter === index} aria-controls={`${id}-panel`} tabIndex={chapter === index ? 0 : -1} onClick={() => setChapter(index)} onKeyDown={event => changeChapter(event, index)}>{item.label}</button>)}
        </div>
        <div id={`${id}-panel`} className="work-note" role="tabpanel" aria-labelledby={`${id}-tab-${chapter}`} tabIndex={0}><p key={`${project.id}-${chapter}`} className="craft-enter">{notes[chapters[chapter].id]}</p></div>
        <div className="work-footnote"><p>{project.proof}</p>{notes.caseStudy ? <Link className="cella-text-link" href={notes.caseStudy}>Full story <ArrowRight size={16} aria-hidden="true" /></Link> : <a className="cella-text-link" href={project.href} target="_blank" rel="noopener noreferrer">View the published work <ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
      </div>
    </div>
  </div>
}
