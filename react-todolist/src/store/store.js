import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';

export default configureStore({
  //get todos
  //add todos
  //remove todos
  reducer: {
    // This tells Redux that we want our top- level state object to have a field named todo inside, and all the data for state.todo will be updated by the todoReducer function when actions are dispatched.
    todo: todoReducer
  },
});
