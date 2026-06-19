import { ImageResponse } from "next/og";

/** /og.png — OpenGraph·트위터 카드용 소셜 공유 이미지 (1200×630). */
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
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
          backgroundImage: "linear-gradient(135deg, #0e2746 0%, #105d9e 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 800,
            color: "#1a2332",
            background: "#f5b301",
            padding: "10px 28px",
            borderRadius: 999,
            marginBottom: 40,
          }}
        >
          성공(S) = 믿음(B) × 생각(T) × 행동(A)
        </div>
        <div style={{ fontSize: 88, marginBottom: 16 }}>🌳</div>
        <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.2 }}>
          비전을 심으면,
        </div>
        <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.2 }}>
          반드시 열매가 열립니다 🌱
        </div>
        <div style={{ fontSize: 34, opacity: 0.85, marginTop: 36, fontWeight: 700 }}>
          서우 비전드림 · 비전관리 앱
        </div>
      </div>
    ),
    { ...size },
  );
}
