import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { CoverVideo } from "@/components/cover-video"
import { FlowWork } from "@/components/flow-work"
import { ScrollChoreography } from "@/components/scroll-choreography"
import { StrategySketch } from "@/components/strategy-sketch"
import { ShopFeature } from "@/components/shop-feature"
import { services } from "@/lib/services"
import { createPageMetadata } from "@/lib/seo"
export const metadata = createPageMetadata({ title: "CELLA | Content Creation & Strategy, Sydney", description: "Content with personality. Strategy with purpose. Marcella creates video, photography and social strategy for hospitality, travel and lifestyle brands in Sydney and beyond.", path: "/" })
const brands = [["merivale-logo.png", "Merivale"], ["kitchenaid-logo.png", "KitchenAid"], ["mirvac-logo.svg", "Mirvac"], ["google-logo.webp", "Google"], ["nsw-placemaking-logo.png", "Placemaking NSW"], ["ninja-logo.png", "Ninja"]]
export default function Home() {
return <><SiteHeader cinematic /><main id="main-content" tabIndex={-1} className="cella-home cella-fluid"><ScrollChoreography />
<section className="cella-cover-hero" aria-labelledby="hero-heading"><CoverVideo /><div className="cella-cover-shade" /><div className="cella-cover-copy"><p className="cella-eyebrow">Sydney & beyond</p><h1 id="hero-heading">Content with feeling.<br /><em>Strategy with intention.</em></h1></div><a href="#work" className="film-scroll">Scroll to discover <ArrowDown size={16} /></a><div className="film-signature" aria-hidden="true">cella.</div></section>
<section className="cella-section editorial-intro"><p className="cella-eyebrow">A feeling, made into a story.</p><div><h2>Content with personality.<br /><em>Strategy with purpose.</em></h2><p>I’m Marcella. I help hospitality, travel and lifestyle brands show people what makes them special — through thoughtful content and a clear direction for social.</p></div></section>
<section className="cella-brand-strip" aria-label="Selected brands CELLA has worked with"><p className="cella-eyebrow">A few familiar names</p><div>{brands.map(([file,name]) => <Image key={name} src={`/images/brands/${file}`} alt={name} width={150} height={52} sizes="(max-width: 600px) 25vw, 150px" className="cella-brand-logo" />)}</div></section>
<section id="work" className="cella-section"><div className="cella-section-heading"><div><p className="cella-eyebrow">Selected work · Open a story</p><h2>The story.<br /><em>And the thinking.</em></h2></div><Link href="/portfolio" className="cella-text-link">All work <ArrowUpRight size={17} /></Link></div><FlowWork /></section>
<section id="services" className="cella-section cella-services craft-services"><div className="cella-section-heading"><div><p className="cella-eyebrow">A little strategy, in practice</p><h2>Good content starts<br /><em>with a good question.</em></h2></div><p className="cella-section-description">The goal shapes the story. Try it below: one restaurant, three ways to make someone care.</p></div><StrategySketch /><div className="craft-service-links">{services.map(service => <Link key={service.href} href={service.href}><div><span className="cella-eyebrow">{service.number} · Work with me</span><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight size={25} aria-hidden="true" /></Link>)}</div></section>
<section id="about" className="cella-section editorial-about"><div className="editorial-portrait"><Image src="/images/editorial/marcella-dining.jpg" alt="Marcella enjoying an evening out" fill sizes="(max-width: 750px) 90vw, 45vw" /><span>A table, a story, a reason to stay.</span></div><div><p className="cella-eyebrow">The person behind the lens</p><h2>Hey, I’m<br /><em>Marcella.</em></h2><p>A Sydney creator with a curiosity for good food, memorable stays and places worth discovering.</p><p>I’m the person behind @cella.channel. I turn real experiences into stories that give people a reason to care — and brands a way to connect.</p><Link href="/about" className="cella-text-link">A little more about me <ArrowUpRight size={17} /></Link></div></section>
<ShopFeature />
<section className="cella-section editorial-quote"><p className="cella-eyebrow">A word from the other side of the brief</p><figure><blockquote>“Really enjoyed working with you… Videos are my favourite so far. Super authentic and warm.”</blockquote><figcaption>Justin · Kings Cross</figcaption></figure></section>
<section id="contact" className="cella-section editorial-cta"><p className="cella-eyebrow">Something in mind?</p><h2>Let’s make something<br /><em>worth sharing.</em></h2><Link href="/contact" className="cella-button">Tell me about it <ArrowUpRight size={18} /></Link></section>
</main><Footer /></>
}
