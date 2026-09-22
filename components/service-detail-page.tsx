import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { services } from "@/lib/services"
import { ServiceData } from "@/components/page-structured-data"
import { ServiceQuestions } from "@/components/working-together"

type ServiceDetailPageProps = {
  number: string
  title: string
  intro: string
  deliverables: Array<{ title: string; description: string }>
  approach: string
  audience: string
  cta: string
}

export function ServiceDetailPage({
  number,
  title,
  intro,
  deliverables,
  approach,
  audience,
  cta,
}: ServiceDetailPageProps) {
  const service = services.find(item => item.number === number)!
  return (
    <main id="main-content" tabIndex={-1} className="cella-home min-h-screen">
      <ServiceData title={title} description={intro} path={service.href} />
      <SiteHeader />

      <section className="cella-page-hero border-b border-border px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="mb-10 inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-purple-300">Service {number}</p>
              <h1 className="max-w-5xl text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                {title}
              </h1>
            </div>
            <div><p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">{intro}</p><Link href={`/contact?service=${encodeURIComponent(service.enquiry)}`} className="cella-button mt-7">Discuss your project <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">What you get</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">The right support.<br /><span className="text-purple-300">For your next step.</span></h2>
          </div>
          <div className="border-t border-border">
            {deliverables.map((item, index) => (
              <article key={item.title} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[56px_1fr] sm:gap-6">
                <span className="text-xs tracking-[0.2em] text-purple-300">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold uppercase tracking-tight md:text-2xl">{item.title}</h3>
                  <p className="max-w-2xl leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-2">
          <article className="bg-card p-8 md:p-12">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-purple-300">The approach</p>
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">{approach}</p>
          </article>
          <article className="bg-card p-8 md:p-12">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-purple-300">Who it is for</p>
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">{audience}</p>
          </article>
        </div>
      </section>

      {number === "01" && <section id="partnerships" className="cella-section cella-partnership-note">
        <div><p className="cella-eyebrow">Publishing through @cella.channel</p><h2>LET’S TELL<br />YOUR STORY.</h2><p className="cella-section-description mt-6">Creator partnerships introduce your food, destination or experience to the CELLA community. Instagram Reels, TikTok and Stories are scoped to your campaign, separately from content for your own channels.</p></div>
        <Link href="/contact?service=Brand%20Partnership" className="cella-button">Discuss a partnership <ArrowRight size={18} aria-hidden="true" /></Link>
      </section>}

      <ServiceQuestions />

      <section className="bg-[#c2a7f9] px-6 py-20 text-[#0a0a0f] md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-background/60">Start a project</p>
            <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">{cta}</h2>
          </div>
          <Link
            href={`/contact?service=${encodeURIComponent(service.enquiry)}`}
            className="inline-flex shrink-0 items-center gap-3 border border-background bg-background px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
