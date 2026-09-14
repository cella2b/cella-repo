import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { CoverVideo } from "@/components/cover-video"
import { EnquiryForm } from "@/components/enquiry-form"
import { FeaturedWork, MoreWork, CampaignResults } from "@/components/featured-work"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "CELLA | Sydney Content Creator & Brand Partnerships",
  description: "Food, travel and experiences, brought to life by Marcella. Sydney content creation and brand partnerships for hospitality, travel and lifestyle businesses.",
  path: "/",
})

const brands = [
  { src: "/images/brands/merivale-logo.png", alt: "Merivale" },
  { src: "/images/brands/kitchenaid-logo.png", alt: "KitchenAid" },
  { src: "/images/brands/mirvac-logo.svg", alt: "Mirvac" },
  { src: "/images/brands/google-logo.webp", alt: "Google" },
  { src: "/images/brands/nsw-placemaking-logo.png", alt: "Placemaking NSW" },
  { src: "/images/brands/ninja-logo.png", alt: "Ninja" },
]

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="cella-home">
        <section className="cella-cover-hero" aria-labelledby="hero-heading">
          <CoverVideo />
          <div className="cella-cover-shade" />
          <div className="cella-cover-copy">
            <p className="cella-eyebrow">Sydney creator. Food, travel & experiences.</p>
            <h1 id="hero-heading">GOOD PLACES.<br />GREAT STORIES.</h1>
            <p>Real experiences. Thoughtful storytelling.<br />Content made for the way people discover.</p>
            <div className="cella-actions">
              <Link href="#contact" className="cella-button">Let’s work together <ArrowUpRight size={19} /></Link>
              <Link href="#work" className="cella-text-link">Explore the work <ArrowDown size={17} /></Link>
            </div>
          </div>
          <div className="cella-cover-location">CELLA / MARCELLA BAVA <span>BASED IN SYDNEY · CREATING NEAR & FAR</span></div>
        </section>

        <section className="cella-brand-strip" aria-label="Selected brands CELLA has worked with">
          <p className="cella-eyebrow">Selected collaborations</p>
          <div>{brands.map(brand => <Image key={brand.alt} src={brand.src} alt={brand.alt} width={150} height={52} sizes="(max-width: 600px) 25vw, 150px" className="cella-brand-logo" />)}</div>
        </section>

        <section id="work" className="cella-section" aria-labelledby="work-heading">
          <div className="cella-section-heading"><div><p className="cella-eyebrow">A few stories I’ve helped tell</p><h2 id="work-heading">SELECTED WORK<span className="cella-accent">.</span></h2></div><Link href="/portfolio" className="cella-text-link">View the portfolio <ArrowUpRight size={18} /></Link></div>
          <FeaturedWork />
          <MoreWork />
        </section>

        <CampaignResults />

        <section id="services" className="cella-section cella-services" aria-labelledby="services-heading">
          <div className="cella-section-heading"><div><p className="cella-eyebrow">Made for your business</p><h2 id="services-heading">YOUR STORY.<br />LET’S SHARE IT.</h2></div><p className="cella-section-description">Content created around your business, your audience and the experience you want to share.</p></div>
          <div className="cella-service-list">
            <Link href="/services/content-creation" className="cella-service"><span>01</span><div><h3>Content creation</h3><p>Videos and photos for your business to share on its own channels. Thoughtfully created, ready to post.</p></div><ArrowUpRight aria-hidden="true" /></Link>
            <Link href="#contact" className="cella-service"><span>02</span><div><h3>Brand partnerships</h3><p>Bring your business to the @cella.channel community through food, travel and experience-led storytelling.</p></div><ArrowUpRight aria-hidden="true" /></Link>
            <Link href="/services/social-strategy" className="cella-service"><span>03</span><div><h3>Social strategy & management</h3><p>A considered approach to your content and a consistent presence for your business.</p></div><ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <Link href="/services" className="cella-text-link cella-services-link">Explore all services <ArrowUpRight size={18} /></Link>
        </section>

        <section id="about" className="cella-section cella-about" aria-labelledby="about-heading">
          <div><p className="cella-eyebrow">The person behind the lens</p><h2 id="about-heading">HEY, I’M<br /><span className="cella-accent">MARCELLA.</span></h2></div>
          <div><p className="cella-about-lead">A Sydney creator with a curiosity for good food, memorable stays and places worth discovering.</p><p>I’m the person behind @cella.channel. I work with businesses to turn real experiences into considered, engaging social content — from a neighbourhood restaurant to an international travel experience.</p><p>Every business has its own story. I take the time to understand yours, then tailor the content to the people you want to reach.</p><a href="https://www.instagram.com/cella.channel/" target="_blank" rel="noopener noreferrer" className="cella-text-link">Meet me on Instagram <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="cella-section cella-testimonials" aria-labelledby="testimonials-heading">
          <p className="cella-eyebrow" id="testimonials-heading">Words from the people behind the brands</p>
          <div className="cella-quote-grid">
            <figure><blockquote>“Really enjoyed working with you… Videos are my favourite so far. Super authentic and warm.”</blockquote><figcaption>Justin <span>Kings Cross</span></figcaption></figure>
            <figure><blockquote>“Thank you again for the amazing content… it was fantastic!”</blockquote><figcaption>Vanessa <span>City of Parramatta</span></figcaption></figure>
          </div>
        </section>

        <section id="contact" className="cella-section cella-landing-contact" aria-labelledby="contact-heading">
          <div><p className="cella-eyebrow">Let’s work together</p><h2 id="contact-heading">HAVE SOMETHING<br />WORTH SHARING?</h2><p className="cella-section-description">Tell me about your business, your goals and what you have in mind. Let’s make content that feels like you.</p><a href="mailto:info@heycella.com" className="cella-text-link">info@heycella.com <ArrowUpRight size={18} /></a></div>
          <EnquiryForm />
        </section>

      </main>
      <Footer />
    </>
  )
}
