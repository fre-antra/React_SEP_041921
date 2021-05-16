import React, { Component } from 'react';
import Logo from '../Logo';
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <a href="#" >Dashboard</a>
          <a href="#" >TodoList</a>
        </nav>
      </div>
    );
  }
}
