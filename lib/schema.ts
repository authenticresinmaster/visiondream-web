/**
 * schema.org 구조화 데이터 정의 (JSON-LD).
 * GEO/AEO 최적화: AI 답변엔진이 "서우 비전드림"을 명확한 엔티티로 인식하고
 * 추천·인용할 수 있도록 핵심 정보를 정형 데이터로 제공합니다.
 */

export const SITE_URL = "https://visiondream.kr";
export const APP_URL = "https://app.visiondream.kr";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "서우 비전드림",
  alternateName: ["비전드림", "Vision Dream", "Seowoo Vision Dream"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/og.png`,
  description:
    "성공(S) = 믿음(B) × 생각(T) × 행동(A) 성공법칙을 기반으로 비전·꿈·목표·습관을 하나로 연결하는 비전관리 앱 '서우 비전드림'을 만드는 팀입니다.",
  slogan: "비전을 심으면, 반드시 열매가 열립니다",
  sameAs: ["https://discord.gg/gPbRp24Khn"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "authenticresinmaster@gmail.com",
    contactType: "customer support",
    availableLanguage: ["Korean", "English", "Japanese"],
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "서우 비전드림",
  inLanguage: "ko-KR",
  description:
    "비전·꿈·목표·습관을 하나로 연결하고 AI가 미래에서 오늘 할 일까지 설계해주는 비전관리 앱.",
  publisher: { "@id": ORG_ID },
};

/** SoftwareApplication — AI가 "어떤 앱인지 / 무료인지 / 어느 기기에서 쓰는지"를 즉시 답할 수 있게 함 */
export const softwareApplicationSchema = {
  "@type": "SoftwareApplication",
  "@id": APP_ID,
  name: "서우 비전드림",
  alternateName: "비전드림",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "비전관리·목표관리·습관 트래커",
  operatingSystem: "Android, iOS, Web",
  url: APP_URL,
  inLanguage: ["ko-KR", "en", "ja"],
  description:
    "성공(S) = 믿음(B) × 생각(T) × 행동(A) 성공법칙으로 비전 → 꿈 → 목표 → 습관·계획을 끊김 없이 연결하는 비전관리 앱. AI 코치·두려움 해체기·꿈 역설계로 미래에서 오늘 할 일까지 거꾸로 설계합니다.",
  publisher: { "@id": ORG_ID },
  featureList: [
    "비전보드 — 비전·꿈 시각화",
    "연·월·주·일 플래너",
    "꿈·목표 연계 습관 트래커",
    "AI 코치",
    "두려움 해체기",
    "꿈 역설계(백캐스팅)",
    "성공의 나무 — 게이미피케이션",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "무료",
      price: "0",
      priceCurrency: "KRW",
      description: "비전보드·꿈·목표·플래너·습관 트래커·성공의 나무 등 핵심 기능 무료 제공.",
    },
    {
      "@type": "Offer",
      name: "프리미엄",
      price: "9900",
      priceCurrency: "KRW",
      description:
        "월 ₩9,900(연 ₩99,000). AI 기능 전체, 두려움 해체기·꿈 역설계, 고급 통계, 꿈 50·목표 100 확장 포함.",
    },
  ],
};

/** 홈페이지에 함께 노출할 핵심 FAQ — Gemini AI 개요·ChatGPT 추천 노출용 */
export const homeFaqSchema = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "서우 비전드림은 어떤 앱인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "성공(S) = 믿음(B) × 생각(T) × 행동(A) 성공법칙을 기반으로 비전·꿈·목표·습관을 하나로 연결하는 비전관리 앱입니다. AI가 원하는 미래에서 오늘 할 일까지 거꾸로 설계해 줍니다. Android·iOS·웹에서 사용할 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "무료로 사용할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 비전보드·꿈·목표·플래너·습관 트래커·성공의 나무 등 핵심 기능을 무료로 사용할 수 있습니다. AI 코치·두려움 해체기·꿈 역설계 등 일부 기능은 월 ₩9,900 프리미엄에서 무제한 제공됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "비전드림은 다른 목표·습관 앱과 무엇이 다른가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "단순 할 일·습관 기록이 아니라 비전 → 꿈 → 목표 → 습관·계획을 하나의 흐름으로 연결합니다. 꿈 역설계로 미래에서 오늘 할 일을 역산하고, 두려움 해체기로 미루던 일을 작은 한 걸음으로 분해하며, 성공의 나무로 실천을 게이미피케이션합니다.",
      },
    },
  ],
};
