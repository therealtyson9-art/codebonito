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
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #7c3aed 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
          <span style={{ fontSize: "64px", fontWeight: "800", color: "white" }}>Code</span>
          <span style={{ fontSize: "64px", fontWeight: "800", color: "#93c5fd" }}>Bonito</span>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b", marginLeft: "4px" }} />
        </div>
        <p style={{ fontSize: "28px", color: "rgba(255,255,255,0.85)", maxWidth: "700px", textAlign: "center", lineHeight: "1.4" }}>
          Unique design templates for AI-built websites. Pick → Copy → Paste.
        </p>
        <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
          {["100+ Templates", "6 Platforms", "$2 Each"].map((t) => (
            <div key={t} style={{ background: "rgba(255,255,255,0.15)", borderRadius: "12px", padding: "8px 20px", color: "white", fontSize: "18px", fontWeight: "600" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
