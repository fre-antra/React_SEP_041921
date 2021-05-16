import React, { Component } from 'react';
import Logo from '../Logo';
import "./Header.css";
export default class Header extends Component {
  render() {
    const { handleChangeActivePage } = this.props;
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <a onClick={() => handleChangeActivePage("Dashboard")} href="#" >Dashboard</a>
          <a onClick={() => handleChangeActivePage("TodoList")} href="#" >TodoList</a>
        </nav>
      </div>
    );
  }
}
