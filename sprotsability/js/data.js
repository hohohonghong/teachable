/*
'soccer', 0
'basketball', 1
'baseball', 2
'skate', 3
'archery', 4
'esports', 5
'volley', 6
*/
const qnaList = [
    //qnaList을 선언
  {
    q: '공을 능숙하게 다루는 편이거나 구기 종목에 자신이 있나요?',
    a: [
      { answer: '네 잘하는 편입니다.', type: [0,1,2,6] },
      { answer: '아니요 자신 없습니다....', type: [3,4,5] },
      { answer: '잘 모르겠습니다', type: [3,4,5] },
    ]
  },
  {
    q: '순발력이 좋은 편인가요?',
    a: [
      { answer: '네 좋은 편입니다!', type: [0,1,2,5,6] },
      { answer: '아니요...', type: [3,4] },
      { answer: '잘 모르겠습니다', type: [3,4] },
    ]
  },
  {
    q: '동체 시력이 좋은 편인가요?',
    a: [
      { answer: '네 좋은 편입니다!', type: [2,4,5] },
      { answer: '아니요...', type: [0,3] },
      { answer: '잘 모르겠습니다', type: [1,6] },
    ]
  },
  {
    q: '팔의 힘이 강한 편인가요?',
    a: [
      { answer: '네 그렇습니다.', type: [1,2,4,6] },
      { answer: '아니요...', type: [0,5] },
      { answer: '잘 모르겠습니다', type: [0,5] },
    ]
  },
  {
    q: '점프력이 뛰어나나요?',
    a: [
      { answer: '네 좋은 편입니다!', type: [1,6] },
      { answer: '아니요...', type: [3,4,5] },
      { answer: '잘 모르겠습니다', type: [0,2] },
    ]
  },

  {
    q: '상황 판단력이 빠른편인가요?',
    a: [
      { answer: '네 빠른 편입니다!', type: [0,1,5,6] },
      { answer: '아니요...', type: [3,4] },
      { answer: '잘 모르겠습니다', type: [2] },
    ]
  },
  {
    q: '여러 명이 한 팀을 이뤄 활동하는 팀 플레이에 익숙하고 잘 적응하는 편인가요?',
    a: [
      { answer: '네 잘 적응하는 편입니다!', type: [0,1,2,5,6 ] },
      { answer: '아니요...', type: [2, 4 ] },
      { answer: '잘 모르겠습니다', type: [2,4 ] },
    ]
  },
  {
    q: ' 한 번에 오랜 시간 동안 앉아 있을 수 있나요? ',
    a: [
      { answer: '네 잘 적응하는 편입니다!', type: [5] },
      { answer: '아니요...', type: [0,1,2,4,6  ] },
      { answer: '잘 모르겠습니다', type: [0,1,2,4,6 ] },
    ]
  },
  {
    q: ' 무게 중심을 잘 잡나요? ',
    a: [
      { answer: ' 예 ', type: [0,3] },
      { answer: ' 아니요 ', type: [4,5] },
      { answer: '잘 모르겠습니다', type: [1,2,6] },
    ]
  }
]

const infoList = [
    //infoList변수 선언
  {
    name: ' 축구 선수 ',
    desc: ' 발재간이 뛰어나고 공을 다루는데 능숙한 당신! 축구선수가 어울리는군요~!!'  }, 
  {
    name: ' 농구 선수 ',
    desc: '  상당한 점프력과 자유자제로 드리블 치는 당신! 농구선수가 어울리는군요~!! '
  }, 
  {
    name: ' 야구 선수 ',
    desc: ' 누구보다 팔의 힘이 쎄고 상황판단력이 빠른 당신! 야구선수가 어울리는군요~!!'  },
  {
    name: ' 피겨 스케이팅 선수 ',
    desc: ' 몸이 매우 유연하고 중심도 잘 잡는 당신! 피겨스케이팅 선수가 어울리는군요~!!'  },
  {
    name: ' 양궁 선수 ',
    desc: ' 옆에서 어떠한 방해를 받아도 집중력이 흐트러지지 않는 당신! 양궁선수가 어울리는군요~!!' },
  {
    name: ' 프로게이머',
    desc: ' 한번 앉으면 3~4시간은 기본! 순발력과 집중력이 좋은 당신은 프로게이머가 어울리는군요~!!'  },
  {
    name: ' 배구 선수 ',
    desc: ' 높은 점프력과 팀 플레이에 잘 적응하는 당신! 배구선수가 어울리는군요~!! '  },
]
