import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';

const Navbar = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
