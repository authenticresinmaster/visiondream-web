import Script from "next/script";

/**
 * Google Analytics 4 — 기본 측정 ID는 코드 폴백(공개값이라 안전),
 * 필요 시 Vercel 환경변수 NEXT_PUBLIC_GA_ID로 재정의 가능.
 * SPA 라우트 전환 페이지뷰는 GA4 '향상된 측정'(기본 켜짐)이 자동 수집한다.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-KQC4C0424B";
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
