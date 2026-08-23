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
                Book a Call
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
                Book a Call
              </Link>
            </div>
          )}
        </nav>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
          
            <h1 className="text-white font-bold uppercase tracking-tight leading-tight">
              <span className="block animate-phase-in text-[clamp(2.5rem,6vw,6rem)] sm:text-[clamp(3rem,5vw,7rem)] md:text-[clamp(4rem,4vw,8rem)] lg:text-[clamp(5rem,3vw,9rem)]">
               CONTENT THAT BOOKS
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto font-light tracking-wide animate-phase-in-delay">
              Content, strategy, and guidance that turns audiences into clients.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-12 bg-white text-black px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-white/90 transition-colors font-semibold"
            >
              Work with me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - minimal editorial style */}
      <section id="services" className="py-20 md:py-32 bg-background relative z-10 scroll-fade opacity-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            <Link
              href="/services/content-creation"
              className="group bg-background p-8 md:p-12 hover:bg-card transition-colors"
            >
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">01</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight group-hover:text-white/80 transition-colors">
                Content Creation
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Scroll-stopping content that grows your audience and converts them into clients.
              </p>
              <span className="text-foreground text-sm tracking-widest uppercase group-hover:tracking-[0.4em] transition-all">
                Let's create. →
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
                Smart, trend-forward strategies that turn content into measurable growth.
              </p>
              <span className="text-foreground text-sm tracking-widest uppercase group-hover:tracking-[0.4em] transition-all">
                Plan to win. →
              </span>
            </Link>

            <Link href="/services/coaching" className="group bg-background p-8 md:p-12 hover:bg-card transition-colors">
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">03</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight group-hover:text-white/80 transition-colors">
                Coaching
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Hands-on guidance to level up your content game.
              </p>
              <span className="text-foreground text-sm tracking-widest uppercase group-hover:tracking-[0.4em] transition-all">
                Level up. →
              </span>
            </Link>
          </div>
        </div>
      </section>

 {/* Trusted By Section */}
<section className="py-16 md:py-20 bg-background relative z-10">
  <div className="container mx-auto px-4 sm:px-6">
    <p className="text-center text-sm tracking-[0.2em] text-muted-foreground uppercase mb-12">
      Trusted By
    </p>

    <div className="overflow-hidden">
      <div className="flex gap-16 md:gap-20 animate-scroll-left">
        {/* Repeat logos 3 times to cover width and remove black gap */}
        {[...Array(3)].map((_, batch) => (
          <div key={batch} className="flex items-center gap-16 md:gap-20 flex-shrink-0">
            {[
              "/images/brands/merivale-logo.png",
              "/images/brands/kitchenaid-logo.png",
              "/images/brands/mirvac-logo.svg",
              "/images/brands/google-logo.webp",
              "/images/brands/paddys-logo.png",
              "/images/brands/nsw-placemaking-logo.png",
              "/images/brands/ninja-logo.png"
            ].map((src, i) => (
              <div key={i} className="flex items-center justify-center h-12 md:h-14 w-40">
                <Image
                  src={src}
                  alt="CELLA partner logo"
                  width={300}
                  height={120}
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
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
                  PROJECTS
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
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Content Creation</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  Kings Cross Precinct  
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
                  Google Gemini x Paddy's Market
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
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Brand Campaign</span>
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
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Content Creation</span>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  DoorDash x OpenTable
                </h3>
              </div>
            </Link>

            <Link href="/projects/prince-shiomi" className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src="/images/projects/prince-shiomi.webp"
                alt="Prince Shiomi Hotel lobby with Japanese-inspired details"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Content Creation</span>
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
                className="scale-125 object-cover object-[50%_85%] transition-transform duration-700 group-hover:scale-[1.35]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">Brand Campaign</span>
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
            Book a Call
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
