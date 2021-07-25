"use strict"

const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function addTask() {
    if (input.value.trim() != "") {
        tasksList.insertAdjacentHTML("beforeEnd", `
    <div class="task">
  <div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
    `)
    };
    input.value = "";

    let taskRemove = document.getElementsByClassName("task__remove");

    for (let item of taskRemove) {
        item.onclick = (e) => {
            e.preventDefault();
            item.parentElement.remove();
        };
    };
};

button.onclick = addTask;

// input.onkeydown = (event) => {
//     if (event.code == "Enter" || event.code == "NumpadEnter") {
//         addTask;
//     }
// };




// function findKey(event) {
//     console.log(event.key, event.code);
// };
// input.onkeydown = findKey;