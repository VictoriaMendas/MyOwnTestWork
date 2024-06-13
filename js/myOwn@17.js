//Напиши class Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItems(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     this.items = this.items.filter((element) => element !== item);
//   }
// }

// const storage = new Storage(["balls", "carton", "lego"]);
// console.log(storage);

// storage.removeItem("carton");
// console.log(storage.getItems());

//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note),
//  removeNote(text)
//updatePriority(text, newPriority)

class Notes {
  static Priority() {
    return { LOW: "low", HIGH: "high" };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }
  removeNote(text) {
    this.items = this.items.filter((item) => item.text !== text);
  }
  updatePriority(text, newPriority) {
    this.items = this.items.reduce((acc, item) => {
      console.log(acc);
      if (item.text === text) {
        item.priority = newPriority;
      }
      acc.push(item);
      return acc;
    }, []);
  }
}
const notes = new Notes();

notes.addNote({ text: "sleep", priority: Notes.Priority().LOW });
notes.addNote({ text: "study", priority: Notes.Priority().HIGH });
notes.addNote({ text: "dance", priority: Notes.Priority().HIGH });
notes.removeNote("dance");
notes.updatePriority("study", Notes.Priority().LOW);

console.log(notes);

//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number)
//  наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const divContainer = document.createElement("div");
// const body = document.querySelector("body");

// divContainer.classList.add("number-container");

// for (let i = 0; i < 100; i += 1) {
//   const div = document.createElement("div");
//   div.classList.add("number");
//   div.textContent = randomNumber();

//   if (div.textContent % 2 === 0) {
//     div.classList.add("even");
//   } else {
//     div.classList.add("odd");
//   }
//   divContainer.appendChild(div);
// }
// console.log(divContainer);
// body.prepend(divContainer);

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}
function createMarkup(array) {
  return array
    .map(
      ({ id, imgUrl, title }) => `<li id="${id}">
  <img src="${imgUrl}" alt="${title}" />
  <p>${title}</p>
</li>`
    )
    .join("");
}

const filmList = document.querySelector(".film-list");

// filmList.insertAdjacentHTML("afterbegin", createMarkup(films));

const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  if (input.type === "password") {
    input.type = "text";
    e.target.textContent = "HIDE";
  } else {
    input.type = "password";
    e.target.textContent = "SHOW";
  }
});

// input.addEventListener("input", handlerInput);

// function handlerInput(e) {
//   console.log(e.target.value);
// }

// input.addEventListener("focus", handlerFocus);

// function handlerFocus(e) {
//   console.log(e.target);
//   if (e.target.value.length > 5) {
//     e.target.style.outline = "solid 3px green";
//   } else {
//     e.target.style.outline = "solid 3px red";
//   }
// }

// input.addEventListener("blur", handlerBlur);
// function handlerBlur(e) {
//   console.log(e.target);
//   if (e.target.value.length > 5) {
//     e.target.style.outline = "solid 3px green";
//   } else {
//     e.target.style.outline = "solid 3px red";
//   }
// }
import { label } from "./refs.js";
console.log(label);
import que from "./message-fn.js";
console.log(que());
// const form = document.querySelector("form");

// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(e) {
//   e.preventDefault();

//   const { userName, userPassword } = e.currentTarget.elements;

//   if (userName.value.trim() === "" || userPassword.value.trim() === "") {
//     return alert("Filled is empty");
//   }
//   console.log({ userName: userName.value, userPassword: userPassword.value });
//   e.currentTarget.reset();
// }
