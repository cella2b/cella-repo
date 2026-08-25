import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = {
  title: "TranzAlpine and Pure Milford | CELLA",
  description: "Documenting the Pure Milford tour and TranzAlpine train experience with KiwiRail.",
  alternates: { canonical: "/projects/milford-sound" },
}

export default function MilfordSoundPage() {
  return (
    <ProjectCaseStudy
      title="TranzAlpine and Pure Milford"
      heroImage="/images/projects/milford-sound.jpg"
      heroAlt="TranzAlpine and Pure Milford"
      activePath="/projects/milford-sound"
      metadata={[
        { label: "Client", value: "Pure Milford + KiwiRail" },
        { label: "Project", value: "South Island journeys" },
        { label: "Focus", value: "Travel content" },
        { label: "Service", value: "Content Creation" },
      ]}
      sections={[
        {
          title: "The Project",
          paragraphs: [
            "Content documenting the Pure Milford tour and TranzAlpine train journey with KiwiRail, showcasing the ways to explore New Zealand's South Island and the landscapes that make these journeys unforgettable.",
          ],
        },
        {
          title: "The Brief",
          paragraphs: [
            "Create New Zealand tourism content that goes beyond destination photography to show the experience of getting there and touring the region. Position the journey and destination as equally essential parts of the trip.",
          ],
        },
        {
          title: "The Approach",
          features: [
            {
              title: "Pure Milford Tour",
              description: "Document the full experience, from Fiordland and the boat cruise to wildlife, waterfalls and the scale of the landscape.",
            },
            {
              title: "TranzAlpine Train",
              description: "Capture the changing landscapes from Canterbury Plains through Arthur's Pass and position rail travel as an experience in itself.",
            },
          ],
        },
        {
          title: "The Challenge",
          paragraphs: [
            "Landscapes of this scale require depth, movement and atmosphere. The video sequences were designed to make viewers feel present, from waterfalls cascading to the train winding through mountain passes and light shifting across the fjord.",
          ],
        },
      ]}
      deliverables={[
        "Landscape photography capturing scale and drama",
        "Video showing movement through changing environments",
        "Tour documentation from the passenger perspective",
        "Seasonal content showing different conditions",
        "Wildlife and natural feature highlights",
        "Journey narratives for social storytelling",
        "Practical travel content covering logistics and planning",
      ]}
      videos={[
        { src: "https://www.instagram.com/reel/C_FfYv1qBgr/embed/captioned", title: "Pure Milford travel campaign reel" },
        { src: "https://www.instagram.com/reel/C9qQOO8K51S/embed/captioned", title: "TranzAlpine travel campaign reel" },
      ]}
      impact="The content positioned both experiences as memorable journeys rather than boxes to tick. It showed why the route matters as much as the destination and why these landscapes remain central to a South Island trip."
    />
  )
}
