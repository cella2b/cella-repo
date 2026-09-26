import Image from "next/image"
import { ArrowDown, ArrowUpRight, BookOpen, MapPin, Sparkles } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/seo"
import styles from "./page.module.css"

export const metadata = {
  ...createPageMetadata({
    title: "Sydney Date Nights, Sorted | CELLA",
    description: "Eight Sydney date-night plans with Cella’s dish picks, suggested timings, budgets for two and map links. A digital guide for your next night out.",
    path: "/guides/sydney-date-nights",
    image: "/images/guides/sydney-date-nights/share.jpg",
    imageAlt: "Sydney Date Nights, Sorted. Eight complete evenings by CELLA.",
  }),
  // Keep the review edition out of search until the product and fulfilment are approved.
  robots: { index: false, follow: false },
}

const sample = "/guides/sydney-date-nights-free-sample.pdf"
const nights = [
  ["01", "Newtown", "The spontaneous one", "ANTE"],
  ["02", "Sydney CBD", "The dressed-up one", "JŌJI"],
  ["03", "Sydney CBD", "The intimate one", "KURO"],
  ["04", "Rose Bay", "The special one", "RIVA"],
  ["05", "Bondi Beach", "The coastal one", "BESA"],
  ["06", "Cronulla", "The music one", "Meadow Music Room"],
  ["07", "Manly", "The easy-going one", "Pocket Pizza"],
  ["08", "Balmain", "The cosy one", "The Dry Dock"],
]
const faqs = [
  ["What will I get?", "A 22-page PDF, a searchable HTML companion and eight complete evening plans. Each plan includes a restaurant, Cella’s dish picks, suggested timing, a spending allowance for two, booking notes and a wet-weather option."],
  ["How do the maps work?", "The guide and companion include clickable Google Maps links to the venues and suggested walking approaches. They open in your browser or map app. Maps and booking pages need an internet connection."],
  ["Can I use it on my phone?", "Yes. Save the PDF to your phone or open the included HTML companion in a browser. The companion filters by area, mood search and planning budget. Downloaded written content works offline; live links need a connection."],
  ["Are meals or bookings included in A$29?", "A$29 is the price of the digital guide. Meals, drinks, reservations, transport and any venue fees are separate. Dinner budgets are planning estimates for two people, not venue quotes or fixed-price packages."],
  ["When were the details checked?", "This first edition was checked on 26 September 2026. Restaurant opinions and photos come from Cella’s earlier visits. Menus, hours, prices and booking conditions can change, so each plan links back to the venue."],
  ["Were any visits collaborations?", "Cella’s RIVA visit was a collaboration, disclosed in the guide. The food picks reflect her published experience; the walks, timings and budgets are planning suggestions."],
]

export default function SydneyDateNights() {
  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <section className={styles.hero} aria-labelledby="guide-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> The Sydney edit · Digital guide</p>
          <h1 id="guide-title">SYDNEY<br />DATE NIGHTS,<br /><span>SORTED.</span></h1>
          <p className={styles.lead}>For when “let’s go for dinner”<br className={styles.desktopBreak} /> needs an actual plan.</p>
          <p className={styles.intro}>Eight evenings built around restaurants I’d send my friends to. What I’d order, where to start and the practical bits that make the night easier.</p>
          <div className={styles.priceRow}><strong>A$29</strong><span>One-off digital purchase<br />First edition · Coming soon</span></div>
          <a href={sample} className={styles.primary} target="_blank" rel="noopener noreferrer">Read the free sample <ArrowUpRight size={18} aria-hidden="true" /></a>
          <p className={styles.heroNote}>22-page PDF + searchable companion<br />No app or subscription required.</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.orbit} aria-hidden="true" />
          <div className={styles.backPage}><Image src="/images/guides/sydney-date-nights/ante-plan.jpg" alt="Preview of the Newtown evening plan, with timing and a budget for two" width={667} height={1000} sizes="(max-width: 700px) 46vw, 290px" /></div>
          <div className={styles.cover}><Image src="/images/guides/sydney-date-nights/cover.jpg" alt="The Sydney Date Nights, Sorted digital guide cover, featuring Cella’s lobster pasta photograph" width={667} height={1000} sizes="(max-width: 700px) 68vw, 390px" priority /></div>
          <div className={styles.visualCaption}><span>GOOD FOOD.<br />A LITTLE TIME TOGETHER.</span><ArrowDown size={25} aria-hidden="true" /></div>
        </div>
      </section>

      <div className={styles.strip}><span>8 complete evenings</span><span>Dish picks from my visits</span><span>Budgets for two</span><span>Tap-to-open map links</span></div>

      <section className={styles.section} aria-labelledby="inside-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>A little less planning</p><h2 id="inside-title">THE EVENING.<br /><span>ALREADY THOUGHT THROUGH.</span></h2></div><p>A good restaurant is a start. This gives you the shape of the night, too.</p></div>
        <div className={styles.features}>
          <article><BookOpen aria-hidden="true" size={27} /><h3>A plan you can use.</h3><p>Suggested stops and timings, what I’d look for on the menu, plus booking notes and a plan for the rain.</p></article>
          <article><MapPin aria-hidden="true" size={27} /><h3>The useful bits, together.</h3><p>Venue links, walking directions and spending estimates for two. Less jumping between saved posts.</p></article>
          <article><Sparkles aria-hidden="true" size={27} /><h3>Pick the mood.</h3><p>Something casual, something coastal or a reason to dress up. Filter the companion and find your night.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.nights}`} aria-labelledby="nights-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>One city. Eight ways to go out.</p><h2 id="nights-title">WHAT KIND<br />OF NIGHT?</h2></div><p>From pasta in Manly to an occasion in Rose Bay. Start with the mood, then make it yours.</p></div>
        <div className={styles.nightGrid}>{nights.map(([number, area, mood, name]) => <article key={number}><span className={styles.number}>{number}</span><div><p>{area}</p><h3>{mood}</h3><span>{name}</span></div></article>)}</div>
      </section>

      <section className={`${styles.section} ${styles.sample}`} aria-labelledby="sample-title">
        <div className={styles.samplePhoto}><Image src="/images/guides/sydney-date-nights/ante.jpg" alt="Katsu and cabbage from Cella’s visit to ANTE in Newtown" fill sizes="(max-width: 700px) 90vw, 45vw" /></div>
        <div className={styles.sampleCopy}><p className={styles.eyebrow}>Try one evening</p><h2 id="sample-title">A LITTLE SAKE.<br />A VERY GOOD START.</h2><p>Open the free sample for the complete Newtown plan: ANTE, the dish picks, a suggested evening and a budget for two.</p><a href={sample} className={styles.primary} target="_blank" rel="noopener noreferrer">Open the four-page sample <ArrowUpRight size={18} aria-hidden="true" /></a><span className={styles.small}>PDF · No email required</span></div>
      </section>

      <section className={`${styles.section} ${styles.creator}`} aria-labelledby="creator-title">
        <Image src="/images/guides/sydney-date-nights/cella.jpg" alt="Marcella enjoying an evening out" width={400} height={500} sizes="(max-width: 700px) 120px, 180px" />
        <div><p className={styles.eyebrow}>From @cella.channel</p><h2 id="creator-title">THE PLACES I’D<br />SEND MY FRIENDS TO.</h2><p>I’m Marcella. This brings my restaurant favourites together with an actual plan for the evening. A few dish picks, a little time to wander and fewer “where should we go?” messages.</p><p className={styles.small}>RIVA visit: collaboration. Disclosed in the guide.</p></div>
      </section>

      <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title"><div><p className={styles.eyebrow}>Before your next night out</p><h2 id="faq-title">A FEW DETAILS.</h2></div><div>{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className={styles.lastCall}><p className={styles.eyebrow}>Sydney Date Nights, Sorted</p><h2>YOUR NEXT<br /><span>“LET’S GO OUT.”</span></h2><p>A$29 · PDF + searchable companion · Coming soon</p><a href={sample} className={styles.primary} target="_blank" rel="noopener noreferrer">Take a look inside <ArrowUpRight size={18} aria-hidden="true" /></a></section>
    </main>
    <Footer />
  </>
}
