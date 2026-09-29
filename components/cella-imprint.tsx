"use client"

import { useId, useRef } from "react"

export function CellaImprint() {
  const paper = useRef<HTMLElement>(null)
  const control = useRef<HTMLInputElement>(null)
  const id = useId()

  function light(value: number) {
    const surface = paper.current
    if (!surface || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    surface.style.setProperty("--light-x", `${value}%`)
    surface.style.setProperty("--shadow-x", `${(value - 50) / 12}px`)
    surface.style.setProperty("--shine-x", `${(50 - value) / 12}px`)
    if (control.current) control.current.value = String(Math.round(value))
  }

  return <section ref={paper} className="cella-imprint" aria-label="CELLA studio signature"
    onPointerMove={event => {
      if (event.pointerType !== "mouse" || event.target === control.current) return
      const bounds = event.currentTarget.getBoundingClientRect()
      light(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100)))
    }}>
    <div className="imprint-meta"><span>Creative studio</span><span>Sydney & beyond</span></div>
    <div className="imprint-word" aria-hidden="true">CELLA</div>
    <div className="imprint-light-control">
      <label htmlFor={id}>Move the light</label>
      <input ref={control} id={id} type="range" min="0" max="100" defaultValue="30" aria-label="Light position across the CELLA lettering"
        onChange={event => light(Number(event.currentTarget.value))} />
    </div>
  </section>
}
