// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return new Promise((resolve, reject) => {
//     const message = "hello world";

//     setTimeout(() => {
//       resolve(message);
//     }, 2000);
//   });
// }
// greet().then((result) => console.log(`Your message is ${result}`));
// #@2

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const promptValue = prompt("Enter your number");
// console.log(promptValue);
// function value(promptValue) {
//   return new Promise((resolve, reject) => {
//     if (!promptValue) {
//       reject("No valid number");
//     }
//     const value = Number(promptValue);
//     if (Number.isNaN(value)) {
//       reject("error");
//     } else if (value % 2 === 0) {
//       setTimeout(() => {
//         resolve("even");
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         resolve("odd");
//       }, 2000);
//     }
//   });
// }
// value(promptValue)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//  ------333333333333---------------

// Кнопка increment повинна через секунду збільшувати значення на 1
// Кнопка decrement має через секунду зменшувати значення на 1

// const btnIncrement = document.querySelector("button[data-action='increment']");
// const btnDecrement = document.querySelector("button[data-action='decrement']");
// const counterValue = document.querySelector(".counter-value");

// btnIncrement.addEventListener("click", onBtnIncrementClick);
// btnDecrement.addEventListener("click", onBtnDecrementClick);

// function onBtnIncrementClick(e) {
//   setTimeout(() => {
//     counterValue.textContent = Number(counterValue.textContent) + 1;
//   }, 1000);
// }

// function onBtnDecrementClick(e) {
//   setTimeout(() => {
//     counterValue.textContent = Number(counterValue.textContent) - 1;
//   }, 1000);
// }

//TODO:=========task-01=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 * */

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }
// const client = new Client("mango", "mango@gmail.com");
// client.login = "kiwi";
// console.log(client.login);

//TODO:=========task-02=================

/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */
// class Notes {

//   items = [];

//   static Priority() {
//     return { LOW: "low", HIGH: "high" };
//   }
//   addNotes(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     this.items = this.items.filter((item) => item.text !== text);
//   }
//   updatePriority(text, newPriority) {
//     console.log(text);
//     const result = this.items.find((item) => item.text === text);
//     console.log(result);
//     result.priority = newPriority;
//   }
// }
// const notes = new Notes();

// notes.addNotes({ text: "Practice", priority: Notes.Priority().LOW });
// notes.addNotes({ text: "Have party", priority: Notes.Priority().HIGH });
// console.log(notes);
// notes.removeNote("Practice");

// notes.updatePriority("Have party", Notes.Priority().LOW);
// console.log(notes);

//TODO:=========task-02=================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити",
//  у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

// const btnInput = document.querySelector(".js-password-button");
// const input = document.querySelector(".js-password-input");
// console.log(btnInput);
// btnInput.addEventListener("click", onClick);

// function onClick(e) {
//   if (input.type === "password") {
//     input.type = "text";
//     btnInput.textContent = "Приховати";
//   } else {
//     input.type = "password";
//     btnInput.textContent = "Показати";
//   }
// }

//TODO:=========task-04=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

const decrease = document.querySelector(".js-decrease");
const increase = document.querySelector(".js-increase");
const box = document.querySelector(".box");

decrease.addEventListener("click", onClick);
increase.addEventListener("click", onClick);

function onClick(e) {
  const { offsetWidth } = box;
  if (e.target.id === "decrease") {
    console.log(offsetWidth);
    box.style.width = `${offsetWidth - 20}px `;
    box.style.height = `${offsetWidth - 20}px `;
    return;
  }
  box.style.width = `${offsetWidth + 20}px `;
  box.style.height = `${offsetWidth + 20}px `;
}
