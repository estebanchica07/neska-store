const cuentaEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

cuentaEmail.addEventListener("click", switchMenu);

function switchMenu() {
  desktopMenu.classList.toggle("inactive");
}
