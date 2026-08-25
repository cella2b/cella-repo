import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

const services = [
  {
    number: "01",
    title: "Content Creation",
    description: "Social-first video, photography and storytelling built to make your brand worth remembering.",
    href: "/services/content-creation",
    cta: "Explore content",
  },
  {
    number: "02",
    title: "Social Strategy",
    description: "Clear positioning, content direction and a practical roadmap for showing up with purpose.",
    href: "/services/social-strategy",
    cta: "Explore strategy",
  },
  {
    number: "03",
    title: "Coaching and Mentoring",
    description: "Direct, practical guidance for creators and founders building a stronger brand and business.",
    href: "/services/coaching",
    cta: "Explore coaching",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-purple-300">How we can work together</p>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="text-6xl font-bold uppercase leading-[0.86] tracking-[-0.05em] sm:text-8xl lg:text-9xl">
              Services
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Social-first content, strategy and practical guidance for hospitality, travel and lifestyle brands that
              want to be recognised, remembered and chosen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl border-t border-border">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group grid gap-6 border-b border-border py-9 transition-colors hover:bg-card sm:grid-cols-[72px_1fr_auto] sm:items-center sm:px-6 md:py-12"
            >
              <span className="text-xs tracking-[0.25em] text-purple-300">{service.number}</span>
              <div className="max-w-3xl">
                <h2 className="mb-3 text-3xl font-bold uppercase tracking-tight md:text-5xl">{service.title}</h2>
                <p className="max-w-2xl leading-relaxed text-muted-foreground md:text-lg">{service.description}</p>
              </div>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground">
                {service.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-purple-300">Not sure where to start?</p>
            <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
              Tell me what you are building.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Share your goals, audience and what is currently getting in the way. I will recommend the clearest next
              step for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-foreground bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-card hover:text-foreground"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
