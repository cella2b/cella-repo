"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import { ArrowUpRight, Check, Copy } from "lucide-react"
import { track } from "@vercel/analytics"
import { enquiryServices as services } from "@/lib/services"

export function EnquiryForm() {
  const [selected, setSelected] = useState("")
  const [draft, setDraft] = useState("")
  const [mailto, setMailto] = useState("")
  const [copyStatus, setCopyStatus] = useState("")
  const [error, setError] = useState("")
  const draftRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("service")
    const requested = query === "Social Strategy" ? "Social Strategy & Management" : query
    if (requested && services.includes(requested)) setSelected(requested)
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) || "").trim()
    if (!["name", "brand", "email", "message"].every(name => field(name))) {
      setError("Please add your name, business, email and a little about your project.")
      return
    }
    const subject = `CELLA enquiry: ${field("brand")}`
    const body = [
      `Name: ${field("name")}`, `Business: ${field("brand")}`, `Email: ${field("email")}`,
      `Service: ${field("service") || "Let's discuss"}`, `Location: ${field("location") || "To discuss"}`,
      `Timing: ${field("timing") || "Flexible"}`, `Budget: ${field("budget") || "To discuss"}`,
      "", "Project brief:", field("message"),
    ].join("\n")
    const url = `mailto:info@heycella.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setError("")
    setCopyStatus("")
    setDraft(`To: info@heycella.com\nSubject: ${subject}\n\n${body}`)
    setMailto(url)
    track("enquiry_draft_prepared")
    window.location.href = url
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft)
      setCopyStatus("Enquiry copied. Paste it into an email to info@heycella.com.")
    } catch {
      draftRef.current?.focus()
      draftRef.current?.select()
      setCopyStatus("Select and copy the enquiry below, then paste it into your email app.")
    }
  }

  return (
          <section aria-label="Project enquiry" className="border-t border-[#48424f] pt-8">
            <noscript><p className="mb-5 text-sm leading-6">Please email your project details to <a href="mailto:info@heycella.com">info@heycella.com</a>. The enquiry builder needs JavaScript.</p></noscript>
            <form method="post" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div><label className="cella-field-label" htmlFor="name">Your name</label><input className="cella-field" id="name" name="name" autoComplete="name" required maxLength={100} /></div>
                <div><label className="cella-field-label" htmlFor="brand">Business / brand</label><input className="cella-field" id="brand" name="brand" autoComplete="organization" required maxLength={150} /></div>
              </div>
              <div><label className="cella-field-label" htmlFor="email">Email address</label><input className="cella-field" type="email" id="email" name="email" autoComplete="email" required maxLength={254} /></div>
              <div><label className="cella-field-label" htmlFor="service">What can I help with?</label><select className="cella-field" id="service" name="service" value={selected} onChange={event => setSelected(event.target.value)}><option value="">Let’s discuss the options</option>{services.map(service => <option key={service}>{service}</option>)}</select></div>
              <div><label className="cella-field-label" htmlFor="location">Where is your business? <span>Optional</span></label><input className="cella-field" id="location" name="location" placeholder="City, country" maxLength={150} /></div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div><label className="cella-field-label" htmlFor="timing">Project timing <span>Optional</span></label><input className="cella-field" id="timing" name="timing" placeholder="A date, month or flexible" maxLength={100} /></div>
                <div><label className="cella-field-label" htmlFor="budget">Budget <span>Optional</span></label><input className="cella-field" id="budget" name="budget" placeholder="Your budget and currency" maxLength={100} /></div>
              </div>
              <div><label className="cella-field-label" htmlFor="message">A little about your project</label><textarea className="cella-field min-h-40" id="message" name="message" rows={5} required maxLength={2500} placeholder="What would you like to create? Share your business, the experience and your goals." /></div>
              {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
              <div><button type="submit" className="cella-button w-full sm:w-auto">Prepare my enquiry <ArrowUpRight size={19} /></button><p className="mt-4 text-sm leading-6 text-[#aaa2b6]">This opens a draft in your email app. Review and send it there to complete your enquiry.</p></div>
            </form>
            {draft && <div className="mt-8 border border-[#75628c] bg-[#201a28] p-5">
              <p role="status" className="mb-4 text-sm leading-6">Your draft is ready. If your email app didn’t open, copy the enquiry below and email it to info@heycella.com.</p>
              <div className="mb-4 flex flex-wrap gap-5"><a href={mailto} className="cella-text-link">Open email app <ArrowUpRight size={17} /></a><button type="button" onClick={copyDraft} className="cella-text-link">{copyStatus.startsWith("Enquiry copied") ? <Check size={17} /> : <Copy size={17} />} Copy enquiry</button></div>
              <label htmlFor="enquiry-draft" className="cella-field-label">Your enquiry</label><textarea ref={draftRef} id="enquiry-draft" className="cella-field text-sm" value={draft} readOnly rows={7} />
              <p aria-live="polite" className="mt-3 text-sm text-[#d2b5fc]">{copyStatus}</p>
            </div>}
          </section>
  )
}
