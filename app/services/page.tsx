import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

const services = [
  ["01", "Content Creation", "Video-led storytelling and platform-specific creative that makes your brand worth remembering.", "/services/content-creation", "Let’s create"],
  ["02", "Social Strategy", "Positioning and a clear roadmap for becoming known for something specific online.", "/services/social-strategy", "Plan to win"],
  ["03", "Business Mentoring", "Practical guidance for building, positioning, and scaling your creative business.", "/services/coaching", "Move forward"],
  ["04", "AI Guidance", "Straight answers and useful implementation for businesses ready to work smarter.", "/services/ai-guidance", "Work smarter"],
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border/40 px-6 pb-20 pt-40 md:px-8 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-muted-foreground">Cella / Services</p>
          <h1 className="max-w-5xl text-balance text-5xl font-bold uppercase tracking-tight text-foreground sm:text-6xl md:text-8xl">Built to <span className="text-muted-foreground">scale.</span></h1>
          <p className="mt-8 max-w-3xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">Content creation, strategy and mentoring for businesses ready to grow with intention.</p>
        </div>
      </section>
      <section className="px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid border-l border-t border-border/40 md:grid-cols-2">
            {services.map(([number, title, description, href, cta]) => (
              <Link key={href} href={href} className="group flex min-h-72 flex-col justify-between border-b border-r border-border/40 p-8 transition-colors hover:bg-card md:p-12">
                <div><p className="mb-8 text-xs tracking-[0.3em] text-muted-foreground">{number}</p><h2 className="max-w-md text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">{title}</h2><p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{description}</p></div>
                <span className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-foreground transition-[gap] group-hover:gap-5">{cta} <ArrowRight className="size-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border/40 px-6 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-7xl"><p className="max-w-2xl text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-5xl">Clear thinking. Strong creative. Momentum that lasts.</p><Link href="/contact" className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background">Book a Call <ArrowRight className="size-4" aria-hidden="true" /></Link></div></section>
      <Footer />
    </main>
  )
}
