import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#f7f4ed", color: "#161616", padding: "54px 64px", fontFamily: "sans-serif" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 25 }}><span style={{ fontWeight: 700, fontSize: 40 }}>CELLA.</span><span style={{ color: "#791d35" }}>CREATIVE STUDIO</span></div>
    <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.06 }}><span>Content creation.</span><span>Creative strategy.</span><span style={{ color: "#791d35" }}>Brand partnerships.</span></div>
    <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #d7cec4", paddingTop: 24, fontSize: 24 }}><span>Content & strategy · Sydney and beyond</span><span>heycella.com</span></div>
  </div>, { width: 1200, height: 630 })
}
