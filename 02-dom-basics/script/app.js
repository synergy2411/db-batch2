window.onload = function () {
  var btnAdd = document.querySelector("#btnAdd");
  var input = document.querySelector("#txtInput");
  var liContainer = document.getElementById("list-container");

  const createTodo = async (newTodo) => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      const result = await response.json();

      // console.log("RESULT : ", result);
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const createUi = (todos) => {
    liContainer.innerHTML = "";
    todos.forEach((todo) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = todo.label.toUpperCase();
      liElement.classList.add("list-group-item", "my-list-style");
      liContainer.append(liElement);
    });
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const todos = await response.json();
      createUi(todos);
    } catch (err) {
      console.error(err);
    }
  };

  fetchTodos();

  btnAdd.addEventListener("click", function (event) {
    event.preventDefault();

    let newTodo = {
      label: input.value,
    };
    createTodo(newTodo);
    // const liElement = document.createElement("li");
    // liElement.innerHTML = input.value.toUpperCase();
    // liElement.classList.add("list-group-item");
    // liContainer.append(liElement);

    input.value = "";
  });
};
