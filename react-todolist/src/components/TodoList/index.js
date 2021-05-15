import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { getAllTodos, deleteTodo, addTodo } from '../../API/todoAPI';
import { Todo } from '../../model/Todo';
export default class TodoList extends Component {
  state = {
    todoList: [],
    inputText: ""
  };

  componentDidMount() {
    getAllTodos().then(data => {
      console.log(data);
      this.setState({ todoList: data });
    });
  }

  //assign event handler to the child
  // handleRemoveTodo = (id) => {
  // deleteTodo(id)
  //   .then(data => {
  //     this.setState({
  //       todoList: this.state.todoList.filter((todo) => todo.id !== id)
  //     });
  //   })
  //   .catch(err => {
  //     console.warn(err);
  //   });
  // };

  //use event delegation instead, this avoids creating a lot of event handlers in TodoItem
  handleRemove = (event) => {
    if (event.target.className == "btn-remove") {
      console.log(event.target.id);
      const id = (event.target.id);
      deleteTodo(+id)
        .then(data => {
          this.setState({
            todoList: this.state.todoList.filter((todo) => +todo.id !== +id)
          });
        })
        .catch(err => {
          console.warn(err);
        });
    }

  };

  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  handleInputKeyUp = (event) => {
    if (event.key === "Enter") {
      const userId = 1, title = this.state.inputText, completed = false;
      const newTodo = new Todo(userId, title, completed);
      addTodo(newTodo).then(data => {
        this.setState({
          todoList: [data, ...this.state.todoList]
        });
      });
    }
  };

  render() {
    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">TodoList</h4>
        </header>
        <input
          type="text"
          className="todolist__input"
          placeholder="What are you going to do????"
          value={this.state.inputText}
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputKeyUp}
        />
        <ul className="todolist__content" onClick={this.handleRemove}>
          {this.state.todoList.map((todo) =>
            <TodoItem key={todo.id} todo={todo}
            // removeTodo={this.handleRemoveTodo}
            ></TodoItem>
          )}
        </ul>
      </section>
    );
  }
}
