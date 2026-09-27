"use client"

import Image from "next/image"
import { Pause, Play, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CoverVideo() {
  const video = useRef<HTMLVideoElement>(null)
  const [loadVideo, setLoadVideo] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)
  const [cinemaOpen, setCinemaOpen] = useState(false)
  const [cinemaError, setCinemaError] = useState(false)
  const cinema = useRef<HTMLDialogElement>(null)
  const film = useRef<HTMLVideoElement>(null)
  const userPaused = useRef(false)
  const visible = useRef(true)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    // Keep the first render light; data-saving visitors choose to play.
    const start = () => {
      if (!preference.matches && !connection?.saveData) setLoadVideo(true)
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
      if (document.hidden || !visible.current || cinemaOpen) element.pause()
      else if (loadVideo && !userPaused.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) void element.play().catch(() => setPlaying(false))
    }
    const observer = new IntersectionObserver(([entry]) => { visible.current = entry.isIntersecting; sync() }, { threshold: .1 })
    observer.observe(element)
    document.addEventListener("visibilitychange", sync)
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync) }
  }, [loadVideo, cinemaOpen])

  useEffect(() => {
    if (!cinemaOpen) return
    const dialog = cinema.current
    const player = film.current
    if (!dialog) return
    dialog.showModal()
    video.current?.pause()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    void player?.play().catch(() => { /* Native controls remain available if autoplay is declined. */ })
    return () => {
      player?.pause()
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [cinemaOpen])

  function toggle() {
    if (!loadVideo) { userPaused.current = false; setLoadVideo(true); return }
    if (video.current?.paused) { userPaused.current = false; void video.current.play().catch(() => setPlaying(false)) }
    else { userPaused.current = true; video.current?.pause() }
  }

  return (
    <>
      <div className="cella-cover-media" aria-hidden="true">
        <Image src="/images/cover-poster.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <video ref={video} src={loadVideo ? "/video/cella-original-cover.mp4" : undefined} muted loop playsInline preload="none" onCanPlay={(event) => { if (event.currentTarget.videoWidth > 0) setReady(true); else { event.currentTarget.pause(); setError(true); setPlaying(false) } }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setError(true); setPlaying(false) }} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${ready && !error ? "opacity-100" : "opacity-0"}`} />
      </div>
      {!error && <button type="button" className="cella-cover-toggle" onClick={toggle} aria-label={playing ? "Pause cover video" : "Play cover video"}>{playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}<span>{playing ? "Pause film" : "Play film"}</span></button>}
      <button type="button" className="cella-film-invitation" aria-haspopup="dialog" onClick={() => { setCinemaError(false); setCinemaOpen(true) }}><span className="film-play-circle"><Play size={22} strokeWidth={1.2} aria-hidden="true" /></span><span>Watch the film<span className="film-invitation-note">The Cella lens · 00:16</span></span></button>
      <dialog ref={cinema} className="cella-cinema" aria-labelledby="cinema-title" onClose={() => setCinemaOpen(false)}>
        {cinemaOpen && <div className="cinema-inner"><div className="cinema-top"><div><p className="cella-eyebrow">Food. Travel. A little curiosity.</p><h2 id="cinema-title">The Cella lens.</h2></div><button type="button" className="cinema-close" autoFocus onClick={() => setCinemaOpen(false)} aria-label="Close film"><X size={23} aria-hidden="true" /><span>Close</span></button></div><video ref={film} src="/video/cella-original-cover.mp4" poster="/images/cover-poster.jpg" controls playsInline muted preload="metadata" aria-label="The Cella lens — a visual montage of food, travel and experiences" onError={() => setCinemaError(true)} /><div className="cinema-bottom"><p>{cinemaError ? "The film couldn’t load. Close this viewer and try again." : "A few moments, through my eyes."}</p><span>Visual montage · 16 seconds · No audio</span></div></div>}
      </dialog>
    </>
  )
}
