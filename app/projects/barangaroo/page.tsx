import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = {
  title: "Barangaroo Precinct | CELLA",
  description: "Multiple campaigns showcasing Barangaroo as a destination for different occasions across Sydney's waterfront.",
  alternates: { canonical: "/projects/barangaroo" },
}

export default function BarangarooPage() {
  return (
    <ProjectCaseStudy
      title="Barangaroo Precinct"
      heroImage="/images/projects/barangaroo-house.jpg"
      heroAlt="Barangaroo Precinct"
      activePath="/projects/barangaroo"
      metadata={[
        { label: "Client", value: "Barangaroo Precinct" },
        { label: "Project", value: "Multi-campaign content" },
        { label: "Focus", value: "Sydney waterfront" },
        { label: "Service", value: "Content Creation" },
      ]}
      sections={[
        {
          title: "Overview",
          paragraphs: [
            "Barangaroo represents one of Sydney's most ambitious urban transformations, reclaiming industrial waterfront and turning it into a precinct that combines public parkland, residential towers and world-class dining with harbour access.",
          ],
        },
        {
          title: "The Brief",
          paragraphs: [
            "Document the precinct in a way that showcases the architecture, public spaces and dining experiences while capturing how people actually use and enjoy the space.",
          ],
        },
        {
          title: "The Campaigns",
          features: [
            {
              title: "Golden Hours with Aperol",
              description: "Content capturing the harbour as the precinct shifts from day to evening, positioning Barangaroo for after-work drinks and waterfront dining.",
            },
            {
              title: "Spring in the Streets",
              description: "Live event coverage showcasing public programming, cultural events and community activations across the precinct.",
            },
            {
              title: "Happy Hours",
              description: "A campaign positioning Barangaroo's venue strip as Sydney's answer to Friday drinks, with variety and convenience in one place.",
            },
          ],
        },
        {
          title: "The Approach",
          paragraphs: [
            "Each campaign required a distinct content approach while maintaining consistent positioning of Barangaroo as a premium waterfront destination. Lifestyle content, event documentation and venue features all reinforced the precinct's role in Sydney's social landscape.",
          ],
        },
      ]}
      deliverables={[
        "Golden hour photography and video optimised for Instagram",
        "Live event coverage and recap videos",
        "Venue features and happy hour content",
        "Aerial and waterfront perspectives showing precinct scale",
        "User-generated content strategy and influencer partnerships",
        "Campaign-specific social media assets",
      ]}
      videos={[
        { src: "https://www.instagram.com/reel/DO5dyI0kwqZ/embed/captioned", title: "Barangaroo Golden Hours campaign reel" },
        { src: "https://www.instagram.com/reel/DQobpZvk9nM/embed/captioned", title: "Barangaroo event campaign reel" },
        { src: "https://www.instagram.com/reel/DByWMLgqgCl/embed/captioned", title: "Barangaroo precinct campaign reel" },
      ]}
      impact="Content that established Barangaroo in people's consideration set for different occasions rather than being seen as just another development. Multiple campaigns created sustained visibility and different entry points for office workers, tourists, locals and event-goers."
    />
  )
}
