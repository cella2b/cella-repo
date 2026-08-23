import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

type ServiceSection = { title: string; body?: string; items?: string[] }

type ServiceDetailPageProps = {
  title: string
  accent: string
  intro: string
  description: string
  sections: ServiceSection[]
  ctaTitle: string
  ctaBody: string
}

export function ServiceDetailPage({ title, accent, intro, description, sections, ctaTitle, ctaBody }: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border/40 px-6 pb-20 pt-40 md:px-8 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <Link href="/#services" className="mb-12 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
            <span aria-hidden="true">←</span> Back to Services
          </Link>
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-muted-foreground">Cella / Services</p>
          <h1 className="max-w-5xl text-balance text-5xl font-bold uppercase tracking-tight text-foreground sm:text-6xl md:text-8xl">
            {title} <span className="text-muted-foreground">{accent}</span>
          </h1>
          <p className="mt-8 max-w-3xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">{intro}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </section>
      <div className="px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          {sections.map((section, index) => (
            <section key={section.title} className={`grid gap-8 border-b border-border/40 py-12 first:pt-0 md:grid-cols-[0.35fr_1fr] md:gap-16 ${index === sections.length - 1 ? "border-b-0" : ""}`}>
              <h2 className="text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">{section.title}</h2>
              <div>
                {section.body && <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{section.body}</p>}
                {section.items && <ul className="grid gap-5 md:grid-cols-2">{section.items.map((item) => <li key={item} className="flex items-start gap-4"><Check className="mt-1 size-5 shrink-0 text-foreground" aria-hidden="true" /><span className="leading-relaxed text-muted-foreground">{item}</span></li>)}</ul>}
              </div>
            </section>
          ))}
        </div>
      </div>
      <section className="border-y border-border/40 px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-muted-foreground">Start a conversation</p>
          <h2 className="max-w-3xl text-balance text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">{ctaTitle}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{ctaBody}</p>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background">Book a Call <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
