import { createPageMetadata } from "@/lib/seo"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = createPageMetadata({
  title: "Japan Travel Storytelling | CELLA",
  description: "CELLA's approach to Japan travel, hotel and experience storytelling for visitors and hospitality businesses.",
  path: "/projects/prince-shiomi",
  image: "/images/projects/travel-media-kit.png",
  imageAlt: "Travel portfolio from the CELLA media kit",
})

export default function PrinceShiomiPage() {
  return (
    <ProjectCaseStudy
      title="Japan Travel Storytelling"
      heroImage="/images/projects/travel-media-kit.png"
      heroAlt="Travel portfolio from the CELLA media kit"
      activePath="/projects/prince-shiomi"
      metadata={[
        { label: "Portfolio", value: "Travel & experiences" },
        { label: "Focus", value: "Japan" },
        { label: "Format", value: "Travel storytelling" },
        { label: "Enquiries", value: "Hotels & destinations" },
      ]}
      sections={[
        {
          title: "A Traveller's Perspective",
          paragraphs: [
            "My travel content looks at places through the details that shape a visit: where to stay, what to eat and how a place feels. Japan is part of that wider food, travel and experience portfolio.",
          ],
        },
        {
          title: "For Hotels & Destinations",
          paragraphs: [
            "For a hotel or destination story, I start with the experience you want to share and the people you want to reach. We can discuss content for your own channels, or a creator partnership shared with my audience.",
          ],
        },
      ]}
      deliverables={[]}
    />
  )
}
