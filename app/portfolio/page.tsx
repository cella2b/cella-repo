import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import { Footer } from "@/components/footer"

const projects = [
  { href: "/projects/kings-cross", title: "Kings Cross Precinct", category: "Content Creation", image: "/images/projects/kings-cross-coca-cola.webp", alt: "Kings Cross precinct campaign" },
  { href: "/projects/google-gemini-paddys", title: "Google Gemini x Paddy's Market", category: "Brand Partnership", image: "/images/projects/paddys-markets.jpg", alt: "Paddy's Market campaign" },
  { href: "/projects/barangaroo", title: "Barangaroo Precinct", category: "Brand Campaign", image: "/images/projects/barangaroo-house.jpg", alt: "Barangaroo House campaign" },
  { href: "/projects/doordash-opentable", title: "DoorDash x OpenTable", category: "Content Creation", image: "/images/projects/doordash-delivery.avif", alt: "DoorDash delivery campaign" },
  { href: "/projects/prince-shiomi", title: "Prince Shiomi Hotel", category: "Content Creation", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a2a364ff-oRBfcAP00gNuOLg3zzAUiDswwDHxzO.webp", alt: "Japanese-inspired Prince Shiomi Hotel lobby" },
  { href: "/projects/milford-sound", title: "TranzAlpine & Pure Milford", category: "Brand Campaign", image: "/images/projects/milford-sound.jpg", alt: "Milford Sound travel campaign" },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader current="work" />
      <section className="container mx-auto px-4 pb-16 pt-36 sm:px-6 md:pb-24 md:pt-44">
        <Link href="/#work" className="mb-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"><span aria-hidden="true">←</span> Back to home</Link>
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected work / 2021—2026</p>
        <h1 className="max-w-4xl text-balance text-6xl font-bold uppercase leading-[0.9] tracking-tight sm:text-8xl">Work that moves people.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">Content, strategy, and guidance for brands across hospitality, travel, and lifestyle.</p>
      </section>
      <section className="container mx-auto px-4 pb-24 sm:px-6" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">Selected projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image src={project.image} alt={project.alt} fill className={`object-cover transition duration-700 group-hover:scale-105 ${project.href === "/projects/milford-sound" ? "scale-[1.28] object-bottom group-hover:scale-[1.34]" : ""}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/65">{project.category}</p>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">{project.title}</h3>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">View project <ArrowRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
