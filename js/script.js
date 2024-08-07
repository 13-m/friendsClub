const burger = document.querySelector(".burger");
const burgerMenu = document.getElementById("burgerMenu");
// const arrowSort = document.getElementById("arrowSort");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("visible");
  document.body.classList.toggle("lock-scroll");
});

// arrowSort.addEventListener("click", () => {
//   arrowSort.classList.toggle("active");
// });

// select

const element1 = document.getElementById("select-js-industry");
const element2 = document.getElementById("select-js-major");
const element3 = document.getElementById("select-js-city");
const choices1 = new Choices(element1, {
  searchEnabled: false,
  itemSelectText: "",
  placeholder: true,
  placeholderValue: null,
});

const choices2 = new Choices(element2, {
  searchEnabled: false,
  placeholder: true,
  placeholderValue: null,
  itemSelectText: "",
});

const choices3 = new Choices(element3, {
  searchEnabled: true,
  placeholder: true,
  placeholderValue: null,
  itemSelectText: "",
});

// tooltip
const tooltip = document.getElementById("tooltip");
const tooltiClose = document.getElementById("tooltipClose");
const tooltipContent = document.getElementById("tooltipContent");

tooltip.addEventListener("click", () => {
  tooltipContent.classList.add("tooltip-open");
});

tooltiClose.addEventListener("click", (e) => {
  e.stopPropagation();
  tooltipContent.classList.remove("tooltip-open");
});

document.addEventListener("click", (e) => {
  if (!tooltip.contains(e.target)) {
    tooltipContent.classList.remove("tooltip-open");
  }
});
