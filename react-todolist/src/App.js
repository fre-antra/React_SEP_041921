import React from "react";
import './App.css';
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  state = {
    activePage: "TodoList"
  };

  handleChangeActivePage = (activePage) => {
    this.setState({
      activePage: activePage
    });
  };

  render() {
    // let content;
    // switch (this.state.activePage) {
    //   case "Dashboard":
    //     content = <Dashboard></Dashboard>;
    //     break;
    //   case "TodoList":
    //     content = <TodoList></TodoList>;
    //     break;
    //   default:
    //     content = <h1>No content to display</h1>;
    //     break;
    // }

    return (
      <Layout handleChangeActivePage={this.handleChangeActivePage}>
        <Switch>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/todolist">
            <TodoList></TodoList>
          </Route>
        </Switch>

      </Layout>
    );
  }

}

export default App;
