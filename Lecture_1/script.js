const box = document.getElementById("box");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

box.innerText = "JS로 넣은 텍스트입니다.";

box2.addEventListener("click", () => {
  box2.innerText = "클릭시 나타나는 텍스트입니다.";
});

//모든 CSS의 속성들을 변경할 수 있습니다.
box3.style.borderRadius = "70%";
box3.style.backgroundColor = "blue";
