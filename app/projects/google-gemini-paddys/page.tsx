import { createPageMetadata } from "@/lib/seo"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = createPageMetadata({
  title: "Google x Paddy's Markets Flemington | CELLA",
  description: "Creator event coverage at Paddy's Markets Flemington, exploring Google Lens, Gemini and fresh produce.",
  path: "/projects/google-gemini-paddys",
  image: "/images/projects/paddys-markets.jpg",
  imageAlt: "Paddy's Markets, Sydney",
})

export default function GoogleGeminiPaddysPage() {
  return (
    <ProjectCaseStudy
      title="Google x Paddy's Markets"
      heroImage="/images/projects/paddys-markets.jpg"
      heroAlt="Paddy's Markets, Sydney"
      activePath="/projects/google-gemini-paddys"
      metadata={[
        { label: "Format", value: "Gifted creator event" },
        { label: "Location", value: "Flemington, Sydney" },
        { label: "Year", value: "2025" },
        { label: "Focus", value: "Food & product discovery" },
      ]}
      sections={[
        {
          title: "The Experience",
          paragraphs: [
            "A morning at Paddy's Markets Flemington with Google Australia, exploring how Google Lens and Gemini can help with finding ingredients and getting ideas for what to cook. I joined the invited creator event and shared the experience through my own food-focused perspective.",
          ],
        },
        {
          title: "The Story",
          paragraphs: [
            "The market provided a practical setting for product discovery: fresh produce, shopping and cooking inspiration. The published Reel brings those elements together in a familiar everyday setting.",
          ],
        },
      ]}
      deliverables={[
        "On-location creator event coverage",
        "A published Instagram Reel connecting food and product discovery",
      ]}
      videos={[
        { src: "https://www.instagram.com/reel/DMIJ1koT_Ac/embed/captioned", title: "Google creator event at Paddy's Markets Flemington" },
      ]}
    />
  )
}
