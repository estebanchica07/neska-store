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
const myCarOrder = [];
const spaceHtml = document.querySelector(".html");

let deleteProduct;
let buttonAddToCar;
let vistasPreview = [];
let closeViewProduct;
let productImageList;
let productCard;
let addToCardGrid;
let listItems;
let size;
let spanPrice = 0;
let spanOrder = 0;
let message = "";
let orderToSend;
let totalOrderToSend;
let openImage;
let productAdded;
let precioProduct;
let eachMessage;

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

productList.push(
  new zapatos(702, "Deportivo", 95000, "./images/702.jpg"),
  new zapatos(636, "Deportivo", 95000, "./images/636.jpg"),
  new zapatos(709, "Deportivo", 100000, "./images/709.jpg"),
  new zapatos(637, "Deportivo", 95000, "./images/637.jpg"),
  new zapatos(701, "Deportivo", 95000, "./images/701.jpg"),
  new zapatos(710, "Deportivo", 95000, "./images/710.jpg"),
  new zapatos(855, "Deportivo", 95000, "./images/855.jpg"),
  new zapatos(638, "Deportivo", 95000, "./images/638.jpg"),
  new zapatos(277, "Deportivo", 95000, "./images/277.jpeg"),
  new zapatos(797, "Deportivo", 95000, "./images/797.jpeg"),
  new zapatos(817, "Deportivo", 95000, "./images/817.jpeg"),
  new zapatos(819, "Deportivo", 95000, "./images/819.jpeg"),
  new zapatos(712, "Deportivo", 95000, "./images/712.jpg"),
  new zapatos(852, "Deportivo", 95000, "./images/852.jpg"),
  new zapatos(801, "Deportivo", 95000, "./images/801.jpg"),
  new zapatos(741, "Deportivo", 95000, "./images/741.jpg"),
  new zapatos(736, "Deportivo", 95000, "./images/736.jpg"),
  new zapatos(746, "Deportivo", 95000, "./images/746.jpg"),
  new zapatos(758, "Deportivo", 95000, "./images/758.jpg"),
  new zapatos(759, "Deportivo", 95000, "./images/759.jpg"),
  new zapatos(768, "Deportivo", 95000, "./images/768.jpg"),
  new zapatos(604, "Casual", 95000, "./images/604.jpg"),
  new zapatos(749, "Casual", 95000, "./images/749.jpg"),
  new zapatos(750, "Casual", 95000, "./images/750.jpg"),
  new zapatos(770, "Casual", 95000, "./images/770.jpeg"),
  new zapatos(773, "Casual", 95000, "./images/773.jpg"),
  new zapatos(856, "Casual", 95000, "./images/856.jpg"),
  new zapatos(823, "Casual", 95000, "./images/823.jpeg"),
  new zapatos(599, "Casual", 95000, "./images/599.jpg"),
  new zapatos(827, "Tacón", 95000, "./images/827.jpeg"),
  new zapatos(302, "Tacón", 95000, "./images/302.jpeg"),
  new zapatos(585, "Tacón", 95000, "./images/585.jpg"),
  new zapatos(829, "Tacón", 95000, "./images/829.jpeg"),
  new zapatos(858, "Tacón", 95000, "./images/858.jpg"),
  new zapatos(828, "Tacón", 95000, "./images/828.jpeg"),
  new zapatos(676, "Tacón", 95000, "./images/676.jpeg"),
  new zapatos(337, "Tacón", 95000, "./images/337.jpg"),
  new zapatos(534, "Botín", 95000, "./images/534.jpg"),
  new zapatos(809, "Botín", 95000, "./images/809.jpeg"),
  new zapatos(722, "Botín", 95000, "./images/722.jpg"),
  new zapatos(723, "Botín", 95000, "./images/723.jpg"),
  new zapatos(887, "Baleta", 95000, "./images/887.jpeg"),
  new zapatos(971, "Baleta", 95000, "./images/971.jpeg"),
  new zapatos(793, "Baleta", 95000, "./images/793.jpeg"),
  new zapatos(888, "Baleta", 95000, "./images/888.jpeg"),
  new zapatos(903, "Baleta", 95000, "./images/903.jpg"),
  new zapatos(976, "Baleta", 95000, "./images/976.jpg"),
  new zapatos(766, "Sandalia", 95000, "./images/766.jpg"),
  new zapatos(767, "Sandalia", 95000, "./images/767.jpg")
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
    abrirCerrar("", mobileMenu, "", "", "");
    openBack();
  }
});

function sendOrder(pedido) {
  orderToSend = `Hola *Calzado Neska*, me interesan los siguientes productos que vi en la página Web: 
  `;
  totalOrderToSend = `

Para un total de *${formatoMoneda(spanPrice)}*

Gracias por la información.`;

  for (const zapato of pedido) {
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
  for (const card of productCard) {
    card.classList.remove("backProductCard");
  }
  for (const cards of productImageList) {
    cards.style.boxShadow = "0px 0px 0px 0px white";
  }
}

function formatoMoneda(valor) {
  const convertirMoneda = `$${valor.toLocaleString()}`;
  return convertirMoneda;
}

function closeButton() {
  closeViewProduct.addEventListener("click", () => {
    abrirCerrar(viewProduct, "", "", "", "");
    openBack();
    myOrder.style.backgroundColor = "white";
  });
}

function clickOnBack() {
  gridContainer.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() !== "img") {
      abrirCerrar("", viewProduct, myOrder, desktopMenu, "");
      abrirCerrar("", mobileMenu, "", "", "");
      openBack();
      myOrder.style.backgroundColor = "white";
    }
  });
  spaceHtml.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "") {
      abrirCerrar("", viewProduct, myOrder, desktopMenu, "");
      abrirCerrar("", mobileMenu, "", "", "");
      openBack();
      myOrder.style.backgroundColor = "white";
    }
  });
}

function clickOnOrder() {
  myOrder.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() !== "img") {
      openBack();
      abrirCerrar("", "", "", viewProduct, myOrder);
      myOrder.style.backgroundColor = "white";
    }
  });
}

function renderProducts(coleccion) {
  coleccion.forEach((product) => {
    tarjetaProducto = `
      <div class="product-card">
        <img data-ref="${product.ref}" src="${
      product.image
    }" class="productImage" alt="">
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
  });

  productImageList = document.getElementsByClassName("productImage");
  productCard = document.getElementsByClassName("product-card");
  addToCardGrid = document.getElementsByClassName("add-to-cart-grid");
  iconAdded = document.getElementsByClassName("icon-added");

  vistaPrevia(productImageList, coleccion);
  clickOnBack();
}

AddToComponent(productList);

printComponent(allProducts, productList);
printComponent(deportivosStyles, deportivos);
printComponent(casualesStyles, casuales);
printComponent(taconesStyles, tacones);
printComponent(botinesStyles, botines);
printComponent(baletasStyles, baletas);
printComponent(sandaliasStyles, sandalias);

function printComponent(componentLine, productsLine) {
  for (const design of componentLine) {
    design.addEventListener("click", () => {
      AddToComponent(productsLine);
      abrirCerrar("", viewProduct, mobileMenu, "", "");
      openBack();
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
            <img class="cart-image" data-ref="${product.ref}" src="${
      product.image
    }" alt="${product.name}">
          </figure>
          <p>${product.name}</p>
          <p>Talla: ${product.size}</p>
          <p>${formatoMoneda(product.price)}</p>
          <img class="delete" src="./icons/icon_close.png" alt="close">
        </div>
      `;
    precioProduct = product.price;
  });
  console.log(myCarOrder);
  contenMyOrder.innerHTML += productAdded;
  listItems = contenMyOrder.getElementsByTagName("div");
  imagesCart = document.getElementsByClassName("cart-image");

  openViewFromCart(imagesCart);
  removeOrder(listItems);

  spanPrice += precioProduct;
  totalPrice.innerHTML = formatoMoneda(spanPrice);
  sendOrder(myCarOrder);
  spanOrder++;
  quantityOrder.innerHTML = spanOrder;
}

function vistaPrevia(listaImagenes, coleccion) {
  for (let i = 0; i < listaImagenes.length; i++) {
    listaImagenes[i].addEventListener("click", () => {
      openModal(i, listaImagenes, coleccion, true);
    });
  }
}

function openViewFromCart(imagesCart) {
  for (let i = 0; i < imagesCart.length; i++) {
    imagesCart[i].addEventListener("click", () => {
      openModal(i, imagesCart, "", false);
      abrirCerrar("", desktopMenu, "", mobileMenu, viewProduct);
      closeViewProduct = document.querySelector(".product-detail-close");
      closeButton();
      document.body.style.backgroundColor = "#DAD8D8";
      for (const card of productCard) {
        card.classList.add("backProductCard");
      }
      myOrder.style.backgroundColor = "#EFEFEF";
    });
  }
}

function openModal(i, imagenes, coleccion, optionToAdd) {
  const zapatoToPrint = productList.find(
    (p) => p.ref === +imagenes[i].dataset.ref
  );
  console.log(zapatoToPrint);

  vistaDetalle = `
  <div class="product-detail-close">
    <img src="./icons/close1.png" class="product-preview" alt="close">
  </div>
  <img src="${zapatoToPrint.image}" alt="bike">
  <div class="product-info-opened">
    <p>${formatoMoneda(zapatoToPrint.price)}</p>
    <p>${zapatoToPrint.name}</p>
    </div>
`;

  viewProduct.innerHTML = vistaDetalle;

  if (optionToAdd) {
    plusVistaDetalle = `
  <div class="product-info-opened">
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
  </div>`;
    buttonAddToCar = document.querySelector(".add-to-cart-button");
    viewProduct.innerHTML += plusVistaDetalle;
    AddToCart(coleccion, i);
    abrirCerrar("", desktopMenu, myOrder, mobileMenu, viewProduct);
  }

  clickOnOrder();
}

function AddToCart(coleccion, i) {
  closeViewProduct = document.querySelector(".product-detail-close");
  buttonAddToCar = document.querySelector(".add-to-cart-button");
  size = document.querySelector("#dropdown");

  buttonAddToCar.addEventListener("click", () => {
    buttonAddToCar.innerHTML = `
    <img class="icon-added-view" src="./icons/checked.png" alt="">
    <p class="product-added">Producto añadido</p>
    `;
    buttonAddToCar.style.paddingRight = "10px";
    buttonAddToCar.style.backgroundColor = "black";
    buttonAddToCar.disabled = true;
    myCarOrder.push({
      ...coleccion[i],
      size: size.value,
    });
    buttonConfirm.classList.remove("inactive");
    totalOrder.classList.remove("inactive");
    emptyCar.classList.add("inactive");
    addProductCar(myCarOrder);
    console.log(myCarOrder);
    setTimeout(function () {
      abrirCerrar("", viewProduct, "", "", "");
      openBack();
    }, 800);
  });

  closeButton();

  document.body.style.backgroundColor = "#DAD8D8";
  for (const card of productCard) {
    card.classList.add("backProductCard");
  }
}

function removeOrder(order) {
  for (let i = 0; i < order.length; i++) {
    const closeBoton = order[i].getElementsByTagName("img")[1];
    positionArray = myCarOrder[i]; // Seleccionar el elemento del array para después utilizarlo como Index y así eliminarlo por splice
    priceEliminateOrder = myCarOrder[i].price;

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
    });
  }
}
