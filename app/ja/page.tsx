import Link from "next/link";
import { EbookForm } from "@/components/EbookForm";
import { VideoGallery } from "@/components/VideoGallery";
import { videosFor, videosJsonLd, videosIndexHref } from "@/lib/videos";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts } from "@/lib/posts";
import { AuthNav } from "@/components/AuthNav";
import { LangSwitch } from "@/components/LangSwitch";
import { MobileNav } from "@/components/MobileNav";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/",
  title: "ビジョンを植えれば、必ず実がなる",
  description:
    "ソウ・ビジョンドリームはビジョン・夢・目標・習慣を一つにつなげます。成功(S) = 信念(B) × 思考(T) × 行動(A)。AIが未来から今日やることまで設計します。",
});

import { APP_WEB_URL as APP_URL, ANDROID_INSTALL_URL, IS_STORE_LIVE } from "@/lib/app-links";

const DISCORD_URL = "https://discord.gg/gPbRp24Khn";

const STEPS = [
  { n: "1", t: "ビジョン", d: "なりたい究極の自分を宣言" },
  { n: "2", t: "夢", d: "領域ごとの人生の目標へ具体化" },
  { n: "3", t: "目標", d: "測定可能な3ヶ月の目標" },
  { n: "4", t: "習慣・計画", d: "今日やることとして毎日実践" },
];

const FEATURES = [
  { e: "🗂️", t: "ビジョンボード", d: "ビジョン・夢を可視化して一目で管理" },
  { e: "🗺️", t: "夢の地図（曼荼羅）", d: "9×9マンダラチャートでビジョンを81マスの実践へ展開" },
  { e: "📅", t: "プランナー", d: "年・月・週・日の計画を優先順位で" },
  { e: "✅", t: "習慣トラッカー", d: "夢・目標と連動した毎日の実践" },
  { e: "🤖", t: "AIコーチ", d: "ビジョン・目標を一緒に磨き上げるコーチング" },
  { e: "🦁", t: "恐れ解体ツール", d: "怖くてできなかったことを小さな一歩に" },
  { e: "🛰️", t: "夢の逆算設計", d: "望む未来から今日やることまで逆算" },
  { e: "🌳", t: "成功の木", d: "実践するほど育つゲーミフィケーション" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <JsonLd data={videosJsonLd("ja")} />
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌳</span>
            <span className="text-lg font-extrabold text-navy">ソウ・ビジョンドリーム</span>
          </div>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-navy/70 lg:flex">
            <Link href="/ja/features" className="hover:text-brand">機能</Link>
            <Link href="/ja/method" className="hover:text-brand">成功法則</Link>
            <Link href="/ja/pricing" className="hover:text-brand">料金プラン</Link>
            <Link href="/ja/for-coaches" className="hover:text-brand">講師</Link>
            <Link href="/ja/for-teams" className="hover:text-brand">機関・チーム</Link>
            <Link href="/ja/blog" className="hover:text-brand">ブログ</Link>
            <Link href="/ja/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/ja/about" className="hover:text-brand">ストーリー</Link>
            <a href="https://landing.visiondream.kr" className="hover:text-brand">S=BTA ランディング</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 lg:flex">
              <LangSwitch />
              <AuthNav />
              <a href={APP_URL} className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:brightness-110">
                アプリを開く
              </a>
            </div>
            <MobileNav lang="ja" />
          </div>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="relative bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-amber px-4 py-1.5 text-sm font-extrabold text-navy">
            成功(S) = 信念(B) × 思考(T) × 行動(A)
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            ビジョンを植えれば、<br />必ず実がなる 🌱
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
            成功(S) = 信念(B) × 思考(T) × 行動(A)。<br />
            ビジョン・夢・目標・習慣を一つにつなげ、AIが未来から今日やることまで設計します。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="rounded-xl bg-amber px-7 py-3.5 text-base font-extrabold text-navy transition hover:brightness-105">
              今すぐ無料で始める →
            </a>
            <a href="#ebook" className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/20">
              📚 無料の電子書籍を受け取る
            </a>
          </div>
        </div>
      </section>

      {/* 問題提起 */}
      <section className="bg-white px-5 py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">「なぜ自分はできず、あの人はできるのか?」</h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            目標はあるのに毎日何をすればいいか分からず、決意は三日坊主で終わってしまう。<br />
            問題は意志ではなく、<strong className="text-brand">ビジョンから今日の行動までをつなぐ仕組み</strong>の不在です。
          </p>
        </Reveal>
      </section>

      {/* ソリューション — 4ステップ */}
      <section id="method" className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center text-sm font-bold text-brand">ビジョン管理プロセス</p>
            <h2 className="mt-2 text-center text-2xl font-black text-navy md:text-3xl">未来から今日へ、逆算して設計します</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 90}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg font-black text-white">{s.n}</div>
                <h3 className="mt-4 text-lg font-extrabold text-navy">{s.t}</h3>
                <p className="mt-1.5 text-sm text-navy/60">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* コア機能 */}
      <section id="features" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-black text-navy md:text-3xl">一つのアプリで、完全につながる</h2>
            <p className="mt-3 text-center text-navy/60">ビジョン → 夢 → 目標 → 計画 → 習慣が途切れなくつながります</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.t}
                delay={(i % 3) * 90}
                className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-lg"
              >
                <div className="text-3xl">{f.e}</div>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 成功の樹 */}
      <section className="bg-gradient-to-b from-[#f5f8fb] to-white px-5 py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <div className="text-6xl">🌳</div>
          <h2 className="mt-4 text-2xl font-black text-navy md:text-3xl">実践するほど育つ成功の樹</h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            毎日の小さな実践が実🍎となり、自分だけの樹を育てます。<br />
            レベル・連続記録・果樹園・リーダーボードでモチベーションを維持しましょう。
          </p>
        </Reveal>
      </section>

      {/* 動画 */}
      {videosFor("ja").length > 0 && (
        <section id="videos" className="bg-white px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center text-2xl font-black text-navy md:text-3xl">30秒でわかるビジョンドリーム</h2>
              <p className="mt-3 text-center text-navy/60">カードをタップすると動画と台本を一緒に見られます。</p>
            </Reveal>
            <div className="mt-10">
              <VideoGallery videos={videosFor("ja").slice(0, 6)} lang="ja" watchLabel="📝 動画・台本を見る →" />
            </div>
            <div className="mt-8 text-center">
              <Link href={videosIndexHref("ja")} className="text-sm font-bold text-brand hover:underline">
                すべての動画を見る →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 電子書籍 CTA */}
      <section id="ebook" className="bg-gradient-to-br from-[#1a2332] to-[#105d9e] px-5 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-gold">無料の電子書籍</p>
            <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
              なぜ自分はできず、<br />あの人はできるのか?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              成功法則 成功(S)=信念(B)×思考(T)×行動(A)とビジョン管理プロセスを収めた電子書籍を無料で受け取りましょう。
              メールですぐにお送りします。
            </p>
          </div>
          <EbookForm />
        </div>
      </section>

      {/* ダウンロード */}
      <section id="download" className="bg-white px-5 py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">今すぐ始めましょう</h2>
          <p className="mt-3 text-navy/60">ウェブですぐに使うか、アプリとしてインストール</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="rounded-xl bg-brand px-7 py-3.5 font-extrabold text-white transition hover:brightness-110">
              🌐 ウェブで始める
            </a>
            <a href={ANDROID_INSTALL_URL} className="rounded-xl border border-navy/15 px-7 py-3.5 font-bold text-navy transition hover:bg-navy/5">
              {IS_STORE_LIVE ? "▶ Google Playで手に入れる" : "📱 アプリをダウンロード (Android)"}
            </a>
          </div>
          <p className="mt-4 text-xs text-navy/40">
            {IS_STORE_LIVE ? "Google Play" : "Google Play 近日公開"} · Web · 한국어 / English / 日本語 ·{" "}
            <Link href="/ja/download" className="underline hover:text-brand">インストールガイド</Link>
          </p>
        </Reveal>
      </section>

      {/* 最新ブログ */}
      <section className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-brand">インサイト</p>
              <h2 className="mt-2 text-2xl font-black text-navy md:text-3xl">ビジョンを行動につなぐ記事</h2>
            </div>
            <Link href="/ja/blog" className="hidden text-sm font-bold text-brand hover:underline sm:block">
              すべて見る →
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {getAllPosts("ja").slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="h-full">
                <Link
                  href={`/ja/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="text-3xl">{p.emoji}</div>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-brand">
                    <span className="rounded-full bg-brand/10 px-2.5 py-1">{p.category}</span>
                    <span className="text-navy/40">· {p.readMinutes}分</span>
                  </div>
                  <h3 className="mt-3 text-base font-extrabold leading-snug text-navy group-hover:text-brand">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/ja/blog" className="text-sm font-bold text-brand hover:underline">すべての記事を見る →</Link>
          </div>
        </div>
      </section>

      {/* コミュニティ */}
      <section className="bg-white px-5 py-20">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#5865F2] to-[#404EED] p-10 text-center text-white">
          <div className="text-5xl">💬</div>
          <h2 className="mt-4 text-2xl font-black md:text-3xl">一緒にビジョンを育てるコミュニティ</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80">
            Discordで他のユーザーと目標を分かち合い、互いに応援しながら一緒に実践しましょう。
            ヒントやアップデート情報も誰よりも早く受け取れます。
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3.5 font-extrabold text-[#404EED] transition hover:brightness-95"
          >
            Discordコミュニティに参加する →
          </a>
        </Reveal>
      </section>

      {/* フッター */}
      <footer className="border-t border-black/5 bg-[#fafbfc] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-navy/50 md:flex-row">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-navy">🌳 ソウ・ビジョンドリーム</div>
            <p className="mt-1 text-xs">成功(S) = 信念(B) × 思考(T) × 行動(A)</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ja/features" className="hover:text-brand">機能</Link>
            <Link href="/ja/blog" className="hover:text-brand">ブログ</Link>
            <Link href="/ja/pricing" className="hover:text-brand">料金プラン</Link>
            <Link href="/ja/for-teams" className="hover:text-brand">機関・チーム</Link>
            <Link href="/ja/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/ja/about" className="hover:text-brand">ストーリー</Link>
            <a href="https://landing.visiondream.kr" className="hover:text-brand">S=BTA ランディング</a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">コミュニティ</a>
            <a href="https://app.visiondream.kr/privacy" className="hover:text-brand">プライバシーポリシー</a>
            <a href="https://app.visiondream.kr/terms" className="hover:text-brand">利用規約</a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-navy/30">© 2026 ソウ・ビジョンドリーム. All rights reserved.</p>
      </footer>
    </main>
  );
}
