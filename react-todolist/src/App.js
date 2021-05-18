import React from "react";
import './App.css';
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

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
    let content;
    switch (this.state.activePage) {
      case "Dashboard":
        content = <Dashboard></Dashboard>;
        break;
      case "TodoList":
        content = <TodoList></TodoList>;
        break;
      default:
        content = <h1>No content to display</h1>;
        break;
    }

    return (
      <Layout handleChangeActivePage={this.handleChangeActivePage}>
        {content}

      </Layout>
    );
  }

}

export default App;
