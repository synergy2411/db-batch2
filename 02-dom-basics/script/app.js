window.onload = function () {
  var btnAdd = document.querySelector("#btnAdd");
  var input = document.querySelector("#txtInput");
  var liContainer = document.getElementById("list-container");

  btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    const liElement = document.createElement("li");
    liElement.innerHTML = input.value.toUpperCase();
    liElement.classList.add("list-group-item");
    liContainer.append(liElement);

    input.value = "";
  });
};
