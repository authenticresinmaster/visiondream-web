# 비전드림 홈페이지 (visiondream-web)

서우 비전드림 마케팅 허브. Next.js 15 (App Router) + Tailwind 4, Vercel 배포.

## 로컬 실행
```bash
npm install
npm run dev      # http://localhost:3000
```

## 배포 (Vercel)
1. 이 폴더를 GitHub 저장소로 push
2. vercel.com → New Project → 저장소 연결 (프레임워크 자동감지: Next.js)
3. 환경변수 입력(.env.example 참고): `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`
4. 도메인 연결: `visiondream.kr` (앱은 `app.visiondream.kr` = Railway 유지)

## 구조 (Phase 1 MVP)
- `app/page.tsx` — 랜딩(히어로·문제·솔루션·기능·성공의나무·전자책·다운로드)
- `components/EbookForm.tsx` — 전자책 이메일 신청
- `app/api/subscribe/route.ts` — ConvertKit 연동
- `app/sitemap.ts`, `app/robots.ts` — SEO
- 브랜드 토큰: `app/globals.css` (@theme: navy/brand/amber/gold/leaf)

## 데이터 통합
회원·구독·추천코드·블로그는 **앱과 동일한 Supabase**를 공유(Phase 2). 호스팅만 분리(홈=Vercel, 앱서버=Railway).

## 로드맵
- Phase 1(현재): 랜딩 MVP(ko) — ✅ 스캐폴드 완료
- Phase 2: 블로그(SEO)·영/일 다국어·`/for-coaches`·`/pricing`·추천코드 랜딩 `/r/[code]`
- Phase 3: `/for-teams`(기관)·Discord·앱 회원 SSO
