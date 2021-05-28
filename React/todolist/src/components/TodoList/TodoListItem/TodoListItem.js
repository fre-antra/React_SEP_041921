import React from "react";


function TodoListItem(props) {
  const { todo, deleteTodo } = props;

  return (
    <li>
      <span>{todo.title}</span>
      <button className="btn-remove" id="" onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </li>
  );
}

export default TodoListItem;
