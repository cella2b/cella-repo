import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = {
  title: "DoorDash x OpenTable | CELLA",
  description: "Content positioning DoorDash as the place to book dine-in experiences, not just delivery.",
  alternates: { canonical: "/projects/doordash-opentable" },
}

export default function DoorDashOpenTablePage() {
  return (
    <ProjectCaseStudy
      title="DoorDash x OpenTable"
      heroImage="/images/projects/doordash-delivery.avif"
      heroAlt="DoorDash x OpenTable"
      activePath="/projects/doordash-opentable"
      metadata={[
        { label: "Client", value: "DoorDash x OpenTable" },
        { label: "Project", value: "Epicurean dining" },
        { label: "Focus", value: "App bookings" },
        { label: "Service", value: "Content Creation" },
      ]}
      sections={[
        {
          title: "The Project",
          paragraphs: [
            "DoorDash's integration with OpenTable changed how people book premium dining experiences. This project used Epicurean restaurant to demonstrate how the booking process works and why it matters for diners and restaurants.",
          ],
        },
        {
          title: "The Brief",
          paragraphs: [
            "Change the perception of DoorDash from a delivery app to a broader dining platform. The content needed to show that booking a table could feel just as convenient as ordering delivery.",
          ],
        },
        {
          title: "The Approach",
          paragraphs: [
            "Document the complete experience from discovery to dining, including browsing restaurants, booking a table, arriving at the venue and the meal itself.",
            "The work featured premium dining experiences not typically associated with DoorDash, expanding the brand's relevance while retaining the ease and convenience people already understood.",
          ],
        },
      ]}
      deliverables={[
        "App interface demonstrations showing the booking flow",
        "Restaurant experience content with a premium feel",
        "Comparison content showing booking convenience",
        "Influencer partnerships demonstrating real usage",
        "Before-and-after restaurant discovery scenarios",
        "Social assets optimised for discovery and planning",
      ]}
      impact="The content expanded DoorDash's positioning beyond delivery without losing the familiarity of the existing brand. It showed the app as relevant for date nights, celebrations and occasions when convenience still matters."
    />
  )
}
