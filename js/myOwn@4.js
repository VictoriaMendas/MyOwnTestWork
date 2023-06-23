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
const myArray = [];
for (let i = 9; i > 0; i += 2) {
  if (i % 2 !== 0) myArray.push(i);
}
