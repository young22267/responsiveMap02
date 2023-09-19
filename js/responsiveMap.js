var toogleBtn = document.querySelector("navbar-toogleBtn");
var manu = document.querySelector("navbar-manu");
var icons = document.querySelector("navbar-icons");


//toogle 버튼에 클릭 이벤트 추가
toogleBtn.addEventListener("click",()=>{
    manu.classList.toogle("active");
    icons.classList.toogle("active");
});



//classList - 클래스 목록 나타냄
//화살표 함수 function(){} (=) ()=> : 화살표 함수
