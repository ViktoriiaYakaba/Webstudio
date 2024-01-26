const  menuBtn = document.querySelector('.btn-menu');
const menuBtnClose = document.querySelector('.btn-esc');
const menu = document.querySelector('.mob-menu');


  menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
menuBtnClose.addEventListener('click', function () {
  menuBtnClose.classList.toggle('active');
  menu.classList.toggle('active');
});

const modalBtn = document.querySelector('.button');
const modalBtnClose = document.querySelector('.btn-esc-modal');
const modal = document.querySelector('.backdrop');


modalBtn.addEventListener('click', function () {
  modalBtn.classList.toggle('active');
  modal.classList.toggle('active');
});
modalBtnClose.addEventListener('click', function () {
  modalBtnClose.classList.toggle('active');
  modal.classList.toggle('active');
});

