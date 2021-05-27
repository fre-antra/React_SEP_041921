import React, { Component, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  selectTodoList,
  fetchTodos,
  addNewTodo,
  removeTodo,
} from "../../slices/todoSlice";
import { Todo } from "../../model/Todo";
import { RootState, AppDispatch } from "../../store/store";

//hooks with defined types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//a hook that interact with redux store to get/send data relating to todos
export const useTodos = () => {
  const dispatch = useAppDispatch(); //this dispatch function is typed
  const todoList = useSelector(selectTodoList);

  //hook to dispatch fetching data action
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleAddTodo = (newTodo: Todo) => {
    dispatch(addNewTodo(newTodo));
  };

  return {
    todoList,
    handleAddTodo,
    handleDeleteTodo,
  };
};
