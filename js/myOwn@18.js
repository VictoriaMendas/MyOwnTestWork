//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню,
 * попередньо відкриті елементи не закриваються.
 */

// const acordionList = document.querySelector(".js-accordion-list");

// acordionList.addEventListener("click", onClick);
// function onClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   e.target.nextElementSibling.classList.toggle("active");
// }

// =======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу html для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

// const btnList = document.querySelector(".js-pagination");

// btnList.addEventListener("click", onBtnListClick);

// function onBtnListClick(e) {
//   if (e.target.nodeName !== "LI") {
//     return;
//   }
//   const currentBtn = e.target;
//   const activeBtn = e.currentTarget.querySelector(".active");
//   if (currentBtn.dataset.type === "page") {
//     currentBtn.classList.add("active");
//     activeBtn.classList.remove("active");
//   }
//   if (
//     currentBtn.dataset.type === "next" &&
//     activeBtn.nextElementSibling.dataset.type === "page"
//   ) {
//     activeBtn.classList.remove("active");
//     activeBtn.nextElementSibling.classList.add("active");
//   }

//   if (
//     currentBtn.dataset.type === "prev" &&
//     activeBtn.previousElementSibling.dataset.type === "page"
//   ) {
//     activeBtn.classList.remove("active");
//     activeBtn.previousElementSibling.classList.add("active");
//   }
// }

// //TODO:=========task-03=================

// const btnContainer = document.querySelector(".btn-wrapper");

// btnContainer.addEventListener("click", onBtnContainerClick);

// function onBtnContainerClick(e) {
//   if (e.target === e.currentTarget) {
//     return;
//   }

//   const btnBackground = e.target.textContent.toLowerCase();
//   const currentBtn = e.target;

//   currentBtn.classList.add(btnBackground);
// }
// // --------------Task 4 ----------------------

// const checkBox = document.querySelector("#theme-switch");
// const body = document.body;

// checkBox.addEventListener("click", onCheckboxClick);
// function onCheckboxClick(e) {
//   console.log(e.target.checked);
//   if (e.target.checked) {
//     body.classList.replace("light", "dark");
//     localStorage.setItem("switcher", "dark");
//   } else {
//     body.classList.replace("dark", "light");
//     localStorage.setItem("switcher", "light");
//   }
// }

// function renderPage() {
//   const lsData = localStorage.getItem("switcher");
//   if (lsData === "dark") {
//     body.classList.replace("light", "dark");
//     checkBox.checked = true;
//   } else {
//     body.classList.replace("dark", "light");
//   }
// }
// renderPage();
// const userData = {
//   userName: "Mango",
// };
// const numbers = [12, 76, 98, 90];
// // localStorage.setItem("test", JSON.stringify(numbers));
// console.log(JSON.parse(localStorage.getItem("test")));
// // localStorage.removeItem("test");
// // localStorage.clear();
// console.log(localStorage.key("test"));

// ___________________CRUD__________________________
const btnGet = document.querySelector(".students-btn-get");
const form = document.querySelector(".students-add");
const studentList = document.querySelector(".students-list");

btnGet.addEventListener("click", onClick);
form.addEventListener("submit", onSubmit);
// 1. GET
const BASE_URL = "https://64c770650a25021fde927baf.mockapi.io/";
const END_POINT = "bc68-students";

function getStudents() {
  return fetch(BASE_URL + END_POINT).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function createMarkup(array) {
  return array
    .map(
      (elem) => `<li><img src="${elem.avatar}" alt="${elem.lastName}">
  <h2 class="students-title">${elem.firstName} ${elem.lastName}</h2></li>`
    )
    .join("");
}

function onClick(e) {
  console.log(e);
  getStudents()
    .then((res) => (studentList.innerHTML = createMarkup(res)))
    .catch((error) => console.log(error));
}
// 2. POST

function addStudents(student) {
  return fetch(BASE_URL + END_POINT, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(student),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function onSubmit(e) {
  e.preventDefault();

  const { firstName, lastName, country, age, city } = e.currentTarget.elements;
  const student = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    country: country.value.trim(),
    age: age.value.trim(),
    city: city.value.trim(),
  };
  addStudents(student)
    .then((res) => console.log(res))
    .catch((error) => console.log(res.status));
  form.reset();
}
