import React, { useState, useRef, useContext } from "react";
import { ITodo } from "../../../model/todo.interface";
import AuthContext from "../../../context/auth-context";

interface IProps {
  addTodo: (todo: ITodo) => void;
}

const AddTodo: React.FC<IProps> = (props) => {
  const [enteredLabel, setEnteredLabel] = useState<string>("");

  const context = useContext(AuthContext);

  const submitHandler = () => {
    if (enteredLabel.trim() === "") {
      return;
    }
    let newTodo: ITodo = {
      id: Math.round(Math.random() * 1000).toString(),
      label: enteredLabel,
    };
    props.addTodo(newTodo);
    setEnteredLabel("");
  };
  if (context.isLoggedIn) {
    return (
      <>
        <h1>User is logged in</h1>
        <button
          className="btn btn-primary"
          onClick={() => context.setIsLoggedIn(false)}
        >
          Logout
        </button>
      </>
    );
  }
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-grouo">
                <div className="row">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      name="inputLabel"
                      value={enteredLabel}
                      onChange={(e) => setEnteredLabel(e.target.value)}
                    />
                  </div>
                  <div className="col-4">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={submitHandler}
                        disabled={enteredLabel.trim() === ""}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
