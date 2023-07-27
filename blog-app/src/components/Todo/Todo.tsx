import { useEffect, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import AddTodo from "./AddTodo/AddTodo";
import { ITodo } from "../../model/todo.interface";

// let INITIAL_TODOS: ITodo[] = [
//   { id: "t001", label: "pot the plants" },
//   { id: "t002", label: "renew car insurance" },
//   { id: "t003", label: "buy new jeans" },
//   { id: "t004", label: "shop for grocery" },
// ];

const Todo = () => {
  let [toggle, setToggle] = useState<boolean>(false);
  const [todoCollection, setTodoCollection] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3030/todos");
        const todos = await response.json();
        setTodoCollection(todos);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, []);

  const deleteTodo = async (todoId: string) => {
    try {
      const response = await fetch("http://localhost:3030/todos/" + todoId, {
        method: "DELETE",
      });
      const result = await response.json();
      setTodoCollection((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== todoId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo = async (newTodo: ITodo) => {
    try {
      const response = await fetch("http://localhost:3030/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const result = await response.json();
      setTodoCollection((prev) => {
        return [result, ...prev];
      });
    } catch (err) {
      console.log(err);
    }
    setToggle(false);
  };
  return (
    <div>
      <h2 className="text-center">My Todos</h2>
      <div className="row mb-3">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button
              className="btn btn-secondary"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
      {toggle && <AddTodo addTodo={addTodo} />}

      <div className="row">
        {todoCollection.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
