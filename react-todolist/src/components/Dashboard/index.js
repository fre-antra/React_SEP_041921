import React, { Component } from 'react';
import { getAllTodos } from "../../API/todoAPI";
import { withTodos } from '../../HOC/withTodos';

function Dashboard(props) {

  const { todoList } = props;
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

export default withTodos(Dashboard);