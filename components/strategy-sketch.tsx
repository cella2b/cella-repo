"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { useId, useState } from "react"
import { creativeDirections } from "@/lib/creative-directions"

export function StrategySketch() {
  const [selected, setSelected] = useState(0)
  const id = useId()
  const direction = creativeDirections[selected]

  return <div className="strategy-sketch">
    <div className="strategy-prompt"><p>What should the story do?</p><span>Choose a goal <ArrowRight size={15} aria-hidden="true" /></span></div>
    <div className="strategy-choices" role="group" aria-label="Choose a content goal">
      {creativeDirections.map((item, index) => <button type="button" key={item.id} aria-pressed={selected === index} aria-controls={`${id}-direction`} onClick={() => setSelected(index)}><span aria-hidden="true">0{index + 1}</span>{item.label}<ArrowUpRight size={16} aria-hidden="true" /></button>)}
    </div>
    <div id={`${id}-direction`} className="strategy-paper" aria-live="polite" aria-atomic="true">
      <div key={`${direction.id}-hook`} className="strategy-hook craft-enter"><p className="cella-eyebrow">The opening · {direction.principle}</p><blockquote>“{direction.hook}”</blockquote><p className="strategy-reason">{direction.reason}</p></div>
      <ol key={`${direction.id}-beats`} className="strategy-beats craft-enter" aria-label="The story in three moments">{direction.beats.map((beat, index) => <li key={beat.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{beat.title}</h3><p>{beat.detail}</p></div></li>)}</ol>
    </div>
    <div className="strategy-caption"><p>An imagined restaurant. Three creative directions.</p><Link href={`/contact?service=Social%20Strategy&goal=${direction.id}`} className="cella-text-link">Start with this direction <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
  </div>
}
