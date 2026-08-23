import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Footer } from "@/components/footer"

type ProjectSection = { title: string; body?: string; items?: string[] }
type ProjectDetailPageProps = {
  title: string
  slug: string
  description: string
  image: string
  imageAlt: string
  client: string
  project: string
  year: string
  service: string
  sections: ProjectSection[]
  videos?: string[]
  heroClassName?: string
  imageClassName?: string
}

const projects = [
  ["Kings Cross", "/projects/kings-cross"],
  ["Google x Paddy's", "/projects/google-gemini-paddys"],
  ["Barangaroo", "/projects/barangaroo"],
  ["DoorDash x OpenTable", "/projects/doordash-opentable"],
  ["Prince Shiomi", "/projects/prince-shiomi"],
  ["TranzAlpine & Pure Milford", "/projects/milford-sound"],
] as const

export function ProjectDetailPage({ title, slug, description, image, imageAlt, client, project, year, service, sections, videos = [], heroClassName, imageClassName }: ProjectDetailPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 p-6 backdrop-blur-lg md:p-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider text-white md:text-2xl">CELLA</Link>
          <Link href="/#work" className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white">
            <ArrowLeft className="size-4" /> Back to Projects
          </Link>
        </div>
      </nav>
      <div className="fixed left-0 right-0 top-20 z-40 border-b border-border/30 bg-background/60 backdrop-blur-lg">
        <div className="scrollbar-hide overflow-x-auto px-6 py-3 md:px-8">
          <div className="flex min-w-max items-center gap-1">
            {projects.map(([label, href], index) => (
              <div key={href} className="flex items-center gap-1">
                <Link href={href} className={`whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-wide transition-colors ${href === `/projects/${slug}` ? "text-white" : "text-white/60 hover:text-white"}`}>{label}</Link>
                {index < projects.length - 1 && <span className="px-1 text-xs text-white/40">•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`relative mt-32 h-[60vh] w-full ${heroClassName ?? ""}`}>
        <Image src={image} alt={imageAlt} fill className={`object-cover ${imageClassName ?? ""}`} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12"><div className="mx-auto max-w-7xl"><h1 className="mb-4 text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">{title}</h1><p className="max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">{description}</p></div></div>
      </div>
      <div className="px-6 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-2 gap-8 border-b border-border/30 pb-16 md:grid-cols-4">
          {[["Client", client], ["Project", project], ["Year", year], ["Service", service]].map(([label, value]) => <div key={label}><p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</p><p className="text-lg font-light text-white">{value}</p></div>)}
        </div>
        {sections.map((section) => <section key={section.title} className="mb-16"><h2 className="mb-6 text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">{section.title}</h2>{section.body && <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{section.body}</p>}{section.items && <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">{section.items.map((item) => <li key={item} className="flex items-start gap-4"><Check className="mt-0.5 size-6 shrink-0 text-white" /><span className="text-base text-muted-foreground">{item}</span></li>)}</ul>}</section>)}
        {videos.length > 0 && <section className="mb-16"><h2 className="mb-12 text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">Sample Videos</h2><div className="grid grid-cols-1 gap-8 md:grid-cols-3">{videos.map((video) => <div key={video} className="aspect-[9/16] overflow-hidden rounded-lg border border-border bg-card/50"><iframe src={video} title={`${title} sample video`} className="size-full" allow="encrypted-media" /></div>)}</div></section>}
      </div></div><Footer />
    </main>
  )
}
