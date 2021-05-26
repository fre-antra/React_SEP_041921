import React, { Component } from 'react';
import Logo from '../Logo';
import "./Header.css";
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    const { handleChangeActivePage } = this.props;
    // <a onClick={() => handleChangeActivePage("Dashboard")} href="#" >Dashboard</a>
    //       <a onClick={() => handleChangeActivePage("TodoList")} href="#" >TodoList</a>
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <Link to="dashboard">Dashboard</Link>
          <Link to="todolist">TodoList</Link>
        </nav>
      </div>
    );
  }
}
