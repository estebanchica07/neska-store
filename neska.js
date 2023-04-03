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
const spaceHtml = document.querySelector(".html");

let myCarOrder = [];
let closeBoton;
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
  constructor(refe, nombre, precio, imagen, color, material, talla) {
    this.ref = refe;
    this.name = nombre;
    this.price = precio;
    this.image = imagen;
    this.color = color;
    this.material = material;
    this.size = talla;
  }
}

productList.push(
  new zapatos(702, "Deportivo", 95000, "./images/702.jpg", "Nude", "Sintético"),
  new zapatos(
    636,
    "Deportivo",
    95000,
    "./images/636.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    709,
    "Deportivo",
    100000,
    "./images/709.jpg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(
    637,
    "Deportivo",
    95000,
    "./images/637.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    701,
    "Deportivo",
    95000,
    "./images/701.jpg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(
    710,
    "Deportivo",
    95000,
    "./images/710.jpg",
    "Perla",
    "Sintético"
  ),
  new zapatos(855, "Deportivo", 160000, "./images/855.jpg", "Dorado", "Cuero"),
  new zapatos(
    638,
    "Deportivo",
    110000,
    "./images/638.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    277,
    "Deportivo",
    95000,
    "./images/277.jpg",
    "Negro",
    "Sintético"
  ),
  new zapatos(
    797,
    "Deportivo",
    95000,
    "./images/797.jpeg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    817,
    "Deportivo",
    95000,
    "./images/817.jpeg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    819,
    "Deportivo",
    95000,
    "./images/819.jpeg",
    "Gris",
    "Sintético"
  ),
  new zapatos(712, "Deportivo", 95000, "./images/712.jpg", "Rojo", "Sintético"),
  new zapatos(
    7121,
    "Deportivo",
    95000,
    "./images/7121.jpg",
    "Negro",
    "Sintético"
  ),
  new zapatos(
    852,
    "Deportivo",
    95000,
    "./images/852.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    801,
    "Deportivo",
    95000,
    "./images/801.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    741,
    "Deportivo",
    95000,
    "./images/741.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    6361,
    "Deportivo",
    95000,
    "./images/6361.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    6371,
    "Deportivo",
    95000,
    "./images/6371.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(
    736,
    "Deportivo",
    95000,
    "./images/736.jpg",
    "Negro",
    "Sintético"
  ),
  new zapatos(
    746,
    "Deportivo",
    95000,
    "./images/746.jpg",
    "Dorado",
    "Sintético"
  ),
  new zapatos(
    758,
    "Deportivo",
    95000,
    "./images/758.jpg",
    "Beige",
    "Sintético"
  ),
  new zapatos(
    759,
    "Deportivo",
    95000,
    "./images/759.jpg",
    "Negro",
    "Sintético"
  ),
  new zapatos(
    768,
    "Deportivo",
    95000,
    "./images/768.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(604, "Casual", 100000, "./images/604.jpg", "Miel", "Sintético"),
  new zapatos(885, "Casual", 100000, "./images/885.jpeg", "Miel", "Sintético"),
  new zapatos(886, "Casual", 170000, "./images/886.jpeg", "Azul", "Cuero"),
  new zapatos(894, "Casual", 170000, "./images/894.jpg", "Beige", "Cuero"),
  new zapatos(895, "Casual", 170000, "./images/895.jpg", "Rojo", "Cuero"),
  new zapatos(516, "Casual", 180000, "./images/516.jpg", "Champaña", "Cuero"),
  new zapatos(749, "Casual", 100000, "./images/749.jpg", "Negro", "Sintético"),
  new zapatos(
    6321,
    "Casual",
    100000,
    "./images/6321.jpg",
    "Negro",
    "Sintético"
  ),
  new zapatos(750, "Casual", 100000, "./images/750.jpg", "Beige", "Sintético"),
  new zapatos(896, "Casual", 100000, "./images/896.jpg", "Beige", "Sintético"),
  new zapatos(770, "Casual", 160000, "./images/770.jpeg", "Champaña", "Cuero"),
  new zapatos(773, "Casual", 100000, "./images/773.jpg", "Beige", "Sintético"),
  new zapatos(856, "Casual", 100000, "./images/856.jpg", "Negro", "Sintético"),
  new zapatos(823, "Casual", 100000, "./images/823.jpeg", "Negro", "Sintético"),
  new zapatos(599, "Casual", 160000, "./images/599.jpg", "Azul", "Cuero"),
  new zapatos(827, "Tacón", 105000, "./images/827.jpeg", "Miel", "Sintético"),
  new zapatos(302, "Tacón", 105000, "./images/302.jpeg", "Negro", "Sintético"),
  new zapatos(585, "Tacón", 105000, "./images/585.jpg", "Negro", "Sintético"),
  new zapatos(
    5851,
    "Tacón",
    105000,
    "./images/5851.jpeg",
    "Negro",
    "Sintético"
  ),
  new zapatos(520, "Tacón", 105000, "./images/520.jpg", "Negro", "Sintético"),
  new zapatos(
    829,
    "Tacón",
    105000,
    "./images/829.jpeg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(858, "Tacón", 165000, "./images/858.jpg", "Beige", "Cuero"),
  new zapatos(
    828,
    "Tacón",
    105000,
    "./images/828.jpeg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(676, "Tacón", 105000, "./images/676.jpeg", "Beige", "Sintético"),
  new zapatos(952, "Tacón", 105000, "./images/952.jpeg", "Beige", "Sintético"),
  new zapatos(
    756,
    "Tacón",
    105000,
    "./images/756.jpg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(106, "Tacón", 110000, "./images/106.jpg", "Nude", "Sintético"),
  new zapatos(786, "Tacón", 110000, "./images/786.jpeg", "Negro", "Sintético"),
  new zapatos(791, "Tacón", 110000, "./images/791.jpeg", "Negro", "Sintético"),
  new zapatos(805, "Tacón", 110000, "./images/805.jpeg", "Dorado", "Sintético"),
  new zapatos(331, "Tacón", 110000, "./images/331.jpg", "Nude", "Sintético"),
  new zapatos(713, "Tacón", 110000, "./images/713.jpg", "Negro", "Sintético"),
  new zapatos(
    337,
    "Tacón",
    105000,
    "./images/337.jpg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(534, "Botín", 125000, "./images/534.jpg", "Mani", "Sintético"),
  new zapatos(889, "Botín", 125000, "./images/889.jpeg", "Rojo", "Sintético"),
  new zapatos(8091, "Botín", 125000, "./images/8091.jpg", "Mani", "Sintético"),
  new zapatos(813, "Botín", 190000, "./images/813.jpeg", "Negro", "Cuero"),
  new zapatos(8131, "Botín", 125000, "./images/8131.jpg", "Negro", "Sintético"),
  new zapatos(880, "Botín", 125000, "./images/880.jpeg", "Negro", "Sintético"),
  new zapatos(881, "Botín", 125000, "./images/881.jpeg", "Negro", "Sintético"),
  new zapatos(814, "Botín", 125000, "./images/814.jpeg", "Negro", "Sintético"),
  new zapatos(809, "Botín", 125000, "./images/809.jpeg", "Miel", "Sintético"),
  new zapatos(722, "Botín", 125000, "./images/722.jpg", "Negro", "Sintético"),
  new zapatos(723, "Botín", 125000, "./images/723.jpg", "Miel", "Sintético"),
  new zapatos(
    887,
    "Baleta",
    70000,
    "./images/887.jpeg",
    "Naranja",
    "Sintético"
  ),
  new zapatos(971, "Baleta", 70000, "./images/971.jpeg", "Nude", "Sintético"),
  new zapatos(506, "Baleta", 70000, "./images/506.jpg", "Beige", "Sintético"),
  new zapatos(507, "Baleta", 70000, "./images/507.jpg", "Nude", "Sintético"),
  new zapatos(492, "Baleta", 70000, "./images/492.jpg", "Beige", "Sintético"),
  new zapatos(729, "Baleta", 70000, "./images/729.jpg", "Miel", "Sintético"),
  new zapatos(335, "Baleta", 70000, "./images/335.jpg", "Azul", "Sintético"),
  new zapatos(578, "Baleta", 70000, "./images/578.jpg", "Beige", "Sintético"),
  new zapatos(
    793,
    "Baleta",
    70000,
    "./images/793.jpeg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(888, "Baleta", 70000, "./images/888.jpeg", "Fucsia", "Sintético"),
  new zapatos(
    753,
    "Sandalia",
    70000,
    "./images/753.jpg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(903, "Baleta", 70000, "./images/903.jpg", "Rojo", "Sintético"),
  new zapatos(
    976,
    "Baleta",
    70000,
    "./images/976.jpg",
    "Champaña",
    "Sintético"
  ),
  new zapatos(766, "Sandalia", 85000, "./images/766.jpg", "Beige", "Sintético"),
  new zapatos(398, "Sandalia", 150000, "./images/398.jpg", "Dorado", "Cuero"),
  new zapatos(
    779,
    "Sandalia",
    110000,
    "./images/779.jpeg",
    "Negro",
    "Sintético"
  ),
  new zapatos(
    781,
    "Sandalia",
    110000,
    "./images/781.jpeg",
    "Negro",
    "Sintético"
  ),
  new zapatos(
    782,
    "Sandalia",
    110000,
    "./images/782.jpeg",
    "Rojo",
    "Sintético"
  ),
  new zapatos(
    783,
    "Sandalia",
    110000,
    "./images/783.jpeg",
    "Beige",
    "Sintético"
  ),
  new zapatos(
    784,
    "Sandalia",
    110000,
    "./images/784.jpeg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(754, "Sandalia", 85000, "./images/754.jpg", "Miel", "Sintético"),
  new zapatos(
    755,
    "Sandalia",
    85000,
    "./images/755.jpg",
    "Blanco",
    "Sintético"
  ),
  new zapatos(767, "Sandalia", 85000, "./images/767.jpg", "Nude", "Sintético")
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

function makeTextToSend(pedido) {
  message = "";
  orderToSend = `Hola *Calzado Neska*, me interesan los siguientes productos que vi en la página Web: 
  `;
  totalOrderToSend = `

Para un total de *${formatoMoneda(spanPrice)}*

Gracias por la información.`;

  for (const zapato of pedido) {
    eachMessage = `
• 1 producto Ref: ${zapato.ref}, Material: ${zapato.material} ${
      zapato.color
    }, Talla ${zapato.size}, Precio: ${formatoMoneda(zapato.price)}`;
    message += eachMessage;
  }
}

buttonConfirm.addEventListener("click", function () {
  encodedMessage = encodeURIComponent(orderToSend + message + totalOrderToSend);
  url = `https://wa.me/${573107675471}?text=${encodedMessage}`;
  window.open(url, "_blank");
});

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
          <div class="product-features">
            <p>${formatoMoneda(product.price)}</p>
            <p>${product.name} en ${product.material}</p>
            <p>Ref: ${product.ref}</p>
          </div>
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
          <p>${product.name} Ref: ${product.ref}</p>
          <p>Talla: ${product.size}</p>
          <p>${formatoMoneda(product.price)}</p>
          <img class="delete" src="./icons/delete-button.svg" alt="close">
        </div>
      `;
    precioProduct = product.price;
  });
  console.log(myCarOrder);
  contenMyOrder.innerHTML += productAdded;
  listItems = contenMyOrder.getElementsByTagName("div");
  imagesDelete = document.getElementsByClassName("delete");
  imagesCart = document.getElementsByClassName("cart-image");

  openViewFromCart(imagesCart);
  removeOrder(imagesDelete);
  spanPrice += precioProduct;
  totalPrice.innerHTML = formatoMoneda(spanPrice);
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
      darkBack();
      myOrder.style.backgroundColor = "#EFEFEF";
    });
  }
}

function openModal(i, imagenes, coleccion, optionToAdd) {
  const zapatoToPrint = productList.find(
    (p) => p.ref === +imagenes[i].dataset.ref
  );
  //console.log(zapatoToPrint);
  vistaDetalle = `
  <div class="product-detail-close">
    <img src="./icons/close1.png" class="product-preview" alt="close">
  </div>
  <img src="${zapatoToPrint.image}" alt="bike">
  <div class="product-info-opened products-features">
  <div class="info-feature">
    <p>Referencia:</p>
    <p>${zapatoToPrint.ref}</p>
  </div>
  <div class="info-feature">
    <p>Precio:</p>
    <p>${formatoMoneda(zapatoToPrint.price)}</p>
  </div>
    <div class="info-feature">
      <p>Material:</p>
      <p> ${zapatoToPrint.material} ${zapatoToPrint.color}</p>
    </div>
  </div>
`;

  viewProduct.innerHTML = vistaDetalle;

  if (optionToAdd) {
    plusVistaDetalle = `
  <div class="product-info-opened">
  <div class="form-group">
  <p>Talla</p>
    <p class="pide-talla">(Pide la talla que más uses en el mercado nacional)</p>
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
    console.log(myCarOrder);

    setTimeout(function () {
      Toastify({
        text: "Producto agregado ",
        duration: 1700,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #8eba95, #a0b8a4)",
          top: "15px",
          right: "2px",
          padding: "15px 10px 15px 15px",
        },
        //como agregar style a un div adentro?
        offset: {
          x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 50, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      addProductCar(myCarOrder);
      makeTextToSend(myCarOrder);
      abrirCerrar("", viewProduct, "", "", "");
      openBack();
    }, 700);
    console.log(message);
  });
  closeButton();
  darkBack();
}

function darkBack() {
  document.body.style.backgroundColor = "#e8e6e6";
  for (const card of productCard) {
    card.classList.add("backProductCard");
  }
}

function removeOrder(imagDelete) {
  for (let i = 0; i < imagDelete.length; i++) {
    //priceEliminateOrder = ordenDePedido[i].price;

    imagDelete[i].addEventListener("click", function () {
      if (imagDelete.length > 1) {
        Toastify({
          text: "Producto eliminado",
          duration: 1700,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #8eba95, #a0b8a4)",
            top: "15px",
            right: "2px",
            padding: "15px 10px 15px 15px",
          },
          offset: {
            x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 50, // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }

      productToless = productList.find(
        (p) =>
          p.ref === +this.parentNode.getElementsByTagName("img")[0].dataset.ref
      );
      myCarOrder = myCarOrder.filter(
        (objeto) => objeto.ref !== productToless.ref
      );
      this.parentNode.remove(); // Eliminar el div que contiene la imagen que ha sido clickeada
      spanPrice -= productToless.price;
      totalPrice.innerHTML = formatoMoneda(spanPrice);
      makeTextToSend(myCarOrder);

      spanOrder -= 1;
      quantityOrder.innerHTML = spanOrder;
      console.log(myCarOrder);
      console.log(message);

      if (spanPrice === 0) {
        totalOrder.classList.add("inactive");
        emptyCar.classList.remove("inactive");
        buttonConfirm.classList.add("inactive");
        abrirCerrar("", myOrder, "", "", "");
        Toastify({
          text: "Ahora tu carrito está vacío",
          duration: 1700,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #8eba95, #a0b8a4)",
            top: "15px",
            right: "2px",
            padding: "15px 10px 15px 15px",
            maxWidth: "calc(50% - -26px)",
          },
          offset: {
            x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 50, // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }
    });
  }
}
