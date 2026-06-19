/**
 * JSON-LD structured data injector.
 * AI 검색엔진(ChatGPT·Perplexity·Gemini)과 구글이 사이트를 정확히 이해하도록
 * schema.org 구조화 데이터를 출력합니다.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
