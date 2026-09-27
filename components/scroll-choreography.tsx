"use client"

import { useEffect } from "react"

/** Native scrolling drives decoration only; all content is readable without motion. */
export function ScrollChoreography() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".cella-fluid")
    if (!root) return
    const preference = matchMedia("(prefers-reduced-motion: reduce)")
    const scenes = [...root.querySelectorAll<HTMLElement>(".flow-project, .editorial-portrait, .editorial-guide-art")]
    let frame = 0
    const draw = () => {
      frame = 0
      const height = window.innerHeight
      const progress = Math.min(1, Math.max(0, window.scrollY / height))
      root.style.setProperty("--hero-progress", preference.matches ? "0" : String(progress))
      document.querySelector(".editorial-header-cinematic")?.classList.toggle("has-scrolled", window.scrollY > height * .65)
      for (const scene of scenes) {
        const rect = scene.getBoundingClientRect()
        if (rect.bottom < -100 || rect.top > height + 100) continue
        const offset = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - height / 2) / height))
        scene.style.setProperty("--scene-shift", preference.matches ? "0px" : `${offset * 48}px`)
      }
    }
    const request = () => { if (!frame) frame = requestAnimationFrame(draw) }
    draw()
    window.addEventListener("scroll", request, { passive: true })
    window.addEventListener("resize", request)
    preference.addEventListener("change", request)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", request); window.removeEventListener("resize", request); preference.removeEventListener("change", request) }
  }, [])
  return null
}
