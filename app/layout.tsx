import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const SITE_URL = "https://visiondream.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "서우 비전드림 — 비전을 심으면, 반드시 열매가 열립니다",
    template: "%s | 서우 비전드림",
  },
  description:
    "성공법칙 성공(S) = 믿음(B) × 생각(T) × 행동(A). 비전·꿈·목표·습관을 하나로 연결하고, AI가 미래에서 오늘 할 일까지 설계해주는 비전관리 앱.",
  keywords: ["비전관리", "목표관리", "습관", "자기계발", "성공법칙", "비전드림", "성공", "플래너"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "서우 비전드림",
    title: "서우 비전드림 — 비전을 심으면, 반드시 열매가 열립니다",
    description: "성공(S) = 믿음(B) × 생각(T) × 행동(A). 비전·꿈·목표·습관을 연결하는 비전관리 앱.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "서우 비전드림 — 비전을 심으면, 반드시 열매가 열립니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서우 비전드림",
    description: "비전을 심으면, 반드시 열매가 열립니다 🌱",
    images: ["/og.png"],
  },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "eItK-LhzjH9F79uFVPmmAhOTQ_OK7DIJCYa6p9hv3-8",
    other: {
      "naver-site-verification": "3b758f8751c3b49f04a0591fb6fc58aeb9890eaa",
      "msvalidate.01": "16D2C238DF1479E9A43213AA90676318",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
