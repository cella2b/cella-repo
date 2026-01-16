"use client"

import type React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, Instagram, Mail, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".scroll-fade").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Enquiry from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:cella.foodie@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copy_609EA116-4303-4201-A986-82779EE24CCC-fSh9zYmlnaJhudebiyaAnN2AZzr5d0.mov" type="video/mp4" />
        </video>

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Navigation - minimal, floating */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white text-xl md:text-2xl font-bold tracking-wider">
              CELLA
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#work"
                className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors"
              >
                Work
              </Link>
              <Link
                href="#services"
                className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors"
              >
                Contact
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg p-6 space-y-4">
              <Link href="#work" className="block text-white/80 hover:text-white text-sm tracking-widest uppercase">
                Work
              </Link>
              <Link href="#services" className="block text-white/80 hover:text-white text-sm tracking-widest uppercase">
                Services
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-white text-sm tracking-widest uppercase">
                Contact
              </Link>
            </div>
          )}
        </nav>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white font-bold uppercase tracking-tight leading-none">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl animate-phase-in">CONTENT THAT</span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl animate-phase-in delay-300">
                BOOKS
              </span>
            </h1>

            <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
              <span className="text-white/90 text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase animate-phase-in delay-600">
                Food
              </span>
              <span className="text-white/40 text-lg sm:text-xl md:text-2xl">|</span>
              <span className="text-white/90 text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase animate-phase-in delay-800">
                Travel
              </span>
              <span className="text-white/40 text-lg sm:text-xl md:text-2xl">|</span>
              <span className="text-white/90 text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase animate-phase-in delay-1000">
                Lifestyle
              </span>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-phase-in delay-1500">
              <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 md:py-20 bg-background relative z-10 border-y border-border scroll-fade opacity-0">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground font-medium mb-10">
            Trusted By
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-scroll-left">
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 items-center">
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/merivale-logo.png"
                      alt="Merivale"
                      width={120}
                      height={60}
                      className="object-contain opacity-40 hover:opacity-70 transition-opacity invert"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/kitchenaid-logo.png"
                      alt="KitchenAid"
                      width={120}
                      height={60}
                      className="object-contain opacity-40 hover:opacity-70 transition-opacity invert"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/mirvac-logo.svg"
                      alt="Mirvac"
                      width={120}
                      height={60}
                      className="object-contain opacity-40 hover:opacity-70 transition-opacity invert"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/google-logo.webp"
                      alt="Google"
                      width={120}
                      height={60}
                      className="object-contain opacity-40 hover:opacity-70 transition-opacity invert"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/paddys-logo.png"
                      alt="Paddy's Markets"
                      width={120}
                      height={60}
                      className="object-contain opacity-40 hover:opacity-70 transition-opacity invert"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/nsw-placemaking-logo.png"
                      alt="NSW Placemaking"
                      width={120}
                      height={60}
                      className="object-contain opacity-40 hover:opacity-70 transition-opacity invert"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/ninja-logo.png"
                      alt="Ninja"
                      width={120}
                      height={60}
                      className="object-contain opacity-40 hover:opacity-70 transition-opacity invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - minimal editorial style */}
      <section id="services" className="py-20 md:py-32 bg-background relative z-10 scroll-fade opacity-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 md:mb-24 overflow-hidden">
            <div className="flex gap-12 animate-scroll-left">
              {[...Array(8)].map((_, i) => (
                <h2
                  key={i}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground whitespace-nowrap tracking-tight uppercase"
                >
                  SERVICES
                </h2>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <Link
              href="/services/content-creation"
              className="group bg-background p-8 md:p-12 hover:bg-card transition-colors"
            >
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">01</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight group-hover:text-white/80 transition-colors">
                Content Creation
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Video and photography that makes your brand stand out. Specializing in food, travel, and lifestyle
                content that actually connects.
              </p>
              <span className="text-foreground text-sm tracking-widest uppercase group-hover:tracking-[0.4em] transition-all">
                Learn More →
              </span>
            </Link>

            <Link
              href="/services/social-strategy"
              className="group bg-background p-8 md:p-12 hover:bg-card transition-colors"
            >
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">02</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight group-hover:text-white/80 transition-colors">
                Social Strategy
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Strategic planning for how your brand is perceived. Beyond posting schedules—positioning, audience, and
                building recognition.
              </p>
              <span className="text-foreground text-sm tracking-widest uppercase group-hover:tracking-[0.4em] transition-all">
                Learn More →
              </span>
            </Link>

            <Link
              href="/services/ai-guidance"
              className="group bg-background p-8 md:p-12 hover:bg-card transition-colors"
            >
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">03</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight group-hover:text-white/80 transition-colors">
                AI Guidance
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Implementation and guidance for those ready to leap ahead. Questions, tools, automation—practical AI
                application.
              </p>
              <span className="text-foreground text-sm tracking-widest uppercase group-hover:tracking-[0.4em] transition-all">
                Learn More →
              </span>
            </Link>

            <Link href="/services/coaching" className="group bg-background p-8 md:p-12 hover:bg-card transition-colors">
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">04</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight group-hover:text-white/80 transition-colors">
                Coaching
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Tailored advice for entrepreneurs in AI and content. A sounding board for building systems and
                strategies that work.
              </p>
              <span className="text-foreground text-sm tracking-widest uppercase group-hover:tracking-[0.4em] transition-all">
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section - editorial grid */}
      <section id="work" className="py-20 md:py-32 bg-card relative z-10 scroll-fade opacity-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 md:mb-24 overflow-hidden">
            <div className="flex gap-12 animate-scroll-left">
              {[...Array(8)].map((_, i) => (
                <h2
                  key={i}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground whitespace-nowrap tracking-tight uppercase"
                >
                  SELECTED WORK
                </h2>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Link href="/projects/kings-cross" className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src="/images/projects/kings-cross-coca-cola.webp"
                alt="Kings Cross Quarter"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Sydney</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  Kings Cross Quarter
                </h3>
              </div>
            </Link>

            <Link
              href="/projects/google-gemini-paddys"
              className="group relative aspect-[4/5] overflow-hidden bg-secondary"
            >
              <Image
                src="/images/projects/paddys-markets.jpg"
                alt="Google Gemini x Paddy's"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Brand Partnership</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  Google Gemini x Paddy's
                </h3>
              </div>
            </Link>

            <Link href="/projects/barangaroo" className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src="/images/projects/barangaroo-house.jpg"
                alt="Barangaroo Precinct"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Hospitality</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  Barangaroo Precinct
                </h3>
              </div>
            </Link>

            <Link
              href="/projects/doordash-opentable"
              className="group relative aspect-[4/5] overflow-hidden bg-secondary"
            >
              <Image
                src="/images/projects/doordash-delivery.avif"
                alt="DoorDash x OpenTable"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Tech + Dining</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  DoorDash x OpenTable
                </h3>
              </div>
            </Link>

            <Link href="/projects/prince-shiomi" className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Luxury Hotel</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  Prince Shiomi Hotel
                </h3>
              </div>
            </Link>

            <Link href="/projects/milford-sound" className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src="/images/projects/milford-sound.jpg"
                alt="TranzAlpine & Pure Milford"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Travel</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  TranzAlpine & Pure Milford
                </h3>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 text-foreground text-sm tracking-[0.3em] uppercase hover:tracking-[0.4em] transition-all"
            >
              View All Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - minimal */}
      <section className="py-20 md:py-32 bg-background relative z-10 scroll-fade opacity-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 md:mb-24 overflow-hidden">
            <div className="flex gap-12 animate-scroll-left">
              {[...Array(8)].map((_, i) => (
                <h2
                  key={i}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground whitespace-nowrap tracking-tight uppercase"
                >
                  TESTIMONIALS
                </h2>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="border-l border-border pl-6 md:pl-8">
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-light">
                "Really enjoyed working with you... Videos are my favourite so far. Super authentic and warm."
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">Justin — Kings Cross</p>
            </div>

            <div className="border-l border-border pl-6 md:pl-8">
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-light">
                "Thank you again for the amazing content... it was fantastic! The support as part of the Eat Parramatta
                campaign."
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">Vanessa — City of Parramatta</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-background relative z-10 scroll-fade opacity-0">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
            Let's Create
          </h2>
          <p className="text-background/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Ready to make content that actually books?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-sm tracking-[0.3em] uppercase hover:bg-background/90 transition-colors"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer - minimal */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-foreground text-xl font-bold tracking-wider">CELLA</span>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/cella.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:cella.foodie@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-muted-foreground text-xs tracking-widest uppercase">Sydney, Australia</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
