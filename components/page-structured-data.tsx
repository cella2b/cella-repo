import { SITE_URL } from "@/lib/seo"

export function StructuredData({ id, value }: { id: string; value: Record<string, unknown> }) {
  // JSON-LD is inert data, deliberately server rendered for crawlers.
  return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />
}

export function BreadcrumbData({ items }: { items: { name: string; path: string }[] }) {
  return <StructuredData id="breadcrumb-data" value={{
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [{ name: "CELLA", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE_URL}${item.path}`,
    })),
  }} />
}

export function ServiceData({ title, description, path }: { title: string; description: string; path: string }) {
  return <><BreadcrumbData items={[{ name: "Services", path: "/services" }, { name: title, path }]} />
    <StructuredData id="service-data" value={{
      "@context": "https://schema.org", "@type": "Service", name: title, description,
      url: `${SITE_URL}${path}`, provider: { "@id": `${SITE_URL}/#cella` },
    }} /></>
}
