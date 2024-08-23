document
  .getElementById("fileHobby")
  .addEventListener("change", function (event) {
    const files = event.target.files;
    const imageList = document.getElementById("hobby-list");
    const maxDisplayCount = 3;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      addImageToList(file);
    }

    updateCounter();

    function addImageToList(file) {
      const imageItems = imageList.getElementsByTagName("li");

      if (imageItems.length < 4) {
        const listItem = document.createElement("li");
        listItem.className = "hobby__item";
        const img = document.createElement("img");
        const deleteBtn = document.createElement("button");

        img.src = URL.createObjectURL(file);
        img.onload = function () {
          URL.revokeObjectURL(img.src);
        };

        deleteBtn.textContent = "";
        deleteBtn.className = "hobby__delete-btn";
        deleteBtn.addEventListener("click", function () {
          imageList.removeChild(listItem);
          updateCounter();
        });

        listItem.appendChild(deleteBtn);
        listItem.appendChild(img);
        imageList.appendChild(listItem);

        if (imageItems.length === 3) {
          addCounterItem();
        }
      }
    }

    function addCounterItem() {
      const existingCounterItem = imageList.querySelector(".counter-item");
      if (!existingCounterItem) {
        const counterItem = document.createElement("li");
        const counterDiv = document.createElement("div");
        counterItem.className = "counter-item";
        counterDiv.className = "counter";
        counterItem.appendChild(counterDiv);
        imageList.appendChild(counterItem);
      }
    }

    function updateCounter() {
      const items = imageList.querySelectorAll("li");
      const counterItem = imageList.querySelector(".counter-item");

      if (counterItem) {
        const extraImagesCount = items.length - 3;
        counterItem.querySelector(
          ".counter"
        ).textContent = `+${extraImagesCount}`;
      }
    }
  });
