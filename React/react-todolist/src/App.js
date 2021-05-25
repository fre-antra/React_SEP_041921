import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashborad from './components/Dashboard/Dashboard';
import { withTodos } from './hoc/withTodos';
import WidthTodoData from './components/WithTodosData/WithTodosData';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { MyRoute } from './MyRouter/MyRouter';

class App extends React.Component {
  state = {
    activePage: 'TodoList',
  };

  handleChangeActivePage = (newActivePage) => {
    this.setState({
      activePage: newActivePage,
    });
  };

  render() {
    let content = null;
    switch (this.state.activePage) {
      case 'Dashboard':
        content = (
          <WidthTodoData
            renderHeader={(headerTitle) => <header>{headerTitle}</header>}
            render={(removeTodo, addTodo, todolist) => (
              <Dashborad todolist={todolist}></Dashborad>
            )}
          ></WidthTodoData>
        );
        break;
      case 'TodoList':
        content = (
          <WidthTodoData>
            {(removeTodo, addTodo, todolist) => (
              <TodoList
                todolist={todolist}
                handleRemoveTodo={removeTodo}
                HandleAddTodo={addTodo}
              ></TodoList>
            )}
          </WidthTodoData>
        );
        break;
      default:
        break;
    }

    return (
      <BrowserRouter>
        <Layout handleChangeActivePage={this.handleChangeActivePage}>
          <MyRoute exact path="/todolist">
            <WidthTodoData>
              {(removeTodo, addTodo, todolist) => (
                <TodoList
                  todolist={todolist}
                  handleRemoveTodo={removeTodo}
                  HandleAddTodo={addTodo}
                ></TodoList>
              )}
            </WidthTodoData>
          </MyRoute>
          <MyRoute exact path="/dashboard">
            <WidthTodoData
              renderHeader={(headerTitle) => <header>{headerTitle}</header>}
              render={(removeTodo, addTodo, todolist) => (
                <Dashborad todolist={todolist}></Dashborad>
              )}
            ></WidthTodoData>
          </MyRoute>
          <MyRoute exact path="/home" component={Home}></MyRoute>
          <MyRoute exact path="/about" render={() => <About></About>}></MyRoute>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

function Home() {
  return <h1>HOME</h1>;
}

function About() {
  return <h1>About</h1>;
}
