import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/siteConfig";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#101b27",
          padding: 80,
        }}
      >
        <div
          style={{
            width: 64,
            height: 6,
            background: "#c1622d",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f8f2e8",
            fontFamily: "Georgia, serif",
            textAlign: "center",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#e4d3b3",
            textAlign: "center",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
