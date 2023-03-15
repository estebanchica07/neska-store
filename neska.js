const cuentaEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const myOrder = document.querySelector(".product-detail");
const cartBoton = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

cuentaEmail.addEventListener("click", () =>
  abrirCerrar(desktopMenu, myOrder, mobileMenu)
);
botonMenu.addEventListener("click", () =>
  abrirCerrar(mobileMenu, myOrder, desktopMenu)
);
cartBoton.addEventListener("click", () =>
  abrirCerrar(myOrder, mobileMenu, desktopMenu)
);

const abrirCerrar = function (e, m, g) {
  e.classList.toggle("inactive");
  m.classList.add("inactive");
  g.classList.add("inactive");
};

const productList = [];

productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/702.jpg",
});
productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/636.jpg",
});
productList.push({
  name: "Deportivo",
  price: 100000,
  image: "./images/709.jpg",
});
productList.push({
  name: "Botín",
  price: 100000,
  image: "./images/534.jpg",
});
productList.push({
  name: "Casual",
  price: 100000,
  image: "./images/604.jpg",
});
productList.push({
  name: "Tacón",
  price: 100000,
  image: "./images/585.jpg",
});
productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/637.jpg",
});
productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/701.jpg",
});
productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/710.jpg",
});
productList.push({
  name: "Botín",
  price: 95000,
  image: "./images/809.jpeg",
});
productList.push({
  name: "Tacón",
  price: 95000,
  image: "./images/827.jpeg",
});
productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/770.jpeg",
});
productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/637.jpg",
});
productList.push({
  name: "Deportivo",
  price: 95000,
  image: "./images/277.jpeg",
});

function formatoMoneda(valor) {
  let convertirMoneda = `$ ${valor.toLocaleString()}`;
  return convertirMoneda;
}

function renderproducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerHTML = `${formatoMoneda(product.price)}`;

    const productName = document.createElement("p");
    productName.innerHTML = `${product.name}`;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement("figure");
    const imgCart = document.createElement("img");

    imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    imgCart.setAttribute("alt", "");

    productFigure.appendChild(imgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderproducts(productList);
