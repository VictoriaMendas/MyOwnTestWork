//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get mail() {
//     return this.#email;
//   }
//   set mail(newEmail) {
//     this.#email = newEmail;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }
// const poly = new Client("PolyPolly", "chupa@gmail.com");
// console.log(poly);
// console.log(poly.mail);
// console.log((poly.mail = "tuttifrutti@gmail.com"));

// ### 2 ###

//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priority() {
//     return { HIGH: "high", LOW: "low" };
//   }
//   constructor() {
//     this.items = [];
//   }
//   addNote(note) {
//     return this.items.push(note);
//   }
//   removeNote(text) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }

//   updatePriority(text, newPriority) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items[index].priority = newPriority;
//     }
//   }
// }
// const book = new Notes();
// book.addNote({ text: "blahblah", priority: Notes.Priority().HIGH });
// book.addNote({ text: "joyoyo", priority: Notes.Priority().LOW });
// // book.removeNote("joyoyo");
// book.updatePriority("joyoyo", Notes.Priority().HIGH);

// console.log(book);

//  ### 3 ###

//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// class Animal {
//   constructor(cat, dog, bird) {
//     this.cat = cat;
//     this.dog = dog;
//     this.bird = bird;
//   }
// }
