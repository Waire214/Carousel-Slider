const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const indicatorParent = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
var index = 0;

prev.addEventListener("click", function(){
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';})

next.addEventListener("click", function(){
    index = (index < 4 - 1) ? index+1 : 3;
    document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';})

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
    index = i;
    
  });
});