"use client"

import Link from "next/link"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContentCreationPage() {
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
            Content <span className="italic text-purple-600">Creation</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Your content should work harder than just looking good. It needs to tell your story in a way that connects
            with your audience and makes them remember why your brand matters.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            This service focuses on creating content tailored specifically to your brand and the platforms where your
            audience actually lives. Specializing in video and storytelling because that's what cuts through the
            noise—authentic narratives that show what makes you different, not just another pretty feed.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">What this looks like</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Video content designed for how people actually consume social media
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
                  Storytelling that highlights what makes your brand unique
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
                  Platform-specific content (what works on Instagram won't work on TikTok)
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
                  Content strategies that reflect your brand voice, not a template
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
                  Behind-the-scenes and narrative-driven visuals that build connection
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">The approach</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Every brand has a story, but most are telling it wrong. This starts with understanding who you are, who
            you're trying to reach, and what actually makes you different. Then creating content that communicates
            that—through video, through storytelling, through showing instead of telling.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who this is for</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Brands that know they need content but are tired of generic photography that doesn't convert. Businesses
            ready to invest in storytelling that actually represents them. Anyone who's looked at their feed and thought
            "this doesn't feel like us."
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why video and storytelling</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Because static images get scrolled past. Video stops people. Stories make them care. And when you combine
            both with authentic brand messaging, you create content that doesn't just perform—it connects.
          </p>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Who This Works For</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Hotels and resorts refreshing visual content libraries, restaurants showcasing space and cuisine, travel
            companies requiring location-specific content, and hospitality brands recognizing their current visuals
            aren't performing.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Approach</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every project begins with understanding your brand positioning, target audience, and how the content will be
            used. This ensures deliverables align with broader marketing objectives rather than existing as isolated
            assets.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's create content that shows what makes your place worth visiting.
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
