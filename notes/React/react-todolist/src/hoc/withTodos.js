import React from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../apis/TodoAPI';

export const withTodos = (WrappedComponent) =>
  class NewComponent extends React.Component {
    state = {
      todolist: [],
    };

    HandleAddTodo = (newTodo) => {
      addTodo(newTodo).then((data) => {
        this.setState({
          todolist: [data, ...this.state.todolist],
        });
      });
    };

    handleRemoveTodo = (id) => {
      deleteTodo(id)
        .then((data) => {
          this.setState({
            todolist: this.state.todolist.filter((todo) => todo.id !== id),
          });
        })
        .catch((err) => {
          console.warn(err);
        });
    };

    componentDidMount() {
      getAllTodos().then((data) => {
        this.setState({
          todolist: data,
        });
      });
    }
    render() {
      return (
        <WrappedComponent
          todolist={this.state.todolist}
          handleRemoveTodo={this.handleRemoveTodo}    // event delegation   不要重复让每一个item都有deletefunction
          HandleAddTodo={this.HandleAddTodo}
        ></WrappedComponent>
      );
    }
  };
