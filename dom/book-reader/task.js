"use strict"

let elem = document.getElementsByClassName("font-size"); //нахожу элементы управления
const book = document.getElementById("book"); //нахожу элементы с текстом

function chageClass(item) { //смена классов
    if (item.click) {
        item.classList.toggle = "font-size_active";
        if (item.classList.contains("font-size_small")) {
            book.classList.toggle = "book book_fs-small";
        } else if (item.classList.contains("font-size_big")) {
            book.classList.toggle = "book book_fs-big";
        }
    }
};
for (let item of elem) {
    item.onclick = chageClass(item);
};


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