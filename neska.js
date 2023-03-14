const cuentaEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

cuentaEmail.addEventListener("click", switchMenu);
botonMenu.addEventListener("click", appearMenu);

function switchMenu() {
  desktopMenu.classList.toggle("inactive");
}

function appearMenu() {
  mobileMenu.classList.toggle("inactive");
}
