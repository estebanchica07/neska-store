const cuentaEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const myOrder = document.querySelector(".product-detail");
const cartBoton = document.querySelector(".navbar-shopping-cart");

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

// function switchMenu() {
//   desktopMenu.classList.toggle("inactive");
// }

// function appearMenu() {
//   mobileMenu.classList.toggle("inactive");
// }
