"use client"

import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/cella-logo.png"
              alt="CELLA"
              width={45}
              height={45}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-purple-400 font-medium">
              Services
            </Link>
            <Link href="/#work" className="text-foreground hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-2.5 rounded-full hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-xl text-sm"
            >
              Let&apos;s Chat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="services-mobile-menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div id="services-mobile-menu" className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-4">
              <Link href="/" className="block text-foreground hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-purple-400 font-medium">
                Services
              </Link>
              <Link href="/#work" className="block text-foreground hover:text-purple-400 transition-colors">
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
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6">Services</h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Social-first content, strategy and practical guidance for hospitality, travel and lifestyle brands that
            want to be remembered and chosen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              href="/services/content-creation"
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Content Creation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scroll-stopping content that grows your audience and converts them into clients.
                </p>
              </div>
              <span className="text-purple-400 text-sm font-medium group-hover:underline mt-4">Let's create →</span>
            </Link>

            <Link
              href="/services/social-strategy"
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Social Strategy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Smart, trend-forward strategies that turn content into measurable growth.
                </p>
              </div>
              <span className="text-purple-400 text-sm font-medium group-hover:underline mt-4">Plan to win →</span>
            </Link>

            <Link
              href="/services/coaching"
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Coaching & Mentoring</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hands-on guidance to level up your content game.
                </p>
              </div>
              <span className="text-purple-400 text-sm font-medium group-hover:underline mt-4">Level up →</span>
            </Link>

            <Link
              href="/services/ai-guidance"
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">AI Guidance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For those ready to leap ahead with AI, whether that's answering questions, implementing tools, or setting up
                  business automation. Learn what works, skip what doesn't, and stay ahead.
                </p>
              </div>
              <span className="text-purple-400 text-sm font-medium group-hover:underline mt-4">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {/* Content Creation Detail */}
      <section id="content-creation" className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Content <span className="italic text-purple-600">Creation</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Your content should work harder than just looking good. It needs to tell your story in a way that connects
            with your audience and makes them remember why your brand matters.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">What this looks like</h3>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Video content designed for how people actually consume social media</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Storytelling that highlights what makes your brand unique</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Platform-specific content that respects each channel's best practices</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Content strategies that reflect your brand voice, not a template</p>
            </div>
          </div>

          <Link
            href="/services/content-creation"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            Learn more about Content Creation →
          </Link>
        </div>
      </section>

      {/* Social Strategy Detail */}
      <section id="social-strategy" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Social <span className="italic text-purple-600">Strategy</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Strategic planning for how you want your brand to be perceived and the roadmap to get there. Beyond posting
            schedules, this is about positioning, audience, and building a brand people remember.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">What this looks like</h3>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Audience research and positioning strategy</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Platform selection based on where your audience actually is</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Content pillars that align with business goals</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Campaign planning that builds momentum</p>
            </div>
          </div>

          <Link
            href="/services/social-strategy"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            Learn more about Social Strategy →
          </Link>
        </div>
      </section>

      {/* AI Guidance Detail */}
      <section id="ai-guidance" className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            AI <span className="italic text-purple-600">Guidance</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            For those ready to leap ahead with AI, whether that's answering questions, implementing tools, or setting up
            business automation. Learn what works, skip what doesn't, and stay ahead.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">What this looks like</h3>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">AI tool selection and implementation for your business</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Workflow automation that saves time without sacrificing quality</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Training on AI for content creation and business operations</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Strategy for integrating AI into existing processes</p>
            </div>
          </div>

          <Link
            href="/services/ai-guidance"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            Learn more about AI Guidance →
          </Link>
        </div>
      </section>

      {/* Coaching & Mentoring Detail */}
      <section id="coaching" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Coaching & <span className="italic text-purple-600">Mentoring</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Teaching and providing tailored advice for entrepreneurs working with AI and content creation. A sounding
            board who understands both content and tech, for building systems and strategies that work.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">What this looks like</h3>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">One-on-one coaching for content creators and entrepreneurs</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Strategic planning sessions for business growth</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Technical guidance on AI implementation and content systems</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Ongoing support as you build and scale</p>
            </div>
          </div>

          <Link
            href="/services/coaching"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            Learn more about Coaching & Mentoring →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-purple-600 mb-4">Ready to Begin?</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Why wait? <span className="italic text-purple-600">Let's create.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10">Let's discuss your project and see how we can work together.</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-10 py-4 rounded-full hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
          >
            Let's Chat
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
