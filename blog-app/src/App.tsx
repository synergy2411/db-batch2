import { useState } from "react";
import ClassBased from "./components/Demo/ClassBased";
import Uncontrolled from "./components/Demo/Uncontrolled";
import UseEffect from "./components/Demo/UseEffect";
import Todo from "./components/Todo/Todo";
import AuthContext from "./context/auth-context";
import Counter from "./components/Counter/Counter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <div className="container">
      <Counter />

      {/* <UseEffect /> */}
      {/* <Uncontrolled /> */}
      {/* <ClassBased /> */}
      {/* <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Todo />
      </AuthContext.Provider> */}
    </div>
  );
}

export default App;
