//  #123
// Якщо імейл і пароль користувача збігаються, зберігайте дані з
//  форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби
//  поля введення Недоступними для зміни.

// При перезавантаженні сторінки, якщо користувач залогінений,
//  ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду
// і видаляє дані користувача З локального сховища.

// Якщо введені дані не збігаються з потрібними даними,
// викликати аlert і
// повідомляти про помилку.

// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };
const form = document.querySelector(".feedback-form");

const { email, password } = form.elements;

form.addEventListener("input", onInputBtnClick);
form.addEventListener("submit", onSubmitBtnClick);

const STORAGE_KEY = "form-state";
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
clickForm();
console.log(formData);

function onInputBtnClick(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function clickForm() {
  const localItems = localStorage.getItem(STORAGE_KEY);
  console.log(localItems);
  const markup1 = ` <button type="button" class="login ">Login</button>`;
  const markup2 = `<button type="button" class="logout ">Logout</button>`;

  //   if (!localItems) {
  //     return form.insertAdjacentHTML("afterbegin", markup2);
  //   } else {
  //     form.insertAdjacentHTML("afterbegin", markup1);
  //   }
}
function onSubmitBtnClick(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
