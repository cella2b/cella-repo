import { createPageMetadata } from "@/lib/seo"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = createPageMetadata({
  title: "Barangaroo Precinct | CELLA",
  description: "Barangaroo food and event stories, including Spring in the Streets for Placemaking NSW and Golden Hours with Aperol.",
  path: "/projects/barangaroo",
  image: "/images/projects/barangaroo-house.jpg",
  imageAlt: "Barangaroo Precinct",
})

export default function BarangarooPage() {
  return (
    <ProjectCaseStudy
      title="Barangaroo Precinct"
      heroImage="/images/projects/barangaroo-house.jpg"
      heroAlt="Barangaroo Precinct"
      activePath="/projects/barangaroo"
      metadata={[
        { label: "Destination", value: "Barangaroo" },
        { label: "Project", value: "Food & event stories" },
        { label: "Focus", value: "Sydney waterfront" },
        { label: "Service", value: "Brand partnerships" },
      ]}
      sections={[
        {
          title: "Overview",
          paragraphs: [
            "Food, live music and a reason to step outside. My Barangaroo work explores the waterfront through dining, events and the experiences people can make part of their day.",
          ],
        },
        {
          title: "Spring in the Streets",
          paragraphs: [
            "Created for Placemaking NSW through Keep Left, this September 2025 campaign brought Spring in the Streets to Instagram, TikTok and Stories. I captured the event, food offerings, live music and street activities, then developed the content through client review before posting.",
            "The final video was also supplied for the client's own advertising use. The published work below shows the campaign as it appeared on Instagram.",
          ],
        },
        {
          title: "More from the Precinct",
          features: [
            {
              title: "Golden Hours with Aperol",
              description: "A separate published story featuring Golden Hours with Aperol in Barangaroo. Watch the original Reel alongside the Spring in the Streets campaign below.",
            },
          ],
        },
      ]}
      deliverables={[
        "Spring in the Streets Instagram and TikTok video",
        "Supporting Instagram Stories",
        "On-location event and food capture",
        "Final campaign video supplied for client advertising use",
      ]}
      videos={[
        { src: "https://www.instagram.com/reel/DO5dyI0kwqZ/embed/captioned", title: "Barangaroo Spring in the Streets campaign" },
        { src: "https://www.instagram.com/reel/DQobpZvk9nM/embed/captioned", title: "Barangaroo Golden Hours with Aperol" },
        { src: "https://www.instagram.com/reel/DByWMLgqgCl/embed/captioned", title: "More Barangaroo food and precinct content" },
      ]}
    />
  )
}
