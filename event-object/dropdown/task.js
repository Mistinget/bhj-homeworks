"use strict"

const button = document.querySelector('.dropdown__value'); //кнопка JS
const menu = document.querySelector('.dropdown__list'); //выпадающ. список

//клик по кнопке
button.onclick = function(event) {
    menu.classList.toggle('dropdown__list_active');
    event.preventDefault();
};

//клик по пункту
menu.onclick = function(event) {
    event.preventDefault();
    let currentItem = event.target;
    button.innerText = currentItem.innerText;
    menu.classList.remove('dropdown__list_active');
};





// const dropdownItem = document.getElementsByClassName('dropdown__item'); //список пунктов списка
// const itemArr = Array.from(dropdownItem); // массив пунктов

//let currentItem = itemArr.findIndex(elem => elem.click); //индекс выбранного пункта списка
//let currentItem = itemArr.findIndex(elem.onclick => elem.target)

//клик по выбранному пункту
// for (let i = 0; i < itemArr.length; i++) {
//     itemArr[i].addEventListener("click", function(event) {
//         button.innerText = itemArr[currentItem].innerText;
//         event.preventDefault();
//     });
// };
// for (let i = 0; i < itemArr.length; i++) {
//     itemArr[i].onclick = function(event) {
//         button.innerText = itemArr[currentItem].innerText;
//         event.preventDefault();
//     };
// };

//let currentItem = document.addEventListener('click', event => console.log(event.target));

// itemArr[currentItem].onclick = function(event) {
//     //button.innerText = itemArr[currentItem].innerText;
//     event.preventDefault();
//     console.log(event.currentTarget);
// };




// function buttonHeader() { //изменение названия кнопки

//     itemArr[currentItem].onclick = function() {
//         button.textContent = itemArr[currentItem].textContent;
//     }

// };


//const link = document.getElementsByClassName('dropdown__link');
//const arrLink = Array.from(link);
//let currentSlide = slidersArr.findIndex(elem => elem.classList.contains("slider__item_active"));