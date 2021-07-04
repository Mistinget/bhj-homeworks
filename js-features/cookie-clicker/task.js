let cookieClicker = document.getElementById("clicker__counter").textContent;
let clickerNumber = parseInt(cookieClicker);
let image = document.getElementById("cookie");

image.onclick = function() {
    clickerNumber += 1;
    document.getElementById("clicker__counter").textContent = clickerNumber;
    if (clickerNumber % 2 === 0) {
        image.width = 200;
    } else {
        image.width = 250;
    }
};