import React from "react";
import "./Navbar.scss";
import logo from "../../images/logo.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";

const Navbar = () => {
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar">
            <img className="navbar__logo" alt="logo" src={logo} />
            <ul className="navbar__list">
              <li>
                <Link className="navbar__list-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navbar__list-item" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="navbar__list-item" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
