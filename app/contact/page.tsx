"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Enquiry from ${formData.firstName} ${formData.lastName}`
    const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:cella.foodie@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/25 via-purple-500/20 to-pink-400/25 rounded-full blur-3xl animate-orbit-1" />
        <div className="absolute bottom-32 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-violet-300/20 via-violet-400/15 to-purple-400/20 rounded-full blur-3xl animate-orbit-2" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-300/18 via-fuchsia-400/15 to-pink-400/18 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-gradient-to-br from-purple-400/15 via-purple-500/12 to-indigo-300/15 rounded-full blur-3xl animate-drift-wave" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-purple-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/cella-logo.png"
                alt="Cella"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 mix-blend-multiply"
              />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#projects"
                className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors"
              >
                Projects
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-purple-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-100/30 bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/#projects"
                  className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Intro Text */}
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-base leading-relaxed">
              Looking to discuss a project? Submit an enquiry below and we'll be in touch within 48 hours.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-purple-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-card-foreground mb-2">
                  Name <span className="text-muted-foreground">(required)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-card-foreground mb-2">
                  Email <span className="text-muted-foreground">(required)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-card-foreground mb-2">
                  Message <span className="text-muted-foreground">(required)</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700 px-10 py-6 text-base font-medium transition-all rounded-lg"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
