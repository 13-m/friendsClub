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

  // files
  try {
    document
      .getElementById("file-input")
      .addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const imagePreview = document.getElementById("image-preview");
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      });
  } catch (error) {
    console.warn("fillex elements not found1", error);
  }
});
// tabs
function showTab(tabId, element) {
  try {
    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.style.display = "none";
    });

    let activeTab = document.getElementById(tabId);
    activeTab.style.display = "flex";
    setTimeout(() => {
      activeTab.classList.add("active");
    }, 100);

    let tabsBtn = document.querySelectorAll(".tab-nav");
    tabsBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    element.classList.add("active");
  } catch (error) {
    console.warn("Tabs elements not found:", error);
  }
}

// fields

const inputs = document.querySelectorAll(".lk__input");

function updatePlace(input) {
  if (input.value.trim() !== "") {
    input.classList.add("has-content");
  } else {
    input.classList.remove("has-content");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", () => updatePlace(input));
  input.addEventListener("input", () => updatePlace(input));
  input.addEventListener("blur", () => updatePlace(input));
  updatePlace(input);
});
