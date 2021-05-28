import React from 'react';
import Header from '../Header/Header';
import './Layout.css';
import Footer from '../Footer/Footer'

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <header className="header">
          <Header ></Header>
        </header>
        <main className="content">{children}</main>
        <footer className="footer"><Footer></Footer></footer>
      </>
    );
  }
}
export default Layout;
