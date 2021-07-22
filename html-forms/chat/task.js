"use strict"

const widget = document.querySelector(".chat-widget");
const messages = document.getElementById("chat-widget__messages");
const input = document.getElementById("chat-widget__input");

widget.onclick = () => widget.classList.add("chat-widget_active");

function getMessage() {
    const robotMessage = [
        "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
        "До свидания",
        "Здрааасссссьте!",
        "Ожидайте!",
        "Все операторы заняты",
        "Ваш звонок важен для нас!",
    ];
    let index = Math.floor(Math.random() * robotMessage.length);

    return robotMessage[index];
};

function robotMessage() {
    let date = new Date();
    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${date.getHours() + ":" + date.getMinutes()}</div>
    <div class="message__text">
      ${getMessage()}
    </div>
  </div>
`;
    messages.lastElementChild.scrollIntoView(top);
}

function enter(event) {
    let date = new Date();

    if (event.code == "Enter" && input.value.trim() != '') {
        messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${date.getHours() + ":" + date.getMinutes()}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>
`;
        input.value = '';

        messages.lastElementChild.scrollIntoView(top);

        setTimeout(robotMessage, 1000);
    };
};

document.onkeydown = enter;