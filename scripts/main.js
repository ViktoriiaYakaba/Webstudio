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

const express = require('express');
const app = express();

app.get('/vecchio-percorso', (req, res) => {
  // Effettua una redirezione permanente (301) al nuovo percorso
  res.redirect(301, '/www.webstudio.com');
});

app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});