import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ShopFeature } from "@/components/shop-feature"
import { createPageMetadata } from "@/lib/seo"
export const metadata = {...createPageMetadata({title:"The Cella Shop | Guides & Good Plans",description:"Thoughtful guides for your next good plan. Explore Sydney Date Nights, Sorted — eight evenings curated by Marcella.",path:"/shop"}),robots:{index:false,follow:false}}
export default function Shop(){return <><SiteHeader /><main id="main-content" tabIndex={-1} className="cella-home editorial-page"><section className="cella-section editorial-shop-intro"><p className="cella-eyebrow">The Cella shop</p><h1>Good finds.<br /><em>Ready-made plans.</em></h1><p>A little less searching. A little more getting out there.</p></section><ShopFeature /></main><Footer /></>}
