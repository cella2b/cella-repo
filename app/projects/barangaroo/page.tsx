import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Barangaroo Precinct | CELLA",
  description:
    "Multiple campaigns showcasing Barangaroo as a destination for different occasions across Sydney's waterfront.",
  alternates: { canonical: "/projects/barangaroo" },
}

export default function BarangarooPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFA] text-gray-900">
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-purple-100/50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/cella-logo.png" alt="CELLA" width={40} height={40} className="mix-blend-multiply" />
          </Link>
          <Link href="/#work">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-600">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </nav>

      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/projects/barangaroo-house.jpg"
          alt="Barangaroo Precinct"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Barangaroo Precinct</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Multiple campaigns showcasing Barangaroo as a destination, from Golden Hours with Aperol to Spring in the
              Streets live events and Happy Hours positioning the precinct as Sydney's end-of-week venue.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Barangaroo represents one of Sydney's most ambitious urban transformations, reclaiming industrial
              waterfront and turning it into a precinct that combines public parkland, residential towers, and
              world-class dining with harbour access.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Brief</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Document the completed precinct in a way that showcases the architecture, public spaces, and dining
              experiences while capturing how people actually use and enjoy the space.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Multiple campaigns positioning Barangaroo as Sydney's premier waterfront destination for different
              occasions, from Aperol-sponsored golden hour content to live event coverage to happy hour positioning as
              the city's end-of-week venue.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Campaigns</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Golden Hours with Aperol</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Content capturing Barangaroo during that perfect window when the light hits the harbour and the
                  precinct transitions from day to evening. Positioned as the ideal setting for after-work drinks and
                  waterfront dining, with Aperol as the drink of choice.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring in the Streets</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Live event coverage showcasing Barangaroo's public programming, cultural events, and community
                  activations. Content that positioned the precinct as more than restaurants and offices, a destination
                  with genuine public life.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Happy Hours</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Campaign positioning Barangaroo's venue strip as Sydney's answer to "where should we go Friday after
                  work?" Content highlighting the variety of venues, waterfront atmosphere, and the convenience of
                  having everything in one precinct.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each campaign required different content approaches while maintaining consistent positioning of Barangaroo
              as a premium waterfront destination. From lifestyle content to event documentation to venue-specific
              features, everything reinforced the precinct's role in Sydney's social landscape.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Delivered</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Golden hour photography and video optimized for Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Live event coverage and recap videos</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Venue features and happy hour content</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Aerial and waterfront perspectives showing precinct scale</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>User-generated content strategy and influencer partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Campaign-specific social media assets</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Instagram Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.instagram.com/reel/DO5dyI0kwqZ/embed/captioned"
                  title="Barangaroo Golden Hours campaign reel"
                  loading="lazy"
                  className="w-full aspect-[9/16]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.instagram.com/reel/DQobpZvk9nM/embed/captioned"
                  title="Barangaroo event campaign reel"
                  loading="lazy"
                  className="w-full aspect-[9/16]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.instagram.com/reel/DByWMLgqgCl/embed/captioned"
                  title="Barangaroo precinct campaign reel"
                  loading="lazy"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Content that established Barangaroo in people's consideration set for various occasions rather than being
              seen as just another development. Multiple campaigns allowed for sustained visibility and different entry
              points for different audiences, office workers, tourists, locals, event-goers.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <Link href="/#work">
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
      <Footer />
    </main>
  )
}
