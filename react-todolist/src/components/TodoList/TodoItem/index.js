import React from 'react';
import "./TodoItem.css";

export default function TodoItem(props) {
  const { todo, removeTodo } = props;
  return (
    <li className="todolist__content-item">
      <span>{todo.title}</span>
      <button id={todo.id} className="btn-remove"
        onClick={() => removeTodo(todo.id)}
      >X</button>
    </li>
  );
}
