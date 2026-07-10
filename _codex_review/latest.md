<!-- Codex 코드리뷰 | repo: C:\Users\노하우셀러\vision-claude\visiondream-web | 생성: 2026-07-10 07:49 -->

[변경 요약]
 lib/posts.ts | 10 ++++++++--
 1 file changed, 8 insertions(+), 2 deletions(-)

검토 결과, **릴리즈 차단 수준의 코드 이슈는 발견하지 못했습니다.**

- `lib/posts.ts`의 새 import는 untracked 3개 파일의 `en/ja/ko` export와 일치합니다.
- 새 slug 3개(`digital-vision-board`, `stop-procrastinating`, `goal-tracking-apps`)는 기존 slug와 충돌하지 않습니다.
- `getAllPosts()` 기반이라 블로그 목록, 상세 정적 경로, sitemap, RSS 노출 흐름도 기존 패턴과 맞습니다.
- API/DB/인증/RBAC/IDOR 관련 변경은 없습니다.
- `ReactMarkdown`은 `rehypeRaw` 없이 쓰고 있어 새 markdown 본문 추가가 곧바로 HTML 실행/XSS로 이어지는 구조도 아닙니다.

검증:
`npx tsc --noEmit --incremental false` 통과했습니다.

릴리즈 전 체크만 하나 있습니다. `lib/posts.ts`가 untracked 파일들을 import하므로, 배포/커밋 시 아래 3개 파일이 반드시 같이 포함되어야 합니다. 누락되면 CI/빌드에서 module not found가 납니다.

- `lib/blog-i18n/digital-vision-board.ts`
- `lib/blog-i18n/goal-tracking-apps.ts`
- `lib/blog-i18n/stop-procrastinating.ts`

종합 판단: **병합 가능**.