"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Instagram, Mail, Menu, X } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({ 
    firstName: "", 
    lastName: "",
    role: "",
    brand: "",
    location: "",
    email: "",
    services: [] as string[],
    socialHandles: "",
    message: "" 
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New enquiry from ${formData.firstName} ${formData.lastName}: ${formData.brand}`
    const body = [
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Role: ${formData.role}`,
      `Brand: ${formData.brand}`,
      `Location: ${formData.location}`,
      `Email: ${formData.email}`,
      "",
      `Services: ${formData.services.join(", ")}`,
      `Social handles: ${formData.socialHandles}`,
      "",
      "Project details:",
      formData.message,
    ].join("\n")
    window.location.href = `mailto:info@heycella.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (service: string) => {
    setFormData((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl md:text-2xl font-bold tracking-wider">
            CELLA
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#work"
              className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Work
            </Link>
            <Link
              href="/#services"
              className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white text-sm tracking-widest uppercase"
            >
              Book a Call
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="contact-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="contact-mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg p-6 space-y-4">
            <Link href="/#work" className="block text-white/80 hover:text-white text-sm tracking-widest uppercase">
              Work
            </Link>
            <Link href="/#services" className="block text-white/80 hover:text-white text-sm tracking-widest uppercase">
              Services
            </Link>
            <Link href="/contact" className="block text-white text-sm tracking-widest uppercase">
              Book a Call
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 overflow-hidden">
            <h1 className="text-white font-bold uppercase tracking-tight leading-tight">
  <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl animate-phase-in">
    START <wbr /> A <wbr /> PROJECT
  </span>
</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Tell me what you are building and I will get back to you with the best next step.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 md:pb-32 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>

            {/* Who are you / What's your brand */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                  Who are you?
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  placeholder="e.g. Marketing Manager, Founder"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label htmlFor="brand" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                  What's your brand?
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  required
                  placeholder="Brand or company name"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                Where are you based?
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="City, Country"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                Email <span className="text-xs">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-card border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            {/* What are you after - Checkboxes */}
            <fieldset>
              <legend className="block text-sm tracking-widest text-muted-foreground uppercase mb-4">
                What are you after? <span className="text-xs">(Select all that apply)</span>
              </legend>
              <div className="space-y-3">
                {['Video Content', 'Photo Content', 'Social Strategy', 'AI Guidance', 'Coaching & Mentoring', 'Brand Partnership'].map((service) => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                      className="w-5 h-5 bg-card border-2 border-border checked:bg-foreground checked:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/50 transition-colors cursor-pointer"
                    />
                    <span className="text-foreground text-sm group-hover:text-white transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Social Handles */}
            <div>
              <label htmlFor="socialHandles" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                Social Handles <span className="text-xs">(optional)</span>
              </label>
              <input
                type="text"
                id="socialHandles"
                name="socialHandles"
                placeholder="@yourbrand or links"
                value={formData.socialHandles}
                onChange={handleChange}
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm tracking-widest text-muted-foreground uppercase mb-3">
                Tell me about your project <span className="text-xs">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="What are you working on? What's the vision?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-foreground text-background px-12 py-4 text-sm tracking-[0.3em] uppercase hover:bg-foreground/90 transition-colors font-semibold cursor-pointer"
              >
                Let's do it!
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight mb-12 text-center">
              Prefer to go direct? We get it.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="mailto:info@heycella.com"
                className="group border border-border p-8 hover:border-foreground transition-colors"
              >
                <Mail className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-bold text-foreground uppercase tracking-tight mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  info@heycella.com
                </p>
              </a>

              <a
                href="https://www.instagram.com/cella.channel/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border p-8 hover:border-foreground transition-colors"
              >
                <Instagram className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-bold text-foreground uppercase tracking-tight mb-2">
                  Instagram
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  @cella.channel
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  )
}
