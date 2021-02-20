let rabbit = document.querySelector("#rabbit-image");
let msg = document.querySelector("#bubble");
let menu = document.querySelectorAll(".menu-list");

let msgList = ["정규 표현식을 사용하면 수십 줄에 달하는 복잡한 코드를 손쉽게 줄일 수 있어요. 문법이 복잡해도 꼭 배워야 하는  이유죠.", "\"/\" 는 정규 표현식이 시작하고 끝남을 의미해요. 문자열을 출력할 때 ' '를 쓰는 것과 비슷한 이치라고 볼 수 있겠네요.", "복잡한 단서를 찾는 문제에 막혔다면 정규 표현식 프로파일을 한 번 꼼꼼히 확인해 보세요.", "\"\\\" 는 정규 표현식에서 이미 의미가 있어 사용되고 있는 $, ^, +를 비롯한 패턴을 문자로써 사용하고 싶을 때 써요. 간단하게 문자로 표시하고 싶은 문자 앞에 붙이기만 하면 돼요.", "\".\" 은 어떤 문자열이든 매칭시켜요. 그렇지만, 줄바꿈이나 공백을 비롯한 일부 문자는 예외에요.", "수량 연산자는 기본적으로 탐욕스러워요. 가능한 한 많은 문자열을 내부에 포함하는 쪽으로 진행하려 하죠. 하지만 그 뒤에 \"?\"를 붙인다면 게으르게 만들 수 있어요. 이 경우, 최소한의 문자열만 매칭하려고 한답니다."];

rabbit.addEventListener("click", () => {
  let random =  Math.floor(Math.random() * msgList.length);
  console.log(random);
  msg.innerText = msgList[random];
});

menu[0].addEventListener("mouseover", () => {
  msg.innerText = "[테스트] ★☆☆ 첫 번째 요소 위에 마우스를 올리셨어요!";
});
menu[1].addEventListener("mouseover", () => {
  msg.innerText = "[테스트] ★★☆ 두 번째 요소 위에 마우스를 올리셨어요!";
});
menu[2].addEventListener("mouseover", () => {
  msg.innerText = "[테스트] ★★★ 세 번째 요소 위에 마우스를 올리셨어요!";
});
