let menuBar = document.querySelector('#menu-bars');
let menuLink = document.querySelector('.menu');
menuBar.addEventListener('click', function (){
    menuBar.classList.toggle('fa-times');
    menuLink.classList.toggle('active');
});