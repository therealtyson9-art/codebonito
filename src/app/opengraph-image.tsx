import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Code Bonito — Unique Design Templates for AI-Built Websites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050510",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0px", marginBottom: "32px" }}>
          <span style={{ fontSize: "72px", fontWeight: "800", color: "#f97316" }}>{"{"}</span>
          <span style={{ fontSize: "72px", fontWeight: "800", color: "white", marginLeft: "8px", letterSpacing: "-2px" }}>CODE BONI</span>
          <span style={{ fontSize: "72px", fontWeight: "800", color: "#f97316" }}>_</span>
          <span style={{ fontSize: "72px", fontWeight: "800", color: "white", letterSpacing: "-2px" }}>TO</span>
          <span style={{ fontSize: "72px", fontWeight: "800", color: "#f97316" }}>{"}"}</span>
        </div>
        {/* Tagline */}
        <p style={{ fontSize: "26px", color: "rgba(255,255,255,0.6)", maxWidth: "700px", textAlign: "center", lineHeight: "1.4", margin: "0 0 40px 0" }}>
          Unique design templates for AI-built websites
        </p>
        {/* Pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["100+ Templates", "6 AI Platforms", "$2 Each"].map((t) => (
            <div key={t} style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: "12px", padding: "10px 24px", color: "#f97316", fontSize: "18px", fontWeight: "600" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
