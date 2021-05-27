import React from 'react';

class Dashboard extends React.Component {
  render() {
    const { todolist } = this.props;
    const totalTodosCount = todolist.length;
    const totalCompleted = todolist.filter((todo) => todo.completed === true)
      .length;

    return (
      <section>
        <h1> TotalTodosCount:{totalTodosCount}</h1>
        <h1> TotalCompleted:{totalCompleted}</h1>
      </section>
    );
  }
}

// const NewDashboard = withTodos(Dashboard);
// console.log(NewDashboard);

export default Dashboard;
