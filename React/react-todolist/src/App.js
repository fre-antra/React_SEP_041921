import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Dashborad from './components/Dashboard/Dashboard';
import { withTodos } from './hoc/withTodos';
import WidthTodoData from './components/WithTodosData/WithTodosData';
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
      <Layout handleChangeActivePage={this.handleChangeActivePage}>
        {content}
      </Layout>
    );
  }
}

export default App;
