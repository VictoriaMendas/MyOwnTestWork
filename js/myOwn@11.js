// Завдання 1
// Натискання на кнопку "SHOW ME" має виводити значення
// з поля введення (дивіться на елементи в html-розмітці)
const alertButton = document.querySelector("#alert-button");
const alertInput = document.querySelector("#alert-input")

alertButton.addEventListener("input", onClickInput)
 function onClickInput(e) {
    console.log(e.target)
 }