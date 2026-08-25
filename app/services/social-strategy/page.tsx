import { ServiceDetailPage } from "@/components/service-detail-page"

export default function SocialStrategyPage() {
  return (
    <ServiceDetailPage
      number="02"
      title="Social Strategy"
      intro="A clear social direction for brands that want to be recognised, remembered and chosen."
      deliverables={[
        {
          title: "Brand positioning",
          description: "A sharper definition of what you stand for, how you should be perceived and where you can be meaningfully different.",
        },
        {
          title: "Audience clarity",
          description: "A grounded view of who you need to reach, what matters to them and what should earn their attention.",
        },
        {
          title: "Platform priorities",
          description: "A focused channel plan based on where your audience is and what each platform should achieve for the brand.",
        },
        {
          title: "Content direction",
          description: "Clear pillars, formats, themes and creative guardrails that make day-to-day decisions easier and more consistent.",
        },
        {
          title: "Actionable roadmap",
          description: "A practical plan for campaigns, publishing and measurement, ordered by what will make the biggest difference first.",
        },
      ]}
      approach="The goal is not simply to post more. It is to create a clearer perception of the brand, then turn that positioning into repeatable content decisions."
      audience="Brands that are active online but not being remembered, or businesses that need a stronger identity before investing in more content."
      cta="Build a social presence with direction."
    />
  )
}
