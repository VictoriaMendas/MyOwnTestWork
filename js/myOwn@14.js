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

const USER_DATA = "form-state";
textArea();
// // const localValue = e.target.value;
// const dataForm = localStorage.getItem(USER_DATA) || {};
// console.log(dataForm);
// clickForm();

// function onInputBtnClick(e) {
//   dataForm[e.target.name] = e.target.value.trim();

//   localStorage.setItem(USER_DATA, JSON.stringify(dataForm));
// }

// function clickForm() {
//   const markup1 = ` <button type="button" class="login ">Login</button>`;
//   const markup2 = `<button type="button" class="logout ">Logout</button>`;

//   if (dataForm) {
//     try {
//       const parseItems = JSON.parse(dataForm);

//       email.value = parseItems.email || "";
//       password.value = parseItems.password || "";
//       return form.insertAdjacentHTML("afterbegin", markup2);
//     } catch (error) {
//       console.error();
//     }
//   }
//   form.insertAdjacentHTML("afterbegin", markup1);
// }
// function onSubmitBtnClick(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(USER_DATA);
// }
function onInputBtnClick(e) {
  const value = e.target.value;
  localStorage.setItem(USER_DATA, value);
}

function onSubmitBtnClick(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(USER_DATA);
}

function textArea() {
  const getItem = localStorage.getItem(USER_DATA);
  if (!getItem) {
    // form.textarea.value = getItem;
    alert("Error pls try again");
  }
}
