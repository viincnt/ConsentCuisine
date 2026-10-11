import { ImageResponse } from "next/og";

export const alt = "Consent Cuisine — consent infrastructure with a local accent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#111410", color: "#f4f5ee", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", fontSize: 36, fontWeight: 800, letterSpacing: "-4px" }}>cc<span style={{ color: "#d7ff67" }}>.</span></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#d7ff67", fontSize: 20, letterSpacing: "3px", textTransform: "uppercase" }}>Consent infrastructure / made human</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 80, lineHeight: 0.96, fontWeight: 700, letterSpacing: "-5px" }}><div style={{ display: "flex" }}>Cookie consent is boring.</div><div style={{ display: "flex", color: "#d7ff67" }}>Make it local.</div></div>
        </div>
        <div style={{ display: "flex", color: "#a8afa4", fontSize: 22 }}>Headless · multilingual · npm</div>
      </div>
    ),
    { ...size }
  );
}
