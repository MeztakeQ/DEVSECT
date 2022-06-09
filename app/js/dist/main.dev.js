"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {});
var swiper = new Swiper(".mySwiper", (_ref = {
  direction: "vertical",
  autoHeight: true,
  mousewheelControl: true,
  parallax: true,
  slidesPerView: 1,
  paginationClickable: true,
  mousewheel: {
    invert: false,
    releaseOnEdges: true
  }
}, _defineProperty(_ref, "autoHeight", true), _defineProperty(_ref, "roundLengths", true), _defineProperty(_ref, "speed", 900), _ref));
var lang = document.getElementById('lang');

lang.onchange = function () {
  window.location = 'http://сайт.com' + lang.options[lang.options.selectedIndex].value + 'index.html';
};

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});