import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import TodosCount from '../TodosCount/TodosCount';
import WithTodosData from '../WithTodosData/WithTodosData';

class Header extends React.Component {
  render() {
    const { handleChangeActivePage } = this.props;    
    // line 19 this will not triger re-render, 19行的todolist数据 是单独的，不会测到WithTodosData里面的数据改变
    // 需要redux上场了哈哈
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
