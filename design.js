const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const sliderSection = document.querySelectorAll(".carouselitem");
console.log(sliderSection);
var index = 0;
prev.addEventListener("click", function(){
  index = (index > 0) ? index -1 : 0;
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';})
next.addEventListener("click", function(){
    index = (index < 4 - 1) ? index+1 : 3;
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';})

