const questions = [
    { text: "자기의 손의을 생각하고 행동하는 편이다", type: "A" },
    { text: "자유롭게 행동하는 사람이라고 생각한다.", type: "FC" },
    { text: "남의 말을 가로 막고 자기 생각을 말하는 일이 있다.", type: "CP" },
    { text: "생각하고 있는 바를 말하지 못하는 성질이다.", type: "AC" },
    { text: "다른 사람을 엄하게 비판하는 편이다.", type: "CP" },
    { text: "다른 사람에 대해 해야려 주는 바가 강하다.", type: "NP" },
    { text: "상대방의 좋은 점을 잘 알아차리는 편이다.", type: "NP" },
    { text: "대화 중에 감정적으로 되는 일은 적다.", type: "A" },
    { text: "호기심이 강한 편이다.", type: "FC" },
    { text: "시간약속이나 돈 문제를 소홀히 하는 것을 싫어한다.", type: "CP" },
    { text: "사람들로부터 좋은 인상을 받고 싶어 한다.", type: "AC" },
    { text: "남의 부탁이라면 거절하지 못하는 편이다.", type: "NP" },
    { text: "양보심이 많으며 참는 편이다.", type: "AC" },
    { text: "사회의 규칙, 윤리, 도덕 등을 중시한다.", type: "CP" },
    { text: "사물을 분석적으로 깊게 생각한 다음에 결정한다.", type: "A" },
    { text: "싫은 일은 핑계를 달아 뒤로 미루는 경향이 있다.", type: "AC" },
    { text: "아이들이나 남의 일을 돌보아 주는 것을 좋아한다.", type: "NP" },
    { text: "자기생각을 주장하기 보다 타협하는 일이 많다.", type: "AC" },
    { text: "감정보다는 이성적인 편이라고 생각한다.", type: "A" },
    { text: "예절이나 규범에 까다로운 편이다.", type: "CP" },
    { text: "남의 의견은 잔반양은을 듣고 참고로 한다.", type: "A" },
    { text: "놀이나 음식 등을 만족할 때까지 찾는 편이다.", type: "FC" },
    { text: "책임감을 남에게 강하게 요구한다.", type: "CP" },
    { text: "타인에 대해 용통성이 있는 편이다.", type: "NP" },
    { text: "남의 안색이나 말에 신경을 쓰게 된다.", type: "AC" },
    { text: "괴로울 때는 참는 편이다.", type: "AC" },
    { text: "해야 한다, 하지 않으면 안 된다\"와 같은 말을 자주 쓴다.", type: "CP" },
    { text: "말하고자 하는 것을 서슴없이 말해 버리는 편이다.", type: "FC" },
    { text: "작은 잘못이라도 허지부지 지나치지 않는 편이다.", type: "CP" },
    { text: "남의 기대에 어긋나지 않도록 노력을 많이 한다.", type: "AC" },
    { text: "자기 감정을 억누르는 편이다.", type: "AC" },
    { text: "일하는 것을 손에 붙지 않으면 못 배기는 편이다.", type: "FC" },
    { text: "무슨 일이나 사실에 입각해서 판단한다.", type: "A" },
    { text: "아, 멋있다, 우와 와 같은 감탄사를 자주 쓴다.", type: "FC" },
    { text: "자신이 없고 열등감을 느낄 때가 많다.", type: "AC" },
    { text: "여러 가지 책을 많이 읽는 편이다.", type: "A" },
    { text: "농담을 잘 하는 편이다.", type: "FC" },
    { text: "화내는 일이 많은 편이다.", type: "FC" },
    { text: "좋다, 나쁘다를 분명하게 말한다.", type: "CP" },
    { text: "앞으로의 일을 낙천하게 생각하고 행동한다.", type: "A" },
    { text: "잘 모르는 것은 질문이나 상의해서 처리한다.", type: "A" },
    { text: "아이들이나 부하의 잘못에 대해 관대하다.", type: "NP" },
    { text: "상대방의 말에 귀를 기울여 공감하는 편이다.", type: "NP" },
    { text: "아이들이나 부하를 엄격히 교육시킨다.", type: "CP" },
    { text: "흥에 겨우면 도에 지나친 행동을 할 때가 있다.", type: "FC" },
    { text: "길을 물으면 친절히 가르쳐 준다.", type: "NP" },
    { text: "감정이 풍부하고 눈물이 많은 편이다.", type: "FC" },
    { text: "친구나 가족들에게 무엇이든 사주는 것을 좋아한다.", type: "NP" },
    { text: "몸이 좋지 않을 때는 자중해서 무리를 하지 않는다.", type: "A" },
    { text: "동정심이 많다고 생각한다.", type: "NP" },
    ];  