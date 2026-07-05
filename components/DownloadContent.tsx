import Link from "next/link";
import { PageShell, PageHero, localePath, type Lang } from "@/components/PageShell";
import { APP_WEB_URL, ANDROID_INSTALL_URL, IS_STORE_LIVE } from "@/lib/app-links";

const T: Record<
  Lang,
  {
    badge: string;
    title: string;
    sub: string;
    webT: string;
    webD: string;
    webBtn: string;
    androidT: string;
    androidD: string;
    androidLiveD: string;
    androidBtn: string;
    androidLiveBtn: string;
    iosT: string;
    iosD: string;
    iosBadge: string;
    featuresTitle: string;
    features: [string, string][];
    faqTitle: string;
    faqs: [string, string][];
    storiesLink: string | null;
  }
> = {
  ko: {
    badge: "DOWNLOAD",
    title: "서우 비전드림 설치 안내",
    sub: "웹에서 즉시, Android 앱으로 매일. 데이터는 계정으로 어디서든 이어집니다.",
    webT: "🌐 웹에서 바로",
    webD: "설치 없이 브라우저에서 즉시 시작하세요. PC·태블릿·모바일 모두 지원합니다.",
    webBtn: "웹앱 열기",
    androidT: "🤖 Android 앱",
    androidD: "Google Play 출시를 준비하고 있어요. 지금은 설치 파일(APK)로 미리 사용할 수 있습니다.",
    androidLiveD: "Google Play에서 다운로드하고 푸시 알림·오프라인까지 온전한 경험으로 사용하세요.",
    androidBtn: "APK 미리 설치하기",
    androidLiveBtn: "▶ Google Play에서 다운로드",
    iosT: "🍎 iOS",
    iosD: "App Store 버전을 준비 중입니다. 그동안 아이폰에서는 웹앱으로 동일하게 사용할 수 있어요.",
    iosBadge: "준비 중",
    featuresTitle: "설치하면 만나는 8가지",
    features: [
      ["🗂️ 비전보드", "비전·꿈을 시각화하고 한눈에 관리"],
      ["🗺️ 꿈지도(만다라)", "9×9 만다라트로 비전을 81칸 실천으로"],
      ["📅 플래너", "연·월·주·일 계획을 우선순위로"],
      ["✅ 습관 트래커", "꿈·목표와 연계된 매일의 실천"],
      ["🤖 AI 코치", "비전·목표를 함께 다듬는 코칭"],
      ["🦁 두려움 해체기", "미루던 일을 작은 한 걸음으로"],
      ["🛰️ 꿈 역설계", "미래에서 오늘 할 일까지 역산"],
      ["🌳 성공의 나무", "실천할수록 자라는 게이미피케이션"],
    ],
    faqTitle: "자주 묻는 질문",
    faqs: [
      ["무료인가요?", "네. 비전보드·플래너·습관 트래커·성공의 나무 등 핵심 기능은 무료입니다."],
      ["웹과 앱의 데이터가 이어지나요?", "같은 계정으로 로그인하면 클라우드 백업으로 이어서 사용할 수 있습니다."],
      ["어떤 언어를 지원하나요?", "한국어·English·日本語 3개 언어를 지원합니다."],
    ],
    storiesLink: "사용자들의 진짜 이야기 보기 →",
  },
  en: {
    badge: "DOWNLOAD",
    title: "Get Seowoo Vision Dream",
    sub: "Start instantly on the web, live with it daily on Android. Your data follows your account everywhere.",
    webT: "🌐 On the Web",
    webD: "Start right away in your browser — no install. Works on PC, tablet, and mobile.",
    webBtn: "Open Web App",
    androidT: "🤖 Android App",
    androidD: "The Google Play release is on its way. Meanwhile you can try the app via the install file (APK).",
    androidLiveD: "Download on Google Play for the full experience with push notifications and offline use.",
    androidBtn: "Install APK (early access)",
    androidLiveBtn: "▶ Get it on Google Play",
    iosT: "🍎 iOS",
    iosD: "The App Store version is in preparation. On iPhone, the web app works just the same for now.",
    iosBadge: "Coming soon",
    featuresTitle: "8 things waiting inside",
    features: [
      ["🗂️ Vision Board", "Visualize your vision and dreams at a glance"],
      ["🗺️ Dream Map (Mandala)", "Unfold your vision into 81 cells with a 9×9 chart"],
      ["📅 Planner", "Yearly to daily plans by priority"],
      ["✅ Habit Tracker", "Daily practice linked to your goals"],
      ["🤖 AI Coach", "Coaching that refines vision and goals with you"],
      ["🦁 Fear Buster", "Turn what you avoid into one small step"],
      ["🛰️ Dream Backcasting", "Work backward from your future to today"],
      ["🌳 Success Tree", "Gamification that grows as you practice"],
    ],
    faqTitle: "FAQ",
    faqs: [
      ["Is it free?", "Yes. Core features — vision board, planner, habit tracker, success tree — are free."],
      ["Does my data sync between web and app?", "Sign in with the same account and continue anywhere via cloud backup."],
      ["Which languages are supported?", "Korean, English, and Japanese."],
    ],
    storiesLink: null,
  },
  ja: {
    badge: "DOWNLOAD",
    title: "ソウ・ビジョンドリームを入手",
    sub: "ウェブですぐに、Androidアプリで毎日。データはアカウントでどこでも続きます。",
    webT: "🌐 ウェブで今すぐ",
    webD: "インストール不要でブラウザからすぐ開始。PC・タブレット・モバイル対応。",
    webBtn: "ウェブアプリを開く",
    androidT: "🤖 Androidアプリ",
    androidD: "Google Play リリースを準備中です。今はインストールファイル(APK)で先行利用できます。",
    androidLiveD: "Google Playからダウンロードして、プッシュ通知・オフラインまで完全な体験を。",
    androidBtn: "APKを先行インストール",
    androidLiveBtn: "▶ Google Playで手に入れる",
    iosT: "🍎 iOS",
    iosD: "App Store版は準備中です。iPhoneでは当面ウェブアプリで同じように使えます。",
    iosBadge: "準備中",
    featuresTitle: "インストールで出会う8つの機能",
    features: [
      ["🗂️ ビジョンボード", "ビジョン・夢を可視化して一目で管理"],
      ["🗺️ 夢の地図（曼荼羅）", "9×9マンダラでビジョンを81マスの実践へ"],
      ["📅 プランナー", "年・月・週・日の計画を優先順位で"],
      ["✅ 習慣トラッカー", "夢・目標と連動した毎日の実践"],
      ["🤖 AIコーチ", "ビジョン・目標を一緒に磨くコーチング"],
      ["🦁 恐れ解体ツール", "先延ばしを小さな一歩に"],
      ["🛰️ 夢の逆算設計", "未来から今日やることまで逆算"],
      ["🌳 成功の木", "実践するほど育つゲーミフィケーション"],
    ],
    faqTitle: "よくある質問",
    faqs: [
      ["無料ですか？", "はい。ビジョンボード・プランナー・習慣トラッカー・成功の木など核心機能は無料です。"],
      ["ウェブとアプリでデータは同期されますか？", "同じアカウントでログインすれば、クラウドバックアップでどこでも続けられます。"],
      ["対応言語は？", "韓国語・英語・日本語の3言語に対応しています。"],
    ],
    storiesLink: null,
  },
};

export function DownloadContent({ lang }: { lang: Lang }) {
  const t = T[lang];

  return (
    <PageShell lang={lang} crumb={{ name: t.title, path: localePath(lang, "/download") }}>
      <PageHero badge={t.badge} title={t.title} sub={t.sub} />

      {/* 설치 옵션 */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border-2 border-brand/30 bg-[#f5f8fb] p-6">
            <h2 className="text-lg font-extrabold text-navy">{t.webT}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{t.webD}</p>
            <a
              href={APP_WEB_URL}
              className="mt-5 rounded-xl bg-brand px-5 py-3 text-center font-extrabold text-white transition hover:brightness-110"
            >
              {t.webBtn}
            </a>
          </div>
          <div className="flex flex-col rounded-2xl border border-black/5 bg-[#fafbfc] p-6">
            <h2 className="text-lg font-extrabold text-navy">{t.androidT}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">
              {IS_STORE_LIVE ? t.androidLiveD : t.androidD}
            </p>
            <a
              href={ANDROID_INSTALL_URL}
              className="mt-5 rounded-xl border border-navy/15 px-5 py-3 text-center font-bold text-navy transition hover:bg-navy/5"
            >
              {IS_STORE_LIVE ? t.androidLiveBtn : t.androidBtn}
            </a>
          </div>
          <div className="flex flex-col rounded-2xl border border-black/5 bg-[#fafbfc] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-navy">{t.iosT}</h2>
              <span className="rounded-full bg-navy/5 px-2.5 py-1 text-xs font-bold text-navy/50">{t.iosBadge}</span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{t.iosD}</p>
            <a
              href={APP_WEB_URL}
              className="mt-5 rounded-xl border border-navy/15 px-5 py-3 text-center font-bold text-navy transition hover:bg-navy/5"
            >
              {t.webBtn}
            </a>
          </div>
        </div>
      </section>

      {/* 기능 8종 */}
      <section className="bg-[#f5f8fb] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">{t.featuresTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map(([ft, fd]) => (
              <div key={ft} className="rounded-2xl border border-black/5 bg-white p-5">
                <h3 className="text-sm font-extrabold text-navy">{ft}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy/60">{fd}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">{t.faqTitle}</h2>
          <div className="mt-8 space-y-4">
            {t.faqs.map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-5">
                <h3 className="font-extrabold text-navy">{q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{a}</p>
              </div>
            ))}
          </div>
          {t.storiesLink && (
            <div className="mt-8 text-center">
              <Link href="/stories" className="text-sm font-bold text-brand hover:underline">
                {t.storiesLink}
              </Link>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
