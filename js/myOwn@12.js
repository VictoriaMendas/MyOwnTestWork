const btnModal = document.querySelector(".header-btn-modal");
const backdrop = document.querySelector(".backdrop");
const buttonCloseModal = document.querySelector(".button-close-modal");

btnModal.addEventListener("click", onBtnModalClick);
buttonCloseModal.addEventListener("click", onButtonCloseModalClick);
backdrop.addEventListener("click", onBackdropClick);
console.log(btnModal);
function onBtnModalClick(e) {
  openModal();
}

function onButtonCloseModalClick() {
  closeModal();
}

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}

function onEscPress(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

function openModal() {
  backdrop.classList.remove("is-hidden");
  document.addEventListener("keydown", onEscPress);
}

function closeModal() {
  backdrop.classList.add("is-hidden");
  document.removeEventListener("keydown", onEscPress);
}

const cities = [
  "Бердичів",
  "Біла Церква",
  "Бровари",
  "Житомир",
  "Запоріжжя",
  "Івано-Франківськ",
  "Ізмаїл",
  "Кам'янське",
  "Київ",
  "Коломия",
  "Кривий Ріг",
  "Кропивницький",
  "Луцьк",
  "Львів",
  "Миколаїв",
  "Одеса",
  "Олександрія",
  "Полтава",
  "Рівне",
  "Суми",
  "Умань",
  "Харків",
  "Черкаси",
  "Чернігів",
];

const modalListCity = document.querySelector(".modal-list-city");
const modalinput = document.querySelector(".modal-input");

renderCity(cities);

function renderCity(cities) {
  const cityList = cities
    .map((city) => `<li class="city-input">${city}</li>`)
    .join("");
  modalListCity.innerHTML = cityList;
}

modalinput.addEventListener("input", onInputCitySelectionclick);

function onInputCitySelectionclick(e) {
  const inputvalue = e.target.value.trim().toLowerCase();
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(inputvalue)
  );
  renderCity(filteredCities);
}
