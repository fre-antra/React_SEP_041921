import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { Todo } from "../../model/Todo";

import { useTodos } from "../hooks/useTodos";

function TodoList() {
  const [inputText, setInputText] = useState("");
  const { todoList, handleAddTodo, handleDeleteTodo } = useTodos();

  //hook to dispatch fetching data action
  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);

  //assign this event handler to the child
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
  // handleRemove = (event) => {
  //   if (event.target.className == "btn-remove") {
  //     // console.log(event.target.id);
  //     const id = (event.target.id);

  //   }
  // };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  function handleInputKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      const userId = 1,
        title = inputText,
        completed = false;
      const newTodo = new Todo(userId, title, completed, 0);
      handleAddTodo(newTodo);
      setInputText("");
    }
  }

  return (
    <section className="todolist">
      <header className="todolist__header">
        <h4 className="heading">TodoList</h4>
      </header>
      <input
        type="text"
        className="todolist__input"
        placeholder="What are you going to do????"
        value={inputText}
        onChange={(e) => handleInputChange(e)}
        onKeyUp={(e) => handleInputKeyUp(e)}
      />
      <ul className="todolist__content">
        {todoList.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={handleDeleteTodo}
          ></TodoItem>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
