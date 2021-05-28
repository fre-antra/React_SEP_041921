import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import { useLocation } from 'react-router';
import { Home } from './page/home/home';
import { Contact } from './page/contact/contact';
import { Portf } from './page/portfolia/portfolia';
import { Layout } from './page/component/Layout/Layout';

import './styles/index.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='/home'
          exact
          component={(routeProps) => <Home {...routeProps} />}
        />
        <Route
          path='/contact'
          component={(routeProps) => (
            <Layout>
              <Contact {...routeProps} />
            </Layout>
          )}
        />
        <Route
          path='/portf'
          component={(routeProps) => (
            <Layout>
              <Portf {...routeProps} />
            </Layout>
          )}
        />

        <Redirect to='/home' />
      </Switch>
    </Router>
  );
};

export default App;
