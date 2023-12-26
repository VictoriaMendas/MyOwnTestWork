// Завдання 1
// Натискання на кнопку "SHOW ME" має виводити значення
// з поля введення (дивіться на елементи в html-розмітці)
// const alertButton = document.querySelector("#alertButton");
// const alertInput = document.querySelector("#alertInput");
// const taskTitle = document.querySelector(".taskTitle");
// console.log(taskTitle);
// alertButton.addEventListener("click", onAlertBtnClick);
// function onAlertBtnClick(e) {
//   taskTitle.textContent = alertInput.value;
// }
// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const swapButton = document.querySelector("#swapButton");
// const leftSwapInput = document.querySelector("#leftSwapInput");
// const rightSwapInput = document.querySelector("#rightSwapInput");

// swapButton.addEventListener("click", onSwapButtonClick);
// function onSwapButtonClick(e) {
//   console.log(swapButton);

//   const leftInputValue = leftSwapInput.value;
//   leftSwapInput.value = rightSwapInput.value;
//   rightSwapInput.value = leftInputValue;
// }

// Завдання 3
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const taskTitle = document.querySelector(".taskTitle");
// const passwordButton = document.querySelector("#passwordButton");

// passwordButton.addEventListener("click", onSwapBtnClick);
// function onSwapBtnClick(e) {
//   if (passwordButton.textContent === "Розкрити") {
//     passwordButton.textContent = "Приховати";
//     taskTitle.style.display = "block";
//   } else {
//     passwordButton.textContent = "Розкрити";
//     taskTitle.style.display = "none";
//   }
// }

// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,
// kнопка "Збільшити" - більше на 10 пікселів.

// const box = document.querySelector("#box");
// const decreaseBtn = document.querySelector("#decrease");
// const increaseBtn = document.querySelector("#increase");

// decreaseBtn.addEventListener("click", onDecreseBtnClick);
// increaseBtn.addEventListener("click", onIncreaseBtnClick);

// let size = 0;
// box.style.backgroundColor = "red";

// function onDecreseBtnClick(e) {
//   if (size === 0) {
//     return;
//   }
//   size -= 10;

//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// }
// function onIncreaseBtnClick(e) {
//   size += 10;
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// }

// Завдання 6
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const listItems = document.querySelectorAll(".listItem");
// const double = document.querySelector("#double");
// console.log(listItems);
// double.addEventListener("click", onMultiplyBtnClick);

// function onMultiplyBtnClick(e) {

//   listItems.forEach((item) => {
//     item.textContent = +item.textContent * 2;
//   });

// }

// Завдання 8
// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

// const resultButton = document.querySelector("#resultButton");
// const resultSection = document.querySelector("#resultSection");
// const statList = document.querySelector(".statList");

// statList.addEventListener("click", onCalculateBtnClick);
// resultButton.addEventListener("click", onResultBtnClick);

// const btnStats = {};
// let sum = 0;
// function onCalculateBtnClick(e) {
//   const btnResult = Number(e.target.dataset.number);
//   sum += btnResult;
//   btnStats[e.target.textContent] = (btnStats[e.target.textContent] || 0) + 1;
//   console.log(sum);
//   console.log(btnStats);
// }
// function onResultBtnClick(event) {
//   resultSection.innerHTML = `${resultButton.textContent} - ${sum}`;
//   for (const stats in btnStats) {
//     resultSection.innerHTML += `${stats} була натиснута ${btnStats[stats]} разів `;
//   }
// }

// Наведено список людей. Зроби фільтр на ім'я/прізше
// const users = [
//   "Peter Miller",
//   "John Carter",
//   "Amanda Diaz",
//   "Brad Sanders",
//   "Devis Brooks",
//   "Robert Morgan",
// ];
// const contactsFilter = document.querySelector(".contactsFilter");
// const contactsList = document.querySelector(".contacts");

// renderContacts(users);

// function renderContacts(users) {
//   const markup = users
//     .map((user) => `<li class="contact">${user}</li>`)
//     .join("");
//   contactsList.innerHTML = markup;
// }

// contactsFilter.addEventListener("input", onFilteredInputClick);

// function onFilteredInputClick(evt) {

//   const inputValue = evt.target.value.trim().toLowerCase();
//   const filteredUsers = users.filter((user) =>
//     user.toLowerCase().includes(inputValue)
//   );
//   renderContacts(filteredUsers);

// }
