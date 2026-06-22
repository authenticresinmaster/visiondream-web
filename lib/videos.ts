/**
 * 홈페이지 영상 목록 — 언어별(ko/en/ja). 로컬 MP4(/public/videos) 또는 유튜브 지원.
 * transcript(대본): 검색엔진이 영상 내용을 텍스트로 색인 → 검색 노출. 페이지 표시 + VideoObject 스키마 모두 사용.
 */
export type VideoItem =
  | { kind: "local"; src: string; poster?: string; title: string; sub?: string; transcript?: string }
  | { kind: "youtube"; id: string; title: string; sub?: string; transcript?: string };

export type Lang = "ko" | "en" | "ja";

export const VIDEOS_BY_LANG: Record<Lang, VideoItem[]> = {
  ko: [
    {
      kind: "youtube", id: "kV_PRykMwJc",
      title: "작심삼일, 또?", sub: "의지가 아니라 시스템 — 습관 트래커",
      transcript: "야, 또 작심삼일이지? 괜찮아. 네 의지가 약한 게 절대 아니야. 그냥 오늘 뭘 해야 할지가 안 보여서 그래. 거창한 결심 하나는 딱 사흘이면 식어 버리거든. 그런데 네 꿈이랑 연결된 작은 습관 하나는 매일매일 쌓여 가. 비전드림 습관 트래커가 바로 그걸 해 줘. 네 목표에 하루치 작은 습관을 하나 붙여 주는 거야. 체크할 때마다 연속 기록이 이어지고, 성공의 나무에 열매가 하나씩 열려. 의지로 버티는 게 아니라 시스템이 너를 끌고 가는 거지. 자, 오늘 딱 하나만 같이 시작해 보자.",
    },
    {
      kind: "youtube", id: "JGaKMhKrE-Q",
      title: "미라클모닝, 또 늦잠?", sub: "아침 습관 하나로 — 습관 트래커",
      transcript: "또 미라클모닝 실패했어? 괜찮아, 엄마도 알아. 새벽에 일어나는 거, 의지로 되는 게 아니더라. 중요한 건 일찍 일어나는 게 아니라 일어나서 뭘 할지가 정해져 있는 거야. 그러니까 비전드림에 아침 습관을 딱 하나만 등록해 둬. 그럼 눈을 떴을 때 오늘 할 작은 한 가지가 이미 떠 있어. 그거 하나 체크하면서 가볍게 하루를 시작하는 거지. 며칠만 쌓이면 어느새 그게 너의 아침이 되더라. 그러니까 내일은 딱 하나만 같이 해보자. 엄마가 응원할게.",
    },
    {
      kind: "youtube", id: "_nWOfFQGBuc",
      title: "다 놓고 싶은 날", sub: "작은 한 걸음 — 두려움 해체기",
      transcript: "다 놓아 버리고 싶은 날, 분명 있죠. 그건 당신이 약해서가 아니에요. 너무 오래, 너무 많은 걸 혼자 짊어졌기 때문이에요. 이럴 땐 더 큰 목표가 아니라 가장 작은 한 걸음이 필요합니다. 비전드림은 당신이 왜 시작했는지 그 비전을 다시 비춰 줍니다. 그리고 거대해 보이는 일을 단 몇 분이면 되는 작은 한 걸음으로 잘게 쪼개 줘요. 큰 산을 단숨에 오르라는 게 아니에요. 오늘은 그냥 한 걸음. 그거면 충분합니다. 다시 천천히 시작해요.",
    },
    {
      kind: "youtube", id: "L1sL_h21afU",
      title: "올해도 작년이랑 똑같지?", sub: "미래에서 오늘로 역산 — 꿈 역설계",
      transcript: "야, 올해 계획. 작년이랑 또 똑같이 세우고 있지? 다이어리 앞장만 빼곡하게 적어 놓고, 2월이면 텅 비잖아. 그건 네가 못해서가 절대 아니야. 큰 목표만 덩그러니 있고, 거기서 오늘까지 내려오는 길이 없어서 그래. 비전드림은 거꾸로 가. 네가 되고 싶은 미래를 먼저 딱 정하고, 거기서 일 년, 한 달, 이번 주, 그리고 오늘 할 일까지 쭉 역산해 줘. 그러니까 막막한 다짐이 아니라, 오늘 당장 뭘 할지가 눈에 딱 보이는 거지. 올해는 미래에서부터 거꾸로 한번 설계해 보자.",
    },
    {
      kind: "youtube", id: "_fkfjzqQc1g",
      title: "그거, 아직도 안 했지?", sub: "작은 첫 걸음 — 두려움 해체기",
      transcript: "야, 그거. 해야 하는 거 알면서, 아직도 미루고 있지? 괜찮아, 네가 게을러서가 아니야. 그 일이 너무 크고 막막해 보여서, 시작이 무서운 거야. 그래서 자꾸 딴 걸 하게 되는 거고. 비전드림 두려움 해체기는, 그 거대한 일을 단 몇 분이면 되는 아주 작은 첫 걸음으로 쪼개 줘. 보고서 쓰기가 아니라, 그냥 문서 열고 제목만 적기. 이 정도면 시작할 만하지? 일단 시작만 하면, 나머지는 알아서 따라와. 자, 그 작은 한 걸음부터 같이 해보자.",
    },
    {
      kind: "youtube", id: "tXGQS-dHYRg",
      title: "꿈이 흐릿하지 않아?", sub: "이미지로 한눈에 — 비전보드",
      transcript: "요즘, 네 꿈이 좀 흐릿하지 않아? 뭘 원하는지 말로는 잘 안 나오고, 그냥 막연하지. 사실 꿈은 글자로만 적어 두면 금방 잊혀. 눈에 보여야 마음이 따라가거든. 비전드림 비전보드는, 네가 되고 싶은 모습이랑 이루고 싶은 꿈을 이미지로 붙여서 한눈에 보이게 해 줘. 그리고 그 꿈을 목표랑 오늘 할 일까지 쭉 연결해 주지. 매일 그 보드를 보다 보면, 어느새 마음이 그쪽으로 기울더라. 자, 오늘은 네 꿈을 한번 눈에 보이게 만들어 보자.",
    },
  ],
  en: [
    {
      kind: "youtube", id: "bwV4tAkLmBE",
      title: "Quit again?", sub: "Not willpower — a system",
      transcript: "Hey, hey — quit again after like three days? Relax, it's not that your willpower is weak. You just can't see what to actually do today. A big resolution cools off in three days, every single time. But one tiny habit tied to your dream stacks up, day after day. That's exactly what VisionDream's habit tracker does. It pins a small daily habit right onto your goal. Every time you check it off, your streak grows, and little fruits pop up on your Success Tree. You're not white-knuckling it on willpower — the system carries you. So come on, let's just start with one today.",
    },
    {
      kind: "youtube", id: "3T45MqdsqNk",
      title: "Slept through it?", sub: "One tiny morning habit",
      transcript: "Missed your miracle morning again? Hey, it's okay — waking up at five isn't a willpower thing. The trick isn't waking up early, it's knowing exactly what to do once you're up. So drop just one tiny morning habit into VisionDream. The moment you open your eyes, today's one small thing is right there waiting. You check that one box, and your day's already started. Stack a few days, and suddenly that's just your morning now. So tomorrow? Just one thing. You got this.",
    },
  ],
  ja: [
    {
      kind: "youtube", id: "9bEeXuZiONs",
      title: "また三日坊主?", sub: "意志じゃなくシステム",
      transcript: "ねえねえ、また三日坊主でしょ? 大丈夫、意志が弱いわけじゃないよ。ただ、今日何をすればいいかが見えてないだけなんだ。大きな決心ひとつは、三日で冷めちゃうもんね。でもさ、夢とつながった小さな習慣ひとつは、毎日ちゃんと積み重なるんだよ。ビジョンドリームの習慣トラッカーが、まさにそれ。きみの目標に、今日の小さな習慣をぽんと結びつけてくれる。チェックするたびに連続記録が伸びて、成功の木に実がひとつずつなるんだ。意志で耐えるんじゃなくて、システムがきみを連れていってくれる。さあ、今日ひとつだけ、一緒に始めよう。",
    },
    {
      kind: "youtube", id: "xzAaCtALkxQ",
      title: "また寝坊?", sub: "朝の習慣ひとつ",
      transcript: "またミラクルモーニング失敗した? 大丈夫、早起きって意志でどうにかなるもんじゃないんだ。大事なのは早く起きることじゃなくて、起きて何をするかが決まってること。ビジョンドリームに、朝の習慣をひとつだけ登録してみて。目を開けたら、今日やる小さなことがちゃんと待ってる。それをひとつチェックするだけで、一日が始まるんだ。何日か続けば、いつのまにかそれがきみの朝になる。じゃあ明日は、ひとつだけ。きっとできるよ。",
    },
  ],
};

export function videosFor(lang: Lang): VideoItem[] {
  return VIDEOS_BY_LANG[lang] ?? VIDEOS_BY_LANG.ko;
}

/** 하위호환: 기존 한국어 홈 import */
export const HOME_VIDEOS: VideoItem[] = VIDEOS_BY_LANG.ko;

const SITE = "https://visiondream.kr";
const VIDEO_UPLOAD_DATE = "2026-06-21";

/**
 * 구글 동영상 검색·리치결과용 VideoObject(JSON-LD). 대본(transcript) 포함 → 영상 내용이 검색에 색인.
 * 로컬 MP4=contentUrl, 유튜브=embedUrl. (유튜브 발행 시 자동으로 더 강력)
 */
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

export function videosJsonLd(lang: Lang): object[] {
  return videosFor(lang).map((v) => {
    const base: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: v.title,
      description: v.sub ?? v.title,
      uploadDate: VIDEO_UPLOAD_DATE,
      publisher: { "@type": "Organization", name: "비전드림", logo: { "@type": "ImageObject", url: `${SITE}/icon.png` } },
    };
    if (v.transcript) base.transcript = v.transcript;
    if (v.kind === "youtube") {
      base.thumbnailUrl = [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`];
      base.embedUrl = `https://www.youtube.com/embed/${v.id}`;
    } else {
      if (v.poster) base.thumbnailUrl = [`${SITE}${v.poster}`];
      base.contentUrl = `${SITE}${v.src}`;
      base.duration = "PT36S";
    }
    return base;
  });
}
