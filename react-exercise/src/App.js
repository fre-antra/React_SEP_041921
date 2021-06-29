import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import { data } from "./data";

function App() {
  const [headerColor, setHeaderColor] = useState("");

  let headerStyle = {
    color: headerColor,
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={headerStyle}>hello</h1>
        <div className="flex">
          {data.map(item => (
            <Card
              key={item.title}
              title={item.title}
              paragraph={item.paragraph}
              btnColor={item.color}
              setHeaderColor={setHeaderColor}
            ></Card>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
