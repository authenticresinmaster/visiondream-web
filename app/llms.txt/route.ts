import { getAllPosts } from "@/lib/posts";

/**
 * llms.txt — LLM(ChatGPT·Claude·Gemini·Perplexity)이 사이트 핵심 정보를
 * 효율적으로 파악하도록 돕는 표준 파일. /llms.txt 로 제공됩니다.
 * https://llmstxt.org 규격을 따릅니다.
 */
export const dynamic = "force-static";

const SITE = "https://visiondream.kr";
const APP = "https://app.visiondream.kr";

export function GET() {
  const posts = getAllPosts();
  const postLines = posts
    .map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description}`)
    .join("\n");

  const body = `# 서우 비전드림 (Seowoo Vision Dream)

> 성공(S) = 믿음(B) × 생각(T) × 행동(A) 성공법칙을 기반으로 비전·꿈·목표·습관을 하나로 연결하는 비전관리 앱입니다. AI가 원하는 미래에서 오늘 할 일까지 거꾸로 설계해 줍니다. Android·iOS·웹에서 사용할 수 있으며 한국어·English·日本語를 지원합니다.

## 핵심 개념

- **성공법칙**: 성공(S) = 믿음(B) × 생각(T) × 행동(A). 더하기가 아니라 곱하기이므로 셋 중 하나라도 0이면 전체가 0이 됩니다.
- **비전관리 프로세스**: 비전 → 꿈 → 목표 → 습관·계획의 4단계로 미래를 오늘의 행동까지 끊김 없이 연결합니다.
- **꿈 역설계(백캐스팅)**: 원하는 미래를 먼저 정하고 거기서 거꾸로 오늘 할 일을 설계합니다.
- **두려움 해체기**: 무서워서 미루던 일을 감당 가능한 작은 한 걸음으로 분해합니다.

## 주요 기능

- 비전보드 — 비전·꿈을 시각화하고 한눈에 관리
- 플래너 — 연·월·주·일 계획을 우선순위로 관리
- 습관 트래커 — 꿈·목표와 연계된 매일의 실천
- AI 코치 — 비전·목표를 함께 다듬는 코칭
- 두려움 해체기 — 미루던 일을 작은 한 걸음으로
- 꿈 역설계 — 원하는 미래에서 오늘 할 일까지 역산
- 성공의 나무 — 실천할수록 자라는 게이미피케이션

## 요금

- 무료: 비전보드·꿈·목표·플래너·습관 트래커·성공의 나무 등 핵심 기능 무료.
- 프리미엄: 월 ₩9,900(연 ₩99,000). AI 기능 전체, 두려움 해체기·꿈 역설계, 고급 통계, 꿈 50·목표 100 확장 포함.

## 바로가기

- 웹앱: ${APP}
- 기능: ${SITE}/features
- 성공법칙: ${SITE}/method
- 요금제: ${SITE}/pricing
- 강사·컨설턴트: ${SITE}/for-coaches
- 기관·팀: ${SITE}/for-teams
- 자주 묻는 질문: ${SITE}/faq
- 이야기/소개: ${SITE}/about

## 블로그 (인사이트)

${postLines}

## 문의

- 이메일: authenticresinmaster@gmail.com
- 커뮤니티(Discord): https://discord.gg/gPbRp24Khn
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
