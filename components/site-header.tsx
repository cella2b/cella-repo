"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
const links = [["/portfolio", "Work"], ["/services", "Services"], ["/shop", "Shop"], ["/about", "About"]]
export function SiteHeader({ cinematic = false }: { cinematic?: boolean }) {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); button.current?.focus() } }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close) }, [open])
  return <header className={`editorial-header ${cinematic ? "editorial-header-cinematic" : ""}`} data-menu-open={open}><a className="cella-skip-link" href="#main-content">Skip to content</a><nav aria-label="Main navigation"><Link href="/" className="editorial-wordmark" aria-label="CELLA home">cella.</Link><div className="editorial-desktop-nav">{links.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact" className="editorial-nav-cta">Work with me <span aria-hidden="true">↗</span></Link></div><button ref={button} type="button" className="editorial-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></nav>{open && <div id="site-mobile-menu" className="editorial-mobile-nav">{[...links,["/contact","Work with me"]].map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</div>}</header>
}
