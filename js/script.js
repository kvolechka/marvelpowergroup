//jshint esversion: 6
const burgerMenuBtn = document.querySelector('.menu__btn');
const burger = burgerMenuBtn.querySelector('span');
const menuBox = document.querySelector('.menu__box');
const menuClose = document.querySelector('.menu__list-link');

burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('active');
    burger.classList.toggle('active');
    menuBox.classList.toggle('active');
});

const burgerLinksBox = document.querySelector('.menu__box .links');
burgerLinksBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('menu__list-link')) {
        burgerMenuBtn.classList.remove('active');
        burger.classList.remove('active');
        menuBox.classList.remove('active');
    }
});

const formBtn = document.querySelector('.footer__form-send');
const footerForm = document.querySelector('.footer__form');
const footerFormAnswer = document.querySelector('.footer__form-answer');
const inputName = document.querySelector('input[type=text]');
const inputEmail = document.querySelector('input[type=email]');

formBtn.addEventListener('click', () => {
    if(inputName.value !== '' && inputEmail.value !== '') {
    footerForm.style.display = 'none';
    footerFormAnswer.style.display = 'block';
    }
});
