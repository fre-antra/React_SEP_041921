import React, { Component, useState, useEffect } from 'react';
import TodoItem from "./TodoItem";
import "./TodoList.css";
// import { getAllTodos, deleteTodo, addTodo } from '../../API/todoAPI';
import { Todo } from '../../model/Todo';
// import { withTodos } from '../../HOC/withTodos';

import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList, fetchTodos, addNewTodo, removeTodo } from '../../slices/todoSlice';


function TodoList(props) {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  //hook to dispatch fetching data action
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


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

  function handleInputChange(event) {
    setInputText(event.target.value);
  };

  function handleInputKeyUp(event) {
    if (event.key === "Enter") {
      const userId = 1, title = inputText, completed = false;
      const newTodo = new Todo(userId, title, completed);
      dispatch(addNewTodo(newTodo));
      // this.setState({ inputText: "" });
      setInputText("");
    }
  };


  const { handleDeleteTodo } = props;
  const todoList = useSelector(selectTodoList);

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
        onChange={handleInputChange}
        onKeyUp={handleInputKeyUp}
      />
      <ul className="todolist__content"
      >
        {todoList.map((todo) =>
          <TodoItem key={todo.id} todo={todo}
            removeTodo={() => dispatch(removeTodo(todo.id))}
          // removeTodo={this.handleRemoveTodo}
          ></TodoItem>
        )}
      </ul>
    </section>
  );

}

export default (TodoList);
