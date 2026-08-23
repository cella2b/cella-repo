import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Kings Cross Quarter | CELLA",
  description:
    "A 7-part series spotlighting the streets, venues, and hidden finds that make Kings Cross worth discovering.",
}

export default function KingsCrossPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-white text-xl md:text-2xl font-bold tracking-wider">
            CELLA
          </Link>

          <Link
            href="/#work"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Project Breadcrumb Navigation */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-background/60 backdrop-blur-lg border-b border-border/30">
        <div className="px-6 md:px-8 py-3 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 min-w-max">
            <Link
              href="/projects/kings-cross"
              className="text-white text-xs font-medium tracking-wide uppercase px-3 py-1.5 whitespace-nowrap transition-colors"
            >
              Kings Cross
            </Link>
            <span className="text-white/40 text-xs px-1">•</span>
            <Link
              href="/projects/google-gemini-paddys"
              className="text-white/60 text-xs tracking-wide uppercase hover:text-white px-3 py-1.5 whitespace-nowrap transition-colors"
            >
              Google x Paddy's
            </Link>
            <span className="text-white/40 text-xs px-1">•</span>
            <Link
              href="/projects/barangaroo"
              className="text-white/60 text-xs tracking-wide uppercase hover:text-white px-3 py-1.5 whitespace-nowrap transition-colors"
            >
              Barangaroo
            </Link>
            <span className="text-white/40 text-xs px-1">•</span>
            <Link
              href="/projects/doordash-opentable"
              className="text-white/60 text-xs tracking-wide uppercase hover:text-white px-3 py-1.5 whitespace-nowrap transition-colors"
            >
              DoorDash x OpenTable
            </Link>
            <span className="text-white/40 text-xs px-1">•</span>
            <Link
              href="/projects/prince-shiomi"
              className="text-white/60 text-xs tracking-wide uppercase hover:text-white px-3 py-1.5 whitespace-nowrap transition-colors"
            >
              Prince Shiomi
            </Link>
            <span className="text-white/40 text-xs px-1">•</span>
            <Link
              href="/projects/milford-sound"
              className="text-white/60 text-xs tracking-wide uppercase hover:text-white px-3 py-1.5 whitespace-nowrap transition-colors"
            >
              TranzAlpine & Pure Milford
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] w-full mt-32">
        <Image
          src="/images/projects/kings-cross-coca-cola.webp"
          alt="Kings Cross Quarter"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-4">
              Kings Cross Quarter
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Project Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-border/30">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Client</p>
              <p className="text-lg text-white font-light">Kings Cross Precinct</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Project</p>
              <p className="text-lg text-white font-light">Light Up the Cross</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Year</p>
              <p className="text-lg text-white font-light">2025</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Service</p>
              <p className="text-lg text-white font-light">Content Creation</p>
            </div>
          </div>

          {/* The Brief */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-6">The Brief</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Create a 7-part content series called "Light Up the Cross" that repositions Kings Cross as a destination
              beyond nightlife. Showcase the neighbourhood's food scene, creative spaces, street culture, and venues
              worth discovering. Each piece needed to feel distinct while contributing to an overall narrative about
              the area's diversity and energy.
            </p>
          </section>

          {/* What We Delivered */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-6">What We Delivered</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-base text-muted-foreground">7 distinct video pieces optimized for social media</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-base text-muted-foreground">Location photography highlighting key venues</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-base text-muted-foreground">Street photography capturing neighbourhood character</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-base text-muted-foreground">
                  Social cutdowns for Instagram, TikTok, and Facebook
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-base text-muted-foreground">Behind-the-scenes content from production</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-base text-muted-foreground">Sustained engagement strategy over 7 weeks</span>
              </li>
            </ul>
          </section>

          {/* Sample Videos */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-12">Sample Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card/50 border border-border rounded-lg aspect-[9/16] flex items-center justify-center overflow-hidden hover:border-purple-400/50 transition-colors">
                <p className="text-muted-foreground text-center p-4">Video 1</p>
              </div>
              <div className="bg-card/50 border border-border rounded-lg aspect-[9/16] flex items-center justify-center overflow-hidden hover:border-purple-400/50 transition-colors">
                <p className="text-muted-foreground text-center p-4">Video 2</p>
              </div>
              <div className="bg-card/50 border border-border rounded-lg aspect-[9/16] flex items-center justify-center overflow-hidden hover:border-purple-400/50 transition-colors">
                <p className="text-muted-foreground text-center p-4">Video 3</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
