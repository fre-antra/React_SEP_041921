import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
//import '../Style/Style.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <Link to="/home">HOME</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
      </div>
    );
  }
}

export default Header;