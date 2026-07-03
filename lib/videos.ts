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
    {
      kind: "youtube", slug: "smart-goals", id: "ymPH6ujE5go",
      title: "'건강해지기'는 목표가 아니에요", sub: "막연한 소망을 SMART 목표로",
      transcript: "건강해지기, 돈 모으기. 목표 같지만 사실은 소망이에요. 소망은 오늘 뭘 할지 알려주지 않거든요. 그럴 땐 SMART로 바꿔 보세요. 구체적으로, 측정 가능하게, 달성 가능하게, 내 비전과 관련되게, 그리고 기한을 정해서. 건강해지기 대신, 팔월 말까지 주 삼 회 오 킬로 달리기. 이렇게요. 비전드림은 이 목표를 위의 비전, 아래의 오늘 할 일과 연결해 줘요. 그러면 목표가 메모앱에 잠들지 않고, 매일의 행동이 됩니다. 오늘, 소망 하나를 SMART 목표로 바꿔 봐요.",
    },
    {
      kind: "youtube", slug: "identity-habits", id: "4pituH0g3iQ",
      title: "습관이 자꾸 무너져?", sub: "목표 말고 정체성에 — 습관 트래커",
      transcript: "습관이 자꾸 무너지지? 목표에 걸어서 그래. '오 킬로 빼기' 같은 목표는 끝이 있어서, 찍거나 포기하면 끝나 버리거든. 그러지 말고 정체성에 걸어 봐. '살 빼고 싶다'가 아니라 '나는 건강한 사람이다'. 그러면 작은 행동 하나하나가, 그런 사람이라는 한 표가 돼. 비전드림은 습관을 네가 되고 싶은 모습에 묶어 줘서, 체크할 때마다 그게 한 표로 쌓여. 하루 놓쳐도 괜찮아. 두 번 연속만 안 빠지면 돼. 오늘, 되고 싶은 나한테 한 표 던지자.",
    },
    {
      kind: "youtube", slug: "small-wins", id: "sV177jHU0Tg",
      title: "동기가 자꾸 바닥나?", sub: "작은 성공의 힘 — 성공의 나무",
      transcript: "동기가 자꾸 바닥나지? 큰 목표만 보고 큰 보상을 기다려서 그래. 근데 동기는 거창한 결과가 아니라, 오늘 느끼는 작은 성공에서 와. 그러니까 첫 걸음을 아주 작게 만들어. 이길 게 거의 확실할 만큼. 그리고 그걸 꼭 체크하고 기록해. 안 보이는 성공은 연료가 안 되거든. 비전드림은 체크할 때마다 연속 기록이 쌓이고 성공의 나무에 열매가 열려서, 작은 승리가 눈에 보여. 그 작은 승리가 다음 한 걸음을 끌어와. 오늘, 작게 하나만 이기자.",
    },
    {
      kind: "youtube", slug: "self-compassion", id: "eDCHoqYlFdI",
      title: "실패한 날, 몰아세우지 마요", sub: "다시 일으키는 자기 연민",
      transcript: "오늘 또 빼먹고, 자신을 몰아세우고 있죠? 그 가혹함이 정신 차리게 해 줄 것 같지만, 사실은 더 멈춰 서게 만들어요. 연구도 그래요. 자기비판은 사람을 얼어붙게 하고, 자기 연민은 다시 움직이게 해요. 그러니까 친한 친구에게 하듯 자신에게 말해 줘요. '괜찮아, 힘들었지, 다시 해보자.' 너는 실패자가 아니라, 한 번 실패했을 뿐이에요. 비전드림은 놓친 하루가 판결이 되지 않아요. 체크 하나면 다시 시작돼요. 오늘은 그냥, 작은 한 걸음만.",
    },
    {
      kind: "youtube", slug: "bucket-list", id: "pce8TzYx8gk",
      title: "버킷리스트, 왜 열두 개에서 멈출까?", sub: "버킷리스트가 열두 개에서 멈췄다면",
      transcript: "버킷리스트 쓰다 보면 꼭 열두 개쯤에서 막히죠. 꿈이 없는 게 아니라, 쓰는 방법이 없어서 그래요. 이렇게 해 봐요. 먼저 인생을 영역으로 나눠요. 여행, 건강, 관계, 배움, 일, 이렇게요. 한 영역에 오 분씩만 마구 적으면 백 개도 금방이에요. 그다음엔 구체적으로. 세계여행 말고, 아이슬란드에서 오로라 보기. 이렇게 한 장면이 떠오르게요. 그리고 올해 가장 끌리는 다섯 개엔 날짜를 정해요. 언젠가가 아니라 내년 여름까지. 그러면 소망이 진짜 목표가 돼요. 비전드림은 이 꿈들을 비전이랑 오늘 할 일에 연결해 줘서, 버킷리스트가 메모앱에 잠들지 않고 매일의 습관이 되게 해 줘요. 오늘, 빈 리스트 하나 열고 열두 개 너머까지 적어 봐요.",
    },
    {
      kind: "youtube", slug: "self-start", id: "zy8K8tbBaMY",
      title: "뭐부터 해야 할지 모르겠다면", sub: "자기계발, 어디서부터 시작하지?",
      transcript: "자기계발, 하고는 싶은데 뭐부터 해야 할지 막막하죠. 사실 막막한 게 정상이에요. 초보가 가장 많이 하는 실수는, 의지로 열 가지를 한 번에 바꾸려는 거예요. 그러다 사흘 만에 무너지고요. 반대로 가야 해요. 딱 하나, 부끄러울 만큼 작게. 아침에 일어나면 이 분 스트레칭. 이렇게요. 그리고 그 작은 습관을, 내가 되고 싶은 모습이랑 연결하세요. 이유가 있으면 일주일을 넘깁니다. 비전드림은 비전과 오늘의 작은 습관을 이어 주고, 매일 체크하면 성공의 나무가 자라요. 오늘, 딱 하나만 시작해 봐요.",
    },
    {
      kind: "youtube", slug: "beat-slump", id: "xVsv8CsKYL4",
      title: "의욕이 안 생기는 게 아니에요", sub: "의욕이 0일 때, 이렇게 시동 거세요",
      transcript: "뭘 해야 하는지 아는데, 도무지 시작이 안 되는 날 있죠. 그건 게으른 게 아니라, 엔진이 잠깐 멈춘 거예요. 그리고 우리는 큰 착각을 해요. 의욕이 생기면 시작하자. 그런데 사실은 반대예요. 움직여야 의욕이 따라와요. 그러니까 딱 이 분만. 운동 말고 신발만 신기. 보고서 말고 파일 열고 한 줄만. 그럼 엔진이 돌아가기 시작해요. 그리고 의지 말고 환경을 바꿔 보세요. 내일 옷을 미리 꺼내 두는 것처럼요. 비전드림은 그 작은 한 걸음을 내 비전에 다시 이어 줘요. 오늘, 이 분만 시동 걸어 봐요.",
    },
    {
      kind: "youtube", slug: "time-blocking", id: "y4hEdiquuho",
      title: "리스트 다 적었는데 왜 안 끝나?", sub: "할 일 목록은 왜 자꾸 실패할까",
      transcript: "할 일 다 적었는데, 저녁이 되면 제일 중요한 건 그대로 남아 있죠? 그거 의지 문제가 아니에요. 목록은 무엇을 할지는 알려줘도, 언제 할지는 안 알려주거든요. 그래서 급한 작은 일이 중요한 큰일을 자꾸 밀어내요. 해법은 타임블로킹. 오늘 꼭 할 세 가지를 고르고, 제일 어려운 걸 머리 맑은 시간에 캘린더에 딱 붙여요. 대신 하루를 꽉 채우지 말고, 육칠십 퍼센트만. 나머지는 버퍼로 비워 둬요. 그래야 전화 한 통에 하루가 안 무너져요. 비전드림은 이 블록을 위의 목표, 비전과 연결해 줘서, 한 시간을 써도 어떤 꿈을 키우는지 보여요. 오늘, 가장 중요한 일 하나에 시간을 먼저 떼어 줘 봐요.",
    },
    {
      kind: "youtube", slug: "affirmations", id: "hjUV2vJeToo",
      title: "'나는 부자다' 외쳐도 통장은 그대로죠", sub: "확언, 거울 보고 외우면 안 되는 이유",
      transcript: "거울 보면서 '나는 부자다' 백 번 외쳐도, 통장은 그대로예요. 확언이 가짜라서가 아니라, 쓰는 법이 틀려서 그래요. 확언은 우주를 부르는 주문이 아니라, 내가 나를 어떻게 믿는지 바꾸는 도구거든요. 그런데 지금 현실이랑 너무 다른 말은 뇌가 거짓말로 분류해 버려요. 그래서 '나는 억만장자다' 말고, '나는 쓰기 전에 모으는 사람이다' 이렇게 믿을 수 있게 바꿔야 해요. 그리고 꼭 행동이랑 짝지으세요. '나는 쓰는 사람이다' 말했으면 한 문장이라도 쓰는 거예요. 말이랑 행동이 맞을 때마다 뇌가 증거를 얻어요. 아, 이거 진짜일지도. 그렇게 확언은 믿음이 되고, 믿음은 행동이 됩니다.",
    },
    {
      kind: "youtube", slug: "evening-routine", id: "7zh-25vi4dw",
      title: "내일 아침, 사실 오늘 밤에 정해져요", sub: "갓생은 아침이 아니라 전날 밤에 결정돼요",
      transcript: "아침 루틴이 자꾸 무너진다면, 문제는 새벽 여섯 시의 의지가 아니라 밤 열한 시예요. 스마트폰을 손에서 못 놓고 잠든 밤은, 내일을 이미 뒤처진 채로 시작하게 만들거든요. 그래서 저는 자기 전에 딱 세 가지만 해요. 첫째, 오늘 하루를 이 분만 돌아봐요. 둘째, 내일 아침에 할 첫 행동 한 줄을 미리 적어 둬요. 문서 열고 첫 문장 쓰기, 이렇게 딱 하나만요. 셋째, 자기 한 시간 전엔 화면을 끄고 잠을 준비해요. 그러면 아침이 의지가 아니라 계획으로 굴러가요. 비전드림은 내일 첫 행동을 체크할 습관으로 만들어 주고, 마지막에 비전을 한 번 더 보여줘요. 오늘 밤, 내일의 첫걸음 하나만 정해 두세요.",
    },
    {
      kind: "youtube", slug: "deep-work", id: "piKFcxsczrQ",
      title: "앉자마자 폰에 손이 간다면", sub: "집중이 안 될 때, 이렇게 해보세요",
      transcript: "일하려고 앉았는데, 몇 초 만에 폰에 손이 가죠. 의지가 약한 게 아니에요. 세상이 우리를 방해하도록 만들어져 있거든요. 그래서 딥워크는 참는 게 아니라, 방해를 미리 치우는 거예요. 폰은 다른 방에, 알림은 끄고, 필요 없는 탭은 닫으세요. 그리고 딱 하나만 골라서, 이십오 분만 거기에 머물러요. 여러 개를 왔다 갔다 하면, 뇌가 다시 집중하는 데 매번 몇 분씩 새거든요. 비전드림은 오늘의 집중을 위의 목표, 그리고 비전과 연결해 줘요. 지금 이 몰입이 어떤 꿈을 키우는지 보이면, 딴짓이 확 줄어요. 오늘, 방해 하나만 치우고 시작해 봐요.",
    },
    {
      kind: "youtube", slug: "perfectionism", id: "a78KwB_6MsM",
      title: "완벽하게 하려다, 시작을 못 하고 있진 않나요?", sub: "완벽하게 하려다 시작을 못 한다면",
      transcript: "문서를 열었다가, 그냥 닫아 버린 적 있죠? 게을러서가 아니에요. 머릿속 완벽한 모습에 못 미칠 게 뻔히 보여서, 더 좋은 타이밍을 기다리는 거예요. 그게 완벽주의예요. 근데요, 그건 실력이 아니라 사실은 두려움이에요. 잘하고 싶은 마음이, 시작 자체를 막아 버리는 거죠. 그래서 이렇게 해 보세요. 첫 초안은 형편없어도 괜찮다고, 나한테 허락해 주세요. 시작하는 기준은 딱 이 분, 한 문단으로 낮추고요. 완벽은 나중에 고치면서 채우면 돼요. 머릿속 완벽한 백 점보다, 일단 끝낸 육십 점이 훨씬 나아요. 고칠 수가 있으니까요. 오늘은요, 완벽 말고 완료를 목표로 해 봐요.",
    },
    {
      kind: "youtube", slug: "self-esteem", id: "z1oPVajXyL4",
      title: "확언 백 번, 왜 안 와닿을까?", sub: "'나는 충분해' 백 번 외워도 안 되는 이유",
      transcript: "자존감 높이고 싶어서 '나는 충분해' 백 번 외워 봤는데, 하나도 안 와닿았죠? 당연해요. 자존감은 기분이 아니라, 나에 대한 신뢰거든요. 그리고 신뢰는 말이 아니라, 지킨 약속으로 쌓여요. 그러니까 오늘 나랑 아주 작은 약속 하나만 해봐요. 책 딱 한 페이지만 읽기. 그리고 진짜로 지켜요. 그게 증거가 돼요. 나는 말한 걸 해내는 사람이구나, 하는 증거. 그 증거가 하나씩 쌓이면, 어떤 힘든 날에도 안 흔들리는 자존감이 됩니다. 비전드림에선 약속을 지킬 때마다 성공의 나무가 자라서, 그 증거가 눈에 보여요. 오늘, 지킬 수 있을 만큼 작은 약속 하나부터 시작해요.",
    },
    {
      kind: "youtube", slug: "grit", id: "U97Eq8wnZP8",
      title: "재능이 이긴다고?", sub: "재능보다, 오래 하는 사람이 이겨",
      transcript: "아빠가 살아 보니까, 재능이 이기는 게 아니더라. 끝까지 남는 사람이 이겨. 여섯 시간 몰아서 하고 이 주 사라지는 것보다, 매일 이십 분이 훨씬 세. 왜냐면 그건 계속되거든. 끈기는 이 악무는 게 아니야. 지루한 목요일에도 굴러가게 미리 만들어 두는 거야. 그러니까 하루치를 아주 작게 만들어. 나쁜 날도 못 막을 만큼. 하다가 하루 걸러? 괜찮아. 두 번만 안 거르면 돼. 비전드림은 체크할 때마다 연속 기록이 쌓이고 성공의 나무에 열매가 열려서, 오래 버틴 게 눈에 보여. 오늘도, 작게 딱 하나만 하자.",
    },
    {
      kind: "youtube", slug: "laziness", id: "US1DHL70ks4",
      title: "나 원래 게으른 사람이야?", sub: "게으름은 성격이 아니라 신호예요",
      transcript: "나는 원래 게으른 사람이야. 이 말, 우리 자신한테 참 자주 하죠. 근데 게으름은 타고난 성격이 아니라 신호예요. 지쳤거나, 할 일이 막막하거나, 이게 나랑 무슨 상관인지 모를 때 몸이 보내는 신호. 자책 대신 이 신호를 읽어 주세요. 시작이 어렵다면 이 분 규칙. 방 청소가 아니라 그릇 하나 치우기, 보고서가 아니라 한 문장 쓰기. 그리고 주변 마찰을 줄여요. 운동복은 전날 밤에 꺼내 두고, 폰은 다른 방에. 마지막으로 이 작은 행동을 내 비전에 연결하면, 게으름은 스르르 풀립니다. 오늘 딱 한 걸음, 프로필 링크에서 같이 시작해요.",
    },
    {
      kind: "youtube", slug: "godsaeng", id: "cUxw7wLtfDg",
      title: "새벽 다섯 시 기상, 며칠 가던가요?", sub: "갓생 루틴이 자꾸 무너진다면",
      transcript: "새벽 다섯 시 기상, 운동, 독서, 일기까지. 갓생 피드는 멋지지만, 이런 루틴은 일이 주면 와르르 무너져요. 매일 엄청난 의지가 필요한 건 시스템이 아니라 번아웃 카운트다운이거든요. 그러니까 습관을 확 줄이고, 이미 하는 행동에 붙여 보세요. 아침 커피 내린 다음 숨 세 번, 이렇게요. 그리고 하루를 아침, 낮, 저녁 세 구간으로 나눠서 각 구간에 작은 앵커 하나씩. 강도는 백 퍼센트 말고 육십에서 칠십 퍼센트로. 힘든 날에도 살아남게요. 마지막으로 이 습관을 내 비전에 연결하면, 건너뛰는 게 나한테서 멀어지는 느낌이 들어요. 완벽한 하루 말고, 매일 반복할 수 있는 평범한 하루. 오늘 앵커 하나만 정해 볼까요?",
    },
    {
      kind: "youtube", slug: "focus", id: "u7tgwfS2Eng",
      title: "집중 못 하는 건 재능 문제가 아니에요", sub: "집중은 타고나는 게 아니에요",
      transcript: "집중 못 하는 건 타고난 성격이 아니에요. 집중력은 훈련하는 근육이거든요. 먼저 방해요소부터 치우세요. 참으려고 애쓰지 말고, 폰은 아예 다른 방에. 알림 끄고, 탭 닫고, 창은 하나만. 그다음엔 한 번에 하나. 멀티태스킹은 생산적인 것 같지만, 뇌는 계속 전환하면서 힘을 뺏겨요. 그리고 근육처럼 반복으로 키우세요. 십 분부터, 익숙해지면 오 분씩 늘리고요. 마지막으로 집중을 내 비전에 연결하세요. 의미가 보이면 집중은 훨씬 쉽게 따라와요. 비전드림이 그 연결을 도와줄게요. 오늘, 딱 십 분만 방해 없이 집중해 봐요.",
    },
    {
      kind: "youtube", slug: "mindfulness", id: "6_LBsZ4HtH0",
      title: "마음챙김, 향 피울 필요 없어요", sub: "마음이 산만할 땐 딱 삼 분",
      transcript: "마음챙김? 향 피우고 한 시간 앉아 있는 거 아니에요. 그냥 지금 이 순간에 머무르는 거예요. 딱 삼 분이면 돼요. 하던 거 멈추고, 천천히 숨을 쉬어요. 넷 세며 들이쉬고, 여섯 세며 내쉬고. 그러다 딴생각 나면요? 실패 아니에요. 알아차린 그 순간이 바로 연습이 되는 거예요. 그냥, 아 내가 걱정하고 있네, 하고 다시 숨으로 돌아오면 돼요. 마음이 잠잠해지면, 잊고 있던 내 비전이 다시 보여요. 오늘 딱 삼 분, 같이 숨 한번 쉬어 볼까요?",
    },
    {
      kind: "youtube", slug: "mental-strength", id: "354WocmwJ-I",
      title: "강한 멘탈 = 절대 안 흔들림?", sub: "멘탈이 강한 사람은 안 흔들리는 게 아니에요",
      transcript: "멘탈이 강하다는 건, 절대 안 흔들린다는 뜻이 아니에요. 그런 사람은 없어요. 진짜 강함은, 흔들린 다음에 더 빨리 제자리로 돌아오는 힘, 회복탄력성이에요. 이건 타고난 성격이 아니라 근력처럼 키우는 거예요. 방법은요, 먼저 감정과 사실을 분리하세요. '난 다 망했어'가 아니라, '오늘 이거 하나가 잘 안 됐어.' 그다음 아주 작은 한 걸음. 메일 하나 보내기, 십 분 걷기. 마지막으로 내 비전으로 돌아오세요. 비전이 닻이 되면, 나쁜 하루는 그냥 하루로 끝나요. 비전드림이 그 회복을 도와줍니다. 오늘 흔들렸다면, 딱 한 걸음만 내디뎌 봐요.",
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
    {
      kind: "youtube", slug: "smart-goals", id: "T_7_QpZaUhc",
      title: "\"Get healthy\" isn't a goal", sub: "Turn a wish into a SMART goal",
      transcript: "Get healthy. Save money. They feel like goals, but they're wishes, and a wish never tells you what to do today. So make it SMART. Specific, measurable, achievable, relevant to your vision, and time-bound. Instead of get healthy, try: run 5k three times a week by the end of August. VisionDream connects that goal to the vision above it and today's task below it. So your goal doesn't sleep in a notes app, it becomes daily action. Today, turn one wish into a SMART goal.",
    },
    {
      kind: "youtube", slug: "identity-habits", id: "nJyonsSBGNo",
      title: "Habits keep collapsing?", sub: "Tie them to identity — habit tracker",
      transcript: "Your habits keep collapsing? It's because they're tied to a goal. A goal like lose ten pounds has a finish line, so the day you hit it or quit, it's over. Instead, tie it to identity. Not I want to lose weight, but I'm a healthy person. Then every small action becomes a vote that you're that person. VisionDream ties your habits to who you want to become, so every check stacks up as a vote. Miss a day? It's fine. Just never miss twice. Today, cast one vote for who you want to be.",
    },
    {
      kind: "youtube", slug: "small-wins", id: "7KCvVvgmfTk",
      title: "Motivation running out?", sub: "The power of small wins — Tree of Success",
      transcript: "Your motivation keeps running out? It's because you only look at the big goal and wait for the big payoff. But motivation doesn't come from huge results, it comes from a small win you feel today. So make the first step tiny, small enough that winning is almost guaranteed. Then check it off and record it, because a win you don't see gives you no fuel. In VisionDream, every check builds your streak and grows fruit on your Success Tree, so your small wins are visible. And that small win pulls the next step in. Today, just win something small.",
    },
    {
      kind: "youtube", slug: "self-compassion", id: "fzREok6Kf68",
      title: "Don't beat yourself up", sub: "Self-compassion restarts you",
      transcript: "You slipped again today, and now you're beating yourself up, aren't you? That harshness feels like it'll whip you back into shape, but it actually keeps you frozen. The research agrees: self-criticism freezes you, self-compassion gets you moving again. So talk to yourself like you would a dear friend. It's okay, that was hard, let's try again. You're not a failure, you just failed once. In VisionDream, a missed day isn't a verdict. One check, and your streak restarts. Today, just take one small step.",
    },
    {
      kind: "youtube", slug: "bucket-list", id: "zUIQK2MKVvM",
      title: "Your bucket list always stops at twelve?", sub: "Why your bucket list stops at twelve",
      transcript: "Ever notice your bucket list dies around item twelve? It's not that you're out of dreams. You're out of a method. So try this. First, split your life into areas: travel, health, relationships, learning, work. Set a five minute timer per area and just dump. You'll hit a hundred way faster. Then make each one specific. Not see the world, but watch the northern lights in Iceland. Something you could photograph. Next, take the five that pull hardest this year and give each a date. Not someday, but by next summer. That's when a wish becomes a real goal. VisionDream connects those dreams to your vision and your today, so your list doesn't sleep in a notes app, it becomes a daily habit. Today, open a blank list and write past the obvious twelve.",
    },
    {
      kind: "youtube", slug: "self-start", id: "g2fz5ILHMi0",
      title: "Don't know where to start?", sub: "Self-improvement: where do I even start?",
      transcript: "You want to improve yourself, but you have no idea where to start. Honestly, that's the normal place to be. The biggest beginner mistake is trying to fix ten things at once with willpower, and crashing in three days. Go the other way. Pick one thing, so small it feels almost silly. After you wake up, two minutes of stretching. Like that. Then connect that tiny habit to who you want to become. A reason is what carries you past week one. VisionDream links your vision to today's small habit, and a tree of success grows every time you check it off. Today, just start one.",
    },
    {
      kind: "youtube", slug: "beat-slump", id: "lv2o0hCtbck",
      title: "You're not lazy — you're stalled", sub: "When motivation hits zero, do this",
      transcript: "You know what to do, but you just can't make yourself start. That's not laziness. It's an engine that stalled for a minute. And here's the trap we all fall into: I'll start once I feel motivated. But it's the other way around. You move first, and the motivation follows. So just two minutes. Not work out, just put on your shoes. Not write the report, just open the file and type one line. That turns the engine over. And instead of more willpower, change your environment. Lay tomorrow's clothes out tonight. VisionDream ties that tiny step back to your bigger vision. Today, give it just two minutes.",
    },
    {
      kind: "youtube", slug: "time-blocking", id: "YeUd28gnU5E",
      title: "Wrote the list. Still didn't finish?", sub: "Why your to-do list keeps failing",
      transcript: "You wrote the whole list, but by evening the most important thing is still untouched? That's not a willpower problem. A list tells you what to do, but never when. So the quick little tasks keep crowding out the big important one. The fix is time blocking. Pick the three things that must move today, and put the hardest one right on your calendar, in your sharpest hours. But don't pack the day full. Block only sixty to seventy percent, and leave the rest as buffer. That way one long phone call doesn't topple your whole day. VisionDream links each block to the goal and vision above it, so even one hour shows you which dream it's feeding. Today, give your most important task its time first.",
    },
    {
      kind: "youtube", slug: "affirmations", id: "EwYzapwwuxg",
      title: "Chanting \"I am rich\" won't fill your account", sub: "Why chanting affirmations doesn't work",
      transcript: "You can say I am rich a hundred times in the mirror, and your bank account stays exactly the same. It's not because affirmations are fake. It's because most people use them wrong. An affirmation isn't a spell to summon the universe. It's a tool to change how you see yourself. But if the words clash with your reality, your brain just files them as a lie. So instead of I am a millionaire, try, I'm someone who saves before spending. Something you can actually believe. And here's the real secret: pair it with an action. Say I'm a writer, then write one sentence. Every time your words and your actions line up, your brain gets proof. Maybe this is true. That's how words become belief, and belief becomes who you are.",
    },
    {
      kind: "youtube", slug: "evening-routine", id: "gWOVPZh3kDo",
      title: "Tomorrow morning is decided tonight", sub: "A good day is decided the night before",
      transcript: "If your mornings keep falling apart, the problem isn't your willpower at six a.m., it's what happened at eleven p.m. A night of endless scrolling leaves you starting tomorrow already behind. So before bed, I do just three things. First, I look back at today for two minutes. What went well, what drained me. Second, I write one first action for tomorrow. Not a whole list, just one starting move, like: open the doc and write the first line. Third, about an hour before sleep, I put the screens down and let my body wind down. Then my morning runs on a plan instead of willpower. VisionDream turns tomorrow's first action into a habit you check off, and shows your vision one last time before you sleep. Tonight, just choose tomorrow's first step.",
    },
    {
      kind: "youtube", slug: "deep-work", id: "KVgCjlL7VhY",
      title: "Reaching for your phone already?", sub: "Can't focus? Try this",
      transcript: "You sit down to work, and within seconds your hand reaches for your phone. It's not weak willpower. The world is built to interrupt you. So deep work isn't about resisting, it's about clearing the distraction before you start. Put your phone in another room, turn off notifications, close the extra tabs. Then pick just one task and stay with it for twenty-five minutes. Every time you switch, your brain leaks a few minutes climbing back in. VisionDream connects today's focus to the goal above it, and to your vision. When you can see which dream this block is building, drifting drops away. Today, clear just one distraction and begin.",
    },
    {
      kind: "youtube", slug: "perfectionism", id: "YbyrQli7tbA",
      title: "Is \"perfect\" keeping you from starting?", sub: "When \"perfect\" stops you from starting",
      transcript: "Ever open the document, then just close it again? It's not because you're lazy. You can already see how far it'll fall short of the perfect version in your head, so you wait for a better moment. That's perfectionism. And here's the thing, it isn't really high standards, it's fear in disguise. Wanting it to be great is the very thing stopping you from starting. So try this. Give yourself permission to make a bad first draft. Lower the bar just to start, two minutes, one paragraph. You can add the polish later. A finished sixty percent beats a perfect hundred percent that never leaves your head, because a finished thing can be improved. Today, aim for done, not perfect.",
    },
    {
      kind: "youtube", slug: "self-esteem", id: "7_6UxFD3i1k",
      title: "Repeating 'I am enough' isn't working?", sub: "Why 'I am enough' x100 doesn't work",
      transcript: "You've stood in the mirror repeating 'I am enough,' and it just bounced right off, right? Of course it did. Self-esteem isn't a mood, it's trust in yourself. And trust gets built by kept promises, not by words. So make one tiny promise today. Read just one page. Then actually keep it. That becomes evidence, proof that you're someone who does what they say. Stack enough of that evidence, and you get self-esteem that no bad day can shake. In VisionDream, every promise you keep grows your Tree of Success, so the evidence is something you can actually see. Start today, with one promise small enough to keep.",
    },
    {
      kind: "youtube", slug: "grit", id: "QIiG015pIpY",
      title: "Talent doesn't win", sub: "The one who lasts beats the talented one",
      transcript: "Here's something your dad learned the hard way. Talent doesn't win. The one who's still here at the end wins. Six heroic hours, then two weeks gone, loses to twenty quiet minutes every day, because the twenty minutes keep happening. Grit isn't gritted teeth. It's building your day so the reps happen even on a flat, tired Thursday. So make the daily thing small. Small enough that a bad day can't stop it. Miss a day? That's fine. Just never miss twice. VisionDream stacks a streak every time you check in, and grows your Success Tree, so all that quiet effort finally shows. Today, just do one small thing.",
    },
    {
      kind: "youtube", slug: "laziness", id: "axfyLE7NPzQ",
      title: "\"I'm just a lazy person\"?", sub: "Laziness isn't a flaw, it's a signal",
      transcript: "I'm just a lazy person. We say it so easily, but laziness isn't a personality you were born with. Most of the time it's a signal. You're tired, or the task feels too big, or it just doesn't connect to anything you care about. So read the signal instead of judging yourself. If starting is hard, use the two-minute rule. Not clean the whole house, just put one dish away. Not write the report, just write one sentence. Then lower the friction around you. Lay out your clothes the night before, put your phone in another room. And connect that tiny action to your vision, the reason you actually care. That's when laziness melts. Take one small step today, together, from the link in my bio.",
    },
    {
      kind: "youtube", slug: "godsaeng", id: "362JfceA5vg",
      title: "Five a.m. wake-ups... how long do they last?", sub: "When your godsaeng routine keeps collapsing",
      transcript: "Five a.m. wake-ups, workouts, reading, journaling. The godsaeng feed looks amazing, but a routine like that collapses in a week or two. When it needs heroic willpower every single day, it isn't a system, it's a countdown to burnout. So shrink your habits and attach each one to something you already do. Three slow breaths after you pour your morning coffee, like that. Then split your day into three blocks, morning, midday, and evening, with one small anchor each. Run it at sixty to seventy percent, not a hundred, so it survives a bad day. And tie each habit to your vision, so skipping it feels like stepping away from yourself. You don't need a perfect day, just an ordinary one you can repeat. Pick one anchor today.",
    },
    {
      kind: "youtube", slug: "focus", id: "1-UCXg23Ggw",
      title: "You're not bad at focusing", sub: "Focus isn't something you're born with",
      transcript: "You're not bad at focusing. You've just never trained it. Attention is a muscle. First, remove the distractions. Don't rely on willpower. Put your phone in another room, kill the notifications, close the tabs, keep one window open. Then do one thing at a time. Multitasking feels productive, but your brain just switches back and forth, and every switch drains you. Grow it in reps, like a muscle. Start with ten minutes, and add five when it gets easy. Finally, tie your focus to your vision. When you can see why it matters, attention comes willingly. VisionDream connects every focus session to the vision above it. Today, focus for just ten clean minutes.",
    },
    {
      kind: "youtube", slug: "mindfulness", id: "pdMx7mkLkbs",
      title: "Mindfulness, no incense required", sub: "When your mind is scattered, take three minutes",
      transcript: "Mindfulness isn't incense and an hour on a cushion. It's just staying with this moment, and three minutes is enough. Stop what you're doing and breathe slowly. Breathe in for four, out for six. Your mind wanders? That's not failure. The second you notice, that's the practice working. Just say, oh, I'm worrying, and come back to your breath. When your mind settles, the vision you'd forgotten comes back into view. So today, take three minutes and breathe with me.",
    },
    {
      kind: "youtube", slug: "mental-strength", id: "7q_u0n8SWzo",
      title: "Strong mind = never shaken?", sub: "A strong mind isn't one that never shakes",
      transcript: "Being mentally strong doesn't mean you never get shaken. Nobody is like that. Real strength is bouncing back faster after you are, and that's resilience. It's not a personality you're born with, it's a muscle you build. Here's how. First, separate the feeling from the fact. Not I ruined everything, but this one thing went badly. Then take the smallest step, send the one email, take a ten minute walk. Last, turn back toward your vision. When your vision is the anchor, a bad day stays just a day. VisionDream helps you make that comeback. So if today knocked you down, just take one small step.",
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
    {
      kind: "youtube", slug: "smart-goals", id: "A9riQhHISec",
      title: "「健康になる」は目標?", sub: "願いをSMART目標に",
      transcript: "健康になる、お金を貯める。目標っぽいけど、じつは願いです。願いは、今日何をするか教えてくれません。そんなときはSMARTに変えてみて。具体的に、測れるように、達成できるように、自分のビジョンに関連させて、そして期限を決める。健康になる、じゃなくて、八月末までに週三回五キロ走る。こんなふうに。ビジョンドリームは、その目標を上のビジョンと、下の今日やることにつなげます。だから目標がメモアプリで眠らず、毎日の行動になる。今日、願いをひとつSMART目標に変えてみよう。",
    },
    {
      kind: "youtube", slug: "identity-habits", id: "fAHPKjYN2h0",
      title: "また崩れた?", sub: "目標よりアイデンティティ — 習慣トラッカー",
      transcript: "習慣がすぐ崩れるよね? それ、目標に結びつけてるからだよ。五キロ痩せる、みたいな目標はゴールがあって、達成しても諦めても終わっちゃう。そうじゃなくて、アイデンティティに結びつけてみて。痩せたい、じゃなくて、自分は健康な人だ。そうすると、小さな行動ひとつひとつが、そういう人だっていう一票になる。ビジョンドリームは、習慣をなりたい自分に結びつけてくれるから、チェックするたびに一票が積み上がる。一日逃しても大丈夫。二度続けて休まなければいい。今日、なりたい自分に一票入れよう。",
    },
    {
      kind: "youtube", slug: "small-wins", id: "XtCoXLca8VI",
      title: "やる気、すぐ尽きる?", sub: "小さな成功の力 — 成功の樹",
      transcript: "やる気がすぐ尽きるよね? 大きな目標ばかり見て、大きな見返りを待ってるからなんだ。でもやる気は、すごい結果じゃなくて、今日感じる小さな成功から来る。だから最初の一歩をうんと小さくして。勝つのがほぼ確実なくらい。そしてそれを必ずチェックして記録する。見えない成功は燃料にならないからね。ビジョンドリームは、チェックするたびに連続記録が積み上がって、成功の樹に実がなる。だから小さな勝利が目に見える。その小さな勝利が、次の一歩を引っぱってくる。今日、小さくひとつ勝とう。",
    },
    {
      kind: "youtube", slug: "self-compassion", id: "n6P81mES4Ck",
      title: "自分を責めないで", sub: "立ち直らせる思いやり",
      transcript: "今日もつまずいて、自分を責めてるでしょう? その厳しさが立て直してくれる気がするけど、じつはもっと動けなくさせるの。研究もそう。自己批判は人を固まらせて、思いやりはまた動き出させる。だから、大切な友だちに話すように、自分に言ってあげて。大丈夫、つらかったね、もう一回やってみよう。あなたは失敗作じゃなくて、一度失敗しただけ。ビジョンドリームは、逃した一日が判決にならないの。チェックひとつで、また始められる。今日はただ、小さな一歩だけ。",
    },
    {
      kind: "youtube", slug: "bucket-list", id: "mLbsB9Bkx68",
      title: "バケットリスト、12個で止まってない?", sub: "バケットリストが12個で止まる理由",
      transcript: "バケットリストって、だいたい12個目くらいで止まりますよね。夢が尽きたんじゃなくて、書き方が尽きただけなんです。だからこうしてみて。まず人生を領域に分けます。旅行、健康、人間関係、学び、仕事、こんなふうに。一つの領域に五分だけタイマーをかけて、ただ書き出す。それだけで百個もあっという間です。次に、具体的に。世界を見る、じゃなくて、アイスランドでオーロラを見る。写真に撮れる一場面が浮かぶように。そして今年いちばん引っ張る五つに日付をつけます。いつか、じゃなくて、来年の夏までに。そうすると願いが本物の目標になります。ビジョンドリームは、その夢をあなたのビジョンと今日やることにつないでくれるから、リストがメモアプリで眠らず、毎日の習慣になるんです。今日、白紙のリストを開いて、12個の先まで書いてみて。",
    },
    {
      kind: "youtube", slug: "self-start", id: "6qOh4BA1ZCw",
      title: "何から始めればいいか分からないなら", sub: "自己啓発、どこから始める?",
      transcript: "自分を変えたいけど、何から始めればいいか分からない。じつは、それが当たり前のスタート地点です。初心者がいちばんやりがちな間違いは、意志の力で十個を一度に変えようとして、三日で崩れること。逆に行きましょう。たった一つ、ばかばかしいくらい小さく。起きたら二分のストレッチ。こんなふうに。そして、その小さな習慣を、なりたい自分につなげてください。理由があれば、一週間を越えられます。ビジョンドリームは、ビジョンと今日の小さな習慣をつなぎ、チェックするたびに成功の樹が育ちます。今日、まず一つだけ始めてみよう。",
    },
    {
      kind: "youtube", slug: "beat-slump", id: "OYKZ4J4UdEQ",
      title: "怠けてるんじゃありません", sub: "やる気がゼロのとき、こうしてエンジンをかける",
      transcript: "やることは分かっているのに、どうしても始められない日、ありますよね。それは怠けじゃなくて、エンジンがちょっと止まっただけ。そしてみんな同じ落とし穴にはまります。やる気が出たら始めよう。でも、じつは逆なんです。動いた後に、やる気がついてくる。だからまず二分だけ。運動じゃなくて、靴を履くだけ。レポートじゃなくて、ファイルを開いて一行打つだけ。それでエンジンが回り始めます。そして根性じゃなくて、環境を変えてみて。明日の服を今夜出しておくみたいに。ビジョンドリームは、その小さな一歩をあなたのビジョンに結び直してくれます。今日、二分だけエンジンをかけてみましょう。",
    },
    {
      kind: "youtube", slug: "time-blocking", id: "lHIA7zSjivM",
      title: "リスト書いたのに終わらない?", sub: "やることリストはなぜ失敗する?",
      transcript: "やること全部書いたのに、夕方になると一番大事なことが手つかず。それ、意志の問題じゃないんです。リストは何をやるかは教えても、いつやるかは教えてくれない。だから急ぎの小さな用事が、大事な大きい仕事をどんどん押しのけるんです。解決はタイムブロッキング。今日必ず動かす三つを選んで、一番難しいものを頭が冴える時間にカレンダーへ直接置く。でも一日を詰め込みすぎないこと。六割から七割だけブロックして、残りはバッファに空けておく。そうすれば電話一本で一日が崩れません。ビジョンドリームはこのブロックを上の目標とビジョンにつなぐから、一時間使うだけでどの夢を育てているか見えます。今日、一番大事なことに、まず時間をあげてみて。",
    },
    {
      kind: "youtube", slug: "affirmations", id: "iVtNCUt0jWw",
      title: "「私は豊かだ」と唱えても口座はそのまま", sub: "アファメーションを唱えても効かない理由",
      transcript: "鏡の前で「私は豊かだ」と百回唱えても、口座の残高はそのままですよね。アファメーションが嘘だからじゃありません。使い方が間違っているからなんです。アファメーションは宇宙を呼ぶ呪文じゃなくて、自分が自分をどう見るかを変える道具なんです。でも今の現実とかけ離れた言葉は、脳が嘘として処理してしまいます。だから「私は億万長者だ」じゃなくて、「私は使う前に貯める人だ」みたいに、信じられる形に変えましょう。そして必ず行動とセットにします。「私は書く人だ」と言ったら、一文でも書く。言葉と行動がそろうたびに、脳が証拠を受け取ります。あ、これ本当かも、って。そうして言葉は信念になり、信念があなた自身になっていきます。",
    },
    {
      kind: "youtube", slug: "evening-routine", id: "p-1KbrHLbW8",
      title: "明日の朝は、今夜決まります", sub: "良い一日は、前の晩に決まる",
      transcript: "朝が毎回崩れるなら、問題は朝六時の意志力ではなく、夜十一時に起きたことです。スマホをだらだら見て眠った夜は、明日をもう出遅れた状態で始めさせます。だから私は寝る前に、たった三つだけします。まず、今日を二分だけ振り返ります。何がうまくいって、何に消耗したか。次に、明日の最初の一手を一つ書いておきます。リストではなく、動き出しの一手だけ。たとえば、文書を開いて最初の一文を書く、みたいに。三つめは、寝る一時間ほど前に画面を切って、体を休ませる準備をします。そうすると、朝が意志力ではなく計画で回ります。ビジョンドリームは、明日の最初の一手をチェックする習慣に変えて、眠る前にビジョンをもう一度見せてくれます。今夜、明日の最初の一歩だけ、決めておきましょう。",
    },
    {
      kind: "youtube", slug: "deep-work", id: "LmXhrq-B7S4",
      title: "座った瞬間スマホに手が?", sub: "集中できないとき、これを試して",
      transcript: "仕事しようと座ったのに、数秒でスマホに手が伸びる。意志が弱いんじゃありません。世界が、あなたを中断させるように作られているんです。だからディープワークは、我慢することじゃなくて、始める前に邪魔を片づけること。スマホは別の部屋に、通知はオフ、いらないタブは閉じて。そして作業を一つだけ選んで、二十五分そこに留まる。あれこれ切り替えるたびに、脳が戻るのに毎回数分も漏れるんです。ビジョンドリームは、今日の集中を上の目標、そしてビジョンにつなげてくれます。この没頭がどの夢を育てているか見えると、気が散るのがぐっと減る。今日、邪魔をひとつだけ片づけて始めてみよう。",
    },
    {
      kind: "youtube", slug: "perfectionism", id: "lFsLoRMi2ZQ",
      title: "「完璧に」やろうとして、始められていませんか?", sub: "「完璧に」が始めるのを止めているなら",
      transcript: "文書を開いて、そのまま閉じたこと、ありませんか。怠けているからじゃないんです。頭の中の完璧な姿に、どれだけ届かないかがもう見えてしまう。だからもっといいタイミングを待つ。それが完璧主義です。でもね、それは高い基準じゃなくて、じつは変装した恐れなんです。うまくやりたい気持ちが、始めること自体を止めている。だから、こうしてみて。最初の初稿はひどくていいと、自分に許可を出す。始めるハードルは、二分、一段落まで下げる。完璧は、あとで直しながら足せばいい。頭の中の完璧な百点より、とりあえず仕上げた六十点のほうがずっといい。だって、直せるから。今日は、完璧じゃなくて完了を目指してみよう。",
    },
    {
      kind: "youtube", slug: "self-esteem", id: "NRXFbnbzmGk",
      title: "アファメーション百回、なぜ響かない?", sub: "「私は十分」百回唱えても効かない理由",
      transcript: "自己肯定感を上げたくて、「私は十分だ」って百回唱えても、全然しっくりこなかったでしょ? 当然です。自己肯定感は気分じゃなくて、自分への信頼だから。そして信頼は、言葉じゃなくて、守った約束で積み上がります。だから今日、すごく小さな約束を一つだけしてみて。本を一ページだけ読む。そして本当に守る。それが証拠になります。自分は言ったことをやる人間だ、っていう証拠。その証拠が一つずつ積み上がると、どんな悪い日にも揺るがない自己肯定感になる。ビジョンドリームでは、約束を守るたびに成功の木が育って、その証拠が目に見えます。今日、守れるくらい小さな約束を一つから始めてみよう。",
    },
    {
      kind: "youtube", slug: "grit", id: "qu7CI7egqbk",
      title: "才能が勝つ?", sub: "才能より、長く続ける人が勝つ",
      transcript: "父さんが生きてきて分かったよ。才能が勝つんじゃない。最後まで残った人が勝つんだ。一度に六時間やって二週間消えるより、毎日たった二十分のほうがずっと強い。だって、それは続くからね。やり抜く力は、歯を食いしばることじゃない。気分の乗らない木曜にも反復が起きるように、先に一日を組み立てておくことだ。だから毎日の分をうんと小さくしよう。悪い日でも止められないくらいにね。一日抜かした?大丈夫。二度だけ抜かさなければいい。ビジョンドリームはチェックのたびに連続記録が伸びて、成功の木に実がなるから、長く続けたことが目に見えるよ。今日も、小さくひとつだけやろう。",
    },
    {
      kind: "youtube", slug: "laziness", id: "zvRKGZfpBM0",
      title: "「自分はただの怠け者」?", sub: "怠けは性格じゃなく、サインです",
      transcript: "自分はただの怠け者だ。つい言っちゃいますよね。でも怠けは、生まれつきの性格じゃなくてサインなんです。疲れているか、やることが大きすぎるか、自分にとって大切なことにつながっていないか。だから責める前に、そのサインを読んであげて。始めるのがつらいときは、二分ルール。家じゅうの掃除じゃなくて、お皿を一枚しまうだけ。レポートを書くじゃなくて、一文だけ書く。それから、まわりの摩擦を減らします。運動着は前の夜に出しておく、スマホは別の部屋に。そして、その小さな行動を自分のビジョンにつなげると、怠けはすっとほどけます。今日ひとつだけ、プロフィールのリンクから一緒に始めましょう。",
    },
    {
      kind: "youtube", slug: "godsaeng", id: "purs-xRBDqo",
      title: "朝五時起き、何日続きました?", sub: "ガッセンルーティンが毎回崩れるなら",
      transcript: "朝五時起き、運動、読書、日記まで。ガッセンのフィードは輝いて見えるけど、こういうルーティンは一、二週間でまるごと崩れます。毎日ヒーロー級の意志力が必要なものは、システムじゃなくて燃え尽きへのカウントダウンなんです。だから習慣をぐっと小さくして、すでにやっている行動にくっつけてみて。朝のコーヒーを注いだあとに、ゆっくり三呼吸。こんなふうに。それから一日を朝、昼、夜の三ブロックに分けて、それぞれに小さなアンカーを一つずつ。強度は百パーセントじゃなくて六十から七十パーセントで。悪い日でも生き残れるように。最後に、その習慣を自分のビジョンにつなげると、飛ばすことが自分から離れるように感じられます。完璧な一日じゃなくて、毎日くり返せる普通の一日。今日、アンカーを一つだけ決めてみませんか?",
    },
    {
      kind: "youtube", slug: "focus", id: "ycoe6Ad12to",
      title: "集中できないのは才能のせいじゃない", sub: "集中力は生まれつきじゃない",
      transcript: "集中できないのは、生まれつきの性格じゃありません。集中力は、鍛える筋肉なんです。まずは気を散らすものを取り除きましょう。我慢しようとしないで、スマホは別の部屋へ。通知を切って、タブを閉じて、開く窓は一つだけ。次に、一度に一つだけ。マルチタスクは生産的に感じるけど、脳はただ切り替えているだけで、切り替えるたびに消耗します。そして筋肉みたいに反復で育てましょう。十分から始めて、慣れたら五分ずつ足す。最後に、集中を自分のビジョンにつなぐこと。意味が見えると、注意はずっと素直に集まります。ビジョンドリームが、その連結を助けます。今日、たった十分だけ、気を散らさず集中してみよう。",
    },
    {
      kind: "youtube", slug: "mindfulness", id: "5dw4a8ZjBFY",
      title: "マインドフルネス、お香はいりません", sub: "心が散らかったら、たった三分",
      transcript: "マインドフルネスって、お香をたいて一時間座ることじゃないんです。ただ、今この瞬間にとどまるだけ。三分あれば十分です。やっていることを止めて、ゆっくり呼吸して。四つで吸って、六つで吐く。途中で別のことを考えちゃう? 失敗じゃありません。気づいたその瞬間が、ちゃんと練習になってるんです。あ、わたし心配してるな、って気づいて、また呼吸に戻ればいい。心が静かになると、忘れてたビジョンがまた見えてきます。今日、三分だけ、一緒に呼吸してみませんか?",
    },
    {
      kind: "youtube", slug: "mental-strength", id: "sQdRM9On6R8",
      title: "強いメンタル=揺れない?", sub: "強いメンタルは、揺れない心じゃない",
      transcript: "メンタルが強いって、絶対に揺れないことじゃないんです。そんな人はいません。本当の強さは、揺れたあとに早く戻ってくる力、レジリエンスです。これは生まれ持った性格じゃなくて、筋肉みたいに鍛えるもの。やり方はこう。まず、感情と事実を分けます。「全部だめだ」じゃなくて、「今回のこれが、うまくいかなかった」。次に、いちばん小さな一歩。メールを一通送る、十分だけ歩く。最後に、自分のビジョンへ戻る。ビジョンが錨になれば、悪い日はただの一日で終わります。ビジョンドリームが、その立て直しを助けます。今日もし揺れたなら、小さな一歩をひとつだけ踏んでみて。",
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
