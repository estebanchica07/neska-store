const cuentaEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const myOrder = document.querySelector("#shoppingCartContainer");
const cartBoton = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const viewProduct = document.querySelector("#productDetail");
const gridContainer = document.querySelector(".cards-container");
const cerrarMyorder = document.querySelector(".close-my-order");
const contenMyOrder = document.querySelector(".my-order-add");
const buttonConfirm = document.querySelector(".primary-button");
const totalOrder = document.querySelector(".order");
const emptyCar = document.querySelector(".empty-order");
const totalPrice = document.querySelector(".total-price");
const quantityOrder = document.querySelector(".quantity-order");

let deleteProduct;
let buttonAddToCar;
let vistasPreview = [];
let myCarOrder = [];
let closeViewProduct;
let productImageList;
let productCard;
let spanPrice = 0;
let spanOrder = 0;

cuentaEmail.addEventListener("click", () =>
  abrirCerrar(desktopMenu, myOrder, viewProduct, mobileMenu, "")
);
cuentaEmail.addEventListener("click", () => openBack());

botonMenu.addEventListener("click", () =>
  abrirCerrar(mobileMenu, myOrder, viewProduct, desktopMenu, "")
);
botonMenu.addEventListener("click", () => openBack());

cartBoton.addEventListener("click", () =>
  abrirCerrar(myOrder, mobileMenu, desktopMenu, viewProduct, "")
);
cartBoton.addEventListener("click", () => openBack());

cerrarMyorder.addEventListener("click", () =>
  abrirCerrar("", myOrder, "", "", "")
);

const abrirCerrar = function (e, m, g, k, l) {
  if (e !== "") {
    e.classList.toggle("inactive");
  }
  if (m !== "") {
    m.classList.add("inactive");
  }
  if (g !== "") {
    g.classList.add("inactive");
  }
  if (k !== "") {
    k.classList.add("inactive");
  }
  if (l !== "") {
    l.classList.remove("inactive");
  }
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

function openBack() {
  document.body.style.backgroundColor = "white";
  for (var card of productCard) {
    card.classList.remove("backProductCard");
  }
  for (var cards of productImageList) {
    cards.style.boxShadow = "0px 0px 0px 0px white";
  }
}

function formatoMoneda(valor) {
  let convertirMoneda = `$ ${valor.toLocaleString()}`;
  return convertirMoneda;
}

function closeButton() {
  closeViewProduct.addEventListener("click", () => {
    abrirCerrar(viewProduct, "", "", "", "");
    openBack();
  });
}

function clickOnBack() {
  gridContainer.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() !== "img") {
      abrirCerrar("", viewProduct, myOrder, desktopMenu, "");
      abrirCerrar("", mobileMenu, "", "", "");
      openBack();
    }
  });
}

function renderProducts(arr) {
  arr.forEach((product) => {
    tarjetaProducto = `
      <div class="product-card">
        <img src="${product.image}" class="productImage" alt="">
        <div class="product-info">
          <div>
            <p>${formatoMoneda(product.price)}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      `;
    cardsContainer.innerHTML += tarjetaProducto;

    vistaDetalle = `
        <div class="product-detail-close">
          <img src="./icons/icon_close.png" class="product-preview" alt="close">
        </div>
        <img src="${product.image}" alt="bike">
        <div class="product-info-opened">
          <p>${formatoMoneda(product.price)}</p>
          <p>${product.name}</p>
          <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
          <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart           
          </button>
        </div>
    `;
    vistasPreview.push(vistaDetalle);
  });

  productImageList = document.getElementsByClassName("productImage");
  productCard = document.getElementsByClassName("product-card");

  for (let i = 0; i < productImageList.length; i++) {
    productImageList[i].addEventListener("click", () => {
      viewProduct.innerHTML = vistasPreview[i];
      abrirCerrar("", desktopMenu, myOrder, mobileMenu, viewProduct);
      closeViewProduct = document.querySelector(".product-detail-close");
      buttonAddToCar = document.querySelector(".add-to-cart-button");
      buttonAddToCar.addEventListener("click", () => {
        myCarOrder.push({
          name: arr[i].name,
          price: arr[i].price,
          image: arr[i].image,
        });
        //addProductCar(myCarOrder[myCarOrder.length - 1]);
        buttonConfirm.classList.remove("inactive");
        buttonAddToCar.innerHTML = "Producto añadido ✅";
        totalOrder.classList.remove("inactive");
        emptyCar.classList.add("inactive");
        console.log(myCarOrder);
        addProductCar(myCarOrder);
        buttonAddToCar.style.backgroundColor = "black";
      });
      closeButton();
      document.body.style.backgroundColor = "#DAD8D8";
      for (var card of productCard) {
        card.classList.add("backProductCard");
      }
    });
  }
  clickOnBack();
}

renderProducts(productList);

function addProductCar(arr) {
  arr.forEach((product) => {
    productAdded = `
        <div class="shopping-cart">
          <figure>
            <img src="${product.image}" alt="${product.name}">
          </figure>
          <p>${product.name}</p>
          <p>${formatoMoneda(product.price)}</p>
          <img class="delete" src="./icons/icon_close.png" alt="close">
        </div>
      `;
    precioProduct = product.price;
  });

  contenMyOrder.innerHTML += productAdded;
  deleteProduct = document.getElementsByClassName("delete");
  spanPrice = spanPrice + precioProduct;
  totalPrice.innerHTML = formatoMoneda(spanPrice);
  spanOrder++;
  quantityOrder.innerHTML = spanOrder;
}

function deleteElements(listaX) {
  for (let i = 0; i < listaX.length; i++) {
    //console.log(myCarOrder);
    console.log(contenMyOrder.children[i]);
    console.log(listaX);
    listaX[i].addEventListener("click", () => {
      console.log("Debo eliminar un elemento pero no soy capaz");
      contenMyOrder.children[i].remove();

      console.log(listaX);
      //console.log(myCarOrder);
    });
  }
}

// productCards.forEach((productCard) => {
//   productCard.addEventListener("click", () => console.log("Hola"));
//});
