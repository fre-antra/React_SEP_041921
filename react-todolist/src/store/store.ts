import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import { TodoState } from "../slices/todoSlice";

// export interface State {
//   todo: TodoSlice;
// }

const store = configureStore({
  //get todos
  //add todos
  //remove todos
  reducer: {
    // This tells Redux that we want our top- level state object to have a field named todo inside, and all the data for state.todo will be updated by the todoReducer function when actions are dispatched.
    todo: todoReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
