"use strict";

var changePhoto = document.querySelector('.change-photo');
var accountPopup = document.querySelector('.account-load');
var accountPopupClose = document.querySelector('.account-load__close');
var body = document.querySelector('.body');
var main = document.querySelector('.main');
var header = document.querySelector('.header');
changePhoto.addEventListener('click', function () {
  accountPopup.classList.add('load-active');
  accountPopup.classList.remove('load-inactive');
  body.classList.add('body-active');
  main.style.display = 'none';
  header.style.display = 'none';
});
accountPopupClose.addEventListener('click', function () {
  accountPopup.classList.remove('load-active');
  accountPopup.classList.add('load-inactive');
  body.classList.remove('body-active');
  main.style.display = 'initial';
  header.style.display = 'initial';
});