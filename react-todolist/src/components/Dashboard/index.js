import React, { Component } from 'react';
import { getAllTodos } from "../../API/todoAPI";

export default class Dashboard extends Component {
  state = {
    totalTodoCount: 0,
    totalCompleted: 0
  };

  componentDidMount() {
    getAllTodos().then(todos => {
      const totalTodoCount = todos.length;
      const totalCompleted = todos.filter((todo) => todo.completed === true).length;
      this.setState({
        totalTodoCount: totalTodoCount,
        totalCompleted: totalCompleted
      });
    });
  }

  render() {
    const { totalTodoCount, totalCompleted } = this.state;
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
}
