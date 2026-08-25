import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Footer } from "@/components/footer"

const projects = [
  { href: "/projects/kings-cross", label: "Kings Cross" },
  { href: "/projects/google-gemini-paddys", label: "Google x Paddy's" },
  { href: "/projects/barangaroo", label: "Barangaroo" },
  { href: "/projects/doordash-opentable", label: "DoorDash x OpenTable" },
  { href: "/projects/prince-shiomi", label: "Prince Shiomi" },
  { href: "/projects/milford-sound", label: "TranzAlpine & Pure Milford" },
]

type ProjectSection = {
  title: string
  paragraphs?: string[]
  features?: Array<{ title: string; description: string }>
}

type ProjectVideo = {
  src: string
  title: string
}

type ProjectCaseStudyProps = {
  title: string
  heroImage: string
  heroAlt: string
  activePath: string
  metadata: Array<{ label: string; value: string }>
  sections: ProjectSection[]
  deliverables: string[]
  videos?: ProjectVideo[]
  impact?: string
}

export function ProjectCaseStudy({
  title,
  heroImage,
  heroAlt,
  activePath,
  metadata,
  sections,
  deliverables,
  videos = [],
  impact,
}: ProjectCaseStudyProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 p-6 backdrop-blur-lg md:p-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-[0.2em] text-foreground md:text-2xl" aria-label="CELLA home">
            CELLA
          </Link>
          <Link
            href="/#work"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      <div className="fixed inset-x-0 top-20 z-40 border-b border-border/30 bg-background/70 backdrop-blur-lg md:top-24">
        <div className="overflow-x-auto px-3 py-3 sm:px-6 md:px-8">
          <div className="mx-auto flex min-w-max max-w-7xl items-center gap-1">
            {projects.map((project, index) => (
              <div key={project.href} className="flex items-center gap-1">
                {index > 0 ? <span className="px-1 text-xs text-foreground/30">•</span> : null}
                <Link
                  href={project.href}
                  aria-current={project.href === activePath ? "page" : undefined}
                  className={`whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                    project.href === activePath
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {project.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-32 h-[60vh] min-h-[440px] w-full md:mt-36">
        <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-6xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid grid-cols-2 gap-8 border-b border-border/30 pb-16 md:grid-cols-4">
            {metadata.map((item) => (
              <div key={item.label}>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                <p className="text-lg font-light text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          {sections.map((section) => (
            <section key={section.title} className="mb-16 border-b border-border/30 pb-16 last:border-b-0">
              <div className="grid gap-8 md:grid-cols-[0.55fr_1.45fr]">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">{section.title}</h2>
                <div className="max-w-3xl space-y-6">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                  {section.features ? (
                    <div className="grid gap-px bg-border sm:grid-cols-2">
                      {section.features.map((feature) => (
                        <article key={feature.title} className="bg-background p-6">
                          <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide text-foreground">
                            {feature.title}
                          </h3>
                          <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                        </article>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ))}

          <section className="mb-16 border-b border-border/30 pb-16">
            <div className="grid gap-8 md:grid-cols-[0.55fr_1.45fr]">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">What We Delivered</h2>
              <ul className="grid gap-6 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-purple-300" />
                    <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {videos.length > 0 ? (
            <section className="mb-16 border-b border-border/30 pb-16">
              <div className="grid gap-8 md:grid-cols-[0.55fr_1.45fr]">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">Selected Work</h2>
                <div className={`grid gap-6 ${videos.length > 1 ? "sm:grid-cols-2 xl:grid-cols-3" : "max-w-sm"}`}>
                  {videos.map((video) => (
                    <div key={video.src} className="overflow-hidden border border-border bg-black">
                      <iframe
                        src={video.src}
                        title={video.title}
                        loading="lazy"
                        className="aspect-[9/16] w-full"
                        scrolling="no"
                        allow="encrypted-media"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {impact ? (
            <section className="mb-16 border-b border-border/30 pb-16">
              <div className="grid gap-8 md:grid-cols-[0.55fr_1.45fr]">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">The Impact</h2>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{impact}</p>
              </div>
            </section>
          ) : null}

          <Link
            href="/#work"
            className="group inline-flex items-center gap-3 border border-foreground px-6 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
