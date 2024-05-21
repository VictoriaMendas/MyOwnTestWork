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
