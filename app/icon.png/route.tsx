import { ImageResponse } from "next/og";

/** /icon.png — Organization 로고용 정사각 아이콘 (512×512). */
export const dynamic = "force-static";

const size = { width: 512, height: 512 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #0e2746 0%, #105d9e 100%)",
          fontSize: 300,
        }}
      >
        🌳
      </div>
    ),
    { ...size },
  );
}
