//  ##### 1 ####

//Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначеного параметра
//Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}
// function updateObject(obj, ...param) {
//   const updateObject = { ...obj };
//   for (const item of param) {
//     delete updateObject[item];
//   }
//   return updateObject;
// }
// console.log(updateObject({ a: 1, b: 2 }, "a"));

//   #### 2 ####

//Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти чи зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount

// const account = {
//   //поточний баланс рахунку
//   balance: 0,

//   //Історія транзакцій
//   transactions: [],
//   id: 0,
//   //Метод створює та повертає об'єкт транзакцій
//   //Приймає суму та тип транзакцій
//   createTransaction(type, amount) {
//     //операція в моно банку відобразиться ось таким обєктом після оплати десь або покласти грощі

//     return {
//       type,
//       amount,
//       id: this.id++,
//     };
//   },

//   //Метод відповідає за додавання суми до балансу.
//   //Приймає суму транцякції.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   deposit(amount) {
//     //   this.balance = this.balance + amount;
//     this.balance += amount;
//     const transaction = this.createTransaction(Transaction.DEPOSIT, amount);

//     this.transactions.push(transaction);
//   },

//   //Метод відповідає за зняття суми з балансу.
//   //Приймає суму транцякції.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "Не вистачає грошей";
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
//     this.transactions.push(transaction);
//   },

//   //Метод повертає поточний баланс
//   getBalance() {
//     return this.balance;
//   },

//   //Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return `Такої транзакції з ${id} не існує!`;
//   },

//   //Метод повертає кількість засобів певного типу
//   //транзакції з усієї історії транзакцій
//   getTransactionType(type) {
//     return this.transactions.filter((transaction) => transaction.type === type)
//       .length;
//   },
// };
// account.deposit(5000);
// account.deposit(2000);
// account.withdraw(3000);
// console.log(account.getTransactionType(Transaction.WITHDRAW));
// console.log(account.getTransactionDetails(2));
// console.log(account);

// #### 3 ####
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
// function getModels(elements) {
//   const carModel = elements.map((element) => element.model);
//   return carModel;
// }

// console.log(getModels(cars));
// const models = getModels(cars);
// const modelsListEl = document.querySelector(".models");
// console.dir(modelsListEl);

// ### 4 ###

// function renderModels(models) {
//   const markup = models
//     .map((model) => `<li class="models-item">${model}</li>`)
//     .join("");
//   modelsListEl.insertAdjacentHTML("beforeend", markup);
// }

// renderModels(models);

// ### --- ###

// function totalPriceCars(machines) {
//   return machines
//     .map((machine) => machine.price * machine.amount)
//     .reduce((previousValue, number) => {
//       return previousValue + number;
//     }, 0);
// }
// totalPriceCars(cars);

// ### --- ###

// function getAvailableModelsOnSale(vehicles, number) {
//   const getResult = vehicles.filter(
//     (vehicle) => vehicle.onSale && vehicle.amount >= number
//   );
//   .map((vehicle) => vehicle.model);
//   console.log(getResult);
// }
// getAvailableModelsOnSale(cars, 14);

// ### 5 ###

// отримати моделі авто і відсортувати їх різними сортуваннями 1.по алфавіту()
// 2. По зростаню і по спаданню ціни()

// function getCars(elements) {
//   const sortModelsOfCars = elements.map((element) => element.model);
//   sortModelsOfCars.sort();
//   console.log(sortModelsOfCars);
// }
// getCars(cars);

//  ### 6 ###

// function getAscendingPrice(elements) {
//   const descendingSort = [...elements].sort((a, b) => b.price - a.price);
//   const ascendingSort = [...elements].sort((a, b) => a.price - b.price);
//   const sortModelsOfCars = elements.map((element) => element.price);
//   console.log(descendingSort);
//   console.log(ascendingSort);
//   console.log(sortModelsOfCars);
// }
// getAscendingPrice(cars);
