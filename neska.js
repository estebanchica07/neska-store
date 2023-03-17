const cuentaEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const myOrder = document.querySelector("#shoppingCartContainer");
const cartBoton = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const viewProduct = document.querySelector("#productDetail");
const closeViewProduct = document.querySelector(".product-detail-close");
const cerrarMyorder = document.querySelector(".close-my-order");

let productImageList;

cuentaEmail.addEventListener("click", () =>
  abrirCerrar(desktopMenu, myOrder, viewProduct, mobileMenu, "")
);
botonMenu.addEventListener("click", () =>
  abrirCerrar(mobileMenu, myOrder, viewProduct, desktopMenu, "")
);
cartBoton.addEventListener("click", () =>
  abrirCerrar(myOrder, mobileMenu, desktopMenu, viewProduct, "")
);
closeViewProduct.addEventListener("click", () =>
  abrirCerrar(viewProduct, mobileMenu, desktopMenu, myOrder, "")
);

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

function formatoMoneda(valor) {
  let convertirMoneda = `$ ${valor.toLocaleString()}`;
  return convertirMoneda;
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
    VistaDetalle = `
    
    `;
  });
  productImageList = document.getElementsByClassName("productImage");
  for (let i = 0; i < productImageList.length; i++) {
    productImageList[i].addEventListener("click", () =>
      abrirCerrar(viewProduct, desktopMenu, myOrder, mobileMenu, "")
    );
    for (let i = 0; i < productImageList.length; i++) {
      productImageList[i].addEventListener("click", () => OpenPreviewView());
    }
    // productCards.forEach((productCard) => {
    //   productCard.addEventListener("click", () => console.log("Hola"));
    //});
  }
}

renderProducts(productList);
