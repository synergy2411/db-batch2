import { useDispatch } from "react-redux";
import { increment, decrement } from "../../../store/slices/counter.slice";
import { AppDispatch } from "../../../store";

export default function CounterAction() {
  const dispatch = useDispatch<AppDispatch>();

  const increaseCounterClickHandler = () => {
    dispatch(increment(0));
  };

  const decreaseCounterClickHandler = () => dispatch(decrement(0));
  return (
    <div>
      <button className="btn btn-primary" onClick={increaseCounterClickHandler}>
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={decreaseCounterClickHandler}
      >
        Decrease
      </button>
    </div>
  );
}
