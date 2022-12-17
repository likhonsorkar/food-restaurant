let menuBar = document.querySelector('#menu-bars');
let menuLink = document.querySelector('.menu');
menuBar.addEventListener('click', function (){
    menuBar.classList.toggle('fa-times');
    menuLink.classList.toggle('active');
});
// Swiper
var swiper = new Swiper(".main-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });
  // Swiper
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
 loop:true,
 breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.7,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
// Loader
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;