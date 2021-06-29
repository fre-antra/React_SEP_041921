import { useState } from "react";
import Card from "./components/card";
import { data } from "./data";

function App() {
  const [headerColor, setHeaderColor] = useState("");

  let headerStyle = {
    color: headerColor,
  };

  let layoutWrapper = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "grey",
    justifyContent: "center",
    width: "50%",
    margin: "auto",
  };

  const handleClick = e => {
    setHeaderColor(e.target.style.backgroundColor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={headerStyle}>hello</h1>
        <div style={layoutWrapper}>
          {data.map(item => (
            <Card
              key={item.title}
              title={item.title}
              paragraph={item.paragraph}
              btnColor={item.color}
              handleClick={handleClick}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
