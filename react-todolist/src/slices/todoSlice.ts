import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, getAllTodos } from "../API/todoAPI";
import { Todo } from "../model/Todo";
import { State } from "../store/store";

export interface TodoSlice {
  todoList: any[];
  totalTodoCount: number;
  totalCompleted: number;
}

const initialState: TodoSlice = {
  todoList: [],
  totalTodoCount: 0,
  totalCompleted: 0,
};

//async thunks
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const todos = await getAllTodos();
  return todos;
});

export const addNewTodo = createAsyncThunk(
  "todo/addTodo",
  async (newTodo: Todo) => {
    const data = await addTodo(newTodo);
    return data;
  }
);

export const removeTodo = createAsyncThunk(
  "todo/removeTodo",
  async (id: number) => {
    await deleteTodo(id);
    return +id;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  //use builder to match type: https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todoList.unshift(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(
          (todo) => +todo.id !== +action.payload
        );
      });
    // [fetchTodos.fulfilled]: (state, action) => {
    //   state.todoList = action.payload;
    // },
    // [addNewTodo.fulfilled]: (state, action) => {
    //   state.todoList.unshift(action.payload);
    // },
    // [removeTodo.fulfilled]: (state, action) => {
    //   console.log(action);
    //   state.todoList = state.todoList.filter(
    //     (todo) => +todo.id !== +action.payload
    //   );
    // },
  },
});

//selectors
export const selectTodoList = (state: State) => state.todo.todoList;
export default todoSlice.reducer;
