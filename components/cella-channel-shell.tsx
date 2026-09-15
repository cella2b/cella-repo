import Link from 'next/link'
import type { ReactNode } from 'react'

export function ChannelShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#0b0b0d] text-[#faf8f4]">
    <a href="#content" className="sr-only focus:not-sr-only focus:block focus:p-4">Skip to content</a>
    <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-7">
      <Link href="/links" className="text-3xl font-bold tracking-wider">CELLA<span className="text-purple-400">.</span></Link>
      <nav aria-label="Channel" className="flex gap-5 text-base"><Link href="/guides/sydney">Date nights</Link><Link href="/travel">Travel</Link></nav>
    </header>
    <main id="content" className="mx-auto max-w-5xl px-6 pb-20">{children}</main>
    <footer className="mx-auto max-w-5xl border-t border-white/20 px-6 py-8 text-base text-white/70">
      <p>Personal recommendations. Current details checked 13 September 2026. Menus, availability and terms can change.</p>
      <p className="mt-3"><Link href="/travel/disclosure" className="underline">How recommendations and affiliate links work</Link> · <Link href="/" className="underline">Work with Cella</Link></p>
    </footer>
  </div>
}
export function ChannelCard({ title, children }: { title: string; children: ReactNode }) {
  return <section className="rounded-2xl border border-white/20 bg-white/[0.04] p-6 sm:p-8"><h2 className="mb-4 text-3xl">{title}</h2><div className="space-y-4 font-sans text-lg leading-relaxed">{children}</div></section>
}
