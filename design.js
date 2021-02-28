const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const indicatorParent = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
const list = document.querySelector(".buttons");
let index = 0;
let timer = setInterval(autoslide,1000);

prev.addEventListener("click", function(){
  prevSlide();
})
next.addEventListener("click", function(){
  nextSlide();
})
function indicateFunc(){
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
    index = i;
    
  });
});
}
indicateFunc();
function prevSlide(){
  if(index === 0){
    index = 3;
  }else{
    index--;
  }
  changeSlide();
}
function nextSlide(){
  if(index === 3){
    index = 0;
  }else{
    index++;
  }
  changeSlide();
}
function changeSlide(){
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
}
prev.addEventListener("mouseover", function(){
  resetTimer();
})
prev.addEventListener("mouseout", function(){
  timer=setInterval(autoslide,1000);
})
next.addEventListener("mouseover", function(){
  resetTimer();
})
next.addEventListener("mouseout", function(){
  timer=setInterval(autoslide,1000);
})
list.addEventListener("mouseover", function(){
  resetTimer();
})
list.addEventListener("mouseout", function(){
  timer=setInterval(autoslide,1000);
})

function resetTimer(){
  // when click to indicator or controls button 
  // stop timer 
  clearInterval(timer);
  // then started again timer
  //timer=setInterval(autoslide,1500);
}

function autoslide(){
  nextSlide();
}
