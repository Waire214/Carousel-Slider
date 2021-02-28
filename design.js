const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const indicatorParent = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
const list = document.querySelector(".buttons");
let index = 0;

//set autoslide to the nextSlide function at the interval of 1000ms
let timer = setInterval(nextSlide,1000);

//on clicking the previous key, call the prevSlide function
prev.addEventListener("click", function(){
  prevSlide();
})

//on clicking the next key, call the nextSlide function
next.addEventListener("click", function(){
  nextSlide();
})

//on clicking the buttons, go to the next slide
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
//remove autoslide when you move mouse over the prev/next/button keys
//add autoslide when you move mouse out
prev.addEventListener("mouseover", function(){
  resetTimer();
})
prev.addEventListener("mouseout", function(){
  timer = setInterval(nextSlide,1000);})
next.addEventListener("mouseover", function(){
  resetTimer();
})
next.addEventListener("mouseout", function(){
  timer = setInterval(nextSlide,1000);})
list.addEventListener("mouseover", function(){
  resetTimer();
})
list.addEventListener("mouseout", function(){
  timer = setInterval(nextSlide,1000);})
//function to clear autoslide
function resetTimer(){
  clearInterval(timer);
}
