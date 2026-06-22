/**
 * 영상 목록 — 언어별(ko/en/ja). 로컬 MP4(/public/videos) 또는 유튜브 지원.
 * transcript(대본): 영상별 전용 페이지(/videos/[slug])에 본문으로 노출 → 검색 색인.
 * 홈에는 카드만 가볍게 보여주고, 대본은 상세 페이지로 분리(확장성·SEO).
 */
export type VideoItem =
  | { kind: "local"; slug: string; src: string; poster?: string; title: string; sub?: string; transcript?: string }
  | { kind: "youtube"; slug: string; id: string; title: string; sub?: string; transcript?: string };

export type Lang = "ko" | "en" | "ja";

export const VIDEOS_BY_LANG: Record<Lang, VideoItem[]> = {
  ko: [
    {
      kind: "youtube", slug: "habit-tracker", id: "kV_PRykMwJc",
      title: "작심삼일, 또?", sub: "의지가 아니라 시스템 — 습관 트래커",
      transcript: "야, 또 작심삼일이지? 괜찮아. 네 의지가 약한 게 절대 아니야. 그냥 오늘 뭘 해야 할지가 안 보여서 그래. 거창한 결심 하나는 딱 사흘이면 식어 버리거든. 그런데 네 꿈이랑 연결된 작은 습관 하나는 매일매일 쌓여 가. 비전드림 습관 트래커가 바로 그걸 해 줘. 네 목표에 하루치 작은 습관을 하나 붙여 주는 거야. 체크할 때마다 연속 기록이 이어지고, 성공의 나무에 열매가 하나씩 열려. 의지로 버티는 게 아니라 시스템이 너를 끌고 가는 거지. 자, 오늘 딱 하나만 같이 시작해 보자.",
    },
    {
      kind: "youtube", slug: "morning-habit", id: "JGaKMhKrE-Q",
      title: "미라클모닝, 또 늦잠?", sub: "아침 습관 하나로 — 습관 트래커",
      transcript: "또 미라클모닝 실패했어? 괜찮아, 엄마도 알아. 새벽에 일어나는 거, 의지로 되는 게 아니더라. 중요한 건 일찍 일어나는 게 아니라 일어나서 뭘 할지가 정해져 있는 거야. 그러니까 비전드림에 아침 습관을 딱 하나만 등록해 둬. 그럼 눈을 떴을 때 오늘 할 작은 한 가지가 이미 떠 있어. 그거 하나 체크하면서 가볍게 하루를 시작하는 거지. 며칠만 쌓이면 어느새 그게 너의 아침이 되더라. 그러니까 내일은 딱 하나만 같이 해보자. 엄마가 응원할게.",
    },
    {
      kind: "youtube", slug: "fear-breaker", id: "_nWOfFQGBuc",
      title: "다 놓고 싶은 날", sub: "작은 한 걸음 — 두려움 해체기",
      transcript: "다 놓아 버리고 싶은 날, 분명 있죠. 그건 당신이 약해서가 아니에요. 너무 오래, 너무 많은 걸 혼자 짊어졌기 때문이에요. 이럴 땐 더 큰 목표가 아니라 가장 작은 한 걸음이 필요합니다. 비전드림은 당신이 왜 시작했는지 그 비전을 다시 비춰 줍니다. 그리고 거대해 보이는 일을 단 몇 분이면 되는 작은 한 걸음으로 잘게 쪼개 줘요. 큰 산을 단숨에 오르라는 게 아니에요. 오늘은 그냥 한 걸음. 그거면 충분합니다. 다시 천천히 시작해요.",
    },
    {
      kind: "youtube", slug: "dream-reverse-design", id: "L1sL_h21afU",
      title: "올해도 작년이랑 똑같지?", sub: "미래에서 오늘로 역산 — 꿈 역설계",
      transcript: "야, 올해 계획. 작년이랑 또 똑같이 세우고 있지? 다이어리 앞장만 빼곡하게 적어 놓고, 2월이면 텅 비잖아. 그건 네가 못해서가 절대 아니야. 큰 목표만 덩그러니 있고, 거기서 오늘까지 내려오는 길이 없어서 그래. 비전드림은 거꾸로 가. 네가 되고 싶은 미래를 먼저 딱 정하고, 거기서 일 년, 한 달, 이번 주, 그리고 오늘 할 일까지 쭉 역산해 줘. 그러니까 막막한 다짐이 아니라, 오늘 당장 뭘 할지가 눈에 딱 보이는 거지. 올해는 미래에서부터 거꾸로 한번 설계해 보자.",
    },
    {
      kind: "youtube", slug: "first-step", id: "_fkfjzqQc1g",
      title: "그거, 아직도 안 했지?", sub: "작은 첫 걸음 — 두려움 해체기",
      transcript: "야, 그거. 해야 하는 거 알면서, 아직도 미루고 있지? 괜찮아, 네가 게을러서가 아니야. 그 일이 너무 크고 막막해 보여서, 시작이 무서운 거야. 그래서 자꾸 딴 걸 하게 되는 거고. 비전드림 두려움 해체기는, 그 거대한 일을 단 몇 분이면 되는 아주 작은 첫 걸음으로 쪼개 줘. 보고서 쓰기가 아니라, 그냥 문서 열고 제목만 적기. 이 정도면 시작할 만하지? 일단 시작만 하면, 나머지는 알아서 따라와. 자, 그 작은 한 걸음부터 같이 해보자.",
    },
    {
      kind: "youtube", slug: "vision-board", id: "tXGQS-dHYRg",
      title: "꿈이 흐릿하지 않아?", sub: "이미지로 한눈에 — 비전보드",
      transcript: "요즘, 네 꿈이 좀 흐릿하지 않아? 뭘 원하는지 말로는 잘 안 나오고, 그냥 막연하지. 사실 꿈은 글자로만 적어 두면 금방 잊혀. 눈에 보여야 마음이 따라가거든. 비전드림 비전보드는, 네가 되고 싶은 모습이랑 이루고 싶은 꿈을 이미지로 붙여서 한눈에 보이게 해 줘. 그리고 그 꿈을 목표랑 오늘 할 일까지 쭉 연결해 주지. 매일 그 보드를 보다 보면, 어느새 마음이 그쪽으로 기울더라. 자, 오늘은 네 꿈을 한번 눈에 보이게 만들어 보자.",
    },
    {
      kind: "youtube", slug: "weekly-review", id: "MmM2nk1aTjo",
      title: "계획이 자꾸 흐지부지돼?", sub: "주 10분 회고로 끝까지 — 주간 회고",
      transcript: "계획이 자꾸 흐지부지되지? 그거, 의지가 약해서가 아니야. 한 번 세우고 다시 안 봐서 그래. 계획은 세우는 게 아니라 굴리는 거거든. 일주일에 딱 십 분이면 돼. 이번 주에 뭐가 됐고 뭐가 안 됐는지 그냥 들여다보고, 다음 주에 바꿀 거 딱 하나만 정하는 거야. 비전드림 주간 회고가 이걸 같이 해 줘. 네 할 일이 어떤 목표랑 이어지는지 보여 주니까, 체크만 하는 게 아니라 방향을 다시 맞추게 돼. 자, 이번 주는 십 분만 돌아보자.",
    },
    {
      kind: "youtube", slug: "motivation", id: "rdc_-4ZW1Zg",
      title: "의욕 생기면 하려고?", sub: "행동이 먼저 — 성공의 나무",
      transcript: "의욕 생기면 시작하려고? 그러다 평생 못 시작해. 사실은 반대거든. 의욕이 나서 움직이는 게 아니라, 조금 움직이면 의욕이 따라오는 거야. 그러니까 느낌을 기다리지 말고, 그냥 이 분짜리로 시작해. 비전드림은 그 작은 한 걸음을 네 비전이랑 연결해 주고, 할 때마다 성공의 나무가 자라는 게 눈에 보여. 안 보이던 노력이 보이면, 계속하게 되거든. 의욕은 나중에 따라와. 오늘은 딱 한 걸음만 떼자.",
    },
    {
      kind: "youtube", slug: "ai-coach", id: "EAefuXrEY3w",
      title: "뭘 해야 할지 막막할 때", sub: "비전에서 오늘 할 일까지 — AI 코치",
      transcript: "목표는 있는데 뭘 해야 할지 막막할 때, 가장 어려운 건 빈 페이지예요. 그때 AI 코치를 써 보세요. 비전드림 AI 코치는 되고 싶은 미래를 한 문장만 적으면, 꿈과 목표, 오늘 할 일까지 초안을 쭉 짜 줍니다. 중요한 건, 그게 정답이 아니라 초안이라는 거예요. 초안은 AI가, 결정은 내가. 마음에 안 드는 건 고치고, 내 말로 바꾸면 됩니다. 그렇게 다듬은 계획이 진짜 내 계획이 돼요. 빈 페이지는 AI한테 맡기고, 오늘 한 걸음을 시작해 봐요.",
    },
  ],
  en: [
    {
      kind: "youtube", slug: "habit-tracker", id: "bwV4tAkLmBE",
      title: "Quit again?", sub: "Not willpower — a system",
      transcript: "Hey, hey — quit again after like three days? Relax, it's not that your willpower is weak. You just can't see what to actually do today. A big resolution cools off in three days, every single time. But one tiny habit tied to your dream stacks up, day after day. That's exactly what VisionDream's habit tracker does. It pins a small daily habit right onto your goal. Every time you check it off, your streak grows, and little fruits pop up on your Success Tree. You're not white-knuckling it on willpower — the system carries you. So come on, let's just start with one today.",
    },
    {
      kind: "youtube", slug: "morning-habit", id: "3T45MqdsqNk",
      title: "Slept through it?", sub: "One tiny morning habit",
      transcript: "Missed your miracle morning again? Hey, it's okay — waking up at five isn't a willpower thing. The trick isn't waking up early, it's knowing exactly what to do once you're up. So drop just one tiny morning habit into VisionDream. The moment you open your eyes, today's one small thing is right there waiting. You check that one box, and your day's already started. Stack a few days, and suddenly that's just your morning now. So tomorrow? Just one thing. You got this.",
    },
    {
      kind: "youtube", slug: "weekly-review", id: "qePuv8oNdFs",
      title: "Plans keep fizzling?", sub: "10 minutes a week — weekly review",
      transcript: "Your plans keep fizzling out, huh? That's not weak willpower. It's that you set the plan once and never look at it again. A plan isn't something you set, it's something you roll. Ten minutes a week is all it takes. Just look at what worked and what didn't, then pick one thing to change next week. VisionDream's weekly review does this with you. It shows how today's tasks connect to your goals, so you're not just checking boxes, you're realigning. Come on, let's take ten minutes this week.",
    },
    {
      kind: "youtube", slug: "motivation", id: "gQTrNh0nWic",
      title: "Waiting to feel motivated?", sub: "Action first — Tree of Success",
      transcript: "Gonna start once you feel motivated? You'll be waiting forever. It actually works the other way around. You don't move because you feel motivated, you feel motivated because you moved a little. So stop waiting for the feeling and just start with a two-minute version. VisionDream ties that tiny step to your vision, and every time you do it, you watch your Success Tree grow. When effort becomes visible, you keep going. The motivation catches up later. Let's just take one step today.",
    },
    {
      kind: "youtube", slug: "ai-coach", id: "oLmN3oP3LJA",
      title: "Stuck on where to start?", sub: "Vision to today — AI coach",
      transcript: "When you have a goal but no idea what to do, the hardest part is the blank page. That's where an AI coach helps. With VisionDream's AI coach, you write one sentence about the future you want, and it drafts your dreams, your goals, even today's tasks. The key thing: that's a draft, not gospel. AI writes the draft, you make the decisions. Change what doesn't fit, put it in your own words. A plan you've edited becomes truly yours. Let AI beat the blank page, and take one step today.",
    },
    {
      kind: "youtube", slug: "fear-breaker", id: "6VIKqL0xuDM",
      title: "Want to drop everything?", sub: "The smallest step — Fear Buster",
      transcript: "There are days you just want to drop everything. That isn't because you're weak. It's because you've carried too much, alone, for too long. On days like this, you don't need a bigger goal, you need the smallest possible step. VisionDream reflects back why you started in the first place. And it breaks something that looks huge into a step that takes just a few minutes. No one's asking you to climb the whole mountain at once. Today, just one step. That's enough. Let's start again, slowly.",
    },
    {
      kind: "youtube", slug: "dream-reverse-design", id: "WyKRdWjMBpw",
      title: "Same plan as last year?", sub: "Backwards from the future — Dream Backcasting",
      transcript: "Be honest, you're making the same plan as last year, right? First page of the planner all filled in, and by February it's blank. That's not because you failed. It's that there was a big goal sitting there with no path down to today. VisionDream goes backwards. You lock in the future you want first, then it works back through the year, the month, this week, all the way to what you do today. So instead of a vague resolution, you can actually see what to do right now. This year, let's design it backwards from the future.",
    },
    {
      kind: "youtube", slug: "first-step", id: "-7OpdOPJHPI",
      title: "Still putting it off?", sub: "A tiny first step — Fear Buster",
      transcript: "That thing, you know you have to do it, and you're still putting it off, right? It's okay, you're not lazy. It just looks so big and vague that starting feels scary, so you keep doing other stuff. VisionDream's Fear Buster takes that huge thing and breaks it into a tiny first step that takes just a few minutes. Not write the whole report, just open the doc and type the title. That's doable, right? Once you start, the rest follows on its own. Come on, let's take that one small step together.",
    },
    {
      kind: "youtube", slug: "vision-board", id: "tYID0rAqup0",
      title: "Dream gone blurry?", sub: "See it at a glance — Vision Board",
      transcript: "Lately, has your dream gotten a little blurry? You can't quite put what you want into words, it just feels vague. Honestly, a dream written only in text fades fast. It has to be seen for your heart to follow. VisionDream's vision board lets you pin up images of who you want to become and what you want to achieve, all in one view. Then it connects that dream to your goals and today's tasks. Look at that board every day, and before you know it, your heart leans that way. Let's make your dream something you can see today.",
    },
  ],
  ja: [
    {
      kind: "youtube", slug: "habit-tracker", id: "9bEeXuZiONs",
      title: "また三日坊主?", sub: "意志じゃなくシステム",
      transcript: "ねえねえ、また三日坊主でしょ? 大丈夫、意志が弱いわけじゃないよ。ただ、今日何をすればいいかが見えてないだけなんだ。大きな決心ひとつは、三日で冷めちゃうもんね。でもさ、夢とつながった小さな習慣ひとつは、毎日ちゃんと積み重なるんだよ。ビジョンドリームの習慣トラッカーが、まさにそれ。きみの目標に、今日の小さな習慣をぽんと結びつけてくれる。チェックするたびに連続記録が伸びて、成功の木に実がひとつずつなるんだ。意志で耐えるんじゃなくて、システムがきみを連れていってくれる。さあ、今日ひとつだけ、一緒に始めよう。",
    },
    {
      kind: "youtube", slug: "morning-habit", id: "xzAaCtALkxQ",
      title: "また寝坊?", sub: "朝の習慣ひとつ",
      transcript: "またミラクルモーニング失敗した? 大丈夫、早起きって意志でどうにかなるもんじゃないんだ。大事なのは早く起きることじゃなくて、起きて何をするかが決まってること。ビジョンドリームに、朝の習慣をひとつだけ登録してみて。目を開けたら、今日やる小さなことがちゃんと待ってる。それをひとつチェックするだけで、一日が始まるんだ。何日か続けば、いつのまにかそれがきみの朝になる。じゃあ明日は、ひとつだけ。きっとできるよ。",
    },
    {
      kind: "youtube", slug: "weekly-review", id: "QMqAbt9WmYc",
      title: "計画、すぐ尻すぼみ?", sub: "週10分の振り返り — 週間レビュー",
      transcript: "計画がすぐ尻すぼみになるよね? それ、意志が弱いんじゃないよ。一度立てたきり、二度と見ないからなんだ。計画は立てるものじゃなくて、回すもの。週にたった十分でいい。今週、何ができて何ができなかったかを見て、来週変える一つだけ決める。ビジョンドリームの週間振り返りが、これを一緒にやってくれる。きみのやることがどの目標とつながってるか見せてくれるから、チェックするだけじゃなくて、方向を合わせ直せるんだ。さあ、今週は十分だけ振り返ろう。",
    },
    {
      kind: "youtube", slug: "motivation", id: "LR0XOdT79qc",
      title: "やる気が出たらやる?", sub: "行動が先 — 成功の樹",
      transcript: "やる気が出たら始めようと思ってる? それじゃ一生始められないよ。実は逆なんだ。やる気が出るから動くんじゃなくて、ちょっと動くからやる気がついてくる。だから気持ちを待たないで、二分だけのやつで始めてみて。ビジョンドリームは、その小さな一歩をきみのビジョンとつなげてくれる。やるたびに、成功の樹が育っていくのが目で見える。見えなかった努力が見えると、続けられるんだ。やる気は後からついてくる。今日は一歩だけ踏もう。",
    },
    {
      kind: "youtube", slug: "ai-coach", id: "nW8HNAaQe7s",
      title: "何から始めるか迷う?", sub: "ビジョンから今日へ — AIコーチ",
      transcript: "目標はあるのに何をすればいいか分からないとき、いちばん難しいのは白紙です。そんなときはAIコーチを使ってみてください。ビジョンドリームのAIコーチは、なりたい未来を一文書くだけで、夢と目標、今日やることまで下書きを作ってくれます。大事なのは、それが正解じゃなくて下書きだということ。下書きはAI、決めるのは自分。合わないところは直して、自分の言葉に変えればいい。そうして整えた計画が、本当に自分のものになります。白紙はAIに任せて、今日一歩を始めましょう。",
    },
    {
      kind: "youtube", slug: "fear-breaker", id: "0SCFaKc7h5I",
      title: "全部投げ出したい日に", sub: "いちばん小さな一歩 — 恐れ解体",
      transcript: "全部投げ出したくなる日、ありますよね。それはあなたが弱いからじゃありません。長いあいだ、一人で、抱えすぎたからです。そんなときに必要なのは、もっと大きな目標じゃなくて、いちばん小さな一歩です。ビジョンドリームは、あなたがなぜ始めたのか、そのビジョンをもう一度映してくれます。そして、大きく見えることを、数分で終わる小さな一歩に分けてくれる。山を一気に登れなんて言いません。今日は、ただ一歩。それで十分です。もう一度、ゆっくり始めましょう。",
    },
    {
      kind: "youtube", slug: "dream-reverse-design", id: "tkBpV2rnKhU",
      title: "今年も去年と同じ計画?", sub: "未来から逆算 — 夢の逆算設計",
      transcript: "正直さ、今年の計画、去年と同じように立ててるでしょ? 手帳の最初のページだけびっしり書いて、二月にはまっ白。それ、きみができないからじゃないんだ。大きな目標だけがぽつんとあって、そこから今日まで降りてくる道がないからなんだよ。ビジョンドリームは逆に進む。なりたい未来を先に決めて、そこから一年、ひと月、今週、そして今日やることまで逆算してくれる。だから、ぼんやりした決意じゃなくて、今すぐ何をするかが見えるんだ。今年は、未来から逆算して設計してみよう。",
    },
    {
      kind: "youtube", slug: "first-step", id: "Mv852GyDkUQ",
      title: "まだ先延ばし?", sub: "小さな最初の一歩 — 恐れ解体",
      transcript: "あれ、やらなきゃって分かってるのに、まだ先延ばししてるでしょ? 大丈夫、怠けてるんじゃないよ。そのことが大きくて漠然として見えるから、始めるのが怖いだけ。だからつい別のことをしちゃうんだ。ビジョンドリームの恐れ解体は、その大きなことを、数分で終わるすごく小さな最初の一歩に分けてくれる。報告書を書くんじゃなくて、ただ文書を開いてタイトルだけ打つ。これならできるでしょ? 一度始めれば、あとは勝手についてくる。さあ、その小さな一歩から一緒にやろう。",
    },
    {
      kind: "youtube", slug: "vision-board", id: "6HNeG_8QPQ4",
      title: "夢、ぼやけてきた?", sub: "画像で一目で — ビジョンボード",
      transcript: "最近、夢が少しぼやけてきてない? 何がほしいのか言葉にうまくならなくて、ただ漠然としてる。じつはね、夢って文字だけで書いておくと、すぐに忘れちゃうの。目に見えてこそ、心がついていくんだ。ビジョンドリームのビジョンボードは、なりたい姿やかなえたい夢を画像で貼って、一目で見えるようにしてくれる。そしてその夢を、目標や今日やることまでつなげてくれるの。毎日そのボードを見ていると、いつのまにか心がそっちに傾いていく。さあ、今日は夢を目に見える形にしてみよう。",
    },
  ],
};

export function videosFor(lang: Lang): VideoItem[] {
  return VIDEOS_BY_LANG[lang] ?? VIDEOS_BY_LANG.ko;
}

export function videoBySlug(lang: Lang, slug: string): VideoItem | undefined {
  return videosFor(lang).find((v) => v.slug === slug);
}

/** 특정 슬러그를 보유한 언어 목록 (hreflang 대체 링크용) */
export function langsForSlug(slug: string): Lang[] {
  return (["ko", "en", "ja"] as Lang[]).filter((l) => videosFor(l).some((v) => v.slug === slug));
}

/** 로케일별 영상 상세/목록 URL (ko=prefix 없음) */
export function videoHref(lang: Lang, slug: string): string {
  return lang === "ko" ? `/videos/${slug}` : `/${lang}/videos/${slug}`;
}
export function videosIndexHref(lang: Lang): string {
  return lang === "ko" ? "/videos" : `/${lang}/videos`;
}

/** 하위호환: 기존 한국어 홈 import */
export const HOME_VIDEOS: VideoItem[] = VIDEOS_BY_LANG.ko;

const SITE = "https://visiondream.kr";
const VIDEO_UPLOAD_DATE = "2026-06-21";

/** 동영상 사이트맵 항목(Next.js sitemap `videos` 형식) — 색인 가속. */
export function videoSitemap(lang: Lang) {
  return videosFor(lang).map((v) =>
    v.kind === "youtube"
      ? {
          title: v.title,
          thumbnail_loc: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
          description: (v.transcript ?? v.sub ?? v.title).slice(0, 2000),
          player_loc: `https://www.youtube.com/embed/${v.id}`,
        }
      : {
          title: v.title,
          thumbnail_loc: `${SITE}${v.poster ?? v.src}`,
          description: (v.transcript ?? v.sub ?? v.title).slice(0, 2000),
          content_loc: `${SITE}${v.src}`,
        },
  );
}

/**
 * 단일 영상 VideoObject(JSON-LD). 상세 페이지는 transcript 포함(본문 색인),
 * 홈/목록은 가볍게(transcript 제외) + 상세 페이지 URL을 가리킴.
 */
export function videoObjectLd(
  v: VideoItem,
  lang: Lang,
  opts?: { includeTranscript?: boolean },
): object {
  const url = `${SITE}${videoHref(lang, v.slug)}`;
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.sub ?? v.title,
    uploadDate: VIDEO_UPLOAD_DATE,
    url,
    publisher: { "@type": "Organization", name: "비전드림", logo: { "@type": "ImageObject", url: `${SITE}/icon.png` } },
  };
  if (opts?.includeTranscript && v.transcript) base.transcript = v.transcript;
  if (v.kind === "youtube") {
    base.thumbnailUrl = [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`];
    base.embedUrl = `https://www.youtube.com/embed/${v.id}`;
  } else {
    if (v.poster) base.thumbnailUrl = [`${SITE}${v.poster}`];
    base.contentUrl = `${SITE}${v.src}`;
    base.duration = "PT36S";
  }
  return base;
}

/** 홈/목록용: 언어별 전체 영상의 VideoObject 배열(대본 제외). */
export function videosJsonLd(lang: Lang): object[] {
  return videosFor(lang).map((v) => videoObjectLd(v, lang));
}
