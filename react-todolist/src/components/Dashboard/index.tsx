import React, { Component } from "react";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../../model/Todo";

function Dashboard() {
  const { todoList } = useTodos();
  const totalTodoCount = todoList.length;
  const totalCompleted = todoList.filter(
    (todo: Todo) => todo.completed === true
  ).length;
  return (
    <section>
      <h1>Total todo counts: {totalTodoCount}</h1>
      <h1>Total Completed: {totalCompleted}</h1>
    </section>
  );
}

export default Dashboard;
