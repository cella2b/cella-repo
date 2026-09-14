import { createPageMetadata } from "@/lib/seo"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = createPageMetadata({
  title: "Kings Cross Quarter | CELLA",
  description: "A seven-video series for Kings Cross Quarter, exploring the precinct's food, drinks and neighbourhood venues.",
  path: "/projects/kings-cross",
  image: "/images/projects/kings-cross-coca-cola.webp",
  imageAlt: "Kings Cross Quarter",
})

export default function KingsCrossPage() {
  return (
    <ProjectCaseStudy
      title="Kings Cross Quarter"
      heroImage="/images/projects/kings-cross-coca-cola.webp"
      heroAlt="Kings Cross Quarter"
      activePath="/projects/kings-cross"
      metadata={[
        { label: "Client", value: "Kings Cross Quarter" },
        { label: "Project", value: "Seven-video precinct series" },
        { label: "Year", value: "2025" },
        { label: "Service", value: "Brand partnership" },
      ]}
      sections={[
        {
          title: "The Series",
          paragraphs: [
            "A commissioned seven-video series exploring the food, drinks and neighbourhood venues of Kings Cross Quarter. The work followed different streets and occasions, from brunch on Roslyn Street to evenings on Kellett Street and Llankelly Place.",
            "Filming, voiceover and editing brought a personal perspective to each visit. Content and captions were developed with the precinct team, with seven videos delivered across the series in 2025.",
          ],
        },
      ]}
      deliverables={[
        "Seven short-form videos delivered for the precinct series",
        "On-location food, drinks and venue filming",
        "Voiceover, editing and captions",
        "Creator posting coordinated with @kingscrossquarter",
      ]}
    />
  )
}
