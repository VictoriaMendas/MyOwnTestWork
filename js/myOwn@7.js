// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"

// const res = prompt("vvedi name");
// const arrayOfLogins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array, name) {
//   if (array.includes(name)) {
//     return alert("Доступ дозволено");
//   }
//   return alert("Login not found");
// }
// checkLogin(arrayOfLogins, res);
//  ### 2 ###

// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Jazz", "Blues", "Rock-n-roll"];
// styles.splice(1, 1, "Classic");

// console.log(styles.shift());
// styles.unshift("Rap", "Reggi");
// console.log(styles);
//  #### 3 ###

//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return alert("Enter not a number");
//   }
//   return a < b ? a : b;
// }
// min(45, 56);

//  ### 4 ###

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${[i + 1]} - ${array[i]}`);
//   }
// }
// logItems(["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"]);
//  ### 5 ###

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let total = 0;
//   let quantity = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       total += arg;
//       quantity += 1;
//     }
//   }
//   return total / quantity;
// }
// console.log(caclculateAverage(5, 10, 15, "hellooo"));

// ### 6 ###

//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку
// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];
//   for (const word of words) {
//     if (word.length > longestWord) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("JavaScript is mama mia"));

// ### 7 ###
//Напишіть скрипт, який замінює регістр кожного символу
//У стрічці на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// ### 8 ###
// привести масив до одного рівня не використовуючи flat

// const arrs = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "Some str",
//   [777, "word", ["Привіт", ["як сюди дістатися"]]],
// ];
// const newArr = arrs
//   .reduce((previousValue, string) => {
//     return previousValue + string;
//   }, 0)
//   .split(" ");

// console.log(newArr);
// #### 9 ###
//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];
// function unique(arr) {
//
//   const uniqueCourses = arr.filter(
//     (course, index, array) => array.indexOf(course) === index
//   );
//   console.log(uniqueCourses);
// }
// unique(words);
// function unique(arr) {
//   let newArr = [];
//   for (const elem of arr) {
//     if (newArr.includes(elem)) {
//       continue;
//     }
//     newArr.push(elem);
//   }
//   return newArr;
// }
// console.log(unique(words));

// 848487

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
//};

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
