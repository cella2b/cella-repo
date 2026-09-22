"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, Check, LockKeyhole } from "lucide-react"
import { useEffect, useRef, useState, type FormEvent } from "react"
import type { KitContent, RateItem } from "../_lib/types"
import styles from "./partner-kit.module.css"

const work = [
  { src: "/images/projects/kings-cross-coca-cola.webp", alt: "Kings Cross precinct in Sydney", label: "City stories" },
  { src: "/images/projects/paddys-markets.jpg", alt: "Food and produce at Paddy's Markets", label: "Good food" },
  { src: "/images/projects/barangaroo-house.jpg", alt: "Barangaroo House hospitality content", label: "Local discoveries" },
  { src: "/images/projects/milford-sound.jpg", alt: "Milford Sound in New Zealand", label: "Far-away places" },
]

const stats = [
  { platform: "Instagram", label: "Reach", value: "423K" },
  { platform: "Instagram", label: "Engagement", value: "36K" },
  { platform: "Instagram", label: "Followers", value: "23K" },
  { platform: "TikTok", label: "Views", value: "2.1M" },
  { platform: "TikTok", label: "Likes", value: "1.9M" },
  { platform: "TikTok", label: "Followers", value: "31K" },
]

function RateRow({ item }: { item: RateItem }) {
  return <li className={styles.rateRow}>
    <div><span>{item[0]}</span>{item[2] && <span className={styles.badge}>{item[2]}</span>}</div>
    <strong>{item[1]}</strong>
  </li>
}

export default function PartnerKit({ kitId }: { kitId: string }) {
  const [kit, setKit] = useState<KitContent | null>(null)
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (kit) heading.current?.focus({ preventScroll: true })
    else if (hasInteracted) passwordInput.current?.focus({ preventScroll: true })
  }, [kit, hasInteracted])

  useEffect(() => {
    const lock = () => setKit(null)
    window.addEventListener("pagehide", lock)
    return () => window.removeEventListener("pagehide", lock)
  }, [])

  async function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (busy) return
    const form = event.currentTarget
    const password = String(new FormData(form).get("password") ?? "")
    setBusy(true)
    setError("")
    setHasInteracted(true)
    try {
      const response = await fetch("/partner-kit/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        cache: "no-store",
        body: JSON.stringify({ kitId, password }),
      })
      const result = await response.json()
      if (!response.ok || !result.kit) {
        setError(typeof result.error === "string" ? result.error : "Please try again in a moment.")
        passwordInput.current?.focus()
        return
      }
      form.reset()
      setKit(result.kit)
      window.scrollTo({ top: 0, behavior: "instant" })
    } catch {
      setError("The kit could not be opened. Check your connection and try again.")
    } finally {
      setBusy(false)
    }
  }

  function lockKit() {
    setKit(null)
    setError("")
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  if (!kit) return (
    <main className={`${styles.kit} ${styles.gate}`}>
      <Image src="/images/fluid-purple-2.png" alt="" fill priority sizes="100vw" className={styles.gateTexture} />
      <div className={styles.gateShade} />
      <a href="/" className={styles.gateWordmark} aria-label="CELLA homepage">CELLA</a>
      <section className={styles.gatePanel} aria-labelledby="kit-access-heading">
        <div className={styles.gateTop}><span className={styles.eyebrow}>An invitation to create</span><LockKeyhole size={18} aria-hidden="true" /></div>
        <h1 id="kit-access-heading">Good things<br />start <em>here.</em></h1>
        <p>Welcome to your private CELLA partner kit. Enter the password from Marcella to explore the possibilities.</p>
        <noscript><p>JavaScript is needed to open this kit. You can also request a copy by emailing info@heycella.com.</p></noscript>
        <form method="post" onSubmit={handleUnlock} className={styles.passwordForm} aria-busy={busy}>
          <label htmlFor="kit-password">Your access password</label>
          <input ref={passwordInput} id="kit-password" name="password" type="password" required maxLength={512} autoComplete="current-password" autoCapitalize="none" spellCheck={false} aria-invalid={Boolean(error)} aria-describedby={error ? "kit-error" : undefined} disabled={busy} />
          <button type="submit" className={styles.primaryButton} disabled={busy}>
            <span aria-live="polite">{busy ? "Opening your kit…" : "Open partner kit"}</span><ArrowUpRight size={18} aria-hidden="true" />
          </button>
          {error && <p id="kit-error" role="alert" className={styles.error}>{error}</p>}
        </form>
        <a className={styles.gateHelp} href="mailto:info@heycella.com?subject=Partner%20kit%20access">Need access? Say hello <ArrowUpRight size={14} aria-hidden="true" /></a>
      </section>
      <p className={styles.gateFooter}>Sydney, Australia <span>Private partner kit · 2026</span></p>
    </main>
  )

  const contentOnly = kit.kind === "content"
  const enquiry = contentOnly ? "Content creation enquiry" : "Brand partnership enquiry"
  const email = `mailto:info@heycella.com?subject=${encodeURIComponent(enquiry)}`

  return <main className={styles.kit}>
    <a className={styles.skipLink} href="#kit-rates">Skip to rates</a>
    <header className={styles.header}>
      <a href="#top" className={styles.wordmark} aria-label="CELLA, back to top">CELLA</a>
      <span className={styles.headerNote}>Private partner kit · 2026</span>
      <button className={styles.lockButton} onClick={lockKit}><LockKeyhole size={14} aria-hidden="true" />Lock kit</button>
    </header>

    <section id="top" className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Marcella · @cella.channel</p>
        <h1 ref={heading} tabIndex={-1}>{contentOnly ? <>Content<br />with <em>taste.</em></> : <>Good taste.<br />Great <em>stories.</em></>}</h1>
        <p className={styles.heroDescription}>{contentOnly
          ? "A bank of social content, made for your business. Food, travel and experiences, seen through the CELLA lens."
          : "Food worth finding. Places worth exploring. Stories that bring your brand into the conversation."}</p>
        <div className={styles.heroActions}><a href="#kit-rates" className={styles.primaryButton}>Explore {contentOnly ? "content packages" : "partnerships"}<ArrowDown size={17} aria-hidden="true" /></a><a href={email} className={styles.textLink}>Let’s talk<ArrowUpRight size={16} aria-hidden="true" /></a></div>
        <p className={styles.heroLocation}>Sydney, Australia <span>Food / Travel / Experiences</span></p>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroImage}><Image src="/images/projects/barangaroo-house.jpg" alt="A Sydney hospitality scene from CELLA's portfolio" fill sizes="(max-width: 760px) 90vw, 45vw" priority className={styles.coverImage} /></div>
        <div className={styles.visualTag}><span>The CELLA point of view</span><ArrowUpRight size={28} aria-hidden="true" /></div>
        <span className={styles.heroStamp} aria-hidden="true">C.</span>
      </div>
    </section>

    <section className={styles.intro} aria-labelledby="about-heading">
      <p className={styles.eyebrow}>Meet your creator</p>
      <h2 id="about-heading">A local eye.<br /><em>A curious mind.</em></h2>
      <div className={styles.introCopy}><p>I’m Marcella, the creator behind @cella.channel. I share food, travel and activities, from Sydney hotspots to international stays and experiences.</p><p>I work with businesses and brands that value creativity and quality, tailoring each piece of content and strategy to the story you want to tell.</p></div>
    </section>

    {!contentOnly && <section className={styles.audience} aria-labelledby="audience-heading">
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>2026 media kit snapshot</p><h2 id="audience-heading">The audience.</h2></div><p>Food experiences, Sydney discoveries<br />and international travel stories.</p></div>
      <div className={styles.stats}>{stats.map(stat => <div key={`${stat.platform}-${stat.label}`}><span>{stat.platform}</span><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
      <p className={styles.sourceNote}>Figures from the 2026 media kit. Reporting periods are not specified.</p>
    </section>}

    <section className={styles.work} aria-labelledby="work-heading">
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>A little of the work</p><h2 id="work-heading">From a good plate<br />to a <em>great place.</em></h2></div><p>A feel for the content.<br />A point of view of its own.</p></div>
      <div className={styles.workGrid}>{work.map((item, index) => <figure key={item.src} className={index % 2 ? styles.offsetImage : undefined}><div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 44vw, 23vw" className={styles.coverImage} /></div><figcaption><span>{item.label}</span><span>0{index + 1}</span></figcaption></figure>)}</div>
    </section>

    <section id="kit-rates" className={styles.rates} aria-labelledby="rates-heading">
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{contentOnly ? "Made for your channels" : "Made for your brand"}</p><h2 id="rates-heading">Let’s make<br /><em>something good.</em></h2></div><p>{contentOnly ? "Social content created for your business to publish on its own channels." : "One-off posts and packages published through @cella.channel."}</p></div>
      {contentOnly ? <>
        <div className={styles.contentCards}>{kit.sections[0].items.map((item, index) => <article key={item[0]} className={styles.contentCard}><span className={styles.cardNumber}>0{index + 1}</span><h3>{item[0]}</h3><strong>{item[1]}</strong><a href={`mailto:info@heycella.com?subject=${encodeURIComponent(`Content creation enquiry: ${item[0]}`)}`}>Enquire about this package<ArrowUpRight size={16} aria-hidden="true" /></a></article>)}</div>
        <div className={styles.inclusions}><h3>One shoot.<br />Plenty to share.</h3><ul><li><Check size={17} aria-hidden="true" />Content created in one shoot of one to three hours.</li><li><Check size={17} aria-hidden="true" />Finished videos delivered via Google Drive.</li><li><Check size={17} aria-hidden="true" />Created for your business to post on its own social channels.</li><li><Check size={17} aria-hidden="true" />Posting on @cella.channel is not included in these packages.</li></ul></div>
        {kit.sections.slice(1).map(section => <article className={`${styles.rateCard} ${styles.management}`} key={section.title}><div><p className={styles.eyebrow}>Ongoing support for your business</p><h3>{section.title}</h3><ul>{section.items.map(item => <RateRow key={item[0]} item={item} />)}</ul></div><div><h4>Good to know</h4><ul className={styles.terms}>{section.notes?.map(note => <li key={note}>{note}</li>)}</ul></div></article>)}
      </> : <div className={styles.rateGrid}>{kit.sections.map((section, index) => <article className={styles.rateCard} key={section.title}><div className={styles.rateCardTitle}><h3>{section.title}</h3><span>0{index + 1}</span></div><ul>{section.items.map(item => <RateRow key={item[0]} item={item} />)}</ul></article>)}</div>}
      <p className={styles.sourceNote}>Rates from CELLA’s 2026 media kit. Currency, GST, usage and any travel costs are confirmed in your quote. Custom packages welcome.</p>
      {!contentOnly && <p className={styles.sourceNote}>Boosting arrangements and the basis of any percentage charge are agreed before booking.</p>}
    </section>

    <section className={styles.cta} aria-labelledby="contact-heading"><div><p className={styles.eyebrow}>Your next story starts here</p><h2 id="contact-heading">Got something<br /><em>in mind?</em></h2></div><div><p>Tell me about your business and what you’d like to create. Let’s find the right fit.</p><a href={email} className={styles.primaryButton}>Start a conversation<ArrowUpRight size={18} aria-hidden="true" /></a><a href="mailto:info@heycella.com" className={styles.contactEmail}>info@heycella.com</a></div></section>
    <footer className={styles.footer}><a href="#top" className={styles.wordmark}>CELLA</a><a href="https://www.instagram.com/cella.channel/" target="_blank" rel="noopener noreferrer">@cella.channel <ArrowUpRight size={14} aria-hidden="true" /></a><span>Shared with you, by Marcella.</span><button onClick={lockKit} className={styles.lockButton}><LockKeyhole size={14} aria-hidden="true" />Lock kit</button></footer>
  </main>
}
