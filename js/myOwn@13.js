const STORAGE_KEY = "modal-images";

const productList = document.querySelector(".products-list");

// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then(console.log);

Notiflix.Loading.standard("Loading photo...", {
  backgroundColor: "rgba(0,0,0,0.8)",
});
setTimeout(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(({ products }) => {
      renderProductsMarkup(products);
      takeImagesFromProducts(products);
      Notiflix.Loading.remove(1000);
    });
}, 1000);

const productsList = document.querySelector(".products-list");
const backdrop = document.querySelector(".backdrop");
const buttonCloseModal = document.querySelector(".button-close-modal");
const slider = document.querySelector(".slider");

productList.addEventListener("click", onProductClick);
backdrop.addEventListener("click", onBackdropClick);
buttonCloseModal.addEventListener("click", onCloseBtnClick);

function onProductClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const id = Number(e.target.id);
  renderModalImages(id);
  $(".slider").slick();
  openModal();
}

function onCloseBtnClick() {
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
  iziToast.info({
    title: "Hello",
    message: "U open modal",
  });
}

function closeModal() {
  backdrop.classList.add("is-hidden");
  document.removeEventListener("keydown", onEscPress);
  $(".slider").slick("unslick");
}

function renderProductsMarkup(products) {
  const markup = products
    .map(
      ({ thumbnail, title, description, discountPercentage, price, id }) => `
      <li class="products-list-item">
  <img class="products-img products-img-active" id="${id}" width="300" src="${thumbnail}" alt="${description}" />
  <p class="products-list-title">${title}</p>
  <p class="products-list-description">${description}</p>
  <p class="produts-list-percentageDiscount">Знижка: ${discountPercentage}</p>
  <p class="products-list-price">Ціна: ${price}грн</p>
</li>`
    )
    .join("");
  productList.innerHTML = markup;
}
function takeImagesFromProducts(products) {
  const storageData = products.map(({ images, id }) => ({
    id,
    images,
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}

function renderModalImages(id) {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // console.log(id);
  // console.log(storageData);

  const modalImages = storageData
    .filter((image) => image.id === id)
    .flatMap(({ images }) => images)
    .map(
      (image) =>
        `    <li><img src="${image}" alt="modal-image" width="450" /></li>`
    )
    .join("");
  console.log(modalImages);
  slider.innerHTML = modalImages;
}
// ---------2v---------

// Стилізувати в Цсс сітку по 4  в ряд. Зробити відкриття фото модалкою.
// Тільки не через бібіотеку а руками і щоб закривадся по єскейп і клік в бєкдроп і клік в хрестик
