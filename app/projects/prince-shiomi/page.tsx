import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Prince Shiomi Hotel | CELLA",
  description: "Showcasing a 5-star Tokyo property just outside the city centre for couples and families.",
  alternates: { canonical: "/projects/prince-shiomi" },
}

export default function PrinceShiomiPage() {
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
          src="/luxury-japanese-hotel-traditional-architecture-zen.jpg"
          alt="Prince Shiomi Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Prince Shiomi Hotel</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Showcasing a 5-star Tokyo property just outside the city centre. Positioning it as a destination for
              couples and families seeking larger rooms, premium facilities, and an authentic travel experience away
              from the typical tourist centres.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Visual content showcasing Prince Shiomi Hotel as a 5-star destination just outside central
              Tokyo, positioned for couples and families seeking larger rooms, premium facilities, and an authentic
              travel experience away from the typical tourist centres.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Brief</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Create content that appeals to international travellers looking for luxury and space without sacrificing
              access to Tokyo. Position the property as a destination itself, not just accommodation, somewhere worth
              choosing specifically, not settling for.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Photography and video emphasizing what sets Prince Shiomi apart: room sizes that accommodate families
              comfortably, facilities that match 5-star expectations, proximity to Tokyo while offering a more relaxed
              atmosphere, and experiences that feel distinctly Japanese.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Content balanced luxury presentation with authentic cultural elements, showing premium facilities while
              highlighting traditional touches, demonstrating space and comfort while maintaining the aesthetic
              sophistication expected from Japanese hospitality.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Delivered</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Property photography covering rooms, facilities, and public spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Experiential content showing family and couple experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Neighbourhood context showing location advantages</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Seasonal content and local area highlights</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Comparison positioning against central Tokyo properties</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Virtual tour content for international audiences</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Target Audience</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Couples seeking romantic experiences, families needing space and facilities, travellers wanting authentic
              Japanese hospitality without sacrificing luxury, visitors preferring to stay outside the tourist rush
              while remaining connected.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A visual narrative that positioned Prince Shiomi as a deliberate choice, not a compromise. Showcased the
              property's strengths, space, facilities, location, authenticity, in ways that appealed to the specific needs
              of couples and families rather than trying to compete directly with central Tokyo luxury hotels.
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
