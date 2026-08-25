import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = {
  title: "Prince Shiomi Hotel | CELLA",
  description: "Showcasing a 5-star Tokyo property just outside the city centre for couples and families.",
  alternates: { canonical: "/projects/prince-shiomi" },
}

export default function PrinceShiomiPage() {
  return (
    <ProjectCaseStudy
      title="Prince Shiomi Hotel"
      heroImage="/luxury-japanese-hotel-traditional-architecture-zen.jpg"
      heroAlt="Prince Shiomi Hotel"
      activePath="/projects/prince-shiomi"
      metadata={[
        { label: "Client", value: "Prince Shiomi" },
        { label: "Project", value: "Hotel storytelling" },
        { label: "Focus", value: "Tokyo travel" },
        { label: "Service", value: "Content Creation" },
      ]}
      sections={[
        {
          title: "The Project",
          paragraphs: [
            "Visual content showcasing Prince Shiomi as a 5-star destination outside central Tokyo, positioned for couples and families seeking larger rooms, premium facilities and an authentic experience away from the typical tourist centres.",
          ],
        },
        {
          title: "The Brief",
          paragraphs: [
            "Appeal to international travellers looking for luxury and space without sacrificing access to Tokyo. Position the property as a destination worth choosing deliberately, not simply an alternative to the city centre.",
          ],
        },
        {
          title: "The Approach",
          paragraphs: [
            "Photography and video emphasised room sizes, premium facilities, access to Tokyo and experiences that feel distinctly Japanese.",
            "The content balanced luxury with authentic cultural details, presenting space and comfort with the visual sophistication expected from Japanese hospitality.",
          ],
        },
        {
          title: "Target Audience",
          paragraphs: [
            "Couples seeking romantic experiences, families needing space and facilities, travellers wanting authentic Japanese hospitality without sacrificing luxury, and visitors who prefer to stay outside the tourist rush while remaining connected.",
          ],
        },
      ]}
      deliverables={[
        "Property photography covering rooms, facilities and public spaces",
        "Experiential content for family and couple stays",
        "Neighbourhood context showing location advantages",
        "Seasonal content and local area highlights",
        "Comparison positioning against central Tokyo properties",
        "Virtual tour content for international audiences",
      ]}
      impact="A visual narrative that positioned Prince Shiomi as a deliberate choice, not a compromise. The work presented the property's space, facilities, location and authenticity around the needs of couples and families."
    />
  )
}
