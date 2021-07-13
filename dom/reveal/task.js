"use strict"

const reveal = document.getElementsByClassName("reveal");

function isVisible(elem) {
    let position = elem.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    let topVisible = position.top > 0 && position.top < viewportHeight;
    let bottomVisible = position.bottom < viewportHeight && position.bottom > 0;
    return topVisible || bottomVisible;
};

function showVisible() {
    for (let item of reveal) {
        if (isVisible(item)) {
            item.classList.add("reveal_active");
        }
    }
};

window.onscroll = showVisible;



// function inViewport(elem) {
//     const viewportHeight = window.innerHeight;
//     const elemTop = reveal[elem].getBoundingClientRect().top;
//     if (elemTop < viewportHeight && elemTop > 0) {
//         console.log(true);
//         reveal[elem].classList.add("reveal_active");
//     }
// };

// for (let i = 0; i < reveal.length; i++) {
//     inViewport(i);
//     window.onscroll = inViewport(i);
// };