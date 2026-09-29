import { brandStories } from "@/lib/brand-stories"
import { featuredWork } from "@/lib/featured-work"
import { workNotes } from "@/lib/work-notes"

export type PortfolioProject = {
  id: string
  brand: string
  category: string
  headline: string
  description: string
  role?: string
  thought?: string
  scope?: string[]
  caseStudy?: string
  image?: { src: string; alt: string }
  video?: { src: string; poster: string; title: string }
  posts?: { href: string; label: string }[]
  links?: { href: string; label: string }[]
  results?: { caption: string; metrics: { label: string; value: string }[] }
}

const brandProjects: PortfolioProject[] = brandStories.map(story => ({
  id: story.id, brand: story.brand, category: story.type,
  headline: story.headline, description: story.description,
  role: story.role, thought: story.thought, scope: story.proof,
  caseStudy: story.caseStudy || undefined,
  posts: story.id === "mirvac" ? [
    { href: "https://www.instagram.com/p/C7lieSwvMGA/", label: "Published story 01" },
    { href: story.permalink, label: "Published story 02" },
    { href: "https://www.instagram.com/p/C49ytZoPvBX/", label: "Published story 03" },
  ] : [{ href: story.permalink, label: "Watch on Instagram" }],
  ...(story.id === "mirvac" ? {
    video: { src: "/video/mirvac-shed.mp4", poster: "/images/projects/mirvac-shed.jpg", title: "The Shed at Birkenhead Point, created for Mirvac" },
  } : {}),
  ...(story.id === "placemaking" ? {
    links: [{ href: "https://vt.tiktok.com/ZSDHmK6K2/", label: "Watch on TikTok" }],
  } : {}),
}))

const destinationProjects: PortfolioProject[] = featuredWork
  .filter(project => project.id === "kings-cross" || project.id === "pure-milford")
  .map(project => ({
    id: project.id, brand: project.title, category: project.category,
    headline: workNotes[project.id].line, description: project.description,
    role: workNotes[project.id].craft, thought: workNotes[project.id].idea,
    scope: [project.proof], caseStudy: workNotes[project.id].caseStudy,
    image: { src: project.image, alt: project.alt },
    ...(project.id === "pure-milford" ? { posts: [{ href: project.href, label: "Watch on Instagram" }] } : {}),
  }))

// Existing public portfolio content, grouped once by brand or project.
export const portfolioProjects: PortfolioProject[] = [
  ...["mirvac", "kitchenaid", "placemaking"].flatMap(id => brandProjects.filter(project => project.id === id)),
  {
    id: "merivale", brand: "Merivale", category: "Restaurant campaign · 2024",
    headline: "Good Luck. Great food.",
    description: "A dining story for Merivale’s Good Luck Restaurant Lounge, sharing its 2-for-1 crab offer and the experience around the table.",
    results: {
      caption: "Instagram insights supplied December 2024. Results for this campaign at that time.",
      metrics: [
        { label: "Instagram accounts reached", value: "13,903" },
        { label: "Shares", value: "330" },
        { label: "Saves", value: "181" },
      ],
    },
  },
  ...destinationProjects.filter(project => project.id === "kings-cross"),
  {
    id: "google", brand: "Google × Paddy’s Markets", category: "Creator event · 2025",
    headline: "Food meets product discovery.",
    description: "A morning at Paddy’s Markets Flemington with Google Australia, exploring how Google Lens and Gemini can help with finding ingredients and getting ideas for what to cook.",
    role: "On-location creator event coverage and a published Instagram Reel connecting food and product discovery.",
    scope: ["Gifted creator event", "Flemington, Sydney"],
    posts: [{ href: "https://www.instagram.com/reel/DMIJ1koT_Ac/", label: "Watch on Instagram" }],
    caseStudy: "/projects/google-gemini-paddys",
  },
  {
    id: "doordash", brand: "DoorDash", category: "Reservations campaign · 2025",
    headline: "From booking to the table.",
    description: "A creator partnership for DoorDash’s restaurant reservations campaign, combining a demonstration of booking in the app with a dining visit to Epicurean.",
    role: "An Instagram Reel, TikTok video and three Instagram Story frames. Content was reviewed and approved before creator posting with @doordash_aus.",
    scope: ["Instagram + TikTok", "3 Story frames", "In-app reservation demonstration"],
    caseStudy: "/projects/doordash-opentable",
  },
  ...destinationProjects.filter(project => project.id === "pure-milford"),
  {
    id: "penelopes", brand: "Penelope’s", category: "Restaurant discovery · Circular Quay",
    headline: "A harbour-side dining story.",
    description: "A harbour-side dining story, featured in the campaign agency’s own wrap-up.",
    posts: [{ href: "https://www.instagram.com/reel/C6bBOP4Pk-B/", label: "Watch on Instagram" }],
  },
  {
    id: "parramatta", brand: "City of Parramatta", category: "EAT Parramatta · 2025",
    headline: "Local food, through a personal lens.",
    description: "Afterglow Eatery, through its coffee, dishes and atmosphere. A Reel, TikTok and three Story frames created for City of Parramatta.",
    scope: ["Instagram + TikTok", "3 Story frames", "Campaign delivered · 2025"],
  },
  {
    id: "japan", brand: "Japan travel", category: "Travel & experiences",
    headline: "A traveller’s perspective.",
    description: "CELLA’s travel content looks at places through the details that shape a visit: where to stay, what to eat and how a place feels. Japan is part of that wider food, travel and experience portfolio.",
    caseStudy: "/projects/prince-shiomi",
    image: { src: "/images/projects/travel-media-kit.png", alt: "Travel portfolio from the CELLA media kit" },
  },
]
