import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './components/Layout/index';
// import Navbar from './components/Navbar';
import Home from './components/Home/index';
import Portfolio from './components/Portfolio/index';
import Contact from './components/Contact/index';
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Router>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Router>
        </Layout>
      </Fragment>
    )
  }
}

export default App;
