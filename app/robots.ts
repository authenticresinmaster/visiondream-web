import type { MetadataRoute } from "next";

/**
 * AI 크롤러를 명시적으로 허용해 GEO/AEO 스캐너가 각 봇을 정확히 인식하도록 합니다.
 * (와일드카드 * 로도 허용되지만, 명시 목록이 진단·디버깅에 유리합니다.)
 */
const AI_BOTS = [
  "GPTBot", // OpenAI ChatGPT 학습
  "OAI-SearchBot", // OpenAI 검색
  "ChatGPT-User", // ChatGPT 브라우징
  "ClaudeBot", // Anthropic Claude 학습
  "anthropic-ai", // Anthropic
  "Claude-Web", // Anthropic Claude 브라우징
  "PerplexityBot", // Perplexity 검색
  "Perplexity-User", // Perplexity 브라우징
  "Google-Extended", // Google Gemini 학습
  "Applebot-Extended", // Apple Intelligence
  "FacebookBot", // Meta AI
  "meta-externalagent", // Meta 외부 에이전트
  "CCBot", // Common Crawl
  "Amazonbot", // Amazon
  "Bytespider", // ByteDance
  "cohere-ai", // Cohere
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://visiondream.kr/sitemap.xml",
    host: "https://visiondream.kr",
  };
}
