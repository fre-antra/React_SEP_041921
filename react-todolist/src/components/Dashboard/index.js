import React, { Component } from 'react';
import { useTodos } from '../hooks/useTodos';

function Dashboard() {
  const { todoList } = useTodos();
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