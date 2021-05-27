import React from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';

class WithTodosData extends React.Component {
  state = {
    title: 'TodoData',
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
    let header = null;
    let content = null;
    const { render, children, renderHeader } = this.props;
    if (renderHeader) {
      header = renderHeader(this.state.title);
    }

    if (render) {
      content = render(
        this.handleRemoveTodo,
        this.HandleAddTodo,
        this.state.todolist
      );
    } else if (children) {
      content = children(
        this.handleRemoveTodo,
        this.HandleAddTodo,
        this.state.todolist
      );
    }

    return (
      <>
        {header}
        {content}
      </>
    );
  }
}

export default WithTodosData;
