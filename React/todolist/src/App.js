import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import React from "react";

class App extends React.Component {
  state = {
    currentPage: "dashboard",
  };

  gotoPage = (name) => {
    this.setState({
        currentPage: name
    })
  }

  render() {
    let content;
    switch (this.state.currentPage) {
      case "todo":
        content = (
          <div>
            <header className="header">Welcome to Antra</header>
            <main className="content">
              <section className="todolist">
                <TodoList />
              </section>
            </main>
          </div>
        );
        break;
      case "dashboard":
        content = <Dashboard />;
        break;
      default:
        content = "";
    }
    return (
      <div>
        <Header gotoPage={this.gotoPage}/>
        {content}
      </div>
    );
  }
}

export default App;
