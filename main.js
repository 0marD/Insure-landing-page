const menuOpen = document.querySelector(".header__menu-icon-open");
const menuClose = document.querySelector(".header__menu-icon-close");
const menuMobile = document.querySelector(".menu-mobile");
const menuIcon = document.querySelector(".header__menu-icon");

menuIcon.addEventListener("click", () => {
  menuMobile.classList.toggle("show-menu");
  menuOpen.classList.toggle("menu-active");
  menuClose.classList.toggle("menu-active");
});
