$(function () {
    
});

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoHeight: true,
    mousewheelControl: true,
    parallax: true,
    slidesPerView: 1,
    paginationClickable: true,
    mousewheel: {
        invert: false,
        releaseOnEdges:true,
     }, //колесика мыши 
     autoHeight: true,
     roundLengths: true,
     speed: 900,   
});

var lang = document.getElementById('lang');
lang.onchange = function(){ 
window.location = 'http://сайт.com' + lang.options[lang.options.selectedIndex].value + 'index.html'}


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})