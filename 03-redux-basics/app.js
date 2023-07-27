const { createStore } = require("redux");

const initialState = {
  counter: 0,
};

// REDUCER
function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      counter: state.counter + action.payload,
    };
  }
  return state;
}

// STORE
const store = createStore(reducer);

// SUBSCRIBE
store.subscribe(() => {
  console.log("State : ", store.getState());
});

// ACTION
store.dispatch({ type: "INCREMENT" });
// console.log("State After INCREMENT: ", store.getState());

store.dispatch({ type: "DECREMENT" });
// console.log("State After DECREMENT: ", store.getState());

store.dispatch({ type: "ADD_COUNTER", payload: 10 });
