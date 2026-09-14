import { createPageMetadata } from "@/lib/seo"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = createPageMetadata({
  title: "Pure Milford & South Island Travel | CELLA",
  description: "A hosted Pure Milford travel partnership and independent TranzAlpine travel storytelling from New Zealand's South Island.",
  path: "/projects/milford-sound",
  image: "/images/projects/milford-sound.jpg",
  imageAlt: "Milford Sound, New Zealand",
})

export default function MilfordSoundPage() {
  return (
    <ProjectCaseStudy
      title="Pure Milford & South Island Travel"
      heroImage="/images/projects/milford-sound.jpg"
      heroAlt="Milford Sound, New Zealand"
      activePath="/projects/milford-sound"
      metadata={[
        { label: "Partner", value: "Pure Milford" },
        { label: "Format", value: "Hosted travel partnership" },
        { label: "Location", value: "New Zealand" },
        { label: "Year", value: "2024" },
      ]}
      sections={[
        {
          title: "Pure Milford",
          paragraphs: [
            "A hosted partnership following Pure Milford's coach and cruise journey, from the road through Fiordland to the scenery and wildlife of Milford Sound. I captured the experience from a traveller's perspective and delivered the video to the operator in June 2024.",
          ],
        },
        {
          title: "The Travel Story",
          paragraphs: [
            "The story follows the experience of the journey as well as the destination: travelling from Queenstown, the changing landscape and time on the water. The operator's response to the delivered footage specifically highlighted the wildlife captured along the way.",
          ],
        },
        {
          title: "Independent TranzAlpine Story",
          paragraphs: [
            "The TranzAlpine Reel is an independent travel story from the same South Island trip. It sits alongside the Pure Milford partnership as a separate example of my personal travel content.",
          ],
        },
      ]}
      deliverables={[
        "On-location footage from the Pure Milford journey",
        "A travel video delivered to Pure Milford",
        "Published travel storytelling on Instagram",
      ]}
      videos={[
        { src: "https://www.instagram.com/reel/C_FfYv1qBgr/embed/captioned", title: "Pure Milford hosted travel partnership" },
        { src: "https://www.instagram.com/reel/C9qQOO8K51S/embed/captioned", title: "Independent TranzAlpine travel story" },
      ]}
    />
  )
}
