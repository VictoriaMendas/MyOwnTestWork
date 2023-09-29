// Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const text = prompt("Яка офіційна назва JavaScript?");
// console.log(text);
// if (text === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// ##### 2 ####

// Напишіть цикл, який виводить в консоль
//числа від max до min
// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i--) {
//   console.log(i);
// }

//  ##### 3 #####

// Виведіть в консоль всі непарні числа від min до max
// const max = 68;
// const min = 23;
// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
//  #### 4 ####

//За допомогою циклу for додайте всі парні числа от min до max

// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//     console.log(total);
//   }
// }

// #### 5 #####

// Напишіть код, який буде запитувати
//логін з допомогою prompt і виводити результат
//в консоль браузера

//Якщо користувач вводить "Admin"
//то prompt запитує пароль і якщо
// пароль не ввели або натиснули кнопку Esc треба показати alert "Cancel"

//Пароль перевіряти так:
//Якщо ввели віриний пароль "I am a boss",
//тоді показати alert "Hello, Boss!"
//інакше показати alert " Wrong password"

//Якщо користувач вводить не Admin
// тоді показати alert "I don't know you"(я вас не знаю)
// const login = prompt("Ввeдіть логін?");
// console.log(login);

// if (login === "Admin") {
//   const password = prompt("Введіть пароль");
//   if (password) {
//     if (password === "I am a boss") {
//       alert("Hello, Boss!");
//     } else {
//       alert(" Wrong password");
//     }
//   } else {
//     alert("Cancel");
//   }
// } else {
//   alert("I don't know you");
// }

//  #### 6 ####

// Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в формате
//ключ:значение используя Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const values = Object.keys(user);
// for (const value of values) {
//   console.log(`${value} : ${user[value]}`);
// }
//  #### 7 ####

// У нас есть объект, в котором хранятся зарплаты нашей команды
//Напишите код для суммирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log(`Сума усіх зарплат - ${sum}`);

// ##### 8 ####

// Напишите ф-цию calcTotalPrice,
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает и возвращает общую стоимость камней
//с именем, ценой и количеством из объекта

// const stonesData = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
//   { name: "Аметист", price: 3450, quantity: 5 },
//   { name: "Бирюза", price: 2500, quantity: 9 },
// ];
// function calcTotalPrice(stones, name) {
//   for (const stone of stones) {
//     if (stone.name === name) {
//       let price = stone.price * stone.quantity;
//       console.log(`Сума по каменю ${stone.name} = ${price}`);
//       return stone.price * stone.quantity;
//     }
//   }
// }
// calcTotalPrice(stonesData, "Щебень");

// №№№№ 9 №№№№

//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {
//     this.firstValue = a;
//     this.secondValue = b;
//   },
//   sum() {
//     return this.firstValue + this.secondValue;
//   },
//   mult() {
//     return this.firstValue * this.secondValue;
//   },
// };
// calculator.read(17, 54);
// console.log(calculator.mult());

// #### 10 ####

//Напишіть код для пошуку пароля в масиві
//Через include і тернарний оператор
// const passwords = ["ajax123", "polly456", "mango789", "semiBold"];
// const password = "smiBold";

// function findPassword(code, passwords) {
//   const result = passwords.includes(code) ? "Hello" : "Wrong password";
//   return result;
// }
// console.log(findPassword(password, passwords));

// const result = findPassword(password, passwords);

// function notification(text) {
//   alert(text);
// }

// notification(result);
//  #### 11 ####

//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додати поле mood зі значенням 'happy'
//2 замінити hobby на 'skydiving'
//3 замінити значення premium на false
//4 виводити вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of

// const user = {};
// user.mood = "happy";
// user.hobby = "dive";

// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key} ==>> ${user[key]}`);
// }

// const friend = "Kiwi";

// function fn(friend) {
//   alert(`Welcome home ${friend}`);
// }
// fn(friend);

// #### 12 #####
// Додати метод getinfo в об'єкт user, який повертатиме інфу про користувача у форматі
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.
// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",

//   getinfo() {
//     return `Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}, Position: ${this.position} `;
//   },
// };

// console.log(user.getinfo());

// #### 13 ####

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0
// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

// function getTotalSalaries(salary) {
//   let sum = 0;
//   const values = Object.values(salary);
//   for (let value of values) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(getTotalSalaries(salaries));

// ##### 14 ####

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція, повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(stones, stonesName) {
//   for (let stone of stones) {
//     if (stone.name === stonesName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }
// console.log(calcTotalPrice(stones, "Діамант"));
//   ##### 15 ####

//Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };
// calculator.read(2, 7);
// console.log(calculator);
// function slugify(title) {
//   // Change code below this lin
//   const slug = title.split(" ").join("-").toLowerCase();
//   console.log(slug);
// }
// slugify("you kakashka");
// const str = "JavaScript is in my blood pumpkin";
// const array = str.split(" ");
// console.log(array.length);
