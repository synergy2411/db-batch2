import TodoItem from "./TodoItem/TodoItem";

const Todo = () => {
  let todoCollection = [
    { id: "t001", label: "pot the plants" },
    { id: "t002", label: "renew car insurance" },
    { id: "t003", label: "buy new jeans" },
    { id: "t004", label: "shop for grocery" },
  ];

  return (
    <div>
      <h2 className="text-center">My Todos</h2>
      <div className="row">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todo;
