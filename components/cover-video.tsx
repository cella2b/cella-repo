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
  const userPaused = useRef(false)
  const visible = useRef(true)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    // Keep the first render light; mobile/data-saving visitors choose to play.
    const start = () => {
      if (!preference.matches && !connection?.saveData && window.matchMedia("(min-width: 768px)").matches) setLoadVideo(true)
    }
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    const onPreferenceChange = () => { if (preference.matches) video.current?.pause() }
    preference.addEventListener("change", onPreferenceChange)
    return () => { preference.removeEventListener("change", onPreferenceChange); window.removeEventListener("load", start) }
  }, [])

  useEffect(() => {
    if (loadVideo) void video.current?.play().catch(() => setPlaying(false))
  }, [loadVideo])

  useEffect(() => {
    const element = video.current
    if (!element) return
    const sync = () => {
      if (document.hidden || !visible.current) element.pause()
      else if (loadVideo && !userPaused.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) void element.play().catch(() => setPlaying(false))
    }
    const observer = new IntersectionObserver(([entry]) => { visible.current = entry.isIntersecting; sync() }, { threshold: .1 })
    observer.observe(element)
    document.addEventListener("visibilitychange", sync)
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync) }
  }, [loadVideo])

  function toggle() {
    if (!loadVideo) { userPaused.current = false; setLoadVideo(true); return }
    if (video.current?.paused) { userPaused.current = false; void video.current.play().catch(() => setPlaying(false)) }
    else { userPaused.current = true; video.current?.pause() }
  }

  return (
    <>
      <div className="cella-cover-media" aria-hidden="true">
        <Image src="/images/projects/milford-sound.jpg" alt="" fill priority sizes="100vw" className="object-cover scale-[1.34]" />
        <video ref={video} src={loadVideo ? "/video/cella-cover.mp4" : undefined} muted loop playsInline preload="none" onCanPlay={(event) => { if (event.currentTarget.videoWidth > 0) setReady(true); else { event.currentTarget.pause(); setError(true); setPlaying(false) } }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setError(true); setPlaying(false) }} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${ready && !error ? "opacity-100" : "opacity-0"}`} />
      </div>
      {!error && <button type="button" className="cella-cover-toggle" onClick={toggle} aria-label={playing ? "Pause cover video" : "Play cover video"}>{playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}<span>{playing ? "Pause film" : "Play film"}</span></button>}
    </>
  )
}
