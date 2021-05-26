import React from "react";
import { Todo } from "../../../model/Todo";
import "./TodoItem.css";
import { removeTodo } from "../../../slices/todoSlice";

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
}
export default function TodoItem(props: TodoItemProps) {
  const { todo, removeTodo } = props;
  return (
    <li className="todolist__content-item">
      <span>{todo.title}</span>
      <button
        id={todo.id + ""}
        className="btn-remove"
        onClick={() => removeTodo(todo.id)}
      >
        X
      </button>
    </li>
  );
}
