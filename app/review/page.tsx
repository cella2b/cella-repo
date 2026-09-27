import { notFound } from "next/navigation"
import { ResponsiveReview } from "./responsive-review"
export const dynamic = "force-dynamic"
export const metadata = { title: "CELLA · Design preview", robots: { index: false, follow: false } }
export default function Review(){if(process.env.VERCEL_ENV === "production") notFound();return <ResponsiveReview />}
