const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// #1
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
// function getUsersWithEyeColor(users, color) {
//   return users.filter((user) => color === user.eyeColor);
// }

// console.log(getUsersWithEyeColor(users, "blue"));

// ---------------------------------
// function getUsersWithEyeColor(user, color) {
//   return users.reduce((acc, user) => {
//     if (color === user.eyeColor) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);
// }
// console.log(getUsersWithEyeColor(users, "blue"));
// #2
// Отримати масив імен користувачів за статтю (поле gender)

// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// function getUsersWithGender(user, gender) {
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.name);
// }
// console.log(getUsersWithGender(users, "male"));

// ----------------------------------------------

// function getUsersWithGender(user, gender) {
//   return users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// }
// console.log(getUsersWithGender(users, "male"));
// #3
// Отримати масив тільки неактивних користувачів (поле є активним).
//
// [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
// function getInactiveUsers(user) {
//   return users.filter((user) => user.isActive !== true);
// }
// console.log(getInactiveUsers(users));

// ----------------------------

// function getInactiveUsers(user) {
//   return users.reduce((acc, user) => {
//     if (user.isActive === false) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);
// }
// console.log(getInactiveUsers(users));
//  #4
// Отримати користувача (не масив) по email (поле email, він унікальний).

// {об'єкт користувача Sheree Anthony}
//
// {об'єкт користувача Elma Head}
// function getUserWithEmail(user, email) {
//   return users
//     .filter((user) => user.email === email)
//     .map((user) => user.name)
//     .join(" ");
// }

// ------------------
// function getUserWithEmail(user, email) {
//   return users.reduce((acc, email) => {
//     if (user.email === email) {
//       return acc.push(user.name);
//     }
//     return acc;
//   }, []);
// }
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
//  #5

// Отримати масив користувачів віком від min до max
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// function getUsersWithAge(user, min, max) {
//   return users.filter((user) => user.age >= min && user.age <= max);
//   const usersAge = users.reduce((acc, user) => {
//     if (user.age === min && user.age === max) {
//       return acc.push(user.name);
//     }
//   }, []);
// }
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 20, 30));
// #6

// Отримати загальну суму балансу (поле balance) всіх користувачів.
//  // 20916
// function calculateTotalBalance(user) {
//   const total = users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);

//   return total;
// }
// console.log(calculateTotalBalance(users));
// #7

// Масив імен всіх користувачів які мають в друзях friend із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// function getUsersWithFriend(users, name) {
//   return users
//     .filter((user) => user.friends.includes(name))
//     .map((user) => user.name);
// }
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// #8
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
// function getSortedUniqueSkills(user) {
//   return users
//     .flatMap((user) => user.skills)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getSortedUniqueSkills(users));
// #9
// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)
// ;
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// function getNamesSortedByFriendsCount(user) {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// }
// console.log(getNamesSortedByFriendsCount(users));

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => {
//       return acc + user.balance;
//     }, 0);
//   return acc;
// };
// console.log(getTotalBalanceByGender(users, "male"));
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.find((email) => this.email === "email");
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
