let cookieClicker = document.getElementById("clicker__counter");
let clickerNumber = parseInt(cookieClicker.textContent);
let image = document.getElementById("cookie");

image.onclick = function() {
    clickerNumber += 1;
    cookieClicker.textContent = clickerNumber;
    if (clickerNumber % 2 === 0) {
        image.width = 200;
    } else {
        image.width = 250;
    }
};