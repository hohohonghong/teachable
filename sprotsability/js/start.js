const main = document.querySelector("#main");
const qna = document.querySelector("#qna"); //document >css에 자바가 접근하기 위해 쓰는것
const result = document.querySelector("#result");
const endPoint = 7; //분야의 갯수 -> 변수로써 계속 사용됨
const select = [0,0,0,0,0,0,0]; //사용자의 응답 담긴 배열

//시작하기 버튼 누르면 작동되는 함수
function begin(){
  // 1초 동안 메인 섹션이 사라지고, qna 섹션이 등장함
  main.style.WebkitAnimation = "fadeOut 1s"; //글자 예쁘게 나옴
  main.style.animation = "fadeOut 1s";

  //1초 뒤에 실행되게 함
  setTimeout(()=>{
    // 애니메이션 시작
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";

    setTimeout(()=>{
        main.style.display = "none"; //사라짐
        qna.style.display = "block"; //다시 나타남

    },450);

    typingIdx = 0;
    qBox.textContent = "";
    goNext(qIdx);

  },450);

}

//질문 대답 버튼 만드는 함수
function addAnswer(answerText , qIdx, idx){
  var a = document.querySelector('.answerBox'); //선택지
  var answerBtn = document.createElement('button'); //지정한 태그 네임에 해당하는 html 요소를 만들어 만환
  answerBtn.classList.add('answerList'); //답변 리스트들 버튼으로 만듬
  answerBtn.classList.add('my-5');
  answerBtn.classList.add('py-3');
  answerBtn.classList.add('mx-auto'); //센터에 위치하게 비율
  answerBtn.classList.add('fadeIn');

  a.appendChild(answerBtn); //answer (버튼)을  a의 자식으로 html 만들어버림
  answerBtn.innerHTML = answerText; //버튼 텍스트 설정

  answerBtn.style.WebkitAnimation = "fadeIn 1s";
  answerBtn.style.WebkitAnimation = "fadeIn 1s";


  //버튼 클릭 이벤트 
  answerBtn.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');

    for(let i = 0; i < children.length; i++){//버튼을 클릭하면 버튼이 사라짐 children.length 값의 범위가 늘어 함수가 실행될 때 마다 다음 버튼 값이 없어짐
      children[i].disabled = true;  //버튼이 없어짐
      children[i].style.WebkitAnimation = "fadeOut 1s";
      children[i].style.animation = "fadeOut 1s";
    }

    setTimeout(()=>{ //950ms 뒤에 실행됨
      var target = qnaList[qIdx].a[idx].type;
      for(let i=0; i<target.length; i++){
        select[target[i]]++;
      }
ㅇ
      for(let i = 0; i < children.length; i++){
        children[i].style.display= 'none'; //해당되는 값을 안보이게함
      }

      typingIdx = 0;
      qBox.textContent = "";
      qIdx += 1; //버튼이 클릭될 때마다 qIdX값이 1씩 늘어남
      console.log( typingIdx,qIdx);
      goNext(qIdx); //다음 질문 가져오기

    },950)

  }, false);


}

//qIdx에 해당하는 질문과 선택지 버튼을 가져오는 함수
function goNext(qIdx){

  if(qIdx === endPoint){ //qIdx값이 분야의 개수의 값에 도달하면 결과값 도출
    goResult();
    return;
  }

  content = qnaList[qIdx].q; //content에 data.js에 있는 qna들을 불러옴 (qIdx)값에 맞게 순서대로 

  var q = document.querySelector('.qBox'); //index.html의 변수 qBox //질문 영역
  //q.innerHTML = qnaList[qIdx].q; //data의 질문 리스트의 첫번째 요소를 가져와서 q에 넣음

  //스테이터스 바 구현
  fixV = (100/endPoint)*(qIdx+1);
  var status = document.querySelector('.statusBar');
  status.style.width = fixV + '%';

  for (let i in qnaList[qIdx].a){ //각 선택지 텍스트 배열에 대해서 반복하기
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i); //버튼을 만드는 함수
  }
}

//결과를 가져오는 함수
function goResult(){
  //qna 섹션을 닫고 result 섹션을 열어야함
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";

  //1초 뒤에 실행되게 함
  setTimeout(()=>{
    // 애니메이션 시작
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";

    setTimeout(()=>{
        qna.style.display = "none";
        result.style.display = "block";

    },450);


  setResult();
  });


}

function setResult(){
  let point = calResult();//결과값 연산

  const resultName = document.querySelector('.resultName');
  resultName.innerHTML = infoList[point].name;

//이미지 설정
  var resultImg = document.createElement('img'); //이미지 만들기
  const imgDiv = document.querySelector('#resultImg'); //이미지의 div 태그 선택해서 저장

  var imgURL = 'img/image-' +point + '.png';
  resultImg.src = imgURL; //주소값
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

//resultName 설정

  const resultDesc = document.querySelector('.resultDesc');//연결하기
  resultDesc.innerHTML = infoList[point].desc;


}

//결과를 연산해주는 함수
function calResult(){

  var result = select.indexOf(Math.max(...select)); //... 배열을 펼쳐 가장 높은 값을 result값에 저장
  return result;

}
