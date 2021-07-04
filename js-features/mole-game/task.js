"use strict"

let point = 0;
let fall = 0;

function getHole(index) {
    let hole = document.getElementById(`hole${index}`)
    hole.onclick = function() {
        if (hole.click && hole.classList.contains("hole_has-mole")) {
            point += 1;
            document.getElementById("dead").textContent = point;
        } else {
            fall += 1;
            document.getElementById("lost").textContent = fall;
        };
        if (fall == 5) {
            alert("Не отчаивайтесь! Попробуйте ещё раз!");
            window.location.reload();
        } else if (point == 10) {
            alert("Поздравляем! Вы победили!");
            window.location.reload();
        }
    };

};

for (let i = 1; i < 10; i++) {
    getHole(i);
};