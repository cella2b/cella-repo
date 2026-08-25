import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

const projects = [
  { href: "/projects/kings-cross", title: "Kings Cross Precinct", category: "Content Creation", image: "/images/projects/kings-cross-coca-cola.webp", alt: "Kings Cross precinct campaign" },
  { href: "/projects/google-gemini-paddys", title: "Google Gemini x Paddy's Markets", category: "Brand Partnership", image: "/images/projects/paddys-markets.jpg", alt: "Google Gemini campaign at Paddy's Markets" },
  { href: "/projects/barangaroo", title: "Barangaroo Precinct", category: "Destination Campaign", image: "/images/projects/barangaroo-house.jpg", alt: "Barangaroo waterfront campaign" },
  { href: "/projects/doordash-opentable", title: "DoorDash x OpenTable", category: "Content Creation", image: "/images/projects/doordash-delivery.avif", alt: "DoorDash and OpenTable dining campaign" },
  { href: "/projects/prince-shiomi", title: "Prince Shiomi Hotel", category: "Travel Content", image: "/luxury-japanese-hotel-traditional-architecture-zen.jpg", alt: "Prince Shiomi Hotel in Tokyo" },
  { href: "/projects/milford-sound", title: "TranzAlpine and Pure Milford", category: "Travel Campaign", image: "/images/projects/milford-sound.jpg", alt: "Milford Sound travel campaign" },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-bold tracking-wider text-foreground" aria-label="CELLA home">CELLA</Link>
          <div className="flex items-center gap-5 sm:gap-8">
            <Link href="/services" className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground sm:text-sm">Services</Link>
            <Link href="/contact" className="text-xs uppercase tracking-widest text-foreground transition-colors hover:text-purple-300 sm:text-sm">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="border-b border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-purple-400">Selected work</p>
          <h1 className="max-w-4xl text-5xl font-bold uppercase tracking-tight text-foreground sm:text-6xl md:text-8xl">Work made to be watched and remembered</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">Social-first campaigns and content for hospitality, travel, lifestyle and experience-led brands.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28" aria-labelledby="project-grid-title">
        <div className="mx-auto max-w-7xl">
          <h2 id="project-grid-title" className="sr-only">CELLA projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.href} href={project.href} className="group relative aspect-[4/5] overflow-hidden bg-card">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-700 ${
                    project.href === "/projects/milford-sound"
                      ? "scale-[1.35] group-hover:scale-[1.42]"
                      : "group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/65">{project.category}</p>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 text-center text-background md:py-28">
        <h2 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">Have a project in mind?</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-background/65">Tell me what you are building and where you want the content to take it.</p>
        <Link href="/contact" className="mt-9 inline-flex items-center gap-3 bg-background px-8 py-4 text-sm uppercase tracking-[0.25em] text-foreground transition-opacity hover:opacity-90">Start a project<ArrowRight className="h-4 w-4" /></Link>
      </section>

      <Footer />
    </main>
  )
}
