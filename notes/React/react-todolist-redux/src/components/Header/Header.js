import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import TodosCount from '../TodosCount/TodosCount';
import WithTodosData from '../WithTodosData/WithTodosData';

class Header extends React.Component {
  render() {
    const { handleChangeActivePage } = this.props;
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <a onClick={() => handleChangeActivePage('Dashboard')}>Dashboard</a>
          <a onClick={() => handleChangeActivePage('TodoList')}>TodoList</a>
        </nav>
        <WithTodosData>
          {(_, __, todolist) => <TodosCount todolist={todolist}></TodosCount>}
        </WithTodosData>
      </div>
    );
  }
}

export default Header;
