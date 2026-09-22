import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return <footer className="cella-footer"><div className="cella-footer-inner">
    <div className="cella-footer-top">
      <div><span className="cella-wordmark cella-footer-brand">CELLA.</span><p className="mt-4">Good food. Great places. Stories worth sharing.</p></div>
      <nav aria-label="Footer navigation"><Link href="/portfolio">Work</Link><Link href="/services">Services</Link><Link href="/#about">About</Link><Link href="/contact">Let’s talk</Link></nav>
    </div>
    <div className="cella-footer-bottom"><p>© {new Date().getFullYear()} CELLA · Sydney, Australia</p><div className="flex flex-wrap gap-x-7"><a href="mailto:info@heycella.com">info@heycella.com</a><a href="https://www.instagram.com/cella.channel/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} className="ml-2" aria-hidden="true" /></a></div></div>
  </div></footer>
}
