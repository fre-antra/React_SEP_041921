import React from "react";
import Searchbar from "../Searchbar";
import "./index.css";
const Header = props => {
  const { searchInput, handleInput } = props;
  return (
    <header>
      <Searchbar />
    </header>
  );
};

export default Header;
