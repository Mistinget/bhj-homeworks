"use strict"

let title = document.querySelectorAll(".has-tooltip");
let tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

title.forEach(item => {
    item.onclick = (event) => {
        event.preventDefault();
        item.appendChild(tooltip);
        if (tooltip.classList.contains("tooltip_active") &&
            tooltip.textContent == item.getAttribute("title")) {
            tooltip.classList.remove("tooltip_active");
        } else {
            tooltip.classList.add("tooltip_active");
        };
        tooltip.textContent = item.getAttribute("title");
        tooltip.style.left = item.getBoundingClientRect().left + "px";
        tooltip.style.top = item.getBoundingClientRect().bottom + "px";
    };
});