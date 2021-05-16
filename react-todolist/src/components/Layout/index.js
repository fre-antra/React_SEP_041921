import React, { Component } from 'react';
import Header from '../Header';
import "./layout.css";

export default class Layout extends Component {
  render() {
    const { children, handleChangeActivePage } = this.props;
    return (
      <>
        <header className="header">
          <Header handleChangeActivePage={handleChangeActivePage}></Header>
        </header>
        <main className="content">
          {children}
        </main>
      </>
    );
  }
}
