let timer = document.getElementById("timer").textContent;
let countdown = setInterval(function() {
    if (timer === 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе');
    } else {
        timer -= 1;
        document.getElementById("timer").textContent = timer;
    }
}, 1000)