import React from 'react';
import "./TodoItem.css";

export default function TodoItem(props) {
  const { todo } = props;
  return (
    <li className="todolist__content-item">
      <span>{todo.title}</span>
      <button className="btn-remove">X</button>
    </li>
  );
}
