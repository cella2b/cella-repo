import Link from "next/link"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LightHeader } from "@/components/light-header"
import { Footer } from "@/components/footer"

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFA]">
      <LightHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#FDFCFA]">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Coaching & <span className="italic text-purple-600">Mentoring</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Building a successful content business or personal brand requires more than just creating good work. It's
            about how you're perceived, pricing yourself correctly, building confidence, and having strategies that
            actually lead somewhere.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            This coaching focuses on the practical business side, the things that determine whether you succeed or stay
            stuck. From how you present yourself online to overcoming imposter syndrome to pricing strategies that
            reflect your value, this covers the real challenges that hold people back.
          </p>
        </div>
      </section>

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
                  How you're perceived online and building a strong personal brand
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
                  Confidence building and overcoming imposter syndrome
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
                  Pricing strategies and having money conversations
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
                  Client acquisition and building relationships that lead to work
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
                  Positioning yourself as an expert in your field
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business systems and workflows that scale</h3>
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
                  Making strategic decisions about where to focus energy
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
                  Real talk about challenges and problem-solving
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">The approach</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This isn't motivational speaking. It's practical guidance based on real experience, what works, what doesn't,
            and why most advice about "building your brand" misses the mark. Sessions are direct, focused on your
            specific situation, and designed to give you clarity and actionable steps.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who this is for</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            People just getting started who need guidance on positioning and pricing. Established creators who've hit a
            plateau and need perspective on what to change. Anyone struggling with how they're perceived online or
            lacking confidence in how they present themselves and their work.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Session format</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sessions run 60-90 minutes and can be standalone or ongoing. Between sessions, email support is available
            for quick questions, feedback on implementation, or "sanity checks" when you're making decisions.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why this matters</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Talent and hard work aren't enough. How you position yourself, price yourself, and present yourself online
            determines whether you get opportunities or get overlooked. This coaching addresses the gap between being
            good at what you do and actually building a successful business around it.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's build a content strategy and personal brand that positions you as the go-to expert in your field.
          </p>
          <Link href="/contact">
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
      <Footer />
    </main>
  )
}
