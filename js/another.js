document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".post__content-item");
  const wrapp = document.getElementsByClassName("wrapp-tab")[0];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      if (tab.id === "tab2" || tab.id === "tab3") {
        wrapp.setAttribute("hidden", "");
      } else {
        wrapp.removeAttribute("hidden");
      }
    });
  });
});
