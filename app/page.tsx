"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Mail, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Enquiry from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:cella.foodie@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/25 via-purple-500/20 to-pink-400/25 dark:from-purple-600/15 dark:via-purple-700/10 dark:to-pink-600/15 rounded-full blur-3xl animate-orbit-1" />
        <div className="absolute bottom-32 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-violet-300/20 via-violet-400/15 to-purple-400/20 dark:from-violet-500/12 dark:via-violet-600/8 dark:to-purple-600/12 rounded-full blur-3xl animate-orbit-2" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-300/18 via-fuchsia-400/15 to-pink-400/18 dark:from-fuchsia-600/10 dark:via-fuchsia-700/8 dark:to-pink-600/10 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-gradient-to-br from-purple-400/15 via-purple-500/12 to-indigo-300/15 dark:from-purple-600/8 dark:via-purple-700/6 dark:to-indigo-500/8 rounded-full blur-3xl animate-drift-wave" />
        <div
          className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-rose-300/16 via-rose-400/12 to-amber-200/16 dark:from-rose-600/9 dark:via-rose-700/7 dark:to-amber-400/9 rounded-full blur-3xl animate-float-fast"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-300/14 via-pink-400/10 to-purple-300/14 dark:from-pink-600/8 dark:via-pink-700/6 dark:to-purple-600/8 rounded-full blur-3xl animate-orbit-1"
          style={{ animationDuration: "9s", animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-10 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-violet-400/18 via-violet-500/14 to-fuchsia-300/18 dark:from-violet-600/10 dark:via-violet-700/8 dark:to-fuchsia-600/10 rounded-full blur-3xl animate-drift-wave"
          style={{ animationDuration: "11s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-[480px] h-[480px] bg-gradient-to-br from-purple-300/14 via-purple-400/10 to-pink-400/14 dark:from-purple-600/8 dark:via-purple-700/6 dark:to-pink-600/8 rounded-full blur-3xl animate-breathe"
          style={{ animationDuration: "10s", animationDelay: "3s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-purple-100/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/cella-logo.png"
                alt="Cella"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 mix-blend-multiply"
              />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors cursor-pointer"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-2.5 rounded-full hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-xl text-sm"
              >
                Let&apos;s Chat
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-purple-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-purple-100">
              <div className="px-6 py-4 space-y-4">
                <Link href="/" className="block text-gray-900 hover:text-purple-600 transition-colors">
                  Home
                </Link>
                <Link href="/services" className="block text-gray-900 hover:text-purple-600 transition-colors">
                  Services
                </Link>
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block text-gray-900 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="block text-center bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-2.5 rounded-full hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg"
                >
                  Let&apos;s Chat
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[75vh] flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-36 pb-20 sm:pb-24">
        <div className="relative text-center max-w-6xl mx-auto z-10 space-y-6 sm:space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-600 font-semibold">
            Sydney Based
            <br />
            Content Creator & Consultant
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.15] sm:leading-[1.1] text-foreground tracking-tight">
            <span className="block whitespace-nowrap">Strategic Content.</span>
            <span className="block italic text-purple-600 font-normal">Real Connections.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-2">
            Creating content and strategies for business owners that want create connection. Specialising in video
            storytelling that actually works, AI that works and advice that sticks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-8">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Let's Chat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-12 sm:py-16 relative z-10 border-y border-purple-100/30 dark:border-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-purple-600/70 font-medium mb-8">
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
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity mix-blend-multiply"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/kitchenaid-logo.png"
                      alt="KitchenAid"
                      width={120}
                      height={60}
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity mix-blend-multiply"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/mirvac-logo.svg"
                      alt="Mirvac"
                      width={120}
                      height={60}
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity mix-blend-multiply"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/google-logo.webp"
                      alt="Google"
                      width={120}
                      height={60}
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity mix-blend-multiply"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/paddys-logo.png"
                      alt="Paddy's Markets"
                      width={120}
                      height={60}
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity mix-blend-multiply"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/nsw-placemaking-logo.png"
                      alt="NSW Placemaking"
                      width={120}
                      height={60}
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity mix-blend-multiply"
                    />
                  </div>
                  <div className="w-32 h-20 relative flex items-center justify-center">
                    <Image
                      src="/images/brands/ninja-logo.png"
                      alt="Ninja"
                      width={120}
                      height={60}
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity mix-blend-multiply"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <div className="inline-block">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              Creating content that doesn't just look good—
              <span className="text-purple-600 font-medium italic"> it drives real results</span>
            </p>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent mt-6" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          {/* SERVICES Banner */}
          <div className="mb-16 sm:mb-20 overflow-hidden">
            <div className="flex gap-12 animate-scroll-left">
              {[...Array(8)].map((_, i) => (
                <h2
                  key={i}
                  className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground whitespace-nowrap tracking-[0.15em] uppercase"
                >
                  SERVICES
                </h2>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
            <Link
              href="/services/content-creation"
              className="group bg-card rounded-2xl p-2.5 md:p-6 shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-xl transition-all flex flex-col justify-between min-h-[160px] md:min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1.5 md:mb-3">Content Creation</h3>
                {/* Desktop version */}
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Content tailored to your brand and platform. Specialising in video and storytelling that makes your
                  brand stand out, not just look good, but actually connect with the people you&apos;re trying to reach.
                </p>
                {/* Mobile version */}
                <p className="block md:hidden text-xs text-muted-foreground leading-snug">
                  Tailored content specializing in video and storytelling. Making your brand stand out through
                  authentic, engaging content.
                </p>
              </div>
              <span className="text-purple-600 text-xs md:text-sm font-medium group-hover:underline mt-1.5 md:mt-4">
                Learn more →
              </span>
            </Link>

            <Link
              href="/services/social-strategy"
              className="group bg-card rounded-2xl p-2.5 md:p-6 shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-xl transition-all flex flex-col justify-between min-h-[160px] md:min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1.5 md:mb-3">Social Strategy</h3>
                {/* Desktop version */}
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Strategic planning for how you want your brand to be perceived and the roadmap to get there. Beyond
                  posting schedules, this is about positioning, audience, and building a brand people remember.
                </p>
                {/* Mobile version */}
                <p className="block md:hidden text-xs text-muted-foreground leading-snug">
                  Strategic planning for how your brand is perceived and the roadmap to get there. Positioning that
                  builds recognition.
                </p>
              </div>
              <span className="text-purple-600 text-xs md:text-sm font-medium group-hover:underline mt-1.5 md:mt-4">
                Learn more →
              </span>
            </Link>

            <Link
              href="/services/ai-guidance"
              className="group bg-card rounded-2xl p-2.5 md:p-6 shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-xl transition-all flex flex-col justify-between min-h-[160px] md:min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1.5 md:mb-3">AI Guidance</h3>
                {/* Desktop version */}
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  For those ready to leap ahead with AI, whether that&apos;s answering questions, implementing tools, or
                  setting up business automation. Learn what works, skip what doesn&apos;t, and stay ahead.
                </p>
                {/* Mobile version */}
                <p className="block md:hidden text-xs text-muted-foreground leading-snug">
                  AI implementation and guidance for those ready to leap ahead. Questions, tools, automation—practical
                  application.
                </p>
              </div>
              <span className="text-purple-600 text-xs md:text-sm font-medium group-hover:underline mt-1.5 md:mt-4">
                Learn more →
              </span>
            </Link>

            <Link
              href="/services/coaching"
              className="group bg-card rounded-2xl p-2.5 md:p-6 shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-xl transition-all flex flex-col justify-between min-h-[160px] md:min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1.5 md:mb-3">Coaching & Mentoring</h3>
                {/* Desktop version */}
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Teaching and providing tailored advice for entrepreneurs working with AI and content creation. A
                  sounding board who understands both content and tech, for building systems and strategies that work.
                </p>
                {/* Mobile version */}
                <p className="block md:hidden text-xs text-muted-foreground leading-snug">
                  Tailored advice for entrepreneurs in AI and content. A sounding board for building systems and
                  strategies.
                </p>
              </div>
              <span className="text-purple-600 text-xs md:text-sm font-medium group-hover:underline mt-1.5 md:mt-4">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 bg-cream-50/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 sm:mb-20 overflow-hidden">
            <div className="flex gap-12 animate-scroll-left">
              {[...Array(8)].map((_, i) => (
                <h2
                  key={i}
                  className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground whitespace-nowrap tracking-[0.15em] uppercase"
                >
                  PROJECTS
                </h2>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link
              href="/projects/kings-cross"
              className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/kings-cross-coca-cola.webp"
                  alt="Kings Cross Quarter"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Kings Cross Quarter</h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  A 7-part series spotlighting the streets, venues, and hidden finds that make Kings Cross worth
                  discovering. Content created to light up the Cross, one spotlight at a time.
                </p>
                <span className="text-purple-600 text-sm font-medium group-hover:underline mt-4 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>

            <Link
              href="/projects/google-gemini-paddys"
              className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/paddys-markets.jpg"
                  alt="Google Gemini x Paddy's Markets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Google Gemini x Paddy's Markets</h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Exploring Paddy's Markets through local produce, vendors, and culture. Using Google Gemini AI to help
                  people discover what they're looking at and how to use it.
                </p>
                <span className="text-purple-600 text-sm font-medium group-hover:underline mt-4 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>

            <Link
              href="/projects/barangaroo"
              className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/barangaroo-house.jpg"
                  alt="Barangaroo Precinct"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Barangaroo Precinct</h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Multiple campaigns showcasing Barangaroo as a destination, from Golden Hours with Aperol to Spring in
                  the Streets live events and Happy Hours positioning the precinct as Sydney&apos;s end-of-week venue.
                </p>
                <span className="text-purple-600 text-sm font-medium group-hover:underline mt-4 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>

            <Link
              href="/projects/doordash-opentable"
              className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/doordash-delivery.avif"
                  alt="DoorDash x OpenTable"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">DoorDash x OpenTable</h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Content positioning DoorDash as the place to book dine-in experiences, not just delivery. Showcasing
                  the seamless booking experience to attract users to the app for premium dining.
                </p>
                <span className="text-purple-600 text-sm font-medium group-hover:underline mt-4 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>

            <Link
              href="/projects/prince-shiomi"
              className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/luxury-japanese-hotel-traditional-architecture-zen.jpg"
                  alt="Prince Shiomi Hotel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Prince Shiomi Hotel</h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Showcasing a 5-star Tokyo property just outside the city centre. Positioning it as a destination for
                  couples and families seeking larger rooms, premium facilities, and a proper travel experience.
                </p>
                <span className="text-purple-600 text-sm font-medium group-hover:underline mt-4 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>

            <Link
              href="/projects/milford-sound"
              className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-purple-100 dark:border-purple-900/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/milford-sound.jpg"
                  alt="TranzAlpine and Pure Milford"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">TranzAlpine and Pure Milford</h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  Documenting the Pure Milford tour and TranzAlpine train experience with KiwiRail. Showcasing the
                  journeys and landscapes that make New Zealand's South Island unforgettable.
                </p>
                <span className="text-purple-600 text-sm font-medium group-hover:underline mt-4 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 rounded-full px-8 sm:px-10 py-6 text-base sm:text-lg shadow-md hover:shadow-lg transition-all"
              >
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-purple-600 mb-4 font-medium">Ready to Begin?</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Why wait? <span className="italic text-purple-600 font-normal">Let's create.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss your project and see how we can work together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 px-12 py-7 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Let's Chat
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-background/70 backdrop-blur-xl border-t border-purple-100/50 dark:border-purple-900/50 py-12 sm:py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
            <div className="flex items-center gap-3">
              <Image
                src="/images/cella-logo.png"
                alt="Logo"
                width={45}
                height={45}
                className="opacity-90 mix-blend-multiply"
              />
            </div>

            <div className="flex gap-8">
              <a
                href="https://www.instagram.com/cella.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-purple-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:cella.foodie@gmail.com?subject=Inquiry%20from%20Website"
                className="text-foreground hover:text-purple-600 transition-colors"
                aria-label="Send email to cella.foodie@gmail.com"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
