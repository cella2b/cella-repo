import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/seo"
import { StructuredData } from "./page-structured-data"

export function SiteStructuredData() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-AU",
  }

  return <StructuredData id="website-structured-data" value={{
    "@context": "https://schema.org",
    "@graph": [website, {
      "@type": "Organization", "@id": `${SITE_URL}/#cella`, name: SITE_NAME,
      url: SITE_URL, description: SITE_DESCRIPTION, email: "info@heycella.com",
      logo: `${SITE_URL}/apple-icon.png`, founder: { "@id": `${SITE_URL}/#marcella` },
      sameAs: ["https://www.instagram.com/cella.channel/"],
    }, {
      "@type": "Person", "@id": `${SITE_URL}/#marcella`, name: "Marcella Bava",
      jobTitle: "Content creator", url: `${SITE_URL}/#about`,
      homeLocation: { "@type": "Place", name: "Sydney, Australia" },
      sameAs: ["https://www.instagram.com/cella.channel/"],
    }],
  }} />
}
