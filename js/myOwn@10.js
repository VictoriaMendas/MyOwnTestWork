// // const vehicles = [
// //   {
// //     make: "Honda",
// //     model: "CR-V",
// //     type: "suv",
// //     amount: 14,
// //     price: 24045,
// //     onSale: true,
// //   },
// //   {
// //     make: "Honda",
// //     model: "Accord",
// //     type: "sedan",
// //     amount: 2,
// //     price: 22455,
// //     onSale: true,
// //   },
// //   {
// //     make: "Mazda",
// //     model: "Mazda 6",
// //     type: "sedan",
// //     amount: 8,
// //     price: 24195,
// //     onSale: false,
// //   },
// //   {
// //     make: "Mazda",
// //     model: "CX-9",
// //     type: "suv",
// //     amount: 7,
// //     price: 31520,
// //     onSale: true,
// //   },
// //   {
// //     make: "Toyota",
// //     model: "4Runner",
// //     type: "suv",
// //     amount: 19,
// //     price: 34210,
// //     onSale: false,
// //   },
// //   {
// //     make: "Toyota",
// //     model: "Sequoia",
// //     type: "suv",
// //     amount: 16,
// //     price: 45560,
// //     onSale: false,
// //   },
// //   {
// //     make: "Toyota",
// //     model: "Tacoma",
// //     type: "truck",
// //     amount: 4,
// //     price: 24320,
// //     onSale: true,
// //   },
// //   {
// //     make: "Ford",
// //     model: "F-150",
// //     type: "truck",
// //     amount: 11,
// //     price: 27110,
// //     onSale: true,
// //   },
// //   {
// //     make: "Ford",
// //     model: "Fusion",
// //     type: "sedan",
// //     amount: 13,
// //     price: 22120,
// //     onSale: true,
// //   },
// //   {
// //     make: "Ford",
// //     model: "Explorer",
// //     type: "suv",
// //     amount: 6,
// //     price: 31660,
// //     onSale: false,
// //   },
// // ];
// //  #1
// // function getAvailableModelsByAmount(cars, quantity) {
// //   return cars.filter((car) => car.amount >= quantity).map((car) => car.model);
// // }
// // console.log(getAvailableModelsByAmount(vehicles, 12));
// // #2
// // function getAvailableModelsByAmount(cars, quantity) {
// //   return cars.reduce((acc, car) => {
// //     if (car.amount >= quantity) {
// //       // acc.push(car.model);
// //       return [...acc, car.model];
// //     }
// //     return acc;
// //   }, []);
// // }
// // console.log(getAvailableModelsByAmount(vehicles, 12));
// // #3
// //  отримати загальну вартість авто які на продажу і в кількосьі більше 10щт
// // function getTotalAmountCars(cars, amount) {
// //   return cars.reduce((acc, car) => {
// //     if (car.amount >= amount && car.onSale === true) {
// //       return acc + car.price;
// //     }
// //     return acc;
// //   }, 0);
// // }
// // console.log(getTotalAmountCars(vehicles, 10));
// // #4
// // function getTotalAmountCars(cars, quantity) {
// //   return cars
// //     .filter(({ onSale, amount }) => amount >= quantity && onSale)
// //     .reduce((acc, { price }) => acc + price, 0);
// // }
// // console.log(getTotalAmountCars(vehicles, 10));

// // #5
// //Призначити знижку 20% на фрукти в масиві,
// //Присвоїти ID для кожного продукту

// // const fruits = [
// //   { name: "apple", price: 200 },
// //   { name: "orange", price: 300 },
// //   { name: "grapes", price: 750 },
// // ];

// // function getFruitsWithDiscount(fruits) {
// // return fruits.map((fruit) => ({
// //   ...fruit,
// //   id: Math.random(),
// //   price: fruit.price * 0.8,
// // }));
// //   return fruits.map((fruit) => {
// //     return {
// //       ...fruit,
// //       id: Math.random(),
// //       price: fruit.price * 0.8,
// //     };
// //   });
// // }

// // console.log(getFruitsWithDiscount(fruits));
// // const players = [
// //   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
// //   { name: "Poly", playtime: 469, gamesPlayed: 2 },
// //   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
// //   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// // ];
// // // Change code below this line
// // function gh(player) {
// //   const totalAveragePlaytimePerGame = players.reduce((total, player) => {
// //     return player.playtime / player.gamesPlayed + total;
// //   }, 0);
// //   return totalAveragePlaytimePerGame;
// // }
// // console.log(gh(players));

// //Напиши функцію конструктор User для створення користувача
// // з такими властивостями
// //a. userName - ім'я, рядок
// //b. age - вік, число
// //c. numbersOfPost - кількість постів, число
// //d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

// //Додай метод getInfo(), який повертає рядок:
// //`Користувачеві ${} ${} років і в нього ${} публікацій.`
// // function User(user) {
// //   this.userName = user.userName;
// //   this.age = user.age;
// //   this.numberOfPost = user.numberOfPost;
// //   this.getInfo = function () {
// //     return `Користувачеві ${this.userName} ${this.age}
// //   років і в нього ${this.numberOfPost} публікацій.`;
// //   };
// //   console.log(this);
// // }

// // const poly = new User({ userName: "Poly", age: 23, numberOfPost: 62 });
// // console.log(poly.getInfo());
// // ******************************88

// //Напиши клас Client який створює об'єкт
// //з ​​властивостями login email
// //Оголоси приватні властивості #login #email,
// //доступ до яких зроби через геттер та сеттер login email
// // class Client {
// //   #login;
// //   #email;
// //   constructor({ login, email }) {
// //     this.#login = login;
// //     this.#email = email;
// //   }
// //   get email() {
// //     return this.#email;
// //   }
// //   set email(newEmail) {
// //     return (this.#email = newEmail);
// //   }
// // }
// // const client = new Client({ login: "mango", email: "mango@gmail.com" });

// // console.log(client.email);

// // ****************************
// //Напиши клас Notes який управляє колекцією нотаток у
// //властивості items.
// //Нотатка - це об'єкт із властивостями text і priority.
// //Додай класу статичний метод Priopity,
// //який буде повертати об'єкт із пріоритетами.
// //Додай методи addNote(note), removeNote(text)
// //updatePriority(text, newPriority)
// class Notes {
//   static Priority() {
//     return {
//       HIGH: "high",
//       LOW: "low",
//       MEDIUM: "medium",
//     };
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote = (note) => {
//     this.items.push(note);
//   };
// }
// const note = new Notes();
// note.addNote({ text: "Note 1", priority: Notes.Priority().HIGH });
// note.addNote({ text: "Note 2", priority: Notes.Priority().LOW });
// console.log(note);
