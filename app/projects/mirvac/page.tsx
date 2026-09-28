import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { SocialPost } from "@/components/social-post"
import { createPageMetadata } from "@/lib/seo"
import { BreadcrumbData } from "@/components/page-structured-data"

export const metadata = createPageMetadata({ title: "Mirvac Content Programme | CELLA", description: "A six-video creator programme for Mirvac’s Birkenhead Point and Rhodes Waterside, developed across March to June 2024.", path: "/projects/mirvac" })

export default function MirvacProject() {
  return <><SiteHeader/><main id="main-content" className="cella-home editorial-page" tabIndex={-1}><BreadcrumbData items={[{name:"Work",path:"/portfolio"},{name:"Mirvac",path:"/projects/mirvac"}]}/>
    <section className="cella-section mirvac-story"><p className="cella-eyebrow">Mirvac · Birkenhead Point & Rhodes Waterside · 2024</p><h1>Familiar voice.<br/><em>Fresh stories.</em></h1><p className="brand-case-intro">A six-video programme across two retail destinations. New briefs, new discoveries and a personal perspective that connected the work over several months.</p><Image src="/images/brands/mirvac-logo.svg" alt="Mirvac" width={150} height={52}/>
    <dl className="brand-case-facts"><div><dt>The programme</dt><dd>6 videos</dd></div><div><dt>The destinations</dt><dd>2 centres</dd></div><div><dt>The period</dt><dd>March–June 2024</dd></div></dl>
    <div className="brand-case-notes"><section><h2>The brief</h2><p>Create a series of food and lifestyle stories for Birkenhead Point and Rhodes Waterside, working with each centre’s marketing team on briefs across the programme.</p></section><section><h2>The personal part</h2><p>Bring the destinations into the stories shared through @cella.channel. Explore the retailers and food through a visitor’s eyes, choosing the details that feel useful and interesting to the audience.</p></section><section><h2>The process</h2><p>Coordinate visits with the centre teams, create the content, develop edits through feedback and publish the agreed stories. Post insights were also shared with Mirvac for its campaign reporting.</p></section><section><h2>A story that continues</h2><p>The programme moved through different retailers and experiences across several months. The work kept a recognisable creator voice while giving each visit its own subject and reason to watch.</p></section></div>
    <h2>Watch the work.</h2><div className="mirvac-native-film"><video controls playsInline preload="none" poster="/images/projects/mirvac-shed.jpg" aria-label="The Shed at Birkenhead Point, created for Mirvac"><source src="/video/mirvac-shed.mp4" type="video/mp4" /></video><p>The Shed, Birkenhead Point. An approved film from the programme, with on-screen captions.</p></div><p className="brand-case-intro">Three published posts from the programme.</p><div className="brand-case-posts">{["C7lieSwvMGA","C807XIiPCBt","C49ytZoPvBX"].map((post,index)=><SocialPost key={post} src={`https://www.instagram.com/p/${post}/embed/`} title={`Mirvac content programme · story ${index+1}`}/>)}</div>
    <Link className="cella-button" href="/contact?service=Content%20Creation">Let’s build your next chapter ↗</Link></section>
  </main><Footer/></>
}
