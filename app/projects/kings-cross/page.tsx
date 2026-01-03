import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Kings Cross Quarter | CELLA",
  description:
    "A 7-part series spotlighting the streets, venues, and hidden finds that make Kings Cross worth discovering.",
}

export default function KingsCrossPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-purple-100/50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/cella-logo.png" alt="CELLA" width={40} height={40} className="mix-blend-multiply" />
          </Link>
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/projects/kings-cross-coca-cola.webp"
          alt="Kings Cross Quarter"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Kings Cross Quarter</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              A 7-part series spotlighting the streets, venues, and hidden finds that make Kings Cross worth
              discovering. Content created to light up the Cross, one spotlight at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A 7-part content series designed to change how people see Kings Cross—moving beyond the nightlife
              reputation to spotlight the neighbourhood's food scene, creative spaces, street culture, and the venues
              worth discovering.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Brief</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Create a campaign called "Light Up the Cross" that showcases different aspects of Kings Cross through
              dedicated content spotlights. Each piece needed to feel distinct while contributing to an overall
              narrative about the neighbourhood's diversity and energy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Seven separate content pieces, each focusing on a specific element:
            </p>
            <ul className="space-y-2 text-lg text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Street culture and public art</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Coffee and breakfast spots</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Lunch and casual dining</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Dinner destinations</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Bars and evening venues</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Hidden finds and local favourites</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>The people who make the neighbourhood work</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each spotlight was shot and edited to stand alone while maintaining visual consistency across the series.
              The content needed to appeal to both locals who thought they knew the area and visitors discovering it for
              the first time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Delivered</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>7 distinct video pieces for social media</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Location photography highlighting key venues</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Street photography capturing neighbourhood character</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Social cutdowns optimized for Instagram, TikTok, and Facebook</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Behind-the-scenes content from shoots</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Instagram Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Instagram embeds will be added here - provide Instagram URLs */}
              <div className="bg-gray-100 rounded-lg aspect-[9/16] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">Instagram video embed placeholder</p>
              </div>
              <div className="bg-gray-100 rounded-lg aspect-[9/16] flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">Instagram video embed placeholder</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="relative aspect-[4/3] mb-3 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">Photo placeholder</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">Photo caption goes here.</p>
              </div>
              <div>
                <div className="relative aspect-[4/3] mb-3 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">Photo placeholder</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">Photo caption goes here.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Content that repositioned Kings Cross as a destination beyond nightlife—a place with depth, culture, and
              reasons to visit throughout the day. The series format allowed for sustained engagement rather than a
              single campaign push, keeping the neighbourhood in conversation over multiple weeks.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <Link href="/#projects">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 bg-transparent"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
