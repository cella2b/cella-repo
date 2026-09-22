"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const links = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus() }
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101014]/95 backdrop-blur-xl">
      <a className="cella-skip-link" href="#main-content">Skip to content</a>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5" aria-label="Main navigation">
        <Link href="/" className="cella-wordmark text-3xl font-semibold tracking-[-0.03em] text-foreground" aria-label="CELLA home">
          CELLA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm text-[#c9c4d1] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-[#c8a5ff] bg-[#c8a5ff] px-6 py-3 text-sm font-semibold text-[#181121] transition-colors hover:bg-[#dcc6ff]"
          >
            Let’s talk
          </Link>
        </div>

        <button
          ref={menuButton}
          type="button"
          className="min-h-11 min-w-11 p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="site-mobile-menu" className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="space-y-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center text-sm uppercase tracking-[0.2em] text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-foreground px-5 py-3 text-center text-sm uppercase tracking-[0.2em] text-background"
              onClick={() => setOpen(false)}
            >
              Let’s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
