import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Main from "./Components/Main/main";
import About from "./Components/About/about";
import Summary from "./Components/Summary/summary";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Summary />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
