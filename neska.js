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
let addToCardGrid;
let listItems;
let refEliminateOrder = 0;
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

class zapatos {
  constructor(ref, nombre, precio, imagen) {
    this.ref = ref;
    this.name = nombre;
    this.price = precio;
    this.image = imagen;
  }
}

let n702 = new zapatos(702, "Deportivo", 95000, "./images/702.jpg");
let n636 = new zapatos(636, "Deportivo", 95000, "./images/636.jpg");
let n709 = new zapatos(709, "Deportivo", 100000, "./images/709.jpg");
let n534 = new zapatos(534, "Botín", 95000, "./images/534.jpg");
let n604 = new zapatos(604, "Casual", 95000, "./images/604.jpg");
let n585 = new zapatos(585, "Tacón", 95000, "./images/585.jpg");
let n637 = new zapatos(637, "Deportivo", 95000, "./images/637.jpg");
let n701 = new zapatos(701, "Deportivo", 95000, "./images/701.jpg");
let n710 = new zapatos(710, "Deportivo", 95000, "./images/710.jpg");
let n809 = new zapatos(809, "Botín", 95000, "./images/809.jpeg");
let n827 = new zapatos(827, "Tacón", 95000, "./images/827.jpeg");
let n770 = new zapatos(770, "Casual", 95000, "./images/770.jpeg");
let n277 = new zapatos(227, "Deportivo", 95000, "./images/277.jpeg");
let n887 = new zapatos(887, "Baleta", 95000, "./images/887.jpeg");

productList.push(
  n702,
  n636,
  n709,
  n534,
  n604,
  n585,
  n637,
  n701,
  n710,
  n809,
  n827,
  n770,
  n277,
  n887
);

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
          <img class="icon-added inactive" src="./icons/checked.png" alt="">
          <img class="add-to-cart-grid" src="./icons/bt_add_to_cart.svg" alt="">
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
  addToCardGrid = document.getElementsByClassName("add-to-cart-grid");
  iconAdded = document.getElementsByClassName("icon-added");

  for (let i = 0; i < addToCardGrid.length; i++) {
    addToCardGrid[i].addEventListener("click", () => {
      myCarOrder.push({
        ref: arr[i].ref,
        name: arr[i].name,
        price: arr[i].price,
        image: arr[i].image,
      });
      console.log(myCarOrder);
      addProductCar(myCarOrder);
      buttonConfirm.classList.remove("inactive");
      totalOrder.classList.remove("inactive");
      emptyCar.classList.add("inactive");
      iconAdded[i].classList.remove("inactive");
    });
  }

  for (let i = 0; i < productImageList.length; i++) {
    let refAddedOrder = productList[i].ref;

    productImageList[i].addEventListener("click", () => {
      viewProduct.innerHTML = vistasPreview[i];

      abrirCerrar("", desktopMenu, myOrder, mobileMenu, viewProduct);

      closeViewProduct = document.querySelector(".product-detail-close");
      buttonAddToCar = document.querySelector(".add-to-cart-button");

      buttonAddToCar.addEventListener("click", () => {
        myCarOrder.push({
          ref: arr[i].ref,
          name: arr[i].name,
          price: arr[i].price,
          image: arr[i].image,
        });
        addBtnAdded(refAddedOrder);
        console.log(refAddedOrder);
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

  listItems = contenMyOrder.getElementsByTagName("div");
  removeOrder(listItems);

  spanPrice += precioProduct;
  totalPrice.innerHTML = formatoMoneda(spanPrice);

  spanOrder++;
  quantityOrder.innerHTML = spanOrder;
}

function removeOrder(order) {
  for (let i = 0; i < order.length; i++) {
    let closeBoton = order[i].getElementsByTagName("img")[1];
    let positionArray = myCarOrder[i]; // Seleccionar el elemento del array para después utilizarlo como Index y así eliminarlo por splice
    let priceEliminateOrder = myCarOrder[i].price;
    let refEliminateOrder = myCarOrder[i].ref;

    closeBoton.addEventListener("click", function () {
      this.parentNode.remove(); // Eliminar el div que contiene la imagen que ha sido clickeada
      console.log(refEliminateOrder);

      myCarOrder.splice(positionArray, 1);

      spanPrice -= priceEliminateOrder;
      totalPrice.innerHTML = formatoMoneda(spanPrice);

      spanOrder -= 1;
      quantityOrder.innerHTML = spanOrder;

      console.log(myCarOrder);

      if (spanPrice === 0) {
        totalOrder.classList.add("inactive");
        emptyCar.classList.remove("inactive");
        buttonConfirm.classList.add("inactive");
      }
      removeBtnAdded(refEliminateOrder);
    });
  }
}

function removeBtnAdded(refRemoved) {
  let indiceRemovedProduct = productList.findIndex(function (zapato) {
    return zapato.ref === +refRemoved;
  });
  iconAdded[indiceRemovedProduct].classList.add("inactive");
}

function addBtnAdded(refAdded) {
  let indiceAddedProduct = productList.findIndex(function (zapato) {
    return zapato.ref === +refAdded;
  });
  iconAdded[indiceAddedProduct].classList.remove("inactive");
}
