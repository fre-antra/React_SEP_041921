import './App.css';
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Layout>
      {/*<TodoList></TodoList> */}
      <Dashboard></Dashboard>
    </Layout>
  );
}

export default App;
