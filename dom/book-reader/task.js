"use strict"

let elem = document.getElementsByClassName("font-size"); //нахожу элементы управления
const elemArr = Array.from(elem);
const book = document.getElementById("book"); //нахожу элементы с текстом
const bookArr = Array.from(book);

// function chageClass(item) { //смена классов
//     if (item.click) {
//         item.classList.toggle = "font-size_active";
//         if (item.classList.contains("font-size_small")) {
//             book.classList.toggle = "book book_fs-small";
//         } else if (item.classList.contains("font-size_big")) {
//             book.classList.toggle = "book book_fs-big";
//         }
//     }
// };
// for (let item of elem) {
//     item.onclick = chageClass(item);
// };

function changeClass() {
    let currentElemIndex = elemArr.findIndex(elem => elem.classList.contains("font-size_active"));
    elemArr[currentElemIndex].classList.remove("font-size_active");
    console.log(this) //??
};
changeClass()

// function chageClass() { //смена классов
//     for (let item of elem) {
//         if (item.click) {
//             item.classList.toggle = "font-size font-size_active";
//             if (item.classList.contains("font-size_small")) {
//                 book.classList.toggle = "book book_fs-small";
//             } else if (item.classList.contains("font-size_big")) {
//                 book.classList.toggle = "book book_fs-big";
//             }
//         }
//     }
// };
// for (let item of elem) {
//     item.onclick = chageClass;
// };