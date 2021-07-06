"use strict"

const elem = document.getElementsByClassName("reveal");
const viewportHeight = window.innerHeight;

const elemTop = elem.item(0).getBoundingClientRect();
console.log(elemTop);

window.addEventListener("scroll", () => {
    elemTop.innerHTML = window.scrollY;
})