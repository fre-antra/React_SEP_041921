import React, { useState } from "react";
import Header from "./components/Header";
import SearchGallery from "./components/SearchGallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopProfiles from "./components/TopProfiles";
//practice using contextAPI

export const MyContext = React.createContext();

function App() {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = input => {
    setSearchInput(input);
  };

  return (
    <Router>
      <div className="App">
        <MyContext.Provider value={{ searchInput, handleSearchInput }}>
          <Header />

          <Switch>
            <Route path="/" exact>
              <SearchGallery />
            </Route>
            <Route path="/top-profiles" exact>
              <TopProfiles />
            </Route>
          </Switch>
        </MyContext.Provider>
      </div>
    </Router>
  );
}
export default App;
