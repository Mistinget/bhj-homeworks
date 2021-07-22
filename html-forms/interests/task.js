"use strict"

let checkbox = document.querySelectorAll('.interest__check');

checkbox[0].onclick = () => {
    if (checkbox[0].checked) {
        checkbox[1].checked = true;
        checkbox[2].checked = true;
    } else if (checkbox[0].checked === false) {
        checkbox[1].checked = false;
        checkbox[2].checked = false;
    }
};

checkbox[3].onclick = () => {
    if (checkbox[3].checked) {
        checkbox[4].checked = true;
        checkbox[5].checked = true;
    } else if (checkbox[3].checked === false) {
        checkbox[4].checked = false;
        checkbox[5].checked = false;
    }
};







// function onChecked(a, b, c) {
//     if (checkbox[a].checked) {
//         checkbox[b].checked = true;
//         checkbox[c].checked = true;
//     } else if (checkbox[a].checked === false) {
//         checkbox[b].checked = false;
//         checkbox[c].checked = false;
//     }
// };
// checkbox[0].onclick = onChecked(0, 1, 2);
// checkbox[3].onclick = onChecked(3, 4, 5);




// let interest = document.getElementsByClassName("interest");
// //let checkbox = 


// if (document.querySelector(".interest__check")) {
//     document.querySelectorAll(".interest__check").checked;
// }