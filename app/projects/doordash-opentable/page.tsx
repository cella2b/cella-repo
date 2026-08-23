import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "DoorDash x OpenTable | CELLA",
  description: "Content positioning DoorDash as the place to book dine-in experiences, not just delivery.",
}

export default function DoorDashOpenTablePage() {
  return (
    <div className="min-h-screen bg-cream-50">
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
          src="/images/projects/doordash-delivery.avif"
          alt="DoorDash x OpenTable"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">DoorDash x OpenTable</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Content positioning DoorDash as the place to book dine-in experiences, not just delivery. Showcasing the
              seamless booking experience to attract users to the app for premium dining.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              DoorDash's integration with OpenTable changed how people book premium dining experiences. This project
              focused on Epicurean restaurant to demonstrate how the booking process works and why it matters for both
              diners and restaurants.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Content repositioning DoorDash as a platform for booking dine-in restaurant experiences, not just food
              delivery. The goal was to attract users to the app for premium dining reservations through seamless
              OpenTable integration.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Brief</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Create content that changes the perception of DoorDash from "delivery app" to "dining platform"—showing
              the booking experience is just as convenient as ordering delivery, but for when you actually want to go
              out.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Documented the complete experience from discovery to dining—browsing restaurants in the app, booking a
              table, arriving at the venue, and the meal itself. Content needed to feel premium while maintaining the
              convenience and ease-of-use that made DoorDash successful for delivery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Featured premium dining experiences that wouldn't typically be associated with DoorDash—the types of
              restaurants people make reservations for, not order takeout from. The content positioned the integration
              as expanding options rather than diluting the brand.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Delivered</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>App interface demonstrations showing booking flow</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Restaurant experience content maintaining premium feel</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Comparison content showing convenience versus traditional booking</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Influencer partnerships demonstrating real usage</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Before/after scenarios: finding and booking restaurants</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">•</span>
                <span>Social assets optimized for restaurant discovery and planning</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Instagram Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Content that successfully expanded DoorDash's positioning beyond delivery without alienating their
              existing user base. Showed the app as relevant for date nights, celebrations, and occasions when delivery
              isn't what you want—but convenience still matters.
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
    </div>
  )
}
