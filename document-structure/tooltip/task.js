"use strict"

let title = document.querySelectorAll(".has-tooltip");
let tooltip = document.createElement('div');
console.log(tooltip);

for (let item of title) {
    item.onclick = (e) => {
        e.preventDefault(); //27стр.
        item.insertAdjacentHTML("beforeEnd", "<div>Проверка!</div>");

    }
}

{
    /* <div class="tooltip tooltip_active" style="left: 50; top: 50">
            Проверка!
        </div> */
}