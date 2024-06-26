//  #123
// Якщо імейл і пароль користувача збігаються,
// зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout
// і роби поля введення
// Недоступними зміни.

// При перезавантаженні сторінки, якщо користувач залогінений,
//  ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.

// Клік по кнопці logout повертає все до початкового вигляду
// і видаляє дані користувача і форми з локального сховища.

// Якщо введені дані не збігаються з потрібними даними,
// викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

const STORAGE_KEY = "form-state";
// const USER_STATUS = "user-status";

const form = document.querySelector(".feedback-form");

const { email, password, submitBtn } = form.elements;

// form.addEventListener("input", onInputClick);
form.addEventListener("submit", onFormSubmit);

// let userStatus = JSON.parse(localStorage.getItem(USER_STATUS)) || false;

restoreForm();
// checkUserStatus();

// відновлюємо дані форми коли юзер відкрив сторінку
function restoreForm() {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!formData) {
    return;
  }
  email.value = formData.email;
  password.value = formData.password;

  email.disabled = true;
  password.disabled = true;

  submitBtn.textContent = "Logout";
}

// перевіряємо статус юзера коли юзер відкрив сторінку
// function checkUserStatus() {
//   if (userStatus) {
//     submitBtn.textContent = "Logout";
//     email.disabled = true;
//     password.disabled = true;
//   }
// }

// юзер вводить дані
// function onInputClick(e) {
//   formData[e.target.name] = e.target.value.trim();

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

function onFormSubmit(e) {
  e.preventDefault();

  // юзер нажимає Logout
  if (submitBtn.textContent === "Logout") {
    email.disabled = false;
    password.disabled = false;

    submitBtn.textContent = "Login";
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    return;
  }

  // юзер нажимає Login
  if (
    email.value === USER_DATA.email &&
    password.value === USER_DATA.password
  ) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(USER_DATA));

    email.disabled = true;
    password.disabled = true;

    submitBtn.textContent = "Logout";
  } else {
    alert(
      `Email "${email.value}" or/and password "${password.value}" is wrong!`
    );
  }
}
