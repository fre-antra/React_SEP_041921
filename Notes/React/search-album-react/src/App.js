import React, { useState } from "react";
import Header from "./components/Header";
import SearchGallery from "./components/SearchGallery";

//practice using contextAPI

export const MyContext = React.createContext();

function App() {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = input => {
    setSearchInput(input);
  };

  return (
    <div className="App">
      <MyContext.Provider value={{ searchInput, handleSearchInput }}>
        <Header />
        <SearchGallery />
      </MyContext.Provider>
    </div>
  );
}
export default App;
