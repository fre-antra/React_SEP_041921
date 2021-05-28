import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Contact from './components/Contact/Contact'
import Hometop from './components/Hometop/Hometop'
import Portfolio from './components/Portfolio/Portfolio'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/home" render={() =>
            <>
              <Hometop />
              <Portfolio />
              <Contact />
            </>
          } />

          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
