// const arrowSort = document.getElementById("arrowSort");

// arrowSort.addEventListener("click", () => {
//   arrowSort.classList.toggle("active");
// });

// Burger Menu
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
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
    document.querySelectorAll(".file-input").forEach((fileInput) => {
      fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const imagePreview = fileInput.nextElementSibling;
            if (
              imagePreview &&
              imagePreview.classList.contains("image-preview")
            ) {
              imagePreview.src = e.target.result;
              imagePreview.style.display = "block";
            }
          };
          reader.readAsDataURL(file);
        }
      });
    });
  } catch (error) {
    console.warn("file input elements not found", error);
  }
});

// tabs

function getUrlParameter(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function showTab(containerId, tabId, element) {
  const container = document.getElementById(containerId);
  const tabs = container.getElementsByClassName("tab-content");
  const buttons = element ? element.parentElement.children : null;

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  if (buttons) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  }

  document.getElementById(tabId).classList.add("active");

  if (element) {
    element.classList.add("active");
    // console.log(`click on this ${tabId}`);
  }

  if (tabId === "tab4") {
    const defaultInnerTab = document.getElementById("tab4_1");
    if (defaultInnerTab) {
      defaultInnerTab.classList.add("active");
    }
  }

  if (tabId === "tab1") {
    const defaultInnerTab = document.getElementById("tab1_1");
    if (defaultInnerTab) {
      defaultInnerTab.classList.add("active");
    }
  }
  // else if (containerId === "container3") {
  //   const innerTabs = container.getElementsByClassName("tab-content");
  //   for (let i = 1; i < innerTabs.length; i++) {
  //     innerTabs[i].classList.remove("active");
  //   }
  // }
}

window.onload = function () {
  const mainTab = getUrlParameter("tab");
  let mainTabToActivate = "tab1";

  if (mainTab) {
    mainTabToActivate = mainTab;
  }

  const mainTabElement = document.querySelector(
    `.tooltipMenu__list a[href="lk.html?tab=${mainTabToActivate}"]`
  );
  if (mainTabElement) {
    showTab("container2", mainTabToActivate, null);
  }

  // if (mainTabToActivate === "tab1") {
  //   console.log("here ?");
  //   showTab("container3", "tab1_1", null);
  // } else if (mainTabToActivate !== "tab1") {
  //   const innerTabs = document
  //     .getElementById("container3")
  //     .getElementsByClassName("tab-content");
  //   for (let i = 0; i < innerTabs.length; i++) {
  //     innerTabs[i].classList.remove("active");
  //   }
  // }
};

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

const allForm = document.querySelectorAll("form");
allForm.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

// popup

const btnPopup = document.getElementById("popup-busines-open");
const btnClosePopup = document.getElementById("closePopup");
const popup = document.getElementById("popupBusines");

btnPopup.addEventListener("click", () => {
  popup.classList.add("visible");
  document.body.classList.add("lock-scroll");
});

btnClosePopup.addEventListener("click", () => {
  popup.classList.remove("visible");
  document.body.classList.remove("lock-scroll");
});
