"use strict";

var addSmthBtn = document.querySelectorAll('.add-smth');
var load = document.querySelector('.load');
var body = document.querySelector('.body');
var main = document.querySelector('.main');
var header = document.querySelector('.header');

for (var i = 0; i < addSmthBtn.length; i++) {
  addSmthBtn[i].addEventListener('click', function () {
    load.classList.add('load-active');
    load.classList.remove('load-inactive');
    body.classList.add('body-active');
    main.style.display = 'none';
    header.style.display = 'none';
  });
}

var loadClose = document.querySelector('.load-close');
loadClose.addEventListener('click', function () {
  load.classList.remove('load-active');
  load.classList.add('load-inactive');
  body.classList.remove('body-active');
  main.style.display = 'initial';
  header.style.display = 'initial';
});
/*
    accordeon
*/

var accordeonBtn = document.querySelectorAll('.buttons__item');
var accordeonContent = document.querySelectorAll('.case__item-content');

var _loop = function _loop(_i) {
  accordeonBtn[_i].addEventListener('click', function () {
    accordeonContent.forEach(function (element) {
      element.classList.add('case-hidden');
      element.classList.remove('case-active');
    });

    if (accordeonContent[_i].id === accordeonBtn[_i].id) {
      accordeonContent[_i].classList.add('case-active');

      accordeonContent[_i].classList.remove('case-hidden');
    }
  });
};

for (var _i = 0; _i < accordeonBtn.length; _i++) {
  _loop(_i);
}