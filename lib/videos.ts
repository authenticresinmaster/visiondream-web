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
    {
      kind: "youtube", slug: "goal-management", id: "lg_LrLp3KfQ",
      title: "목표를 못 이루는 건 계획을 안 세워서가 아니에요", sub: "목표는 세울 때가 아니라, 관리할 때 죽어요",
      transcript: "목표를 못 이루는 건, 계획을 안 세워서가 아니에요. 세운 다음에 관리하지 않아서예요. 목표설정과 목표관리는 다른 일이거든요. 첫째, 목표를 눈에 보이게 두세요. 안 보이는 목표는 잊혀요. 둘째, 이번 주에 할 행동으로 쪼개세요. '올해 무엇'이 아니라 '이번 주에 뭐'로요. 셋째, 정해진 요일에 딱 십 분, 주간 리뷰. 뭐가 됐고 뭐가 막혔는지 보고, 넷째, 막힌 건 조정하세요. 목표는 고정된 게 아니라 계속 손보는 거예요. 마지막으로, 그 목표를 내 비전에 연결하세요. 비전드림이 도와줄게요. 목표를 습관과 성공의 나무로 추적하고, 정체되면 AI코치가 조정을 제안해요. 오늘, 이번 주에 할 딱 한 가지부터 정해 봐요.",
    },
    {
      kind: "youtube", slug: "okr-goals", id: "Fg1v3TjmXwo",
      title: "목표를 세워도 흐지부지되는 이유", sub: "OKR, 회사 말고 나한테 써 봤어요?",
      transcript: "목표를 세워도 흐지부지되는 건, 방향과 결과를 안 나눠서예요. OKR은 그걸 나눠 줍니다. Objective는 나를 설레게 하는 질적인 방향 하나. Key Results는 그게 됐는지 알려 주는 측정 가능한 결과 두세 개예요. 여기서 제일 흔한 실수 — Key Results를 '할 일 목록'으로 쓰는 거예요. '운동 가기'가 아니라 '3킬로 10분 안에 뛰기'처럼, 숫자로 끝나야 합니다. 분기로 세우고 매주 딱 한 번 체크하세요. 0에서 1로 채점하는데, 0.7이면 잘한 거예요. 다 채우면 목표를 너무 안전하게 잡은 겁니다. 비전드림에선 Objective가 비전, Key Results가 목표와 습관 추적, 매주 체크는 성공의 나무로 자랍니다. 이번 분기, Objective 하나만 정해 봐요.",
    },
    {
      kind: "youtube", slug: "self-efficacy", id: "NUhPnP2k0xk",
      title: "자신감이 없는 게 아니라 증거가 없는 거예요", sub: "'나는 할 수 있다'는 성격이 아니에요",
      transcript: "자기효능감은 '나는 할 수 있다'는 믿음이에요. 근데 이건 타고난 성격이 아니라, 증거로 쌓이는 거예요. 심리학자 반두라가 말한 가장 강력한 원천은 성취경험. 거창한 성공이 아니라 아주 작은 성공이요. 오늘 딱 한 칸 체크한 것. 그게 '어, 나 되네?'라는 증거가 됩니다. 실패했다고요? 실패는 판결이 아니라 데이터예요. '난 역시 안 돼'가 아니라 '이 방법이 안 됐네'로 읽으세요. 그리고 잘 해낸 사람을 곁에 두고, 나에게 건네는 말을 조금만 다정하게 바꿔 보세요. 비전드림이 이 증거를 대신 쌓아 줄게요. 작은 습관 체크가 성공의 나무로 자라거든요. 오늘, 딱 하나만 체크해 봐요.",
    },
    {
      kind: "youtube", slug: "reading-for-action", id: "6hdsOVxxhpU",
      title: "완독은 실행이 아니에요", sub: "책을 스무 권 읽어도 안 바뀌는 이유",
      transcript: "자기계발서 스무 권을 읽었는데 삶은 그대로다? 문제는 의지가 아니라, 완독을 실행으로 착각한 거예요. 마지막 장을 덮으면 뇌는 '해냈다' 보상을 주는데, 정작 바뀐 건 없죠. 책은 다 읽을 때가 아니라 한 가지를 행동으로 옮길 때 남아요. 이렇게 해보세요. 첫째, 책 펴기 전에 질문 하나 정하기. 둘째, 한 권에서 딱 한 가지만 뽑기. 셋째, 그 문장을 이번 주에 할 수 있는 작은 행동 하나로 번역하기. 넷째, 그 행동을 이미 매일 하는 습관에 붙이기. 다섯째, 일주일에 10분 리뷰로 '해봤나' 남기기. 밑줄 서른 개보다 실행 하나예요. 비전드림이 그 한 가지를 습관으로 굴려서 성공의 나무에 남겨 줄게요. 오늘, 딱 한 문장만 행동으로.",
    },
    {
      kind: "youtube", slug: "kim-mikyung-miracle", id: "YsxcNfkXwu4",
      title: "5시 기상을 따라 하니까 무너지는 거예요", sub: "미라클모닝 3일 만에 포기했다면",
      transcript: "김미경식 미라클모닝, 해보려다 3일 만에 포기한 분 많죠. 문제는 시각이에요. 다들 새벽 5시라는 시간만 따라 하거든요. 근데 4시간 자고 5시에 일어나는 건 의지가 아니라 번아웃 카운트다운이에요. 오래가는 사람은 세 가지가 달라요. 첫째, 지킬 수 있는 시간. 둘째, 눈에 보이는 책임, 연속기록이요. 셋째, 이 아침이 어떤 미래를 위한 건지 비전과 연결하는 거예요. 비전드림은 아침 루틴을 매일 습관으로 체크하고, 그걸 내 비전에 연결해 줘요. 시각 말고 루틴을 따라 하세요.",
    },
    {
      kind: "youtube", slug: "lee-dongjin-reading", id: "A7nmJOwBRSQ",
      title: "이동진은 실천하려고 읽지 않아요", sub: "1년에 50권 읽어도 그대로인 이유",
      transcript: "1년에 50권을 읽어도 삶이 그대로라면, 문제는 권수가 아니에요. 이동진 평론가는 사실 실용을 위해 읽지 않아요. 천천히 읽고, 밑줄 긋고 메모하고, 좋은 책은 다시 읽죠. 깊이 읽는 거예요. 그런데 깊이 읽어도 딱 하나가 빠지면 삶은 그대로예요. 바로 실천이죠. 그래서 책을 덮을 때, 잊고 싶지 않은 한 문장을 골라 이번 주에 할 행동 하나로 바꿔보세요. 그리고 이미 하는 습관에 붙이세요. 오늘 읽은 책에서 실천할 행동 하나, 지금 적어봐요.",
    },
    {
      kind: "youtube", slug: "miracle-mindset", id: "IxZLoNPtxJg",
      title: "문제는 의지력이 아니었어요", sub: "미라클모닝이 3일 만에 끝나는 진짜 이유",
      transcript: "알람을 삼십 분 일찍 맞추고, 이틀은 성공해요. 근데 삼일째 스누즈 버튼이 이기죠. 문제는 의지력이 아니라, 눈뜬 순간의 마인드셋이에요. 첫째, 깨자마자 오늘 할 한 가지를 떠올려요. 둘째, 완벽한 루틴 말고 딱 이 분만. 셋째, 기분 말고 정체성. 나는 아침을 챙기는 사람이다. 넷째, 그 아침을 내 비전과 연결해요. 다섯째, 하루 걸러도 다음 아침 다시 리셋. 비전드림은 이걸 매일 습관으로 붙잡아, 체크할 때마다 성공의 나무에 잎이 돋아요. 내일 아침, 알람을 오 분 일찍 맞추고 할 한 가지를 지금 정해두세요.",
    },
    {
      kind: "youtube", slug: "digital-board", id: "KefV8DgyT5I",
      title: "비전보드, 붙여놓고 며칠이면 안 보게 되죠?", sub: "종이 비전보드는 왜 자꾸 잊혀질까",
      transcript: "종이 비전보드, 예쁘게 만들어 벽에 붙였는데 일주일이면 배경처럼 안 보이더라고요. 붙일 벽도 부족하고요. 그래서 폰으로 옮겼어요. 방법은 세 단계예요. 먼저 커리어, 건강, 재정 같은 영역별로 사진을 다섯에서 아홉 장 모아요. 그다음 무료 콜라주 앱으로 한 장으로 합치고요. 마지막이 핵심이에요. 그 이미지를 폰 잠금화면으로 설정하세요. 이제 하루에 아흔 번 넘게 폰을 볼 때마다 비전이 눈에 들어와요. 애써 기억할 필요가 없어요. 여기에 이미지마다 오늘 할 일 하나만 묶으면, 보는 게 곧 하는 게 돼요. 오늘 밤 배경화면부터 딱 바꿔보세요.",
    },
    {
      kind: "youtube", slug: "goal-tracking", id: "AcoQ-JLytCQ",
      title: "목표 앱, 2월이면 안 열죠?", sub: "목표 앱만 깔고 안 쓰는 사람",
      transcript: "목표 앱, 아마 세 개쯤 깔아 봤을 거예요. 1월 1일엔 정돈된 기분, 2월엔 다시는 안 열어보죠. 그거 의지 문제 아니에요. 대부분 앱은 목표를 세우게만 도와주고, 올해랑 오늘을 연결해 주진 않거든요. 그러니 앱 고를 땐 기능 개수 말고 세 가지만 보세요. 첫째, 이건 어떤 유형의 목표인가. 매일 반복하는 습관형인지, 숫자로 결과 내는 수치형인지. 둘째, 바쁜 한 주를 살아남는가. 하루 놓쳐도 연속기록이 안 날아가고, 못 끝낸 일이 다음 날로 넘어가는가. 셋째, 왜 하는지가 매일 보이는가. 그리고 진짜 핵심은 사다리예요. 연간 목표를 이번 달, 이번 주, 오늘 할 일 하나까지 내려놓는 것. 오늘 움직일 수 없는 연간 목표는 이미 흐려지는 중이거든요. 작년에 접은 목표 하나 떠올려서, 왜 멈췄는지 딱 한 줄 적어볼까요?",
    },
    {
      kind: "youtube", slug: "procrastination", id: "Qd8YS_zFiFM",
      title: "혹시 아직도 '독하게 마음먹기'로 미루기 고치려 하세요?", sub: "할 일을 자꾸 미룬다면",
      transcript: "할 일을 미루는 건 게을러서가 아니에요. 뇌가 불편한 일을 피하는 것뿐이거든요. 그래서 더 독하게 마음먹어도 안 고쳐지는 거예요. 의지 말고 시스템으로 바꿔야 해요. 첫째, 피할 수 없을 만큼 잘게 쪼개요. 보고서를 쓰는 게 아니라, 문서 열고 한 문장만. 첫 걸음이 5분 이하면 뇌가 저항을 안 해요. 둘째, 무너지기 전에 복구 규칙을 정해둬요. 하루 놓쳐도 자책 말고 다음 날 그냥 다시. 한 번은 사고, 두 번이 패턴이니까요. 셋째, 환경을 바꿔요. 운동화는 현관에, 시간 잡아먹는 앱은 홈 화면에서 치우고요. 유혹보다 강해지는 게 아니라, 유혹을 멀리 두는 거예요. 오늘 딱 하나, 5분짜리 습관 하나만 정해서 적어보세요.",
    },
    {
      kind: "youtube", slug: "career-board", id: "wdRrPrlFUOs",
      title: "감성 사진만 붙인 비전보드는 진로에 안 먹혀요", sub: "진로 비전보드, 예쁜 사진만 붙였다면",
      transcript: "취준할 때 예쁜 사진만 잔뜩 붙였다가 흐지부지된 적 있나요? 진로 비전보드는 감성 콜라주가 아니에요. 세 칸을 채우는 거예요. 첫째, 직업 칸. 성공 말고, 소비재 기업 주니어 브랜드 마케터처럼 구체적으로. 둘째, 역량 칸. 그 직무가 요구하는 것. 캠페인 하나, 지에이, 포트폴리오 세 개. 셋째, 시기 칸. 이번 달 지에이, 십이월 포트폴리오처럼 역산으로. 비전드림 드림맵은 커리어와 학습 영역에 이 칸을 담고 오늘 할 일에 연결해줘요. 오늘, 한 칸만 채워봐요. 일 년 뒤 갖고 싶은 역량을요.",
    },
    {
      kind: "youtube", slug: "habit-tracker-guide", id: "pcN0dlON93A",
      title: "빈칸 하나에 다 포기하지 마세요", sub: "습관 트래커, 하루 빠졌다고 포기했다면",
      transcript: "습관 트래커를 3주 써 보고 알았어요. 트래커의 진짜 힘은 완벽하게 채우는 게 아니라, 하루 빠진 다음 날 다시 돌아오게 하는 거예요. 사람들이 포기하는 건 한 번 빠져서가 아니라, 그 빈칸 하나가 다 망한 것처럼 느껴져서예요. 그러니 규칙을 딱 하나 정하세요. 빠진 칸은 엑스 치지 말고 그냥 비워두고, 다음 날 다시 채운다. 채워진 두 칸 사이의 빈칸은 한 달 뒤엔 보이지도 않아요. 습관은 대략 66일이면 자동처럼 느껴지는데, 가끔 하루 빠져도 안 틀어져요. 오늘부터 딱 3주, 습관 하나만 기록해봐요.",
    },
    {
      kind: "youtube", slug: "notion-goals", id: "3DStL5LAO7U",
      title: "예쁜 계획표, 왜 사흘 만에 덮을까요?", sub: "계획표 며칠 쓰다 안 보게 된다면",
      transcript: "계획표 예쁘게 만들어놓고 며칠 쓰다 안 본 적, 있죠. 문제는 대개 템플릿이 아니에요. 연간, 월간, 주간이 따로 놀아서예요. 건강해지기가 막막한 건 목표가 너무 커서거든요. 그래서 하나로 이어야 해요. 노션에 목표 데이터베이스 하나 만들고, 레벨을 연·월·주로, 상위 목표로 서로 연결해요. 10km 달리기는 이번 달 3km, 이번 주 롱런 늘리기, 오늘 한 바퀴 조깅으로 내려와요. 큰 목표 하나를 골라, 이번 달, 이번 주, 오늘 할 일로 나눠 적어보세요.",
    },
    {
      kind: "youtube", slug: "ilsanbookclub", id: "cDM36e8a2L8",
      title: "모임이 없는 게 아니라, 찾는 법이 없었어요", sub: "독서모임 검색만 하다 지쳤다면",
      transcript: "동네 독서모임을 검색해도 뭘 골라야 할지 모르겠고, 한 번 나가봤다가 두 번 만에 그만둔 적 있나요. 독서모임은 한 곳에 모여 있지 않아요. 지역 커뮤니티, 동네 앱 모임, 도서관 프로그램, 독서모임 플랫폼. 다섯 군데를 따로 뒤져야 보입니다. 찾았다면 나가기 전에 네 가지만 물어보세요. 지정도서가 있나요. 안 읽고 가도 되나요. 몇 분 오시나요. 다음 모임은 언제인가요. 이 네 답이면 안 맞는 모임은 걸러집니다. 그래도 마땅한 게 없다면, 직접 만드세요. 세 명, 두 시간, 한 권이면 충분해요. 사람을 기다리지 말고 첫 모임 날짜부터 정하세요. 주최자는 결석하지 않으니까요.",
    },
    {
      kind: "youtube", slug: "paidbookclub", id: "qT1VEkaKMMA",
      title: "돈 내면 읽을 줄 알았죠", sub: "돈 냈는데 왜 안 읽힐까",
      transcript: "돈을 냈으니 이번엔 읽겠지. 그런데 삼 주 뒤에도 책갈피는 첫 장에 그대로예요. 의지가 약해서가 아니에요. 돈은 동기를 사지만, 습관은 못 사거든요. 결제 효과는 길어야 열흘입니다. 그래서 유료독서모임은 값이 아니라 구조를 보고 골라야 해요. 네 가지만 확인하세요. 목적, 강제력, 밀도, 아웃풋. 안 읽고 가도 아무 일 없는 모임은, 유료여도 흐지부지됩니다. 그리고 완독은 성과가 아니라 재료예요. 책에서 한 문장만 고르고, 이번 주에 할 오 분짜리 행동으로 바꾸고, 이미 하는 습관에 붙이세요. 오늘, 딱 한 문장만 골라 보세요.",
    },
    {
      kind: "youtube", slug: "stopdelaying", id: "NqTgOZhSpvE",
      title: "미루는 건 게을러서가 아니에요", sub: "오늘 또 미뤘다면, 게으른 게 아닙니다",
      transcript: "오늘 또 미루고 자책하며 누워 있나요. 미루기는 게으름이 아니라 감정 회피예요. 그래서 그냥 시작해, 라는 말이 안 먹히는 거고요. 딱 하나만 물어보세요. 그 일을 떠올릴 때 내 몸은 뭘 느끼지. 가슴이 조이면 불안형, 일부러 망한 초안부터 쓰세요. 축 처지고 별로면 지루형, 왜 하는지에 다시 연결하세요. 텅 비고 무감각하면 소진형, 밀지 말고 목록을 덜어내세요. 머리가 복잡하면 혼란형, 다음에 손으로 할 행동 하나만 적으세요. 오늘 밤 오분만 내서, 미루던 일 하나를 꺼내 적어 봐요.",
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
    {
      kind: "youtube", slug: "goal-management", id: "BlliDL4mQnY",
      title: "You're not failing your goals because you didn't plan", sub: "Goals don't die when you set them — they die when you manage them",
      transcript: "You're not failing your goals because you didn't plan them. You're failing because nobody manages a goal after it's set. Setting a goal and managing a goal are two different jobs. First, make it visible. A goal you can't see is a goal you forget. Second, break it into this week's actions — not what you'll do this year, but what you'll do this week. Third, review it on a fixed day, just ten minutes: what moved, what's stuck. Fourth, adjust what's stuck — a goal isn't carved in stone, it's something you keep tuning. Finally, connect it to your vision. VisionDream helps you do exactly this: track goals as habits and a growing Success Tree, and let the AI coach suggest an adjustment when you stall. Today, pick just one thing to do this week.",
    },
    {
      kind: "youtube", slug: "okr-goals", id: "rWO_KZBZFE4",
      title: "Why your goals keep fizzling out", sub: "OKRs aren't just for companies",
      transcript: "Your goals keep fizzling because you never separate the direction from the result. OKRs do that for you. The Objective is one qualitative direction that actually inspires you. The Key Results are two or three measurable outcomes that prove you got there. Here's the most common mistake — writing Key Results as a to-do list. Not 'go for a run,' but 'run 3K under ten minutes.' It has to end in a number. Set them by the quarter, and check in just once a week. Score each from zero to one, where 0.7 means you did well. If you hit every one, your goals were too safe. In VisionDream, your Objective is the vision, your Key Results become tracked goals and habits, and every weekly check grows your Success Tree. This quarter, just pick one Objective.",
    },
    {
      kind: "youtube", slug: "self-efficacy", id: "9LTkLqKRY8U",
      title: "You're not low on confidence — you're low on evidence", sub: "\"I can do this\" isn't a personality trait",
      transcript: "Self-efficacy is the belief that you can do it. But it isn't a trait you're born with — it's built from evidence. The psychologist Bandura found the most powerful source is mastery experience. Not some grand success — a tiny one. One box checked today. That becomes proof: 'wait, I can actually do this.' Did you fail? Failure isn't a verdict, it's data. Read it as 'that approach didn't work,' not 'I'm just not capable.' Then keep people who've done it near you, and make the way you talk to yourself a little kinder. VisionDream stacks that evidence for you — small habit checks that grow into a Success Tree you can see. Today, just check one box.",
    },
    {
      kind: "youtube", slug: "reading-for-action", id: "VZz0nGeAvPU",
      title: "Finishing a book isn't doing it", sub: "Twenty books read, nothing changed",
      transcript: "Read twenty self-help books and your life looks the same? The problem isn't willpower — you mistook finishing for doing. Closing the last page gives your brain a 'done' reward, but nothing actually changed. A book sticks not when you finish it, but when you turn one idea into action. So try this. First, pick one question before you open the book. Second, pull exactly one thing from it. Third, translate that sentence into one small action you can do this week. Fourth, attach that action to a habit you already do daily. Fifth, spend ten minutes a week in review asking 'did I do it?' One executed idea beats thirty underlines. VisionDream keeps that one thing running as a habit and stacks it on your Success Tree. Today, move just one sentence into action.",
    },
    {
      kind: "youtube", slug: "kim-mikyung-miracle", id: "YxEFtshu55I",
      title: "You copied 5 a.m., not the routine", sub: "Quit the miracle morning in 3 days?",
      transcript: "Tried the Kim Mikyung miracle morning and quit by day three? The problem is the hour. Everyone copies the 5 a.m. wake-up. But waking at 5 on four hours of sleep isn't discipline, it's a countdown to burnout. The people who last do three things differently. One, they pick a time they can actually keep. Two, they make it visible, a streak they can see. Three, they tie the morning to a vision, what future is this for. VisionDream logs your morning as a daily habit and connects it to your vision. Don't chase the hour, chase the routine.",
    },
    {
      kind: "youtube", slug: "lee-dongjin-reading", id: "464xzaO4ZcI",
      title: "He doesn't read to get things done", sub: "Why 50 books a year changed nothing",
      transcript: "If you read fifty books a year and nothing changed, the problem isn't the number. Lee Dong-jin, the critic famous for his huge library, doesn't read for productivity at all. He reads slowly, underlines and annotates, and re-reads the books he loves. That's deep reading. But deep reading leaves one gap, and if you skip it, life stays the same. That gap is action. So when you close a book, choose one sentence you refuse to forget, and turn it into one thing you can do this week. Then attach it to a habit you already have. Right now, write down one action from the last book you read.",
    },
    {
      kind: "youtube", slug: "miracle-mindset", id: "kjuiv7zBEHc",
      title: "It was never your willpower", sub: "Why the Miracle Morning dies in 3 days",
      transcript: "You set the alarm early, and two mornings it works. By day three the snooze button wins. The problem was never willpower, it was your mindset the second your eyes opened. One: on waking, name one thing you'll do today. Two: forget the perfect routine, just start with two minutes. Three: act from identity, not mood. I'm someone who shows up in the morning. Four: connect that morning to your vision. Five: miss a day, reset the next morning, never quit. VisionDream holds each one as a daily habit, and every check grows a leaf on your success tree. Tomorrow, set the alarm five minutes early and decide your one thing right now.",
    },
    {
      kind: "youtube", slug: "digital-board", id: "50tXygxGoa0",
      title: "That vision board on your wall — still notice it?", sub: "Why your paper vision board gets forgotten",
      transcript: "You made a beautiful vision board, stuck it on the wall, and within a week it faded into the background. You also run out of wall. So I moved mine to my phone. Three steps. First, collect five to nine images, one for each life area — career, health, finances. Next, combine them into a single picture with any free collage app. And here's the key step most people skip: set that image as your phone lock screen. Now every time you pick up your phone, ninety-plus times a day, your vision meets your eyes. No remembering required. Then tie each image to one small action for today, and looking turns into doing. Change your wallpaper tonight and start.",
    },
    {
      kind: "youtube", slug: "goal-tracking", id: "jmy9G5sIom8",
      title: "That goal app... still open in February?", sub: "The people who install goal apps and never use them",
      transcript: "You've probably installed three goal apps by now. On January first you feel so organized, and by February you never open them again. That's not a willpower problem. Most apps help you set goals, but they never connect this year to today. So when you pick one, forget the feature count and check three things. One, what kind of goal is this, a daily habit you repeat, or a number you're tracking toward. Two, will it survive a busy week, does a missed day wipe your streak, or does an unfinished task roll forward. Three, can you see why you're doing it, every single day. And here's the real key, a ladder. Take your yearly goal and bring it down to this month, this week, and one task today. A yearly goal you can't act on today is already fading. So think of one goal you quit last year, and write a single line, why did it stall?",
    },
    {
      kind: "youtube", slug: "procrastination", id: "ZyNUbqCKRu4",
      title: "Still trying to fix procrastination by just trying harder?", sub: "If you keep putting things off",
      transcript: "You don't procrastinate because you're lazy. Your brain is just avoiding something uncomfortable. That's why trying harder never fixes it. You need a system, not willpower. First, shrink the task until it's too small to avoid. Not write the report, just open the doc and write one sentence. When the first step takes five minutes or less, your brain stops resisting. Second, plan the recovery before you slip. Miss a day? Drop the self-blame and just resume tomorrow. Missing once is an accident, missing twice is a pattern. Third, design your environment. Running shoes by the door, the app that eats your evenings off your home screen. You're not beating temptation, you're moving it out of reach. So today, pick one thing, one five-minute habit, and write it down.",
    },
    {
      kind: "youtube", slug: "career-board", id: "yPtzR4w59QA",
      title: "Pretty photos won't decide your career", sub: "A career board isn't pretty photos",
      transcript: "Ever pin a wall of aesthetic photos for your career, feel inspired for a day, then watch it fizzle out? A career vision board isn't a mood collage. It's three boxes you fill in. One, the Job box. Not success, but something specific, like junior brand marketer at a consumer-goods company. Two, the Skills box. What that role demands. One real campaign, basic data analysis, a portfolio of three. Three, the Timeline box. By when, working backward. GA this month, portfolio by December. VisionDream's Dream Map holds these boxes in career and learning, and ties them to today's task. So today, fill just one box. The skill you want a year from now.",
    },
    {
      kind: "youtube", slug: "habit-tracker-guide", id: "yMUS_UZUErI",
      title: "One missed day isn't failure", sub: "Don't quit over one blank box",
      transcript: "Three weeks with a habit tracker taught me this: its real power isn't a perfect streak, it's bringing you back the day after you slip. People quit not because they missed once, but because that single blank box made it feel ruined. So set one rule. When you miss, don't cross it out, just leave the box blank and fill the next day. A blank square between two filled ones is invisible in a month. Habits take about 66 days to feel automatic, and missing the odd day doesn't derail it. Start today. Track one habit for just three weeks.",
    },
    {
      kind: "youtube", slug: "notion-goals", id: "UYk0DHH125Y",
      title: "Pretty planner, ignored by day three?", sub: "Why your planner dies after 3 days",
      transcript: "You made a beautiful planner and stopped opening it after a few days. The problem usually isn't the template. It's that your yearly, monthly, and weekly plans never talk to each other. Get healthy feels impossible because it's just too big. So connect them. In Notion, build one goal database, add a level for year, month, and week, and link each one to its parent goal. Run a 10k becomes three kilometers this month, a longer run this week, one loop around the park today. Pick one big goal, and split it into this month, this week, and today.",
    },
    {
      kind: "youtube", slug: "ilsanbookclub", id: "uS6s3g5uMhE",
      title: "Book clubs exist. You just had no way to find them.", sub: "Tired of searching for a book club?",
      transcript: "You searched for a book club near you, found nothing that fit, went once, and quietly never went back. Here's the thing. Book clubs aren't listed in one place. Neighborhood forums, local apps, library programs, dedicated platforms. You have to check five channels separately. Once you find one, ask four questions before you show up. Is there an assigned book? Can I come if I haven't finished it? How many people usually come? When's the next meeting? Those four answers screen out most bad fits. And if nothing fits, start your own. Three people, two hours, one book. Don't wait for people to gather. Lock the first date, then invite. Because hosts never skip.",
    },
    {
      kind: "youtube", slug: "paidbookclub", id: "wi43KNAViNQ",
      title: "You paid. Still not reading.", sub: "You paid. So why aren't you reading?",
      transcript: "I paid for it, so this time I'll read. And three weeks later, the bookmark is still on page one. That's not weak willpower. Money buys motivation, but it can't buy a habit, and the payment effect lasts about ten days. So don't shop for a price, shop for a structure. Check four things. Purpose, pressure, density, output. If nothing happens when you show up unprepared, that club will fizzle out, paid or not. And remember: finishing a book isn't the result, it's the raw material. Take one sentence, turn it into a five minute action this week, and attach it to a habit you already have. Today, just pick one sentence.",
    },
    {
      kind: "youtube", slug: "stopdelaying", id: "2kByzX5_XV4",
      title: "You're not lazy. You're avoiding a feeling.", sub: "You put it off again — you're not lazy",
      transcript: "Put it off again today, and now you're lying there blaming yourself. But procrastination isn't laziness, it's emotional avoidance. That's why just start never works. Ask one question. What do I feel in my body when I picture the task. Chest tight? That's anxiety. Write the deliberately bad first draft. Heavy and dull? That's boredom. Reconnect it to a why. Empty and numb? That's burnout. Don't push, cut the list. Head spinning? That's overwhelm. Name the next physical action. Tonight, take five minutes and write down the one thing you've been avoiding.",
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
    {
      kind: "youtube", slug: "goal-management", id: "uruH33Vy90Q",
      title: "目標を達成できないのは、計画を立てなかったからじゃない", sub: "目標は立てた時ではなく、管理する時に死ぬ",
      transcript: "目標を達成できないのは、計画を立てなかったからじゃありません。立てたあとに管理していないからです。目標設定と目標管理は、別の仕事なんです。まず、目標を目に見えるところに置く。見えない目標は忘れられます。次に、今週やる行動に分ける。「今年何を」ではなく「今週何を」に。三つ目、決まった曜日にたった十分、週次レビュー。何が進んで、何が詰まったかを見る。四つ目、詰まったものは調整する。目標は固定ではなく、ずっと手直しするものです。最後に、その目標を自分のビジョンにつなぐこと。ビジョンドリームが手伝います。目標を習慣と成功の木で追跡し、止まったらAIコーチが調整を提案します。今日、今週やるたった一つを決めてみよう。",
    },
    {
      kind: "youtube", slug: "okr-goals", id: "JuKmU8xo0j0",
      title: "目標が毎回うやむやになる理由", sub: "OKR、会社じゃなく自分に使ってる?",
      transcript: "目標がうやむやになるのは、方向と結果を分けていないからです。OKRはそれを分けてくれます。Objectiveは、自分をわくわくさせる質的な方向を一つ。Key Resultsは、それが達成できたか分かる測定可能な結果を二つか三つ。ここで一番多い間違い — Key Resultsを「やることリスト」で書くことです。「運動に行く」ではなく「3キロを10分以内で走る」のように、数字で終わらせます。四半期で立てて、毎週一回だけ振り返る。0から1で採点して、0.7なら上出来です。全部達成できたら、目標が安全すぎたということ。ビジョンドリームでは、Objectiveがビジョン、Key Resultsが目標と習慣の記録、毎週のチェックが成功の木として育ちます。この四半期、Objectiveを一つだけ決めてみよう。",
    },
    {
      kind: "youtube", slug: "self-efficacy", id: "XzBJf_11v0w",
      title: "自信がないんじゃなくて、証拠がないんです", sub: "「私はできる」は性格じゃない",
      transcript: "自己効力感は「私はできる」という信念です。でもこれは生まれつきの性格ではなく、証拠から作られるもの。心理学者バンデューラが挙げた一番強い源は、達成経験。大きな成功じゃなくて、ごく小さな成功です。今日ひとマスだけチェックしたこと。それが「あれ、私できるじゃん」という証拠になります。失敗した?失敗は判決じゃなくてデータです。「やっぱり私はダメ」ではなく「このやり方が合わなかった」と読みましょう。そして、うまくやった人をそばに置き、自分にかける言葉を少しだけ優しく変えてみて。ビジョンドリームが、その証拠を代わりに積み上げます。小さな習慣チェックが、成功の木に育つから。今日、ひとつだけチェックしてみよう。",
    },
    {
      kind: "youtube", slug: "reading-for-action", id: "TcXREMzStEQ",
      title: "読了は実行じゃない", sub: "二十冊読んでも変わらない理由",
      transcript: "自己啓発書を二十冊読んだのに人生はそのまま? 問題は意志ではなく、読了を実行と勘違いしたことです。最後のページを閉じると脳は『やり遂げた』報酬をくれますが、実際には何も変わっていない。本は読み終えるときではなく、そこから一つを行動に移すときに残ります。こうしてみてください。一つ目、本を開く前に問いを一つ立てる。二つ目、一冊からたった一つだけ取り出す。三つ目、その文を今週できる小さな行動一つに翻訳する。四つ目、その行動をすでに毎日している習慣にくっつける。五つ目、週に十分のレビューで『やったか』を残す。線を三十本引くより、実行一つです。ビジョンドリームがその一つを習慣として回し、成功の木に残してくれます。今日、たった一文を行動に。",
    },
    {
      kind: "youtube", slug: "kim-mikyung-miracle", id: "oMajyySB8L0",
      title: "真似たのは時刻、ルーティンじゃない", sub: "ミラクルモーニング3日で挫折した?",
      transcript: "キム・ミギョン式ミラクルモーニング、3日でやめた人、多いですよね。問題は時刻です。みんな朝5時という時間だけを真似する。でも4時間睡眠で5時に起きるのは規律じゃなくて、燃え尽きへのカウントダウンです。続く人は三つが違います。一つ、実際に守れる時刻を選ぶ。二つ、目に見える連続記録で証明する。三つ、この朝はどんな未来のためか、ビジョンにつなぐ。ビジョンドリームは朝を毎日の習慣として記録し、あなたのビジョンにつなげます。時刻じゃなく、ルーティンを真似て。",
    },
    {
      kind: "youtube", slug: "lee-dongjin-reading", id: "k_b6-xz4kr8",
      title: "彼は役立てるために読まない", sub: "年50冊読んでも変わらない理由",
      transcript: "年に50冊読んでも人生がそのままなら、問題は冊数ではありません。膨大な蔵書で知られる評論家イ・ドンジンは、実用のためには読みません。ゆっくり読み、線を引いて書き込み、好きな本は再読する。それが深い読書です。でも深い読書には一つ隙間が残り、そこを飛ばすと人生は変わりません。その隙間が行動です。だから本を閉じるとき、忘れたくない一文を選び、今週できる行動一つに変えてみてください。そしてすでにある習慣にくっつける。今、最後に読んだ本から実践する行動を一つ書いてみましょう。",
    },
    {
      kind: "youtube", slug: "miracle-mindset", id: "1KKcBnZYxKI",
      title: "問題は意志力じゃなかった", sub: "ミラクルモーニングが3日で終わる本当の理由",
      transcript: "アラームを早くして、二日はうまくいく。でも三日目、スヌーズボタンが勝つ。問題は意志力じゃなくて、目を開けた瞬間のマインドセットです。一つ、起きたら今日やる一つを思い浮かべる。二つ、完璧なルーティンじゃなく、まず二分だけ。三つ、気分じゃなくアイデンティティ。私は朝の自分を大切にする人だ。四つ、その朝を自分のビジョンにつなぐ。五つ、一日休んでも翌朝リセット、やめない。ビジョンドリームはこれを毎日の習慣として預かり、チェックのたびに成功の木に葉が茂ります。明日の朝、アラームを五分早くして、やる一つを今、決めておきましょう。",
    },
    {
      kind: "youtube", slug: "digital-board", id: "pZyUomNosDw",
      title: "壁のビジョンボード、まだ目に入ってますか?", sub: "紙のビジョンボードが忘れられる理由",
      transcript: "きれいに作って壁に貼ったビジョンボード、一週間で背景に溶けて見えなくなりますよね。貼る壁も足りなくなる。だからスマホに移しました。三ステップです。まずキャリア、健康、お金など領域ごとに写真を五枚から九枚集めます。次に無料のコラージュアプリで一枚にまとめます。そして多くの人が飛ばす肝心のステップ、その画像をスマホのロック画面に設定してください。これでスマホを手に取るたび、一日九十回以上、ビジョンが目に入ります。覚えておく必要はありません。さらに各画像に今日やること一つをひも付ければ、見ることが動くことになります。今夜、壁紙を変えることから始めましょう。",
    },
    {
      kind: "youtube", slug: "goal-tracking", id: "ma1VruDNong",
      title: "その目標アプリ、2月にはもう開いてない?", sub: "目標アプリを入れるだけで使わない人",
      transcript: "目標アプリ、たぶん三つくらい入れましたよね。1月1日はすごく整った気分で、2月にはもう二度と開かない。それ、意志の問題じゃないんです。ほとんどのアプリは目標を立てるのは手伝ってくれても、今年と今日をつないではくれないから。だから選ぶときは、機能の数じゃなくて三つを見て。ひとつ、これはどんな種類の目標か。毎日くり返す習慣型か、数字を追う数値型か。ふたつ、忙しい一週間を生き延びるか。一日抜けて連続記録が消えないか、終わらなかったタスクが翌日へ繰り越されるか。みっつ、なぜやるのかが毎日見えるか。そして本当のカギははしごです。年間目標を、今月、今週、そして今日のタスク一つまで下ろす。今日動けない年間目標は、もう薄れかけているんです。去年やめた目標を一つ思い出して、一行だけ書いてみませんか。なぜ止まったのか?",
    },
    {
      kind: "youtube", slug: "procrastination", id: "8D_gIAcSpr8",
      title: "まだ「気合い」で先延ばしを直そうとしてませんか?", sub: "つい先延ばししてしまうなら",
      transcript: "先延ばしするのは怠けているからじゃありません。脳が不快なことを避けているだけなんです。だから気合いを入れても直らない。必要なのは意志じゃなくて仕組みです。まず、避けようがないほど小さく刻む。レポートを書くんじゃなくて、ファイルを開いて一文だけ。最初の一歩が五分以下なら、脳は抵抗しません。次に、つまずく前に復帰ルールを決めておく。一日休んでも自分を責めず、翌日にただ再開。一度は事故、二度がパターンですから。最後に、環境を変える。ランニングシューズは玄関に、時間を食うアプリはホーム画面から追い出す。誘惑より強くなるんじゃなくて、誘惑を手の届かない場所へ動かすんです。今日、一つだけ、五分の習慣を決めて書き留めてみて。",
    },
    {
      kind: "youtube", slug: "career-board", id: "2ApWUNugV6c",
      title: "きれいな写真では進路は決まらない", sub: "進路ボードは感性写真じゃない",
      transcript: "就活のとき、おしゃれな写真を貼っただけで、一日やる気が出て、結局うやむや。そんな経験ありませんか。進路ビジョンボードは感性コラージュではありません。三つのマスを埋めるものです。一つ、職業マス。成功ではなく、消費財メーカーのジュニアブランドマーケターのように具体的に。二つ、スキルマス。その職種が求めるもの。実際のキャンペーン一つ、データ分析、作品三点のポートフォリオ。三つ、時期マス。いつまでに、逆算で。今月GA、十二月までにポートフォリオ。ビジョンドリームのドリームマップは、キャリアと学習にこのマスを持ち、今日やることにつなげます。今日、マスを一つだけ埋めてみて。一年後に欲しいスキルを。",
    },
    {
      kind: "youtube", slug: "habit-tracker-guide", id: "HsBzSGyYp4c",
      title: "1日抜けても失敗じゃない", sub: "空白ひとマスで、あきらめないで",
      transcript: "習慣トラッカーを3週間使ってわかりました。本当の力は、完璧な連続記録じゃなくて、抜けた翌日にまた戻ってこられること。人がやめるのは一度抜けたからじゃなくて、その空白ひとマスが全部台無しに感じられるから。だからルールをひとつ決めて。抜けた日はバツを付けず、ただ空白のままにして、翌日を埋める。埋まった二つの間の空白は、一ヶ月後には見えなくなります。習慣が自動に感じるまでは、およそ66日。たまに一日抜けても、脱線しません。今日から、たった3週間、習慣をひとつ記録してみて。",
    },
    {
      kind: "youtube", slug: "notion-goals", id: "OtetxGEgAs4",
      title: "きれいな計画表、なぜ3日で放置?", sub: "計画表が3日で終わる理由",
      transcript: "きれいな計画表を作ったのに、数日で開かなくなった。原因はたいていテンプレートじゃありません。年間、月間、週間がバラバラで、互いに話さないからです。健康になるが無理に感じるのは、大きすぎるから。だからつなぎましょう。Notionに目標データベースをひとつ作り、レベルを年・月・週にして、親目標で互いに連結します。10km走るは、今月3km、今週ロング走を伸ばす、今日は公園を一周ジョグに降りてきます。大きな目標をひとつ選んで、今月、今週、今日やることに分けて書いてみて。",
    },
    {
      kind: "youtube", slug: "ilsanbookclub", id: "pIdVcZ79cMc",
      title: "読書会がないのではなく、探す道がなかっただけ", sub: "読書会、探し疲れていませんか",
      transcript: "近所の読書会を検索しても合うものが見つからない。一度行ってみたけれど、二回目でやめてしまった。実は読書会は一か所にまとまっていません。地域コミュニティ、地域アプリの集まり、図書館の講座、読書会専用プラットフォーム。五つのチャネルを別々に当たる必要があります。見つけたら、行く前に四つだけ聞いてください。課題図書はありますか。読み終わっていなくても参加できますか。普段は何人来ますか。次回はいつですか。この四つで、合わない会はふるい落とせます。それでも合うものがなければ、自分で作りましょう。三人、二時間、一冊で十分です。人を待たずに、初回の日付から決めてください。主催者は、欠席しませんから。",
    },
    {
      kind: "youtube", slug: "paidbookclub", id: "zVUxkIsWSg0",
      title: "払ったのに読めない理由", sub: "お金を払ったのに、なぜ読めない?",
      transcript: "お金を払ったんだから、今度こそ読むはず。なのに三週間たっても、栞は一ページ目のままです。意志が弱いからではありません。お金はやる気を買えても、習慣は買えないから。決済の効果は、もって十日ほどです。だから有料読書会は、値段ではなく構造を見て選びましょう。確認するのは四つ。目的、強制力、密度、アウトプット。読まずに行っても何も起きない会は、有料でも自然消滅します。そして読了は成果ではなく、素材です。本から一文だけ選んで、今週やる五分の行動に変えて、すでにある習慣にくっつける。今日、一文だけ選んでみてください。",
    },
    {
      kind: "youtube", slug: "stopdelaying", id: "0Hnh3a1Zdso",
      title: "先延ばしは怠けじゃない", sub: "今日もまた先延ばし。でも怠けじゃない",
      transcript: "今日もまた先延ばしして、自分を責めながら横になっていませんか。先延ばしは怠けではなく、感情の回避です。だから、とにかく始めろ、が効かない。問いは一つ。そのタスクを思い浮かべたとき、体は何を感じている。胸が締めつけられるなら不安型。わざとひどい初稿から書いて。だるくて別に、なら退屈型。なぜやるのかに接続し直して。空っぽで無感覚なら燃え尽き型。押さずに、リストを削って。頭がぐるぐるなら混乱型。次に手を動かす行動を一つだけ書いて。今夜、五分だけ。先延ばししていたことを一つ書き出してみよう。",
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
