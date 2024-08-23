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
