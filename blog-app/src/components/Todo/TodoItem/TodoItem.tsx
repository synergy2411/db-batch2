import React from "react";
import { ITodo } from "../../../model/todo.interface";

interface IProps {
  todo: ITodo;
  deleteTodo: (todoId: string) => void;
}

const TodoItem: React.FC<IProps> = (props) => {
  return (
    <div className="col-4 my-4">
      <div className="card" onClick={() => props.deleteTodo(props.todo.id)}>
        <div className="card-header">
          <h6 className="text-center">{props.todo.label.toUpperCase()}</h6>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
