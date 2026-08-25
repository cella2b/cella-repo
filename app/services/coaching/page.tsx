import { ServiceDetailPage } from "@/components/service-detail-page"

export default function CoachingPage() {
  return (
    <ServiceDetailPage
      number="03"
      title="Coaching and Mentoring"
      intro="Practical one-to-one guidance for creators and founders building a stronger brand and content business."
      deliverables={[
        {
          title: "Positioning",
          description: "Clarify what you want to be known for and make the way you present yourself match the value of your work.",
        },
        {
          title: "Offers and pricing",
          description: "Shape services that are easier to understand, price with more confidence and handle commercial conversations clearly.",
        },
        {
          title: "Portfolio and pitching",
          description: "Strengthen the work you lead with, how you frame it and the way you approach the clients you want to win.",
        },
        {
          title: "Content systems",
          description: "Build realistic workflows and decision-making habits that make consistent, purposeful content easier to sustain.",
        },
        {
          title: "Focused action plan",
          description: "Leave with clear priorities, practical next steps and a plan built around your actual stage of business.",
        },
      ]}
      approach="Sessions are direct, tailored and grounded in your real situation. This is clear thinking, practical problem solving and specific next steps, not generic motivation."
      audience="New creators who need a strong foundation, experienced creatives who have hit a plateau, and founders who want clearer positioning and commercial confidence."
      cta="Turn uncertainty into a clear next move."
    />
  )
}
