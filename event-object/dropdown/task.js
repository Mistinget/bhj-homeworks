"use strict"

const button = document.querySelector('.dropdown__value'); //кнопка JS
const menu = document.querySelector('.dropdown__list'); //выпадающ. список

//клик по кнопке
button.onclick = function(event) {
    menu.classList.add('dropdown__list_active');
    event.preventDefault();
};

//клик по пункту
menu.onclick = function(event) {
    event.preventDefault();
    let currentItem = event.target;
    button.innerText = currentItem.innerText;
    menu.classList.remove('dropdown__list_active');
};