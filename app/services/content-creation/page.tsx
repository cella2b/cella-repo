import { ServiceDetailPage } from "@/components/service-detail-page"

export default function ContentCreationPage() {
  return (
    <ServiceDetailPage
      number="01"
      title="Content Creation"
      intro="Content built to earn attention, tell a clear story and make your brand worth remembering."
      deliverables={[
        {
          title: "Social-first video",
          description: "Short-form video shaped for the platform, the audience and the moment, from concept through to final edit.",
        },
        {
          title: "Brand storytelling",
          description: "Narrative-led content that shows what makes your place, product or experience meaningfully different.",
        },
        {
          title: "Photography",
          description: "A cohesive visual library for campaigns, websites and social channels, created with real-world use in mind.",
        },
        {
          title: "Campaign content",
          description: "A connected series of assets designed around one clear idea, rather than a collection of disconnected posts.",
        },
        {
          title: "Content planning",
          description: "Hooks, formats and distribution are considered before the shoot so every asset has a clear job to do.",
        },
      ]}
      approach="Every project starts with your positioning, audience and desired outcome. From there, the creative is shaped to feel native to the platform and unmistakably yours."
      audience="Hospitality, travel, lifestyle, experience and product brands that need stronger creative, a clearer story or a content library that works harder."
      cta="Let’s create something people remember."
    />
  )
}
