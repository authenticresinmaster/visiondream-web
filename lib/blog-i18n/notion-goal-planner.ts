import type { Post } from "../posts";

export const en: Post = {
  slug: "notion-goal-planner",
  title: "Build a Goal Planner in Notion (Year → Month → Week, Actually Connected)",
  description:
    "You made a beautiful planner and stopped opening it after three days. The problem usually isn't the template — it's that your yearly, monthly, and weekly plans aren't linked. Here's how to build a connected goal planner in Notion, step by step, so a big goal turns into today's task.",
  date: "2026-07-11",
  updated: "2026-07-11",
  category: "Goal Management",
  readMinutes: 7,
  emoji: "🗂️",
  cover: "/blog/notion-goal-planner.svg",
  body: `"Get healthy." "Grow the business." These feel like plans, but they're too big to start — and a goal you can't start is a goal you'll forget. If you've ever built a gorgeous planner and quietly abandoned it after a few days, the culprit usually isn't your discipline or your template. It's that your **yearly, monthly, and weekly plans live in separate boxes** that never talk to each other.

A big goal only becomes real when it's broken down to the size of **today's task**. That's exactly what a connected planner does: it carries one yearly goal down through the month and the week until it lands on something you can actually do this afternoon. Notion is a great place to build it, because everything links.

> **Key takeaways**
> - "Get healthy" feels impossible because it's **too big** — shrink it to today's-task size
> - Most planners fail because year, month, and week **aren't linked**, not because they're ugly
> - Build **one master goal database** and let month and week views filter from it
> - The point isn't a pretty template — it's that a big goal reliably becomes **today's action**

![A goal planner connecting yearly, monthly, weekly and today in Notion](/blog/notion-goal-planner.svg)

## Why the pretty planner stops working

Watch how most planners die. You set a shiny yearly goal in January. February's monthly page is a blank grid you fill with whatever's on your mind. This week's to-do list is whatever screamed loudest this morning. Three separate documents, three separate moods — and none of them point at each other. So the yearly goal sits on page one, untouched, while your weeks fill up with busywork that has nothing to do with it.

A planner isn't a diary; it's a **delivery system** that moves a goal from "someday" to "today." If the year doesn't reach the week, the delivery never happens. (Turning a vague wish into something concrete is the "Thinking" step in [Success = Belief × Thinking × Action](/en/blog/success-formula-bta).)

| Disconnected planner | Connected planner |
| --- | --- |
| Year, month, week are separate docs | One goal flows down all three levels |
| Weekly list = whatever's loudest today | Weekly list = this month's goal, sliced |
| "Did I move my yearly goal?" — no idea | Every week visibly serves the year |
| Pretty for 3 days, then ignored | Reopened because it drives today |

## Build it in Notion: 4 connected levels

The whole trick is **one source of truth** — a single goal database — with month and week as filtered views of it, not separate lists.

### 1. Create one master goal database
Make a database called **Goals**. Add properties: \`Title\`, \`Level\` (select: Year / Month / Week), \`Parent goal\` (a relation pointing back to the same database), \`Status\`, and \`Due\`. That \`Parent goal\` relation is the magic — it's what lets a weekly goal remember which monthly goal it belongs to, and which yearly goal above that.

### 2. Write 3–5 yearly goals, then break each into months
Set \`Level = Year\` for your handful of big goals. For each one, ask: "What has to be true by the end of this month for this to happen?" Create those as \`Level = Month\` entries and set their \`Parent goal\` to the yearly one. A year goal of "run a 10k" becomes March's "run 3km without stopping."

### 3. Slice this month into weekly one-things
Take the current month's goal and cut it into weeks. Each week gets **one** clear target — its "one thing" — as a \`Level = Week\` entry whose \`Parent goal\` is the month. "Run 3km this month" becomes "add 500m to my long run this week."

### 4. Pull the week down to today
Create a filtered view — **This week** — that shows only \`Level = Week\` items due now. Every morning, your job is tiny: turn this week's one thing into one action for today. The big goal is already three cuts smaller; today's task is finally graspable.

## Example: from "get healthy" to this afternoon

> **Year:** Run a 10k by December.
> **Month (July):** Run 3km without stopping.
> **Week:** Extend my long run to 1.5km.
> **Today:** Jog the loop around the park, once.

Notice the last line does all the work. The yearly goal set the direction; the parent-goal links carried it down; but it's "jog the loop, once" that you actually do. A planner that stops one level short — at the week — is a planner you'll admire and ignore. Push it all the way to today. (Working backward from the deadline like this is [backcasting](/en/blog/backcasting-goal-setting), and each level can be sharpened with a [SMART goal](/en/blog/smart-goal-setting).)

## 🌱 Run it in VisionDream

Building this in Notion teaches the structure; keeping it alive every day is the hard part. VisionDream is built around this exact ladder — its **4-level planner** (yearly, monthly, weekly, daily) links each item to its parent goal automatically, so a yearly goal always shows up as something on today's list. Daily tasks carry an **A/B/C priority**, unfinished ones **roll over on their own**, and each week asks for a single **weekly one-thing** — the same "one cut per level" idea, without wiring relations by hand. The structure is yours; the app just keeps the year reaching your today. Plant your vision, and the fruit will come. 🌱`,
  faq: [
    {
      q: "Why do I keep abandoning my planner after a few days?",
      a: "Usually it's not discipline or the template — it's that your yearly, monthly, and weekly plans aren't connected. When the year never reaches the week, your daily list fills with busywork unrelated to your real goals, so the planner feels pointless and you stop opening it. Linking the levels fixes this.",
    },
    {
      q: "How do I connect yearly, monthly, and weekly goals in Notion?",
      a: "Build one master 'Goals' database with a 'Level' property (Year/Month/Week) and a 'Parent goal' relation that points back to the same database. Set each monthly goal's parent to a yearly goal, and each weekly goal's parent to a monthly one. Then create filtered views so 'this month' and 'this week' pull from the same source instead of being separate lists.",
    },
    {
      q: "What's the most important step so a big goal actually gets done?",
      a: "Pushing it all the way down to today's task. A big goal like 'run a 10k' has to be cut through month and week until it becomes something small and concrete you can do this afternoon, like 'jog the loop once.' A planner that stops at the weekly level is one you'll admire but never act on.",
    },
    {
      q: "How does VisionDream help with a connected planner?",
      a: "Its 4-level planner (yearly, monthly, weekly, daily) links each item to its parent goal automatically, so a yearly goal always appears as something on today's list. Daily tasks get an A/B/C priority, unfinished ones roll over on their own, and each week asks for a single weekly one-thing — the same structure you'd build in Notion, maintained for you.",
    },
  ],
};

export const ja: Post = {
  slug: "notion-goal-planner",
  title: "Notionで目標達成の計画表を作る(年→月→週がつながる構造)",
  description:
    "きれいな計画表を作ったのに、数日で開かなくなった。原因はたいていテンプレートではなく、年間・月間・週間の計画が連動していないことです。Notionでつながった目標計画表を段階的に作り、大きな目標を「今日やること」に変える方法を紹介します。",
  date: "2026-07-11",
  updated: "2026-07-11",
  category: "目標管理",
  readMinutes: 7,
  emoji: "🗂️",
  cover: "/blog/notion-goal-planner.svg",
  body: `「健康になる」「事業を伸ばす」。計画っぽく聞こえますが、大きすぎて始められません。そして始められない目標は、忘れる目標です。美しい計画表を作ったのに数日で放置した経験があるなら、原因はたいてい意志の弱さでもテンプレートでもありません。**年間・月間・週間の計画が別々の箱に入っていて、互いに話しかけない**ことです。

大きな目標は、**今日やること**の大きさまで割ったときに初めて現実になります。連動した計画表がやるのは、まさにそれ。ひとつの年間目標を、月・週を通して降ろし、今日の午後にできる何かに着地させます。すべてがリンクするNotionは、それを作るのにうってつけです。

> **この記事の要点**
> - 「健康になる」が無理に感じるのは**大きすぎる**から — 今日やることの大きさに縮める
> - 計画表が続かないのは、見た目ではなく年・月・週が**つながっていない**から
> - **ひとつの目標データベース**を作り、月・週はそれを絞り込んだビューにする
> - 目的はきれいなテンプレートではなく、大きな目標が確実に**今日の行動**になること

![Notionで年間・月間・週間・今日をつなぐ目標計画表](/blog/notion-goal-planner.svg)

## なぜきれいな計画表は続かないのか

多くの計画表の死に方はこうです。1月に輝く年間目標を立てる。2月の月間ページは空のマス目で、そのとき頭にあることで埋める。今週のToDoは、今朝いちばん大声だったもの。3つの別々の文書、3つの別々の気分 — そしてどれも互いを指していません。だから年間目標は1ページ目で手つかずのまま、週はそれと関係ない雑務で埋まります。

計画表は日記ではなく、目標を「いつか」から「今日」へ運ぶ**配送システム**です。年が週に届かなければ、配送は起きません。(漠然とした願いを具体的にするのは、[成功 = 信念 × 思考 × 行動](/ja/blog/success-formula-bta)の「思考」の段階です。)

| つながっていない計画表 | つながった計画表 |
| --- | --- |
| 年・月・週が別々の文書 | ひとつの目標が3階層に流れる |
| 週リスト=今日いちばん大声のもの | 週リスト=今月の目標を切り分けたもの |
| 「年間目標を進めた?」— 分からない | 毎週が目に見えて年に奉仕する |
| 3日きれい、その後は無視 | 今日を動かすから再び開く |

## Notionで作る:つながった4階層

コツはただひとつ、**唯一の出所** — ひとつの目標データベース — を作り、月と週をその絞り込みビューにすること。別々のリストにしないことです。

### 1. ひとつの目標データベースを作る
**目標**というデータベースを作ります。プロパティは \`タイトル\`、\`レベル\`(選択:年/月/週)、\`親目標\`(同じデータベースを指すリレーション)、\`ステータス\`、\`期限\`。この \`親目標\` リレーションが魔法です — 週の目標が、どの月の目標に属し、その上のどの年間目標に属するかを覚えていられます。

### 2. 年間目標を3〜5個書き、それぞれを月に割る
大きな目標いくつかに \`レベル=年\` を設定。それぞれについて「これが起きるには、今月末までに何が真であればいい?」と問います。それを \`レベル=月\` の項目として作り、\`親目標\` を年間目標にします。「10km走る」という年間目標は、3月の「休まず3km走る」になります。

### 3. 今月を週ごとの「ひとつのこと」に切る
今月の目標を週に切り分けます。各週には**ひとつ**の明確な的 — その「ひとつのこと」 — を \`レベル=週\`(\`親目標\`は月)として与えます。「今月3km走る」は「今週ロング走に500m足す」になります。

### 4. 週を今日まで引き下ろす
絞り込みビュー — **今週** — を作り、期限が今の \`レベル=週\` だけを表示します。毎朝の仕事はごく小さい:今週のひとつのことを、今日のひとつの行動に変えるだけ。大きな目標はすでに3回小さく切られ、今日やることはやっと手に取れます。

## 例:「健康になる」から今日の午後へ

> **年:** 12月までに10km走る。
> **月(7月):** 休まず3km走る。
> **週:** ロング走を1.5kmに伸ばす。
> **今日:** 公園の周回を、一周ジョグする。

最後の行がすべての仕事をしていることに注目。年間目標が方向を決め、親目標のリンクがそれを降ろし、でも実際にやるのは「周回を一周ジョグ」です。ひとつ手前 — 週 — で止まる計画表は、眺めて無視する計画表です。今日まで押し切りましょう。(締め切りからこう逆算するのが[バックキャスティング](/ja/blog/backcasting-goal-setting)で、各階層は[SMART目標](/ja/blog/smart-goal-setting)で研ぎ澄ませます。)

## 🌱 ビジョンドリームで動かす

Notionで作れば構造は身につきますが、毎日それを生かし続けるのが難しいところ。ビジョンドリームはまさにこのはしごを軸に作られています — **4段階プランナー**(年間・月間・週間・日次)が各項目を親目標に自動でつなぐので、年間目標はいつも今日のリストに現れます。日次のタスクには**A/B/C優先度**がつき、未完了は**自動で翌日に繰り越し**、毎週ひとつの**週間ワンシング**を尋ねます — リレーションを手で配線せずに、同じ「階層ごとに一切り」の考え方を。構造はあなたのもの、アプリは年があなたの今日に届き続けるようにするだけ。ビジョンを植えれば、必ず実がなります。🌱`,
  faq: [
    {
      q: "計画表を数日で放置してしまうのはなぜ?",
      a: "たいてい意志やテンプレートのせいではなく、年間・月間・週間の計画がつながっていないからです。年が週に届かないと、日々のリストが本当の目標と関係ない雑務で埋まり、計画表が無意味に感じて開かなくなります。階層をつなぐと直ります。",
    },
    {
      q: "Notionで年・月・週の目標をどうつなぐの?",
      a: "「目標」というひとつのデータベースに「レベル」プロパティ(年/月/週)と、同じデータベースを指す「親目標」リレーションを作ります。各月間目標の親を年間目標に、各週間目標の親を月間目標にします。そして絞り込みビューを作り、「今月」「今週」が別々のリストではなく同じ出所から引くようにします。",
    },
    {
      q: "大きな目標を実際に達成する上でいちばん大切な段階は?",
      a: "今日やることまで押し切ることです。「10km走る」のような大きな目標は、月・週を通して、今日の午後にできる小さく具体的なこと — 「周回を一周ジョグ」など — になるまで切り分ける必要があります。週で止まる計画表は、眺めても行動しない計画表です。",
    },
    {
      q: "ビジョンドリームはつながった計画表にどう役立つ?",
      a: "4段階プランナー(年間・月間・週間・日次)が各項目を親目標に自動でつなぐので、年間目標がいつも今日のリストに現れます。日次タスクにはA/B/C優先度がつき、未完了は自動で繰り越し、毎週ひとつの週間ワンシングを尋ねます — Notionで作る構造を、代わりに維持してくれます。",
    },
  ],
};

export const ko: Post = {
  slug: "notion-goal-planner",
  title: "노션으로 목표달성 계획표 만들기 (연·월·주가 연동되는 구조)",
  description:
    "예쁜 계획표를 만들어놓고 며칠 쓰다 안 본 적 있나요? 문제는 대개 템플릿이 아니라 연간·월간·주간 계획이 서로 연결되지 않은 데 있습니다. 노션으로 연·월·주가 연동되는 목표 계획표를 단계별로 만들어, 큰 목표를 '오늘 할 일'로 바꾸는 방법을 정리했습니다.",
  date: "2026-07-11",
  updated: "2026-07-11",
  category: "목표관리",
  readMinutes: 7,
  emoji: "🗂️",
  cover: "/blog/notion-goal-planner.svg",
  body: `"건강해지기." "사업 키우기." 계획처럼 보이지만 너무 커서 시작할 수가 없습니다. 그리고 시작할 수 없는 목표는 잊어버리는 목표입니다. 예쁜 계획표를 공들여 만들어놓고 며칠 쓰다 슬그머니 안 보게 된 적 있다면, 범인은 대개 의지력도 템플릿도 아닙니다. **연간·월간·주간 계획이 서로 다른 상자에 들어가 대화하지 않는 것**이 진짜 원인입니다.

큰 목표는 **오늘 할 일** 크기로 쪼갰을 때 비로소 손에 잡힙니다. 연동된 계획표가 하는 일이 바로 그것이에요. 하나의 연간 목표를 월과 주를 거쳐 아래로 내려보내, 오늘 오후에 실제로 할 수 있는 무언가로 착지시킵니다. 모든 것이 링크로 연결되는 노션은 이걸 만들기에 딱 좋은 도구입니다.

> **요점**
> - "건강해지기"가 막막한 건 **너무 커서**입니다 — 오늘 할 일 크기로 줄이세요
> - 계획표가 안 지켜지는 건 못생겨서가 아니라 연·월·주가 **연결 안 돼서**입니다
> - **하나의 목표 데이터베이스**를 만들고, 월·주는 그걸 걸러낸 뷰로 두세요
> - 목적은 예쁜 템플릿이 아니라, 큰 목표가 확실히 **오늘의 행동**이 되는 것

![노션에서 연간·월간·주간·오늘을 연결하는 목표 계획표](/blog/notion-goal-planner.svg)

## 예쁜 계획표가 멈추는 이유

대부분의 계획표는 이렇게 죽습니다. 1월에 반짝이는 연간 목표를 세웁니다. 2월 월간 페이지는 빈칸이고, 그때그때 떠오르는 걸로 채웁니다. 이번 주 할 일은 오늘 아침 가장 크게 소리친 것들이죠. 세 개의 다른 문서, 세 개의 다른 기분 — 그런데 어느 것도 서로를 가리키지 않습니다. 그래서 연간 목표는 1페이지에 손도 안 댄 채 남고, 한 주는 그 목표와 상관없는 잡무로 채워집니다.

계획표는 일기가 아니라, 목표를 '언젠가'에서 '오늘'로 옮기는 **배송 시스템**입니다. 연간이 주간에 닿지 않으면 배송은 일어나지 않아요. (막연한 소망을 구체적으로 바꾸는 건 [성공 = 믿음 × 생각 × 행동](/blog/success-formula-bta)의 '생각' 단계입니다.)

| 끊긴 계획표 | 연동된 계획표 |
| --- | --- |
| 연·월·주가 별개 문서 | 하나의 목표가 세 층으로 흐름 |
| 주간 리스트 = 오늘 제일 시끄러운 것 | 주간 리스트 = 이번 달 목표를 쪼갠 것 |
| "연간 목표 진척됐나?" — 알 수 없음 | 매주가 눈에 보이게 연간에 기여 |
| 3일만 예쁘고 이후 방치 | 오늘을 움직이니 다시 열게 됨 |

## 노션으로 만들기: 연동되는 4단계

핵심은 딱 하나, **단일 출처** — 하나의 목표 데이터베이스 — 를 만들고 월과 주를 그것의 걸러낸 뷰로 두는 것입니다. 별개 리스트로 만들지 마세요.

### 1. 하나의 목표 데이터베이스를 만든다
**목표**라는 데이터베이스를 만듭니다. 속성은 \`제목\`, \`레벨\`(선택: 연/월/주), \`상위 목표\`(같은 데이터베이스를 가리키는 관계형), \`상태\`, \`마감일\`. 이 \`상위 목표\` 관계형이 마법입니다 — 주간 목표가 자기가 어느 월간 목표에 속하는지, 그 위 어느 연간 목표에 속하는지 기억하게 해줍니다.

### 2. 연간 목표 3~5개를 쓰고, 각각을 월로 쪼갠다
큰 목표 몇 개에 \`레벨=연\`을 설정합니다. 각각에 대해 물어보세요. "이게 이뤄지려면 이번 달 말까지 무엇이 참이어야 하나?" 그걸 \`레벨=월\` 항목으로 만들고 \`상위 목표\`를 연간 목표로 지정합니다. "10km 달리기"라는 연간 목표는 3월의 "쉬지 않고 3km 달리기"가 됩니다.

### 3. 이번 달을 주간 '원씽'으로 쪼갠다
이번 달 목표를 주 단위로 잘라냅니다. 각 주에는 **하나의** 분명한 표적 — 그 주의 '원씽' — 을 \`레벨=주\`(상위 목표는 월) 항목으로 줍니다. "이번 달 3km 달리기"는 "이번 주 롱런에 500m 더하기"가 됩니다.

### 4. 주간을 오늘까지 끌어내린다
걸러낸 뷰 — **이번 주** — 를 만들어 지금 마감인 \`레벨=주\` 항목만 보이게 합니다. 매일 아침 할 일은 아주 작습니다. 이번 주의 원씽을 오늘의 행동 하나로 바꾸는 것뿐이에요. 큰 목표는 이미 세 번 잘게 잘렸고, 오늘 할 일은 드디어 손에 잡힙니다.

## 예시: '건강해지기'에서 오늘 오후로

> **연간:** 12월까지 10km 달리기.
> **월간(7월):** 쉬지 않고 3km 달리기.
> **주간:** 롱런을 1.5km로 늘리기.
> **오늘:** 공원 한 바퀴, 딱 한 번 조깅하기.

마지막 줄이 모든 일을 한다는 데 주목하세요. 연간 목표는 방향을 정했고, 상위 목표 링크가 그걸 아래로 날랐지만, 실제로 하는 건 "한 바퀴 조깅"입니다. 한 단계 앞 — 주간 — 에서 멈추는 계획표는 감상만 하고 무시하는 계획표예요. 오늘까지 끝까지 밀어붙이세요. (이렇게 마감일에서 거꾸로 내려오는 게 [백캐스팅](/blog/backcasting-goal-setting)이고, 각 단계는 [SMART 목표](/blog/smart-goal-setting)로 더 날카롭게 다듬을 수 있습니다.)

## 🌱 비전드림 앱으로 실행하기

노션으로 만들면 구조는 몸에 익지만, 매일 그걸 살아 있게 유지하는 게 어려운 부분입니다. 비전드림은 바로 이 사다리를 축으로 설계돼 있어요 — **플래너 4단계**(연간·월간·주간·일일)가 각 항목을 상위 목표에 자동으로 연결하니, 연간 목표가 늘 오늘 할 일 목록에 나타납니다. 일일 할 일에는 **A/B/C 우선순위**가 붙고, 못한 것은 **자동으로 다음 날 이월**되며, 매주 하나의 **주간 원씽**을 물어봅니다 — 관계형을 손으로 배선하지 않고도 같은 '단계마다 한 번 자르기' 원리를 그대로요. 구조는 당신의 것이고, 앱은 연간이 당신의 오늘에 계속 닿게 도울 뿐입니다. 비전을 심으면, 반드시 열매가 열립니다. 🌱`,
  faq: [
    {
      q: "계획표를 며칠 만에 안 보게 되는 이유는 뭔가요?",
      a: "대개 의지나 템플릿 탓이 아니라 연간·월간·주간 계획이 연결되지 않아서입니다. 연간이 주간에 닿지 않으면 매일의 리스트가 진짜 목표와 상관없는 잡무로 채워지고, 계획표가 무의미하게 느껴져 안 열게 됩니다. 각 단계를 연결하면 해결됩니다.",
    },
    {
      q: "노션에서 연·월·주 목표를 어떻게 연결하나요?",
      a: "'목표'라는 하나의 데이터베이스에 '레벨' 속성(연/월/주)과, 같은 데이터베이스를 가리키는 '상위 목표' 관계형을 만듭니다. 각 월간 목표의 상위를 연간 목표로, 각 주간 목표의 상위를 월간 목표로 지정하세요. 그다음 걸러낸 뷰를 만들어 '이번 달'과 '이번 주'가 별개 리스트가 아니라 같은 출처에서 끌어오게 합니다.",
    },
    {
      q: "큰 목표를 실제로 달성하는 데 가장 중요한 단계는?",
      a: "오늘 할 일까지 끝까지 내려보내는 것입니다. '10km 달리기' 같은 큰 목표는 월과 주를 거쳐, 오늘 오후에 할 수 있는 작고 구체적인 것 — 예를 들어 '한 바퀴 조깅' — 이 될 때까지 쪼개야 합니다. 주간에서 멈추는 계획표는 감상만 하고 행동하지 않는 계획표입니다.",
    },
    {
      q: "비전드림은 연동 계획표에 어떻게 도움이 되나요?",
      a: "플래너 4단계(연간·월간·주간·일일)가 각 항목을 상위 목표에 자동 연결해, 연간 목표가 늘 오늘 할 일 목록에 나타납니다. 일일 할 일에는 A/B/C 우선순위가 붙고, 못한 것은 자동으로 이월되며, 매주 하나의 주간 원씽을 물어봅니다 — 노션에서 짜는 구조를 대신 유지해 줍니다.",
    },
  ],
};
