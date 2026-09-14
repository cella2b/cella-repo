"use client"

import Image from "next/image"
import { Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CoverVideo() {
  const video = useRef<HTMLVideoElement>(null)
  const [loadVideo, setLoadVideo] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (!preference.matches && !connection?.saveData) setLoadVideo(true)
    const onPreferenceChange = () => { if (preference.matches) video.current?.pause() }
    preference.addEventListener("change", onPreferenceChange)
    return () => preference.removeEventListener("change", onPreferenceChange)
  }, [])

  useEffect(() => {
    if (loadVideo) void video.current?.play().catch(() => setPlaying(false))
  }, [loadVideo])

  function toggle() {
    if (!loadVideo) { setLoadVideo(true); return }
    if (video.current?.paused) void video.current.play().catch(() => setPlaying(false))
    else video.current?.pause()
  }

  return (
    <>
      <div className="cella-cover-media" aria-hidden="true">
        <Image src="/images/projects/milford-sound.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <video ref={video} src={loadVideo ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copy_609EA116-4303-4201-A986-82779EE24CCC-fSh9zYmlnaJhudebiyaAnN2AZzr5d0.mov" : undefined} muted loop playsInline preload="metadata" onCanPlay={() => setReady(true)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setError(true); setPlaying(false) }} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`} />
      </div>
      {!error && <button type="button" className="cella-cover-toggle" onClick={toggle} aria-label={playing ? "Pause cover video" : "Play cover video"}>{playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}<span>{playing ? "Pause film" : "Play film"}</span></button>}
    </>
  )
}
