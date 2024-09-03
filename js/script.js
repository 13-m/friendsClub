document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
});
// burger menu
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
  console.warn("Error in burger menu script:", error);
}
// select js
try {
  const selectElements1 = [
    { id: "select-js-industry", searchEnabled: false },
    { id: "select-js-major", searchEnabled: false },
    { id: "select-js-city", searchEnabled: true },
  ];

  selectElements1.forEach(({ id, searchEnabled }) => {
    const element = document.getElementById(id);
    if (element) {
      new Choices(element, {
        searchEnabled: searchEnabled,
        itemSelectText: "",
        placeholder: true,
        placeholderValue: null,
      });
    } else {
      console.warn(`Select element with ID ${id} not found`);
    }
  });
} catch (error) {
  console.warn("Error in select elements script:", error);
}
// select 2 js
try {
  const selectElements2 = [
    { id: "select-js-category", searchEnabled: false },
    { id: "select-js-author", searchEnabled: false },
  ];

  selectElements2.forEach(({ id, searchEnabled }) => {
    const element = document.getElementById(id);
    if (element) {
      new Choices(element, {
        searchEnabled: searchEnabled,
        itemSelectText: "",
        placeholder: true,
        placeholderValue: null,
      });
    } else {
      console.warn(`Select element with ID ${id} not found`);
    }
  });
} catch (error) {
  console.warn("Error in select elements script:", error);
}
// tooltip
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
  console.warn("Error in tooltip script:", error);
}
//  file upload
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
// tab
try {
  function getUrlParameter(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function showTab(containerId, tabId, element) {
    const container = document.getElementById(containerId);

    // Проверка, существует ли контейнер
    if (!container) {
      throw new Error(`Container with ID '${containerId}' not found.`);
    }

    const tabs = container.getElementsByClassName("tab-content");
    const buttons = element ? element.parentElement.children : null;

    // Проверка, существуют ли вкладки
    if (tabs.length === 0) {
      throw new Error(
        `No tabs with class 'tab-content' found in container '${containerId}'.`
      );
    }

    // Очищаем активные классы для вкладок и кнопок
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    if (buttons) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
    }

    // Активируем нужную вкладку
    const activeTab = document.getElementById(tabId);
    if (!activeTab) {
      throw new Error(`Tab with ID '${tabId}' not found.`);
    }
    activeTab.classList.add("active");

    if (element) {
      element.classList.add("active");
    }

    // Специальная обработка для отдельных вкладок
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
  }

  window.onload = function () {
    try {
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
      } else {
        console.warn("Main tab element not found.");
      }
    } catch (error) {
      console.warn("Error during window onload:", error);
    }
  };
} catch (error) {
  console.warn("Error in tab switching script:", error);
}

try {
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
} catch (error) {
  console.warn("Error in form fields script:", error);
}
