const burger = document.querySelector(".burger");
const burgerMenu = document.getElementById("burgerMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("visible");
});
