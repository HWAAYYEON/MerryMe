let aniBtn = document.querySelector(".btn");
let taco = document.querySelector(".taco");
let nukidjp = document.querySelector(".nukidjp");
let title = document.querySelector(".title");
let txtR = document.querySelector(".textright");
let txtL = document.querySelector(".textleft");
let jao = document.querySelector(".jao");

aniBtn.addEventListener("click", function () {
  taco.classList.toggle("ani");
  nukidjp.classList.toggle("ani");
  title.classList.toggle("ani");
  txtR.classList.toggle("ani");
  txtL.classList.toggle("ani");
  jao.classList.toggle("ani");
});
//브라우저의 애드이벤트리스너 함수를 쓸 건데, 클릭을 했을 때, 내가 만든 함수를 쓰겠다. 해서 펑션을 안에다가 지정하는 거임
