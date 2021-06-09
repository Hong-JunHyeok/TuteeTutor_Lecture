const box = document.getElementById("box");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const lists = document.getElementById("lists");

const array = ["학교 등교하기", "기숙사 정리하기", "웹 개발하기"];

box.innerText = "JS로 넣은 텍스트입니다.";

box2.addEventListener("click", () => {
  box2.innerText = "클릭시 나타나는 텍스트입니다.";
});

//모든 CSS의 속성들을 변경할 수 있습니다.
box3.style.borderRadius = "70%";
box3.style.backgroundColor = "blue";

//array의 속성에는 forEach속성이 있습니다.
array.forEach((item) => {
  const listEl = document.createElement("li");

  //li엘리먼트를 생성합니다.
  listEl.classList.add("item");
  //item이라는 class를 추가합니다
  listEl.innerHTML = `
  <h1>${item}</h1>
  
  `;
  //ul (lists)의 자식에 listEl를 붙입니다.
  lists.appendChild(listEl);
});
