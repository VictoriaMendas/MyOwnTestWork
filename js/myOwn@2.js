// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// let num;
// switch (num) {
//   case "1":
//     result = "зима";
//     break;

//   case "2":
//     result = "весна";
//     break;

//   case "3":
//     result = "літо";
//     break;
//   case "4":
//     result = "осінь";
//     break;

//   default:
//     result = "Error";
// }
// console.log(result);
// Напишіть if..else, що відповідає наступному switch:
// let browser;
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");

// }
// const browser = "Ed";
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (browser === "Chrome" && "Firefox" && "Safari" && "Opera") {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Task #3

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// function fn(max, min) {
//   let num = [];
//   for (let i = min; i < max; i += 1) {
//     console.log(num.push(i));
//     let total = 0;
//     if (i % 2 === 0) {
//       console.log(total + i);
//     }
//   }
// }
// fn(20, 0);

// #4
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age >= minAge && user.age <= maxAge);
//  #5 Task
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);
//  Task # 6
// Напишіть функцію min(a,b), яка повертає менше чисел a, b ?\
// function min(a, b) {
//   const minNumb = a < b ? a : b;
//   console.log(minNumb);
// }
// min(5, 10);

// #7

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"
// const login = prompt("Add login");
// console.log(login);
// if (login === "Admin") {
//   const password = prompt("Password?");

//   if (password === "Im main") {
//     prompt("Hello");
//   } else {
//     prompt("wrong password");
//   }
// } else if (login === "" || "Esc") {
//   prompt("Canceled");
// } else {
//   prompt("I dont know u");
// }
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
// console.log(i);
// console.log(array[i]);
// console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп", "qweqwe"]);
