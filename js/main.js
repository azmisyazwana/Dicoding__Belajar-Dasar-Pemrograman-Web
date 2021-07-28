var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const scrollHeader = () =>{
  const header = document.querySelector("#header")
  
  if(this.scrollY >= 180){
    header.classList.add("nav-bar")
    header.classList.remove("header")

  }else{
    header.classList.remove("nav-bar")
    header.classList.add("header")
  }
}

window.addEventListener("scroll", scrollHeader)

const menu = document.querySelector(".menu")
const menuToggle = document.querySelector(".menu-toggle")
console.log(menuToggle)

menuToggle.addEventListener("click", function(){
  // menu.style.display = block;
  // menu.classList.remove("container__nav")
  menu.classList.add("animasi-show__menu")
})

const close = document.querySelector(".close__button")


close.addEventListener("click", function(){
  menu.classList.remove("animasi-show__menu")
})


const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true
})

sr.reveal(`.img__about,
            .img__card, .title__content-card,
            .img__author, .title__content, .info__author, .icon__footer-content,
            .sponsor__img, .title__footer, .nav__link-footer`,{
  origin: 'top',
  interval: 200 //yang ngatur jarak pandang saat bakal menghilang
})

sr.reveal(`.title__about,
            .subtitle__content-card`,{
  origin: 'left'
})

sr.reveal(`.subtitle__about,
            .footer__content-card`,{
  origin: 'right',
  interval: 100
})
