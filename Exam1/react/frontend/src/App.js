import "./App.css";
import "./css/mainContent.css";
import "./css/navbar.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
function App() {
    return (
        <div className="App">
            <NavBar />
            <MainContent />
        </div>
    );
}

export default App;
