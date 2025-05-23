import { ImageResponse } from "next/og";

// Image metadata
export const alt = "My site";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #3b82f6 0%, #ffffff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        <h1>Africa Skills Revolution</h1>
        <p style={{ fontSize: 64 }}>
          Putting youth at the centre of the Technical and Vocational Education
          and Training revolution across the continent
        </p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
