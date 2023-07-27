import TodoItem from "./TodoItem/TodoItem";

const Todo = () => {
  let todoCollection = [
    { id: "t001", label: "pot the plants" },
    { id: "t002", label: "renew car insurance" },
    { id: "t003", label: "buy new jeans" },
    { id: "t004", label: "shop for grocery" },
  ];

  const deleteTodo = (todoId: string) => {
    console.log("About to Delete - ", todoId);
  };

  return (
    <div>
      <h2 className="text-center">My Todos</h2>
      <div className="row">
        <TodoItem todo={todoCollection[0]} deleteTodo={deleteTodo} />
        <TodoItem todo={todoCollection[1]} deleteTodo={deleteTodo} />
        <TodoItem todo={todoCollection[2]} deleteTodo={deleteTodo} />
        <TodoItem todo={todoCollection[3]} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
