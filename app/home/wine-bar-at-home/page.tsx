import Link from 'next/link'
import { ChannelShell } from '@/components/cella-channel-shell'
import { MeasuredLink } from '@/components/cella-measured-link'

export const metadata = {
  title: 'Wine bar at home | Cella Channel',
  description: 'The Kmart candle source behind my empty wine-bottle video, with candle and empty-bottle options to explore.',
  robots: { index: false, follow: false },
}

// Ordinary destination links until an approved Associates account supplies official links.
// Keep alternatives explicit: neither an exact product match nor a tested endorsement.
const choices = [
  {
    id: 'kmart-candles', label: 'WHERE I SHOPPED', title: 'Start with Kmart.',
    body: 'My candles were from Kmart. This is their current three-pack of white taper candles; it may differ from the pack in my video.',
    detail: 'Check the current pack price and local stock. The cost of a full pack is different from the amount used for one bottle.',
    href: 'https://www.kmart.com.au/product/3-pack-white-taper-candles-43339600/', cta: 'View Kmart candles',
  },
  {
    id: 'drip-candles', label: 'EXPLORE ALTERNATIVES', title: 'Looking for the drips?',
    body: 'Browse drip candles on Amazon Australia. These are alternatives to research, not the candles I used or products I’ve tested.',
    detail: 'Check the colour, base diameter, burn time and delivered price. Dripless candles are a different finish.',
    href: 'https://www.amazon.com.au/drip-candles/s?k=drip+candles', cta: 'Browse drip candles',
  },
  {
    id: 'empty-bottles', label: 'ONLY IF YOU NEED THEM', title: 'Empty bottles, too.',
    body: 'I reused empty wine bottles. If you don’t have any, you can browse empty bottles separately. There’s no need to buy wine for this.',
    detail: 'Choose the quantity you actually need and check delivery costs. A glass bottle sold for drinks or crafts isn’t necessarily rated for candle heat.',
    href: 'https://www.amazon.com.au/empty-wine-bottles/s?k=empty+wine+bottles', cta: 'Browse empty bottles',
  },
]

export default function WineBarAtHomePage() {
  return <ChannelShell>
    <section className="max-w-3xl py-10 sm:py-16">
      <p className="mb-5 text-sm tracking-[.2em] text-purple-300">CELLA AT HOME</p>
      <h1 className="text-5xl leading-[1.05] sm:text-8xl">Wine bar<br /><span className="text-purple-300">at home.</span></h1>
      <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/80">The empty bottles stayed. A little inspiration from my bottle-candle video, with shopping options clearly separated from what I used.</p>
      <a href="https://www.tiktok.com/@cella.channel/video/7678948902468390164" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block py-3 text-lg underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-purple-300">Watch the original video</a>
    </section>
    <p className="mb-6 max-w-2xl text-base text-white/70">These are ordinary shopping links. I don’t currently earn commission through this page.</p>
    <div className="grid gap-5 md:grid-cols-3">
      {choices.map((choice, index) => <article key={choice.id} className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${index === 0 ? 'border-purple-300 bg-[#dac8ff] text-[#161019]' : 'border-white/25 bg-white/[0.04]'}`}>
        <p className={`text-sm tracking-widest ${index === 0 ? 'text-purple-950' : 'text-purple-300'}`}>{choice.label}</p>
        <h2 className="mt-5 text-3xl leading-tight">{choice.title}</h2>
        <p className="mt-4 text-lg leading-relaxed">{choice.body}</p>
        <p className={`mb-7 mt-4 text-base leading-relaxed ${index === 0 ? 'text-black/75' : 'text-white/70'}`}>{choice.detail}</p>
        <MeasuredLink href={choice.href} event="home_product_open" placement={`wine_bar_home_${choice.id}`} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-base font-semibold focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-purple-400 ${index === 0 ? 'bg-[#161019] text-white hover:bg-purple-950' : 'bg-white text-black hover:bg-purple-100'}`}>{choice.cta}</MeasuredLink>
      </article>)}
    </div>
    <section className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-white/75" aria-label="Before you buy">
      <p>Use what you already own where you can. Check the candle maker’s instructions and use a stable, heat-resistant holder. Never leave a burning candle unattended.</p>
      <p>Prices, stock, shipping and returns are set by the retailer. The alternatives haven’t been tested by me.</p>
    </section>
    <section className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-8">
      <div><p className="text-sm tracking-widest text-purple-300">GOING OUT INSTEAD?</p><h2 className="mt-2 text-3xl">Let’s pick your next date night.</h2></div>
      <Link href="/guides/sydney" className="inline-block py-3 text-lg underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-purple-300">Read three free Sydney picks</Link>
    </section>
  </ChannelShell>
}
