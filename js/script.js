// const arrowSort = document.getElementById("arrowSort");

// arrowSort.addEventListener("click", () => {
//   arrowSort.classList.toggle("active");
// });

// Burger Menu
document.addEventListener("DOMContentLoaded", function () {
  try {
    const burger = document.querySelector(".burger");
    const burgerMenu = document.getElementById("burgerMenu");

    if (burger && burgerMenu) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        burgerMenu.classList.toggle("visible");
        document.body.classList.toggle("lock-scroll");
      });
    } else {
      console.warn("Burger menu elements not found");
    }
  } catch (error) {
    console.error("Error in burger menu script:", error);
  }

  // Select Elements
  try {
    const element1 = document.getElementById("select-js-industry");
    const element2 = document.getElementById("select-js-major");
    const element3 = document.getElementById("select-js-city");

    if (element1 && element2 && element3) {
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
    } else {
      console.warn("Select elements not found");
    }
  } catch (error) {
    console.error("Error in select elements script:", error);
  }

  // Tooltip
  try {
    const tooltip = document.getElementById("tooltip");
    const tooltiClose = document.getElementById("tooltipClose");
    const tooltipContent = document.getElementById("tooltipContent");

    if (tooltip && tooltiClose && tooltipContent) {
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
    } else {
      console.warn("Tooltip elements not found");
    }
  } catch (error) {
    console.error("Error in tooltip script:", error);
  }
});
