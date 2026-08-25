import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = {
  title: "Kings Cross Quarter | CELLA",
  description: "A 7-part series spotlighting the streets, venues and hidden finds that make Kings Cross worth discovering.",
  alternates: { canonical: "/projects/kings-cross" },
}

export default function KingsCrossPage() {
  return (
    <ProjectCaseStudy
      title="Kings Cross Quarter"
      heroImage="/images/projects/kings-cross-coca-cola.webp"
      heroAlt="Kings Cross Quarter"
      activePath="/projects/kings-cross"
      metadata={[
        { label: "Client", value: "Kings Cross Precinct" },
        { label: "Project", value: "Light Up the Cross" },
        { label: "Year", value: "2025" },
        { label: "Service", value: "Content Creation" },
      ]}
      sections={[
        {
          title: "The Brief",
          paragraphs: [
            "Create a 7-part content series called Light Up the Cross that repositions Kings Cross as a destination beyond nightlife. Showcase the neighbourhood's food scene, creative spaces, street culture and venues worth discovering. Each piece needed to feel distinct while contributing to an overall narrative about the area's diversity and energy.",
          ],
        },
      ]}
      deliverables={[
        "7 distinct video pieces optimised for social media",
        "Location photography highlighting key venues",
        "Street photography capturing neighbourhood character",
        "Social cutdowns for Instagram, TikTok and Facebook",
        "Behind-the-scenes content from production",
        "Sustained engagement strategy across 7 weeks",
      ]}
    />
  )
}
