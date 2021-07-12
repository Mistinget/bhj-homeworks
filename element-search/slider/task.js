"use strict"

const sliders = document.getElementsByClassName("slider__item");
const slidersArr = Array.from(sliders);
const sliderItems = document.querySelector(".slider__items")
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

function changeNext() {
    let currentSlide = slidersArr.findIndex(elem => elem.classList.contains("slider__item_active"));
    slidersArr[currentSlide].classList.remove("slider__item_active");
    let nextSlide = slidersArr[currentSlide].nextElementSibling || slidersArr[0];
    nextSlide.className = "slider__item slider__item_active";
}
next.onclick = changeNext;

function changePrev() {
    let currentSlide = slidersArr.findIndex(elem => elem.classList.contains("slider__item_active"));
    slidersArr[currentSlide].classList.remove("slider__item_active");
    let prevSlide = slidersArr[currentSlide].previousElementSibling || sliderItems.lastElementChild;
    prevSlide.className = "slider__item slider__item_active";
}
prev.onclick = changePrev;



///////////////////////////////////////////////////////////////////////////////////////////



// function changeSlade(rout) {
//     if (slidersArr[currentSlide].classList.contains("slider__item_active")) {
//         slidersArr[currentSlide].classList.remove("slider__item_active");
//         currentSlide = (rout + slidersArr.length) % slidersArr.length;
//         slidersArr[currentSlide].classList.add("slider__item_active");
//     } else {
//         slidersArr[currentSlide].classList.add("slider__item_active");
//     }
// };

// function goToRight() {
//     changeSlade(currentSlide + 1)
// };

// function goToLeft() {
//     changeSlade(currentSlide - 1)
// };

// prev.onclick = goToLeft;
// next.onclick = goToRight;



// const sliders = document.getElementsByClassName("slider__item");
// const arrows = document.getElementsByClassName("slider__arrow");
// const slidersContain = document.getElementsByClassName("slider__items");
// const slidersNode = slidersContain.item(0).childNodes;
// let currentSlide = 0;
//let hideSlide = 0;
// // const sliderArr = Array.from(sliders);
// // console.log(sliders)
// //console.log(slidersCont.item(0).childNodes);


// for (let i = 0; i < slidersArr.length; i++) {
//     if (arrows.item(0).click || arrows.item(1).click) {
//         currentSlide = slidersArr[i];
//     }
// }


//  function arrowClick() {
//     for (let i = 0; i < slidersNode.length; i++) {
//         let slidersSum = slidersNode.length;
//         if (arrows.item(0).onclick == true || arrows.item(1).onclick == true) {
//             currentSlide = slidersSum - i;  
//          slidersNode[currentSlide].className = "slider__item slider__item_active";
//         }
//         console.log(currentSlide, slidersNode[currentSlide], 'click');
//     }
//  };
//  arrows.item(0).onclick = arrowClick;
//  arrows.item(1).onclick = arrowClick;


//let currentSlide = slidersArr.findIndex(elem => elem.classList.contains("slider__item_active"));

// if (arrows.item(0).click) {
//     function addClass() {
//         if (slidersArr[currentSlide].classList.contains("slider__item slider__item_active")) {
//             slidersArr[currentSlide].classList.remove("slider__item_active");
//             currentSlide = slidersArr.length - 1;
//             slidersArr[currentSlide].classList.add("slider__item_active");
//             console.log(slidersArr[currentSlide]);

//         } else {
//             currentSlide = slidersArr.length - 1;
//             slidersArr[currentSlide].classList.add("slider__item_active");
//         };
//         console.log(slidersArr[currentSlide]);
//     };
// }


// for (const item of arrows) {
//     //item.addEventListener("click", getElem); //????
//     item.addEventListener("click", addClass);
// };

// for (let i = 0; i < sliders.length; i++) {
// for (const elem of sliders) {
//     if (arrows.item(0).click || arrows.item(1).click) {
//         function addClass() {
//             if (elem.classList.contains("slider__item")) {
//                 elem.classList.add("slider__item_active");

//             } else if (elem.classList.contains("slider__item slider__item_active")) {
//                 elem.classList.remove("slider__item")
//             };
//             console.log(elem, sliders);
//         };

//     }

// };



// for (let i = 0; i < slidersArr.length; i++) {
// function arrowClick() {
//   let slidersSum = slidersArr.length - 1;
//             if (arrows.item(0).click) {
//                 currentSlide = slidersSum - i;  

//             } else if (arrows.item(1).click) {
//                 currentSlide = slidersSum + i;
//             }
//             slidersArr[currentSlide].className = "slider__item slider__item_active";
//             console.log(currentSlide, slidersArr[currentSlide], 'click');
//         } 

//      };
//     //  arrows.item(0).onclick = arrowClick;
//     //  arrows.item(1).onclick = arrowClick;
//     for (const item of arrows) {
//     item.onclick = arrowClick;
// };