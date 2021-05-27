import React from 'react';

function TodosCount(props) {
  const { todolist } = props;
  return <span>Todos: {todolist.length}</span>;
}

export default TodosCount;
