import { ChannelShell } from '@/components/cella-channel-shell'
import { MeasuredLink } from '@/components/cella-measured-link'
export const metadata = { title: 'Date nights & travel | Cella Channel', robots: { index: false, follow: false } }
export default function LinksPage() {
  return <ChannelShell><div className="max-w-2xl py-12 sm:py-20"><p className="mb-5 tracking-[.2em] text-purple-300">CELLA CHANNEL</p><h1 className="text-6xl leading-tight sm:text-8xl">Good nights.<br/>Great trips.</h1><p className="mt-6 text-xl text-white/75">Sydney date nights, what I’d order and travel stories from my own trips.</p></div>
    <div className="grid gap-5 sm:grid-cols-2">
      <MeasuredLink event="guide_sample_open" placement="link_hub" href="/guides/sydney" className="rounded-2xl bg-[#dac8ff] p-8 text-black transition hover:bg-purple-200 focus-visible:outline-4 focus-visible:outline-white"><span className="text-sm tracking-widest">01 / SYDNEY</span><h2 className="my-4 text-4xl">Your next date night</h2><p className="text-xl">Read three free picks, with honest verdicts and current menu links. →</p></MeasuredLink>
      <MeasuredLink event="travel_story_open" placement="link_hub" href="/travel" className="rounded-2xl border border-white/30 p-8 transition hover:bg-white/10 focus-visible:outline-4 focus-visible:outline-purple-300"><span className="text-sm tracking-widest">02 / AWAY</span><h2 className="my-4 text-4xl">Travel with context</h2><p className="text-xl">Start with my New Zealand travel work and a practical eSIM checklist. →</p></MeasuredLink>
    </div><p className="mt-8 text-white/65">The full Sydney guide is not on sale yet. No checkout or email signup is open on this page.</p>
  </ChannelShell>
}
