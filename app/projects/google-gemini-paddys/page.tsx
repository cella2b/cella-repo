import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = {
  title: "Google Gemini x Paddy's Markets | CELLA",
  description: "Exploring Paddy's Markets through local produce, vendors and culture using Google Gemini AI.",
  alternates: { canonical: "/projects/google-gemini-paddys" },
}

export default function GoogleGeminiPaddysPage() {
  return (
    <ProjectCaseStudy
      title="Google Gemini x Paddy's Markets"
      heroImage="/images/projects/paddys-markets.jpg"
      heroAlt="Google Gemini x Paddy's Markets"
      activePath="/projects/google-gemini-paddys"
      metadata={[
        { label: "Client", value: "Google Gemini" },
        { label: "Project", value: "Paddy's Markets" },
        { label: "Focus", value: "Product education" },
        { label: "Service", value: "Content Creation" },
      ]}
      sections={[
        {
          title: "The Project",
          paragraphs: [
            "A campaign exploring Paddy's Markets through Google's Gemini AI, showing how technology can help people understand unfamiliar produce, learn about vendors and discover how to use what they are buying.",
          ],
        },
        {
          title: "The Brief",
          paragraphs: [
            "Demonstrate Gemini's practical value in a real-world setting while celebrating the cultural diversity and local produce that makes Paddy's Markets iconic. The technology needed to enhance the experience, not overshadow it.",
          ],
        },
        {
          title: "The Approach",
          paragraphs: [
            "Document authentic market experiences, including unfamiliar produce, vendor stories and Gemini providing context that bridges knowledge gaps. The focus was on showing it as a useful tool rather than a gimmick.",
            "From identifying exotic fruit to translating signs and suggesting recipes, the content showed practical applications people could actually use while shopping.",
          ],
        },
      ]}
      deliverables={[
        "Video content showing Gemini in real market scenarios",
        "Vendor profiles and produce features",
        "Comparisons of market experiences with and without assistance",
        "Tutorial-style content for using Gemini while shopping",
        "Social-first content optimised for discovery and engagement",
      ]}
      videos={[
        { src: "https://www.instagram.com/reel/DMIJ1koT_Ac/embed/captioned", title: "Google Gemini at Paddy's Markets campaign reel" },
      ]}
      impact="The content made Gemini feel accessible and useful rather than complicated or intrusive. It positioned the product as something that enhances human experiences and cultural exploration while making Paddy's Markets more approachable."
    />
  )
}
