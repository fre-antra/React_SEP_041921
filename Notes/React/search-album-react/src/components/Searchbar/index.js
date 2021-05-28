import React, { useContext } from "react";
import { MyContext } from "../../App";
import "./index.css";

const Searchbar = props => {
  const { handleSearchInput } = useContext(MyContext);
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      let input = event.target.value;
      handleSearchInput(input);
      event.target.value = "";
    }
  };
  return (
    <div className="searchbar__wrapper">
      <i className="fas fa-search"></i>
      <input
        type="text"
        id="searchbar__input"
        role="searchbar"
        className="searchbar"
        placeholder="Search..."
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
};

export default Searchbar;
