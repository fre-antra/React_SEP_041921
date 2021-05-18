import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, getAllTodos } from '../API/todoAPI';

const initialState = {
  todoList: [],
  totalTodoCount: 0,
  totalCompleted: 0
};

//async thunks
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const todos = await getAllTodos();
  return todos;
});

export const addNewTodo = createAsyncThunk("todo/addTodo", async (newTodo) => {
  const data = await addTodo(newTodo);
  return data;
});


export const removeTodo = createAsyncThunk("todo/removeTodo", async (id) => {
  await deleteTodo(id);
  return +id;
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

  },
  //what is this?
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [addNewTodo.fulfilled]: (state, action) => {
      state.todoList.unshift(action.payload);
    },
    [removeTodo.fulfilled]: (state, action) => {
      console.log(action);
      state.todoList = state.todoList.filter((todo) => +todo.id !== +action.payload);
    },
  }
});


//selectors
export const selectTodoList = state => state.todo.todoList;
export default todoSlice.reducer;