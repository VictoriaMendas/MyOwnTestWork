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
