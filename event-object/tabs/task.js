"use strict"
const tabNavigation = document.querySelector(".tab__navigation"); //эл-ты меню
const tab = document.getElementsByClassName("tab");
const arrayTab = Array.from(tab);
const content = document.getElementsByClassName("tab__content"); // содержимое

tabNavigation.onclick = function(event) {
    let currentMenu = document.querySelector(".tab_active");
    currentMenu.classList.remove("tab_active");
    let currentItem = event.target;
    currentItem.classList.add("tab_active");
    let index = arrayTab.indexOf(currentItem);
    console.log(currentItem, currentMenu, index);
    let currenContent = document.querySelector(".tab__content_active");
    currenContent.classList.remove("tab__content_active");
    content[index].classList.add("tab__content_active");
};




// let index = arrayTab.findIndex(function(elem) {
//     if (elem = currentItem) {
//         console.log(elem, arrayTab)
//         return elem;
//     }
// });

// function(elem) {
//     if (elem = currentItem) {
//         return elem;
//     } else {
//         return fallse;
//     }
// }

//elem => elem = document.querySelector(".tab_active")