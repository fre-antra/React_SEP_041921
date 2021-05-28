import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "../Dashboard/Dashboard";
import Todo from "../TodoList/TodoList";
import {MyRoute, MyLink} from "./MyRouter"; 

export default function App() {
  return (
    //<Router>
    //  <div>
    //    <nav>
    //      <ul>
    //        <li>
    //          <Link to="/">Home</Link>
    //        </li>
    //        <li>
    //          <Link to="/about">About</Link>
    //        </li>
    //        <li>
    //          <Link to="/users">Users</Link>
    //        </li>
    //        <li>
    //          <Link to="/reboot">Reboot</Link>
    //        </li>
    //      </ul>
    //    </nav>

    //    {/* A <Switch> looks through its children <Route>s and
    //        renders the first one that matches the current URL. */}
    //    <Switch>
    //      <Route path="/about">
    //        <About />
    //      </Route>
    //      <Route path="/users">
    //        <Users />
    //      </Route>

    //      <Route path="/" exact>
    //        <Home />
    //      </Route>
    //      <Route path="/reboot">
    //        <Reboot />
    //      </Route>
    //    </Switch>
    //  </div>
    //</Router>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <MyLink to="/dashboard">dashboard</MyLink>
            </li>
            <li>
              <MyLink to="/todo">Todo</MyLink>
            </li>
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
          </ul>
        </nav>

        <MyRoute path="/dashboard" exact>
          <DashBoard title="dashboard" />
        </MyRoute>
        <MyRoute path="/todo">
          <Todo />
        </MyRoute>
        <MyRoute path="/" exact component={Home2} 
            render={() => <Home3 title="home3"></Home3>}
        >
          <Home title="home"></Home>
        </MyRoute>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Home2() {
  return <h2>Home2</h2>;
}

function Home3() {
    return <h2>Home3</h2>;
  }
