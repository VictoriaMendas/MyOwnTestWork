// const users = [
// {
//   id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//   name: "Moore Hensley",
//   email: "moorehensley@indexia.com",
//   eyeColor: "blue",
//   friends: ["Sharron Pace"],
//   isActive: false,
//   balance: 2811,
//   skills: ["ipsum", "lorem"],
//   gender: "male",
//   age: 37,
// },
// {
//   id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//   name: "Sharlene Bush",
//   email: "sharlenebush@tubesys.com",
//   eyeColor: "blue",
//   friends: ["Briana Decker", "Sharron Pace"],
//   isActive: true,
//   balance: 3821,
//   skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//   gender: "female",
//   age: 34,
// },
// {
//   id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//   name: "Ross Vazquez",
//   email: "rossvazquez@xinware.com",
//   eyeColor: "green",
//   friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   isActive: false,
//   balance: 3793,
//   skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//   gender: "male",
//   age: 24,
// },
// {
//   id: "249b6175-5c30-44c6-b154-f120923736f5",
//   name: "Elma Head",
//   email: "elmahead@omatom.com",
//   eyeColor: "green",
//   friends: ["Goldie Gentry", "Aisha Tran"],
//   isActive: true,
//   balance: 2278,
//   skills: ["adipisicing", "irure", "velit"],
//   gender: "female",
//   age: 21,
// },
// {
//   id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//   name: "Carey Barr",
//   email: "careybarr@nurali.com",
//   eyeColor: "blue",
//   friends: ["Jordan Sampson", "Eddie Strong"],
//   isActive: true,
//   balance: 3951,
//   skills: ["ex", "culpa", "nostrud"],
//   gender: "male",
//   age: 27,
// },
// {
//   id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//   name: "Blackburn Dotson",
//   email: "blackburndotson@furnigeer.com",
//   eyeColor: "brown",
//   friends: ["Jacklyn Lucas", "Linda Chapman"],
//   isActive: false,
//   balance: 1498,
//   skills: ["non", "amet", "ipsum"],
//   gender: "male",
//   age: 38,
// },
// {
//   id: "e1bf46ab-7168-491e-925e-f01e21394812",
//   name: "Sheree Anthony",
//   email: "shereeanthony@kog.com",
//   eyeColor: "brown",
//   friends: ["Goldie Gentry", "Briana Decker"],
//   isActive: true,
//   balance: 2764,
//   skills: ["lorem", "veniam", "culpa"],
//   gender: "female",
//   age: 39,
// },
// ];
// ### 1 ###

// Отримати масив імен всіх користувачів (поле name).
// function getUsersNames(persons) {
//   const userNames = persons.map((person) => person.name);
//   return userNames;
// }
// console.log(getUsersNames(users));

// ### 2 ###

// Отримати масив об'єктів
//  користувачів за кольором очей (поле eyeColor).
// function getUsersByEyeColors(persons, color) {
//   const usersByEyeColor = persons.filter((person) => person.eyeColor === color);
//   return usersByEyeColor;
// }
// console.log(getUsersByEyeColors(users, "green"));

//  #### 3 ####

// Отримати масив імен користувачів за статтю (поле gender)
// function getUsersGender(elements, gender) {
//   const usersByGender = elements.filter((element) => element.gender === gender);
//   return usersByGender;
// }
// console.log(getUsersGender(users, "female"));

// #### 4 ####

// Отримати масив
// тільки неактивних користувачів (isActive).
// function getActiveUsers(persons, isActive) {
//   const activeUsers = persons.reduce((previousValue, person) => {
//     if (person.isActive === isActive) {
//       previousValue.push(person);
//       return previousValue;
//     }
//     return previousValue;
//   }, []);
//   return activeUsers;
// }

// console.log(getActiveUsers(users, false));
//  ### 5 ###

// Отримати користувача (не масив) по email (поле email, він унікальний).
// function getUsersByEmail(persons, email) {
//   const usersByEmail = persons.filter((person) => person.email === email);

//   return usersByEmail[0];
// }
// console.log(getUsersByEmail(users, "elmahead@omatom.com"));
// ### 6 ###

// Отримати масив користувачів віком від min до max
// function getUsersAge(persons, minAge, maxAge) {
//   const fiteredUsersByAge = persons.filter(
//     (person) => person.age >= minAge && person.age <= maxAge
//   );
//   return fiteredUsersByAge;
// }
// console.log(getUsersAge(users, 24, 33));
// ### 7 ###

// Отримати загальну суму балансу (поле balance) всіх користувачів
// function getTotalSumOfBalance(persons) {
//   const totalBalance = persons.reduce((previousValue, { balance }) => {
//     return previousValue + balance;
//   }, 0);
//   return totalBalance;
// }
// console.log(getTotalSumOfBalance(users));
//  ### 8 ###

// Масив імен всіх користувачів які мають друга із зазначеним ім'ям.
// function getUsersFriendsName(persons, name) {
//   const usersFriendName = persons
//     .filter((person) => person.friends.includes(name))
//     .map((person) => person.name);
//   return usersFriendName;
// }

// console.log(getUsersFriendsName(users, "Goldie Gentry"));
// ### 9 ###

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// function getSkillsOfUsers(persons) {
//   return persons
//     .flatMap((person) => person.skills)
//     .filter((skill, index, array) => array.indexOf(skill) === index)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getSkillsOfUsers(users));
