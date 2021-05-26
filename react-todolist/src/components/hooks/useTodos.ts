import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTodoList,
  fetchTodos,
  addNewTodo,
  removeTodo,
} from "../../slices/todoSlice";
import { Todo } from "../../model/Todo";

//a hook that interact with redux store to get/send data relating to todos
export const useTodos = () => {
  const dispatch = useDispatch();
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
