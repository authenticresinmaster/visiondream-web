import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://visiondream.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "서우 비전드림 — 비전을 심으면, 반드시 열매가 열립니다",
    template: "%s | 서우 비전드림",
  },
  description:
    "성공법칙 S = 믿음(B) × 생각(T) × 행동(A). 비전·꿈·목표·습관을 하나로 연결하고, AI가 미래에서 오늘 할 일까지 설계해주는 비전관리 앱.",
  keywords: ["비전관리", "목표관리", "습관", "자기계발", "S=BTA", "비전드림", "성공", "플래너"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "서우 비전드림",
    title: "서우 비전드림 — 비전을 심으면, 반드시 열매가 열립니다",
    description: "S = 믿음 × 생각 × 행동. 비전·꿈·목표·습관을 연결하는 비전관리 앱.",
  },
  twitter: {
    card: "summary_large_image",
    title: "서우 비전드림",
    description: "비전을 심으면, 반드시 열매가 열립니다 🌱",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
