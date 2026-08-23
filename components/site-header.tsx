"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader({ current }: { current?: "work" | "contact" }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const links = [
    { href: "/#work", label: "Work", active: current === "work" },
    { href: "/#services", label: "Services", active: false },
    { href: "/contact", label: "Book a Call", active: current === "contact" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-4 py-5 sm:px-6" aria-label="Main navigation">
        <Link href="/" onClick={close} className="text-xl font-bold tracking-[0.18em] text-foreground md:text-2xl">CELLA</Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={link.active ? "text-foreground text-sm tracking-widest uppercase" : "text-muted-foreground text-sm tracking-widest uppercase transition-colors hover:text-foreground"}>
              {link.label}
            </Link>
          ))}
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="p-2 text-foreground md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-background px-4 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={close} className={link.active ? "text-foreground text-sm tracking-widest uppercase" : "text-muted-foreground text-sm tracking-widest uppercase"}>{link.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
