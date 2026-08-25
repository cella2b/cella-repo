import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Google Gemini x Paddy's Markets | CELLA",
  description: "Exploring Paddy's Markets through local produce, vendors, and culture using Google Gemini AI.",
  alternates: { canonical: "/projects/google-gemini-paddys" },
}

export default function GoogleGeminiPaddysPage() {
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
          src="/images/projects/paddys-markets.jpg"
          alt="Google Gemini x Paddy's Markets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Google Gemini x Paddy's Markets
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Exploring Paddy's Markets through local produce, vendors, and culture. Using Google Gemini AI to help
              people discover what they're looking at and how to use it.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A campaign exploring Paddy's Markets through the lens of Google's Gemini AI, showing how technology can
              help people understand the produce they're seeing, learn about vendors, and discover how to actually use
              what they're buying.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Brief</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Create content that demonstrates Gemini AI's practical value in a real-world setting while celebrating the
              cultural diversity and local produce that makes Paddy's Markets iconic. The technology needed to enhance
              the experience, not overshadow it.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Documented authentic market experiences, people discovering unfamiliar produce, vendors sharing their
              stories, and the AI providing context that bridges knowledge gaps. The focus was on showing Gemini as a
              helpful tool rather than a gimmick.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Content captured the sensory overload of the markets, the colours, the crowds, the variety, then
              demonstrated how AI can help make sense of it all. From identifying exotic fruits to translating vendor
              signs to suggesting recipes, the content showed practical applications people could actually use.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Delivered</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Video content showing AI interactions in real market scenarios</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Vendor profiles and produce features</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Side-by-side comparisons of market experiences with and without AI assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Tutorial-style content on using Gemini while shopping</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Social-first content optimized for discovery and engagement</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Instagram Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                <iframe
                  src="https://www.instagram.com/reel/DMIJ1koT_Ac/embed/captioned"
                  title="Google Gemini at Paddy's Markets campaign reel"
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
              Content that made AI feel accessible and useful rather than complicated or intrusive. Positioned Gemini as
              something that enhances human experiences and cultural exploration rather than replacing them. Made
              Paddy's Markets feel more approachable for people who might be intimidated by the scale and variety.
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
