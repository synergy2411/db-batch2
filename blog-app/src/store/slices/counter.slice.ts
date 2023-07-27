import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 101,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
