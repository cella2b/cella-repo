"use client"

import { useState } from "react"
import SiteHeader from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ArrowRight, Instagram, Mail } from "lucide-react"

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
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `New Enquiry from ${formData.firstName} ${formData.lastName} - ${formData.brand}`
    const body = [`Name: ${formData.firstName} ${formData.lastName}`, `Role: ${formData.role}`, `Brand: ${formData.brand}`, `Location: ${formData.location}`, `Email: ${formData.email}`, `Services Interested In: ${formData.services.join(", ")}`, `Social Handles: ${formData.socialHandles}`, ``, `Message:`, formData.message].join("\\n")
    window.location.href = `mailto:info@heycella.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (service: string) => {
    const currentServices = formData.services
    if (currentServices.includes(service)) {
      setFormData({ ...formData, services: currentServices.filter(s => s !== service) })
    } else {
      setFormData({ ...formData, services: [...currentServices, service] })
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader current="contact" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 overflow-hidden">
            <h1 className="text-white font-bold uppercase tracking-tight leading-tight">
  <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl animate-phase-in">
    CONTENT <wbr /> THAT <wbr /> BOOKS
  </span>
</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's get to know each other a little more. We'll be in touch within 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 md:pb-32 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
            <div>
              <label className="block text-sm tracking-widest text-muted-foreground uppercase mb-4">
                What are you after? <span className="text-xs">(Select all that apply)</span>
              </label>
              <div className="space-y-3">
                {['Video Content', 'Photo Content', 'Social Strategy', 'Coaching & Mentoring', 'Brand Partnership'].map((service) => (
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
            </div>

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
                onClick={handleSubmit}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-foreground text-background px-12 py-4 text-sm tracking-[0.3em] uppercase hover:bg-foreground/90 transition-colors font-semibold cursor-pointer"
              >
                Let's do it!
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
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
                href="https://www.instagram.com/cella.au"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border p-8 hover:border-foreground transition-colors"
              >
                <Instagram className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-bold text-foreground uppercase tracking-tight mb-2">
                  Instagram
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  @cella.au
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  )
}
