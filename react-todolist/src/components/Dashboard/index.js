import React, { Component, useEffect } from 'react';
import { getAllTodos } from "../../API/todoAPI";
import { withTodos } from '../../HOC/withTodos';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList, fetchTodos } from '../../slices/todoSlice';

function Dashboard(props) {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  //hook to dispatch fetching data action
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const totalTodoCount = todoList.length;
  const totalCompleted = todoList.filter((todo) => todo.completed === true).length;
  return (
    <section>
      <h1>
        Total todo counts: {totalTodoCount}
      </h1>
      <h1>
        Total Completed: {totalCompleted}
      </h1>
    </section>

  );
}

export default Dashboard;