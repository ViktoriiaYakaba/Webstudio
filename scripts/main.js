let menuBtn = document.querySelector('.btn-menu');
let menuBtnClose = document.querySelector('.btn-esc');
let menu = document.querySelector('.mob-menu');


menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
menuBtnClose.addEventListener('click', function () {
  menuBtnClose.classList.toggle('active');
  menu.classList.toggle('active');
});




 let modalBtn = document.querySelector('.button');
let modalBtnClose = document.querySelector('.btn-esc-modal');
let modal = document.querySelector('.backdrop');


modalBtn.addEventListener('click', function () {
  modalBtn.classList.toggle('active');
  modal.classList.toggle('active');
});
modalBtnClose.addEventListener('click', function () {
  modalBtnClose.classList.toggle('active');
  modal.classList.toggle('active');
});