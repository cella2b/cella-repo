"use client"

import Link from "next/link"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SocialStrategyPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFA]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-purple-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/cella-logo.png"
              alt="Cella Logo"
              width={45}
              height={45}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#FDFCFA]">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Social <span className="italic text-purple-600">Strategy</span>
          </h1>

          {/* Updated copy */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Social media isn't about posting consistently. It's about being strategic with how you want your brand to be
            perceived and having a clear roadmap to get there.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            This service focuses on brand perception and positioning—figuring out how you want to be seen, who you want
            to reach, and what you need to do to make that happen. It's less about content calendars and more about
            strategic positioning that builds a brand people recognize and remember.
          </p>
        </div>
      </section>

      {/* What We'll Work On Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">What we work on</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Defining how you want your brand to be perceived
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Identifying gaps between current perception and desired positioning
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic roadmap for closing those gaps</h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Platform strategy based on where your audience actually is
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Content pillars that reinforce your brand positioning
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Competitive analysis and differentiation strategy
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Growth tactics that align with your brand values
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Works For Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">The difference</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Most social strategies focus on metrics and posting frequency. This focuses on perception and positioning
            first—because if people don't understand what you stand for or why you matter, posting more won't help.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who this is for</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Brands that are posting but not being remembered. Businesses that know they need a stronger identity online.
            Anyone who wants to be known for something specific but isn't sure how to make that happen consistently.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The outcome</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A clear understanding of your brand positioning, a strategic roadmap for how to communicate it, and the
            confidence to show up online in a way that's authentic and effective. Not just a content calendar—a brand
            strategy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Ready to Grow Your Social Presence?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's build a strategy that works for your business and your audience.
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              Let's Chat
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
