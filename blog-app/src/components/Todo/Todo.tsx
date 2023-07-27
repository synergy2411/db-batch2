import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import AddTodo from "./AddTodo/AddTodo";
import { ITodo } from "../../model/todo.interface";

let INITIAL_TODOS: ITodo[] = [
  { id: "t001", label: "pot the plants" },
  { id: "t002", label: "renew car insurance" },
  { id: "t003", label: "buy new jeans" },
  { id: "t004", label: "shop for grocery" },
];

const Todo = () => {
  let [toggle, setToggle] = useState<boolean>(false);
  const [todoCollection, setTodoCollection] = useState<ITodo[]>(INITIAL_TODOS);

  const deleteTodo = (todoId: string) => {
    console.log("About to Delete - ", todoId);
  };

  const addTodo = (newTodo: ITodo) => {
    setTodoCollection((prev) => {
      return [newTodo, ...prev];
    });
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
