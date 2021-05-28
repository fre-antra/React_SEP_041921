import "./App.css";
import "./bootstrap/css/bootstrap.min.css";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
function App() {
  const ref = useRef();
  console.log(ref.current);
  const targetref = ref.current;
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main targetref={targetref} />
            <Portfolio refprop={ref} />
            <Contact />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
