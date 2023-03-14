const cuentaEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

cuentaEmail.addEventListener("click", () => toggleElement(desktopMenu));
botonMenu.addEventListener("click", () => toggleElement(mobileMenu));

const toggleElement = (e) => {
  e.classList.toggle("inactive");
};

// function switchMenu() {
//   desktopMenu.classList.toggle("inactive");
// }

// function appearMenu() {
//   mobileMenu.classList.toggle("inactive");
// }
