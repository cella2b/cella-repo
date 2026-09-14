import { createPageMetadata } from "@/lib/seo"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = createPageMetadata({
  title: "DoorDash Reservations | CELLA",
  description: "A DoorDash Reservations creator partnership following the in-app booking experience and dining at Epicurean.",
  path: "/projects/doordash-opentable",
  image: "/images/projects/doordash-delivery.avif",
  imageAlt: "DoorDash",
})

export default function DoorDashOpenTablePage() {
  return (
    <ProjectCaseStudy
      title="DoorDash Reservations"
      heroImage="/images/projects/doordash-delivery.avif"
      heroAlt="DoorDash"
      activePath="/projects/doordash-opentable"
      metadata={[
        { label: "Brand", value: "DoorDash" },
        { label: "Project", value: "Epicurean dining" },
        { label: "Format", value: "Contra creator partnership" },
        { label: "Year", value: "2025" },
      ]}
      sections={[
        {
          title: "The Project",
          paragraphs: [
            "A creator partnership for DoorDash's restaurant reservations campaign, combining a demonstration of booking in the app with a dining visit to Epicurean. The collaboration covered an Instagram Reel, TikTok video and three Instagram Story frames.",
          ],
        },
        {
          title: "The Story",
          paragraphs: [
            "The agreed brief included showing the in-app booking process alongside the restaurant experience. Content was reviewed and approved before creator posting with @doordash_aus.",
          ],
        },
      ]}
      deliverables={[
        "One Instagram Reel",
        "One TikTok video",
        "Three Instagram Story frames",
        "In-app reservation demonstration and Epicurean dining footage",
      ]}
    />
  )
}
