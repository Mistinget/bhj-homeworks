"use strict"

const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const form = document.getElementById("tasks__form");

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

    const taskRemove = Array.from(document.getElementsByClassName("task__remove"));

    taskRemove[taskRemove.length - 1].onclick = (e) => {
        e.target.parentElement.remove();
    };
};

button.onclick = addTask;

form.onsubmit = (e) => {
    e.preventDefault();
};





// tasksList.lastElementChild.querySelector(".task__remove").onclick = (e) => {
//     e.target.parentElement.remove();
// };