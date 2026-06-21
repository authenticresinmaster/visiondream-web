/**
 * IndexNow 제출 — 사이트맵의 모든 URL을 빙·네이버 등 IndexNow 파트너에 색인 요청.
 * 사용: node scripts/indexnow.mjs   (또는 npm run indexnow)
 * 새 글/페이지를 배포한 뒤 실행하면 검색엔진에 즉시 색인을 알립니다. (구글은 IndexNow 미지원)
 */
const SITE = "https://visiondream.kr";
const KEY = "dac533670ba3a05fe955f0b035078ce3";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

async function main() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`사이트맵 가져오기 실패: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`사이트맵에서 ${urls.length}개 URL 수집`);

  const body = { host: "visiondream.kr", key: KEY, keyLocation: KEY_LOCATION, urlList: urls };
  const r = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow 응답: ${r.status} ${r.statusText}`);
  if (r.status === 200 || r.status === 202) {
    console.log("✅ 제출 성공 — 빙·네이버 등 IndexNow 파트너 검색엔진에 전달되었습니다.");
  } else {
    const t = await r.text().catch(() => "");
    console.log("응답 본문:", t.slice(0, 300));
  }
}

main().catch((e) => {
  console.error("오류:", e.message);
  process.exit(1);
});
