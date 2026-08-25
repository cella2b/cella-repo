"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function LightHeader() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-100/60 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="CELLA home">
          <Image src="/images/cella-logo.png" alt="CELLA" width={44} height={44} priority />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#work" className="text-sm uppercase tracking-widest text-gray-700 transition-colors hover:text-purple-700">
            Work
          </Link>
          <Link href="/services" className="text-sm uppercase tracking-widest text-gray-700 transition-colors hover:text-purple-700">
            Services
          </Link>
          <Link href="/contact" className="bg-purple-700 px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-purple-800">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-gray-800 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="light-mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="light-mobile-menu" className="space-y-4 border-t border-purple-100 bg-white px-6 py-5 md:hidden">
          <Link href="/#work" className="block text-sm uppercase tracking-widest text-gray-700" onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href="/services" className="block text-sm uppercase tracking-widest text-gray-700" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="block bg-purple-700 px-5 py-3 text-center text-sm uppercase tracking-widest text-white" onClick={() => setOpen(false)}>
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
