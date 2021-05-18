import React from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../API/todoAPI';

export const withTodos = (WrappedComponents) => class NewComponent extends React.Component {
  state = {
    todoList: [],
    totalTodoCount: 0,
    totalCompleted: 0
  };

  handleDeleteTodo = (id) => {
    console.log("handleDeleteTodo");
    // deleteTodo(+id)
    //   .then(data => {
    //     this.setState({
    //       todoList: this.state.todoList.filter((todo) => +todo.id !== +id)
    //     });
    //   })
    //   .catch(err => {
    //     console.warn(err);
    //   });
  };

  handleAddTodo = (newTodo) => {
    console.log("handleAddTodo");
    // addTodo(newTodo).then(data => {
    //   this.setState({
    //     todoList: [data, ...this.state.todoList]
    //   });
    // });
  };

  componentDidMount() {
    console.log("Mounting withTodo");
    // getAllTodos().then(todos => {
    //   this.setState({
    //     todoList: todos
    //   });
    // const totalTodoCount = todos.length;
    // const totalCompleted = todos.filter((todo) => todo.completed === true).length;
    // this.setState({
    //   totalTodoCount: totalTodoCount,
    //   totalCompleted: totalCompleted
    // });
    // });
  };
  render() {
    return <WrappedComponents
      todoList={this.state.todoList}
      handleDeleteTodo={this.handleDeleteTodo}
      handleAddTodo={this.handleAddTodo}
    ></WrappedComponents>;
  }
};