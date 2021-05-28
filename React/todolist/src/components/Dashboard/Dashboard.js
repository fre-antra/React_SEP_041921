import React from "react";
import { withTodos } from "../HOC/withTodos";

class Dashboard extends React.Component {
  render() {
    const { todoData } = this.props;
    const itemCount = todoData.length;
    let completedCount = 0;
    todoData.forEach((el) => {
      if (el.completed === true) completedCount += 1;
    });
    return (
      <div>
        <h2>item count: {itemCount}</h2>
        <h2>completed count: {completedCount}</h2>
      </div>
    );
  }
}

const newDashboard = withTodos(Dashboard);
export default newDashboard;
