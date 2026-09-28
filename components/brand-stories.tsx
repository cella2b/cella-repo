"use client"

import { useId, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Play } from "lucide-react"
import { brandStories } from "@/lib/brand-stories"

export function BrandStories() {
  const [selected, setSelected] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const id = useId()
  const story = brandStories[selected]
  return <div className="brand-stories">
    <div className="brand-story-choices" role="group" aria-label="Choose a brand story">{brandStories.map((item,index)=><button type="button" key={item.id} aria-pressed={selected===index} aria-controls={`${id}-story`} onClick={()=>{setSelected(index);setLoaded(false)}}><span>0{index+1}</span>{item.brand}<ArrowUpRight size={18} /></button>)}</div>
    <div className="brand-story-stage" id={`${id}-story`}>
      <div className="brand-story-copy" key={story.id}>
        <p className="cella-eyebrow">{story.type}</p><h3 className="craft-enter">{story.headline}</h3><p>{story.description}</p>
        <ul className="brand-proof" aria-label="Project scope">{story.proof.map(item=><li key={item}>{item}</li>)}</ul>
        <details className="flow-details"><summary>The role <span aria-hidden="true">+</span></summary><p>{story.role}</p></details>
        <details className="flow-details"><summary>The thinking <span aria-hidden="true">+</span></summary><p>{story.thought}</p></details>
        {story.caseStudy && <Link href={story.caseStudy} className="cella-text-link">Explore the full story <ArrowUpRight size={17} /></Link>}
      </div>
      <div className="brand-story-film">
        {story.id === "mirvac" ? <video key="mirvac-film" controls playsInline preload="none" poster="/images/projects/mirvac-shed.jpg" aria-label="Mirvac: The Shed at Birkenhead Point"><source src="/video/mirvac-shed.mp4" type="video/mp4" /></video> : loaded ? <iframe key={story.id} src={`${story.permalink}embed/`} title={`${story.brand}: published creator content`} loading="lazy" allow="encrypted-media; fullscreen" /> : <button className="brand-film-cover" type="button" onClick={()=>setLoaded(true)}><span className="cella-eyebrow">Watch the published work</span><span className="brand-film-name">{story.brand}</span><span className="brand-film-play"><Play size={27} /></span><span>Play this story</span><small>Loads the original Instagram post</small></button>}
        <a href={story.permalink} target="_blank" rel="noopener noreferrer">Open on Instagram <ArrowUpRight size={16} /></a>
      </div>
    </div>
    <div className="brand-more"><span>More brand stories</span><Link href="/projects/google-gemini-paddys">Google · creator event <ArrowUpRight size={15}/></Link><Link href="/projects/doordash-opentable">DoorDash · reservations campaign <ArrowUpRight size={15}/></Link></div>
  </div>
}
