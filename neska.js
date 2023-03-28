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
const allProducts = document.querySelectorAll(".all-products");
const deportivosStyles = document.querySelectorAll(".deportivos");
const casualesStyles = document.querySelectorAll(".casuales");
const taconesStyles = document.querySelectorAll(".tacones");
const botinesStyles = document.querySelectorAll(".botines");
const baletasStyles = document.querySelectorAll(".baletas");
const sandaliasStyles = document.querySelectorAll(".sandalias");
const deportivosLine = document.querySelector("#deportivos");
const allProductsLine = document.querySelector("#allProducts");
const casualesLine = document.querySelector("#casuales");
const taconesLine = document.querySelector("#tacones");
const botinesLine = document.querySelector("#botines");
const baletasLine = document.querySelector("#baletas");
const sandaliasLine = document.querySelector("#sandalias");

let deleteProduct;
let buttonAddToCar;
let vistasPreview = [];
let myCarOrder = [];
let closeViewProduct;
let productImageList;
let productCard;
let addToCardGrid;
let listItems;
let size;
let indiceOpenProduct = 0;
let refEliminateOrder = 0;
let spanPrice = 0;
let spanOrder = 0;
let indice = 0;
let message = "";
let orderToSend;
let totalOrderToSend;
let emptyArray = [];
//let refToOpen;

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
  constructor(refe, nombre, precio, imagen, talla) {
    this.ref = refe;
    this.name = nombre;
    this.price = precio;
    this.image = imagen;
    this.size = talla;
  }
}

const n702 = new zapatos(702, "Deportivo", 95000, "./images/702.jpg");
const n636 = new zapatos(636, "Deportivo", 95000, "./images/636.jpg");
const n709 = new zapatos(709, "Deportivo", 100000, "./images/709.jpg");
const n637 = new zapatos(637, "Deportivo", 95000, "./images/637.jpg");
const n701 = new zapatos(701, "Deportivo", 95000, "./images/701.jpg");
const n710 = new zapatos(710, "Deportivo", 95000, "./images/710.jpg");
const n855 = new zapatos(855, "Deportivo", 95000, "./images/855.jpg");
const n638 = new zapatos(638, "Deportivo", 95000, "./images/638.jpg");
const n277 = new zapatos(277, "Deportivo", 95000, "./images/277.jpeg");
const n797 = new zapatos(797, "Deportivo", 95000, "./images/797.jpeg");
const n817 = new zapatos(817, "Deportivo", 95000, "./images/817.jpeg");
const n819 = new zapatos(819, "Deportivo", 95000, "./images/819.jpeg");
const n712 = new zapatos(712, "Deportivo", 95000, "./images/712.jpg");
const n852 = new zapatos(852, "Deportivo", 95000, "./images/852.jpg");
const n801 = new zapatos(801, "Deportivo", 95000, "./images/801.jpg");
const n741 = new zapatos(741, "Deportivo", 95000, "./images/741.jpg");
const n736 = new zapatos(736, "Deportivo", 95000, "./images/736.jpg");
const n746 = new zapatos(746, "Deportivo", 95000, "./images/746.jpg");
const n758 = new zapatos(758, "Deportivo", 95000, "./images/758.jpg");
const n759 = new zapatos(759, "Deportivo", 95000, "./images/759.jpg");
const n768 = new zapatos(768, "Deportivo", 95000, "./images/768.jpg");
const n604 = new zapatos(604, "Casual", 95000, "./images/604.jpg");
const n749 = new zapatos(749, "Casual", 95000, "./images/749.jpg");
const n750 = new zapatos(750, "Casual", 95000, "./images/750.jpg");
const n770 = new zapatos(770, "Casual", 95000, "./images/770.jpeg");
const n773 = new zapatos(773, "Casual", 95000, "./images/773.jpg");
const n856 = new zapatos(856, "Casual", 95000, "./images/856.jpg");
const n823 = new zapatos(823, "Casual", 95000, "./images/823.jpeg");
const n599 = new zapatos(599, "Casual", 95000, "./images/599.jpg");
const n827 = new zapatos(827, "Tacón", 95000, "./images/827.jpeg");
const n302 = new zapatos(302, "Tacón", 95000, "./images/302.jpeg");
const n585 = new zapatos(585, "Tacón", 95000, "./images/585.jpg");
const n829 = new zapatos(829, "Tacón", 95000, "./images/829.jpeg");
const n858 = new zapatos(858, "Tacón", 95000, "./images/858.jpg");
const n828 = new zapatos(828, "Tacón", 95000, "./images/828.jpeg");
const n676 = new zapatos(676, "Tacón", 95000, "./images/676.jpeg");
const n337 = new zapatos(337, "Tacón", 95000, "./images/337.jpg");
const n534 = new zapatos(534, "Botín", 95000, "./images/534.jpg");
const n809 = new zapatos(809, "Botín", 95000, "./images/809.jpeg");
const n722 = new zapatos(722, "Botín", 95000, "./images/722.jpg");
const n723 = new zapatos(723, "Botín", 95000, "./images/723.jpg");
const n887 = new zapatos(887, "Baleta", 95000, "./images/887.jpeg");
const n971 = new zapatos(971, "Baleta", 95000, "./images/971.jpeg");
const n793 = new zapatos(793, "Baleta", 95000, "./images/793.jpeg");
const n888 = new zapatos(888, "Baleta", 95000, "./images/888.jpeg");
const n903 = new zapatos(903, "Baleta", 95000, "./images/903.jpg");
const n976 = new zapatos(976, "Baleta", 95000, "./images/976.jpg");
const n766 = new zapatos(766, "Sandalia", 95000, "./images/766.jpg");
const n767 = new zapatos(767, "Sandalia", 95000, "./images/767.jpg");

productList.push(
  n702,
  n636,
  n709,
  n637,
  n701,
  n710,
  n855,
  n638,
  n277,
  n797,
  n817,
  n819,
  n712,
  n852,
  n801,
  n741,
  n736,
  n746,
  n758,
  n759,
  n768,
  n604,
  n749,
  n750,
  n770,
  n773,
  n856,
  n823,
  n599,
  n827,
  n302,
  n585,
  n829,
  n858,
  n828,
  n676,
  n337,
  n534,
  n809,
  n887,
  n971,
  n793,
  n766,
  n767,
  n722,
  n723,
  n888,
  n903,
  n976
);

const deportivos = productList.filter(function (articulo) {
  return articulo.name === "Deportivo";
});
const casuales = productList.filter(function (articulo) {
  return articulo.name === "Casual";
});
const tacones = productList.filter(function (articulo) {
  return articulo.name === "Tacón";
});
const botines = productList.filter(function (articulo) {
  return articulo.name === "Botín";
});
const baletas = productList.filter(function (articulo) {
  return articulo.name === "Baleta";
});
const sandalias = productList.filter(function (articulo) {
  return articulo.name === "Sandalia";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    abrirCerrar("", myOrder, desktopMenu, viewProduct, "");
    openBack();
  }
});

function sendOrder(pedido) {
  orderToSend = `Hola *Calzado Neska*, me interesan los siguientes productos que vi en la página Web: 
  `;
  totalOrderToSend = `

Para un total de *${formatoMoneda(spanPrice)}*

Gracias por la información.`;

  for (var zapato of pedido) {
    eachMessage = `
• 1 producto Ref: ${zapato.ref}, Talla ${zapato.size}, Precio: ${formatoMoneda(
      zapato.price
    )}`;
  }

  message += eachMessage;

  buttonConfirm.addEventListener("click", function () {
    encodedMessage = encodeURIComponent(
      orderToSend + message + totalOrderToSend
    );
    url = `https://wa.me/${573107675471}?text=${encodedMessage}`;
    window.open(url, "_blank");
  });
}

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
  let convertirMoneda = `$${valor.toLocaleString()}`;
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
function clickOnOrder() {
  myOrder.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() !== "img") {
      openBack();
      abrirCerrar("", "", "", viewProduct, myOrder);
    }
  });
}

function renderProducts(coleccion) {
  coleccion.forEach((product) => {
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
          <!--<img class="add-to-cart-grid" src="./icons/bt_add_to_cart.svg" alt="">-->
          </figure>
        </div>
      </div>
      `;
    cardsContainer.innerHTML += tarjetaProducto;

    vistaDetalle = `
        <div class="product-detail-close">
          <img src="./icons/close1.png" class="product-preview" alt="close">
        </div>
        <img src="${product.image}" alt="bike">
        <div class="product-info-opened">
          <p>${formatoMoneda(product.price)}</p>
          <p>${product.name}</p>
          <div class="form-group">
          <p>Talla</p>
            <select id="dropdown" class="form-size">
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
            </select>
          </div>
          <button class="add-to-cart-button">
            <img class="btn-add" src="./icons/add.png" alt="add to cart">
           Añadir a mi carrito           
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
        ref: coleccion[i].ref,
        name: coleccion[i].name,
        price: coleccion[i].price,
        image: coleccion[i].image,
      });
      console.log(myCarOrder);
      addProductCar(myCarOrder);
      buttonConfirm.classList.remove("inactive");
      totalOrder.classList.remove("inactive");
      emptyCar.classList.add("inactive");
      iconAdded[i].classList.remove("inactive");
      abrirCerrar("", "", "", "", myOrder);
    });
  }

  vistaPrevia(productImageList, coleccion);
  clickOnBack();
}

AddToComponent(productList);

printComponent(allProducts, productList, allProducts);
printComponent(deportivosStyles, deportivos, deportivosLine);
printComponent(casualesStyles, casuales, casualesLine);
printComponent(taconesStyles, tacones, taconesLine);
printComponent(botinesStyles, botines, botinesLine);
printComponent(baletasStyles, baletas, baletasLine);
printComponent(sandaliasStyles, sandalias, sandaliasLine);

function printComponent(componentLine, productsLine, idLine) {
  for (var design of componentLine) {
    design.addEventListener("click", () => {
      AddToComponent(productsLine);
      idLine.classList.add("line-select");
    });
  }
}

function AddToComponent(styles) {
  vistasPreview = [];
  cardsContainer.innerHTML = "";
  renderProducts(styles);
}

function addProductCar(ordenDePedido) {
  ordenDePedido.forEach((product) => {
    productAdded = `
        <div class="shopping-cart">
          <figure>
            <img src="${product.image}" alt="${product.name}">
          </figure>
          <p>${product.name}</p>
          <p>Talla: ${product.size}</p>
          <p>${formatoMoneda(product.price)}</p>
          <img class="delete" src="./icons/icon_close.png" alt="close">
        </div>
      `;
    precioProduct = product.price;
  });

  contenMyOrder.innerHTML += productAdded;

  listItems = contenMyOrder.getElementsByTagName("div");
  openViewFromCart(listItems, ordenDePedido);
  removeOrder(listItems);

  spanPrice += precioProduct;
  totalPrice.innerHTML = formatoMoneda(spanPrice);
  sendOrder(myCarOrder);
  spanOrder++;
  quantityOrder.innerHTML = spanOrder;
}

function vistaPrevia(listaImagenes, coleccion) {
  for (let i = 0; i < listaImagenes.length; i++) {
    let refAddedOrder = coleccion[i].ref;
    listaImagenes[i].addEventListener("click", () => {
      viewProduct.innerHTML = vistasPreview[i];
      size = document.querySelector("#dropdown");
      abrirCerrar("", desktopMenu, myOrder, mobileMenu, viewProduct);
      AddToCart(coleccion, i, refAddedOrder);
      clickOnOrder();
    });
  }
}

//debo unificar estas dos funciones openViewFromCart y vistaPrevia
function openViewFromCart(imagesCart, ordenDePedido) {
  for (let i = 0; i < imagesCart.length; i++) {
    let refAddedOrder = productList[i].ref;
    let openImage = imagesCart[i].getElementsByTagName("img")[0];
    let refToOpen = myCarOrder[i].ref;

    openImage.addEventListener("click", function () {
      getIndex(refToOpen);
      viewProduct.innerHTML = vistasPreview[indice];
      size = document.querySelector("#dropdown");
      abrirCerrar("", desktopMenu, "", mobileMenu, viewProduct);

      AddToCart(ordenDePedido, i, refAddedOrder);
    });
  }
}

function AddToCart(ordenDePedido, i, referencia) {
  closeViewProduct = document.querySelector(".product-detail-close");
  buttonAddToCar = document.querySelector(".add-to-cart-button");

  buttonAddToCar.addEventListener("click", () => {
    buttonAddToCar.innerHTML = `
    <p class="product-added">Producto añadido</p>
    <img class="icon-added-view" src="./icons/checked.png" alt="">
    `;
    buttonAddToCar.style.backgroundColor = "black";
    buttonAddToCar.disabled = true;
    setTimeout(function () {
      myCarOrder.push({
        ref: ordenDePedido[i].ref,
        name: ordenDePedido[i].name,
        price: ordenDePedido[i].price,
        image: ordenDePedido[i].image,
        size: size.value,
      });
      addBtnAdded(referencia);
      buttonConfirm.classList.remove("inactive");
      totalOrder.classList.remove("inactive");
      emptyCar.classList.add("inactive");
      addProductCar(myCarOrder);

      console.log(myCarOrder);
      abrirCerrar("", viewProduct, "", "", "");
      openBack();
    }, 900);
  });

  closeButton();

  document.body.style.backgroundColor = "#DAD8D8";
  for (var card of productCard) {
    card.classList.add("backProductCard");
  }
}

function removeOrder(order) {
  for (let i = 0; i < order.length; i++) {
    let closeBoton = order[i].getElementsByTagName("img")[1];
    let positionArray = myCarOrder[i]; // Seleccionar el elemento del array para después utilizarlo como Index y así eliminarlo por splice
    let priceEliminateOrder = myCarOrder[i].price;
    let refEliminateOrder = myCarOrder[i].ref;

    closeBoton.addEventListener("click", function () {
      this.parentNode.remove(); // Eliminar el div que contiene la imagen que ha sido clickeada

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
        abrirCerrar("", myOrder, "", "", "");
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

function getIndex(refOpen) {
  let indiceOpenProduct = productList.findIndex(function (zapato) {
    return zapato.ref === +refOpen;
  });
  indice = indiceOpenProduct;
}
