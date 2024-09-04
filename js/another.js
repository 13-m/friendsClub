document.addEventListener("DOMContentLoaded", function () {
  const tab = document.getElementById("tab1");
  const wrappTab = document.getElementById("wrappTab");

  console.log("here1");

  if (tab.classList.contains("active")) {
    wrappTab.style.display = "block";
    console.log("Есть");
  } else if (!tab.classList.contains("active")) {
    console.log("Нет");
    wrappTab.style.display = "none";
  }
});
