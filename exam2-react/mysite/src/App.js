import "./App.css";
import "./bootstrap/css/bootstrap.min.css";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const ref = useRef();

  const [domState, setDOMState] = useState(); //state hold ref to dom element to be passed as props
  const setTargetRef = reference => {
    setDOMState(reference);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main targetRef={domState} />
            <Portfolio refProp={ref} setTargetRef={setTargetRef} />
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
