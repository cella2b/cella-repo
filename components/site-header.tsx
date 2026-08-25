"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/services", label: "Services" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5" aria-label="Main navigation">
        <Link href="/" className="text-xl font-bold tracking-[0.2em] text-foreground" aria-label="CELLA home">
          CELLA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-foreground bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
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
                className="block text-sm uppercase tracking-[0.2em] text-foreground"
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
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
