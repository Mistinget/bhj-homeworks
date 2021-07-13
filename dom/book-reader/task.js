"use strict"

let elem = document.getElementsByClassName("font-size"); //нахожу элементы управления
const elemArr = Array.from(elem);
const book = document.getElementById("book"); //нахожу элементы с текстом

function changeClass(event) {
    event.preventDefault();
    let currentElemIndex = elemArr.findIndex(elem => elem.classList.contains("font-size_active"));
    elemArr[currentElemIndex].classList.remove("font-size_active");

    book.classList.remove("book_fs-big", "book_fs-small", "book_fs-undefined");
    book.classList.add("book_fs-" + this.dataset.size);

};

for (let item of elem) {
    item.addEventListener("click", changeClass);
    item.addEventListener("click", (event) => {
        event.preventDefault();
        item.classList.add("font-size_active");
    });
};






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