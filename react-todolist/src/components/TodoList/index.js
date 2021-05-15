import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import "./TodoList.css";
export default class TodoList extends Component {
  state = {
    todoList: [
      { id: 0, userId: 1, title: "Buy a book", completed: false },
      { id: 1, userId: 2, title: "Buy a car", completed: false }
    ]
  };
  render() {
    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">TodoList2</h4>
        </header>
        <input
          type="text"
          className="todolist__input"
          placeholder="What are you going to do????"
        />
        <ul className="todolist__content">
          {this.state.todoList.map((todo) =>
            <TodoItem key={todo.id} todo={todo}></TodoItem>
          )}
        </ul>
      </section>
    );
  }
}
