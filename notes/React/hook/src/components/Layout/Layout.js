import React from 'react';
import Header from '../Header/Header';
import './Layout.css';

class Layout extends React.Component {
  render() {
    const { children, handleChangeActivePage } = this.props;
    return (
      <>
        <header className="header">
          <Header handleChangeActivePage={handleChangeActivePage}></Header>
        </header>
        <main className="content">{children}</main>
      </>
    );
  }
}
export default Layout;
