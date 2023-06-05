const mobileMenuBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

mobileMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});