import { notFound } from "next/navigation"

export const metadata = {
  title: "Sydney guide · Responsive review",
  robots: { index: false, follow: false },
}

export default function ResponsiveGuideReview() {
  if (process.env.VERCEL_ENV !== "preview") notFound()
  return <main style={{ padding: 24, background: "#21182b", minHeight: "100vh" }}>
    <h1 style={{ fontSize: 28, marginBottom: 12 }}>Sydney guide · Mobile review</h1>
    <p style={{ fontSize: 14, marginBottom: 24 }}>A 390 px view of the product page. Scroll inside the frame to review the full listing.</p>
    <iframe title="Sydney Date Nights product page at 390 pixels" src="/guides/sydney-date-nights" width={390} height={844} style={{ display: "block", border: "1px solid #80658e", background: "#101014" }} />
  </main>
}
