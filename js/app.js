var elDropTop = document .querySelector(".drop__top");
var elTextWrapper1 = document.querySelector(".text");
var elDropIcon = document.querySelector(".drop");
elDropTop.addEventListener("click", function(){
    elTextWrapper1.classList.toggle("show-text");
    elDropIcon.classList.toggle("turn")
})
var elDropTop2 = document .querySelector(".drop__top2");
var elTextWrapper2 = document.querySelector(".text2");
var elDropIcon2 = document.querySelector(".drop2");
elDropTop2.addEventListener("click", function(){
    elTextWrapper2.classList.toggle("show-text");
    elDropIcon2.classList.toggle("turn");
    elTextWrapper1.classList.remove("show-text");
    elDropIcon.classList.remove("turn");
})


var elDropTop3 = document .querySelector(".drop__top3");
var elTextWrapper3 = document.querySelector(".text3");
var elDropIcon3 = document.querySelector(".drop2");
elDropTop3.addEventListener("click", function(){
    elTextWrapper3.classList.toggle("show-text");
    elDropIcon3.classList.toggle("turn");
    elTextWrapper2.classList.remove("show-text");
    elDropIcon2.classList.remove("turn");
})
var elDropTop4 = document .querySelector(".drop__top4");
var elTextWrapper4 = document.querySelector(".text4");
var elDropIcon4 = document.querySelector(".drop4");
elDropTop4.addEventListener("click", function(){
    elTextWrapper4.classList.toggle("show-text");
    elDropIcon4.classList.toggle("turn");
    elTextWrapper3.classList.remove("show-text");
    elDropIcon3.classList.remove("turn");
})


var elDropTop5 = document .querySelector(".drop__top5");
var elTextWrapper5 = document.querySelector(".text5");
var elDropIcon5 = document.querySelector(".drop5");
elDropTop5.addEventListener("click", function(){
    elTextWrapper5.classList.toggle("show-text");
    elDropIcon5.classList.toggle("turn");
    elTextWrapper4.classList.remove("show-text");
    elDropIcon4.classList.remove("turn");
})

var elDropTop6 = document .querySelector(".drop__top6");
var elTextWrapper6 = document.querySelector(".text6");
var elDropIcon6 = document.querySelector(".drop6");
elDropTop6.addEventListener("click", function(){
    elTextWrapper6.classList.toggle("show-text");
    elDropIcon6.classList.toggle("turn");
    elTextWrapper5.classList.remove("show-text");
    elDropIcon5.classList.remove("turn");
})



