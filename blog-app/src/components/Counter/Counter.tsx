import { useSelector } from "react-redux";
import { IState } from "../../store";
import CounterAction from "./CounterAction/CounterAction";

export default function Counter() {
  const counter = useSelector((store: IState) => store.ctr.counter);

  return (
    <div className="text-center">
      <p className="display-4">Counter : {counter}</p>
      <hr />
      <CounterAction />
    </div>
  );
}
