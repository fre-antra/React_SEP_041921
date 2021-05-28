
import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import { getAllTodos } from "../../apis/TodoApi";
import {Todo} from '../../model/Todo';
import {withTodos} from '../HOC/withTodos';

class TodoList extends React.Component {
  state = {
    inputText: ''
  };

  componentDidMount = () => {
    getAllTodos().then((data) => {
      this.setState({ todos: data });
    });
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  addTodo = (title) => {

    const newTodo = new Todo(title, this.state.todos.length + 1)

    this.setState({
        todos: [newTodo, ...this.state.todos]
    })
  };

  handleChangeInput = (event) => {
    this.setState({
        inputText: event.target.value
    })
  }

  handleKeyUpInput = (event) => {
    if (event.keyCode === 13) {
        //this.addTodo(this.state.inputText);
        const {handleAddState} = this.props;
        const newTodo = new Todo(this.state.inputText, this.state.todos.length + 1)
        handleAddState(newTodo);
        this.setState({
            inputText: ''
        })
    }
  }

  render() {
      const {todoData, handleRemoveState} = this.props;

    return (
      <div>
        <header className="todolist__header">Todo List</header>
        <input
          type="text"
          className="todolist__input"
          placeholder="Input here"
        //  data binding from view to model
          onChange={this.handleChangeInput}
          onKeyUp={this.handleKeyUpInput}
        //  data binding from model to view
          value={this.state.inputText}
        />
        <ul id="todolist-content">
          {todoData.map((todo) => {
            return (
              <TodoListItem
                key={todo.title+Math.random()*1234}
                todo={todo}
                deleteTodo={() => handleRemoveState(todo.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const NewTodoList = withTodos(TodoList);
export default NewTodoList;
