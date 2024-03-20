// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.`

const refs = {
  taskForm: document.querySelector("#task-form"),
  taskList: document.querySelector("#task-list"),
};
const STORAGE_KEY = "user-tasks";
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

refs.taskForm.addEventListener("submit", onTaskFormSubmit);
refs.taskList.addEventListener("click", onDeleteBtnClick);
renderTasks(tasks);

function onTaskFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.taskName.value.trim();

  if (!inputValue) {
    return;
  }
  tasks.push(inputValue);
  renderTasks(tasks);

  saveLocalStorage(STORAGE_KEY, tasks);
  e.target.reset();
}

function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function renderTasks(tasks) {
  refs.taskList.innerHTML = "";
  const markup = tasks
    .map(
      (task, index) => `<li class="list" >${task}
      <button type="button" name="deleteBtn" data-index="${index}">Видалити</button>
  </li>`
    )
    .join("");

  console.log(tasks);

  refs.taskList.insertAdjacentHTML("beforeend", markup);
}

function onDeleteBtnClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const idx = +e.target.dataset.index;
  tasks = tasks.filter((task, index) => index !== idx);
  saveLocalStorage(STORAGE_KEY, tasks);
  renderTasks(tasks);
  console.log(idx);
}
