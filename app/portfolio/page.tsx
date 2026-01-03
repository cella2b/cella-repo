"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Menu, X, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/portfolio" className="text-purple-600 font-bold">
              Portfolio
            </Link>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Let's Chat
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100/50">
            <div className="px-6 py-4 space-y-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium">
                Home
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-purple-600 font-bold"
              >
                Portfolio
              </Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full shadow-lg"
                >
                  Let's Chat
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#FDFCFA]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">My Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of content created for brands across hospitality, travel, and lifestyle sectors.
          </p>
        </div>
      </section>

      {/* Video Portfolio Grid - Ready for your videos */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Hospitality & Travel</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder for video embeds */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="group">
                  <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all flex items-center justify-center">
                    <p className="text-gray-500 text-center px-4">
                      Video placeholder - Send me your videos to embed here!
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Products & Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group">
                  <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all flex items-center justify-center">
                    <p className="text-gray-500 text-center px-4">
                      Video placeholder - Send me your videos to embed here!
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Events & Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group">
                  <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-all flex items-center justify-center">
                    <p className="text-gray-500 text-center px-4">
                      Video placeholder - Send me your videos to embed here!
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image src="/images/cella-logo.png" alt="Cella Logo" width={50} height={50} className="opacity-90" />
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/cella.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:cella.foodie@gmail.com" className="hover:opacity-80 transition-opacity">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-white/80">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
