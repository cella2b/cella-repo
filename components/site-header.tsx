"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const sections = [{ id: "work", label: "Work", path: "/portfolio" }, { id: "services", label: "Services", path: "/services" }, { id: "about", label: "About", path: "/about" }]

export function SiteHeader({ cinematic = false }: { cinematic?: boolean }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState("")
  const button = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); button.current?.focus() } }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [open])
  useEffect(() => {
    if (pathname !== "/") return
    let frame = 0
    const update = () => {
      frame = 0
      const current = sections.map(item => ({ id: item.id, bounds: document.getElementById(item.id)?.getBoundingClientRect() }))
        .find(item => item.bounds && item.bounds.top <= 180 && item.bounds.bottom > 180)
      setSection(current?.id ?? "")
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule) }
  }, [pathname])
  const links = sections.map(item => ({ ...item, href: pathname === "/" ? `/#${item.id}` : item.path,
    current: pathname === "/" ? section === item.id : pathname === item.path || pathname.startsWith(`${item.path}/`) || (item.id === "work" && pathname.startsWith("/projects/")) }))
  return <header className={`editorial-header ${cinematic ? "editorial-header-cinematic" : ""}`} data-menu-open={open}>
    <a className="cella-skip-link" href="#main-content">Skip to content</a>
    <nav aria-label="Main navigation">
      <Link href="/" className="editorial-wordmark" aria-label="CELLA home">cella.</Link>
      <div className="editorial-desktop-nav">{links.map(item => <Link key={item.id} href={item.href} aria-current={item.current ? pathname === "/" ? "location" : "page" : undefined}>{item.label}</Link>)}<Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className="editorial-nav-cta">Enquire now <span aria-hidden="true">↗</span></Link></div>
      <button ref={button} type="button" className="editorial-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div id="site-mobile-menu" className="editorial-mobile-nav">{links.map(item => <Link key={item.id} href={item.href} aria-current={item.current ? pathname === "/" ? "location" : "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Enquire now</Link></div>}
  </header>
}
