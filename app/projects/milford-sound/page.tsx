import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "TranzAlpine and Pure Milford | CELLA",
  description: "Documenting the Pure Milford tour and TranzAlpine train experience with KiwiRail.",
}

export default function MilfordSoundPage() {
  return (
    <div className="min-h-screen bg-cream-50">
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

      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/projects/milford-sound.jpg"
          alt="TranzAlpine and Pure Milford"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">TranzAlpine and Pure Milford</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Documenting the Pure Milford tour and TranzAlpine train experience with KiwiRail. Showcasing the journeys
              and landscapes that make New Zealand's South Island unforgettable.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Milford Sound is New Zealand's most famous fjord—dramatic peaks rising straight from the water, waterfalls
              cascading hundreds of metres, and wilderness that feels genuinely untouched. This project focused on
              capturing the landscape in conditions that show why it's worth the journey.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Content documenting the Pure Milford tour experience and TranzAlpine train journey with
              KiwiRail—showcasing the ways to explore New Zealand's South Island and the landscapes that make these
              journeys unforgettable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Brief</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Create content for New Zealand tourism that goes beyond destination photography to show the actual
              experiences of getting there and touring the region. Position both the journey and destination as
              essential parts of the New Zealand travel experience.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Approach</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pure Milford Tour</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Documented the full tour experience from departure to return—the drive through Fiordland, the boat
                  cruise through Milford Sound, wildlife encounters, waterfall approaches, and the scale of the
                  landscape. Content focused on conveying the dramatic scenery in ways that still photos rarely capture.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">TranzAlpine Train</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Captured the journey as an experience itself—passing through Canterbury Plains, climbing through
                  Arthur's Pass, descending into the West Coast. Content emphasized the changing landscapes visible from
                  the train and positioned rail travel as a destination choice, not just transportation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Delivered</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Landscape photography capturing scale and drama</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Video content showing movement through environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Tour experience documentation from passenger perspective</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Seasonal variation content showing different conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Wildlife and natural feature highlights</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Journey narrative content for social storytelling</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Practical travel content showing logistics and planning</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Capturing landscapes of this scale requires conveying depth, movement, and atmosphere that static
              photography often misses. Video content focused on sequences that give viewers a sense of actually being
              there—watching waterfalls cascade, seeing the train wind through mountain passes, experiencing the
              changing light on the fjord.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Instagram Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.instagram.com/reel/C_FfYv1qBgr/embed/captioned"
                  className="w-full aspect-[9/16]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.instagram.com/reel/C9qQOO8K51S/embed/captioned"
                  className="w-full aspect-[9/16]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
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
              Content that positions these experiences as must-dos for New Zealand visitors—not just checking boxes but
              genuinely memorable journeys. Shows why people travel across the world to see these specific places and
              why the journey matters as much as the destination.
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
