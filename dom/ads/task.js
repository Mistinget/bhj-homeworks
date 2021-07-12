"use strict"

let rotator = document.getElementsByClassName("rotator__case");
let rotatorArr = Array.from(rotator);

function changeText() {
    let currentTextIndex = rotatorArr.findIndex(elem => elem.classList.contains("rotator__case_active"));
    rotatorArr[currentTextIndex].classList.remove("rotator__case_active");
    let nextText = rotatorArr[currentTextIndex].nextElementSibling || rotatorArr[0];
    nextText.className = "rotator__case rotator__case_active";
}
setInterval(changeText, 1000);





// function chageClass() {
//     for (let i = 0; i <= (rotatorArr.length - 1); i++) {
//         let next = rotatorArr[i].nextElementSibling;
//         console.log(next, typeof next)
//         if (rotatorArr[i] == last && rotatorArr[i].classList.contains("rotator__case_active")) {
//             rotatorArr[i].classList.remove("rotator__case_active");
//             first.classList.add("rotator__case_active");
//         } else if (rotatorArr[i].classList.contains("rotator__case_active") != last) {
//             rotatorArr[i].classList.remove("rotator__case_active");
//             next.classList.add("rotator__case_active");
//         }
//     }
// };
// document.onclick = chageClass;
//setInterval(chageClass, 1000);

// function chageClass(i) {
//     let next = rotatorArr[i].nextElementSibling;
//     console.log(next);
//     document.onclick = (i) => {
//         if (rotatorArr[i] == last && rotatorArr[i].classList.contains("rotator__case_active")) {
//             rotatorArr[i].classList.remove("rotator__case_active");
//             first.classList.add("rotator__case_active");
//         } else if (rotatorArr[i].classList.contains("rotator__case_active") != last) {
//             rotatorArr[i].classList.remove("rotator__case_active");
//             next.classList.add("rotator__case_active");
//         }
//     };
// };
// for (let i = 0; i <= (rotatorArr.length - 1); i++) {
//     setInterval(chageClass(i), 1000);
// };