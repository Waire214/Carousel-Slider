const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const indicatorParent = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
var index = 0;
//slider.appendChild(slider.firstElementChild);
//slider.prepend(slider.lastElementChild);
console.log(slider);

prev.addEventListener("click", function(){
  //index = (index > 0) ? index -1 : 0;

 switch (index) {
   case index > 0:
     index - 1;
     break;
 
   default:
    slider.prepend(slider.lastElementChild);
     break;
 }
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
})

next.addEventListener("click", function(){
    //index = (index < 4 - 1) ? index+1 : 3;
    switch (index) {
      case index < 3:
        index + 1
        break;
    
      default:
        slider.appendChild(slider.firstElementChild);   
        break;
    }
  
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
/*slider.addEventListener("transitionend", function(){
  if (index === 3){
    slider.appendChild(slider.firstElementChild);
  }else if (index === 0){
    slider.prepend(slider.lastElementChild);
  }
  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout (function (){
    slider.style.transition = "all 0.5s";
  })
})
slider.addEventListener("transitionend", function(){
  slides= document.querySelectorAll(".carouselitem");
  if(slides[index].id === firstClone.id){
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = `translate(${-25 * index}%)`;
  }
})
sliderId();
function sliderId(){ setInterval(() => {
  index++;
  slider.style.transform = `translate(${-25 * index}%)`;
  slider.style.transition = "0.7s";
}, 1000);
}*/
