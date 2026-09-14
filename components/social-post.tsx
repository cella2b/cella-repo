"use client"

import { useState } from "react"
import { ArrowUpRight, Play } from "lucide-react"

export function SocialPost({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false)
  const permalink = src.replace(/\/embed.*$/, "/")
  return <div className="overflow-hidden border border-border bg-black">
    {loaded ? <iframe src={src} title={title} className="aspect-[9/16] w-full" scrolling="no" allow="encrypted-media" /> : <div className="flex aspect-[9/16] flex-col items-center justify-center gap-6 bg-[#211b2b] p-6 text-center"><p className="text-xl text-white">{title}</p><button type="button" onClick={() => setLoaded(true)} className="cella-button"><Play size={18} aria-hidden="true" />Load Instagram post</button><p className="text-xs leading-relaxed text-[#bfb4ca]">Loads content from Instagram.</p></div>}
    <a href={permalink} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between gap-3 p-4 text-sm text-white hover:text-purple-300">Watch on Instagram <ArrowUpRight size={17} aria-hidden="true" /></a>
  </div>
}
