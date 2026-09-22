import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#0a0a0f", color: "#fff", padding: "54px 64px", fontFamily: "sans-serif" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 25 }}><span style={{ fontWeight: 700, fontSize: 40 }}>CELLA.</span><span style={{ color: "#c2a7f9" }}>SYDNEY / FOOD / TRAVEL / EXPERIENCES</span></div>
    <div style={{ display: "flex", flexDirection: "column", fontSize: 90, fontWeight: 700, letterSpacing: "-5px", lineHeight: 1.06 }}><span>GOOD PLACES.</span><span style={{ color: "#c2a7f9" }}>GREAT STORIES.</span></div>
    <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #5a456f", paddingTop: 24, fontSize: 24 }}><span>Content creation & creator partnerships</span><span>heycella.com</span></div>
  </div>, { width: 1200, height: 630 })
}
