// function invertCase(string) {
//   const array = string.split("");
//   const result = [];
//   for (const letter of array) {
//     if (letter === letter.toUpperCase()) {
//       result.push(letter.toLowerCase());
//     } else {
//       result.push(letter.toUpperCase());
//     }
//   }
//   return result.join("");
// }
// console.log(invertCase("School Mario"));

// // #2

// function invertCaseFor(string) {
//   const array = string.split("");
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === array[i].toUpperCase()) {
//       result.push(array[i].toLowerCase());
//     } else {
//       result.push(array[i].toUpperCase());
//     }
//   }
//   return result.join("");
// }
// console.log(invertCaseFor("School Mario Today"));

// ЗАДАНИЕ 1. Напиши скрипт, который для объекта user последовательно:
// 1 добавит поле mood со значением 'happy'
// 2 заменит hobby на 'skydiving'
// 3 заменит значение premium на false
// 4 выводит содержимое объекта users в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(` ${key}: ${user[key]}`);
// }
//ЗАДАНИЕ 2. У нас есть объект, в котором хранятся зарплаты нашей команды
// Напишите код для сумирования всех зарплат и
// сохраните его результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sumSalaries = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//   sumSalaries += value;
// }
// console.log(sumSalaries);

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },];
// function calcTotalPrice(stones, stonesName) {
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return 0;
// }
// console.log(stones, 'diamond');

// function findMatches(arr, ...nums) {
//   const matches = [];
//   for (let num of nums) {
//     if (arr.includes(num)) {
//       matches.push(num);
//     }
//   }

//   return matches;
// }
// function addNumbers(a, b, c) {
//   const sum = a + b + c;
//   console.log(sum);
//   return sum;
// }
// const result = addNumbers(54, 5, 15);
// console.log(result);
// const array = ["Speed potion", "Dragon breath", "Stone skin"];
// // console.log(array)
// for (let item of array) {
//   console.log(item);
// }
// const obj = {
//   name: "victoria",
//   email: "victoria@gmail.com",
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
// };
// console.log(obj.potions);
// console.log({} === {});
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line

// Напиши функцію findSmallerNumber(numbers)
// яка шукає найменше число в масиві.
// Додай перевірку що функція отримує масив
// const numbers = [15, 5, 35, 56, 12, 24, 7, 80, 3];
// // 1. Напиши функцію findSmallerNumber(numbers)
// // 2. Треба перебрати масив

// function findSmallerNumber(arrNumbers) {
//   let smallestNumber = arrNumbers[0];

//   for (const number of arrNumbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// }
// const result = findSmallerNumber(numbers);
// console.log(findSmallerNumber(numbers));

//  Task 945684658

// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення в параметрі maxLength, тоді ми повертаємо  message довжиною maxLength
//  і в кінці ставиио (...).А якщо довжина не перевищцє maxLength тоді повкртає повністю message
// 1.Написати функцію
// function formatMessage(message, maxLength) {
//   if (message.length > maxLength) {
//     return message.slice(0, maxLength) + "...";
//   }
//   return message;
// }

// console.log(formatMessage("People help help", 3));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// 1. написати функцію
// 2. додати числа поділтьт на кількість чисел
function caclculateAverage(...args) {
  return;
}
caclculateAverage(2, 56, 3, "Hello", "abg", 67);

