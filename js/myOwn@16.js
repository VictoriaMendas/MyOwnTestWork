// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return new Promise((resolve, reject) => {
//     const message = "hello world";

//     setTimeout(() => {
//       resolve(message);
//     }, 2000);
//   });
// }
// greet().then((result) => console.log(`Your message is ${result}`));
// #@2

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const promptValue = prompt("Enter your number");
// console.log(promptValue);
// function value(promptValue) {
//   return new Promise((resolve, reject) => {
//     if (!promptValue) {
//       reject("No valid number");
//     }
//     const value = Number(promptValue);
//     if (Number.isNaN(value)) {
//       reject("error");
//     } else if (value % 2 === 0) {
//       setTimeout(() => {
//         resolve("even");
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         resolve("odd");
//       }, 2000);
//     }
//   });
// }
// value(promptValue)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//  ------333333333333---------------

// Кнопка increment повинна через секунду збільшувати значення на 1
// Кнопка decrement має через секунду зменшувати значення на 1

// const btnIncrement = document.querySelector("button[data-action='increment']");
// const btnDecrement = document.querySelector("button[data-action='decrement']");
// const counterValue = document.querySelector(".counter-value");

// btnIncrement.addEventListener("click", onBtnIncrementClick);
// btnDecrement.addEventListener("click", onBtnDecrementClick);

// function onBtnIncrementClick(e) {
//   setTimeout(() => {
//     counterValue.textContent = Number(counterValue.textContent) + 1;
//   }, 1000);
// }

// function onBtnDecrementClick(e) {
//   setTimeout(() => {
//     counterValue.textContent = Number(counterValue.textContent) - 1;
//   }, 1000);
// }
var removeDuplicates = function (nums) {
  let uniqueNum = [];
  nums.filter((num, index, array) => array.indexOf(num) === index);
  uniqueNum.push(nums);
  const k = removeDuplicates(nums);
  console.log(k);
  k === uniqueNum.length;
  for (let i = 0; i < k; i++) {
    return nums[i] === uniqueNum.length;
  }
  return k;
};
