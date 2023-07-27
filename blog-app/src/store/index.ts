import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
  },
});

export default store;

export type IState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
