import { ArrowUpRight, Instagram, Mail } from "lucide-react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { EnquiryForm } from "@/components/enquiry-form"

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[#101014] px-[5%] pb-24 pt-36 text-white md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <section>
            <p className="cella-eyebrow mb-6 text-[#c8a5ff]">Let’s work together</p>
            <h1 className="text-[clamp(3.7rem,7vw,7rem)] font-medium uppercase leading-[1.02] tracking-[-.05em]">YOUR NEXT<br />GOOD STORY<br /><span className="text-[#b98bff]">STARTS HERE.</span></h1>
            <p className="mt-7 max-w-sm text-base leading-8 text-[#b7b1c2]">Tell me about your business and what you have in mind. Content for your channels, a brand partnership, or a fresh approach to social — let’s find the right fit.</p>
            <a href="mailto:info@heycella.com" className="mt-9 flex min-h-11 items-center gap-3 text-base"><Mail size={19} />info@heycella.com</a>
            <a href="https://www.instagram.com/cella.channel/" target="_blank" rel="noopener noreferrer" className="mt-3 flex min-h-11 items-center gap-3 text-sm text-[#c9c3d3]"><Instagram size={19} />@cella.channel <ArrowUpRight size={16} /></a>
          </section>
          <EnquiryForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
