//  #123
// Якщо імейл і пароль користувача збігаються,
// зберігаєм статус юзера як залогінений в локальне сховище
// і змінюй кнопку login на logout і роби
// поля введення Недоступними для зміни.

// При перезавантаженні сторінки, якщо користувач залогінений,
//  ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.

// Клік по кнопці logout повертає все до початкового вигляду
// і видаляє дані користувача і форми з локального сховища.

// Якщо введені дані не збігаються з потрібними даними,
// викликати аlert і
// повідомляти про помилку.
// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

// const STORAGE_KEY = "form-state";
// const USER_STATUS = "user-status";

// const form = document.querySelector(".feedback-form");

// const { email, password, submitBtn } = form.elements;
// form.addEventListener("input", onInputBtnClick);
// form.addEventListener("submit", oSubmitBtnClick);

// let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
// let userStatus = JSON.parse(localStorage.getItem(USER_DATA)) || false;

// restoreForm();
// checkUserStatus();

// function restoreForm() {
//   if (formData) {
//     email.value = formData.email || "";
//     password.value = formData.password || "";
//   }
// }

// function checkUserStatus() {
//   if (userStatus) {
//     submitBtn.textContent = "Logout";

//     email.disabled = true;
//     password.disabled = true;
//   }
// }

// function onInputBtnClick(e) {
//   formData[e.target.name] = e.target.value.trim();

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }
// function oSubmitBtnClick(e) {
//   e.preventDefault();
//   if (userStatus) {
//     userStatus = false;

//     localStorage.setItem(USER_STATUS, JSON.stringify(userStatus));

//     email.disabled = false;
//     password.disabled = false;

//     submitBtn.textContent = "Login";
//     return;
//   }

//   if (
//     formData.email === USER_DATA.email &&
//     formData.password === USER_DATA.password
//   ) {
//     userStatus = true;

//     localStorage.setItem(USER_STATUS, JSON.stringify(userStatus));
//     email.disabled = true;
//     password.disabled = true;

//     submitBtn.textContent = "Logout";
//   } else {
//     alert(
//       `Email "${email.value}" and/or password "${password.value}" incorrect`
//     );
//   }
// }
