import React from "react";
import Searchbar from "../Searchbar";
import "./index.css";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <header>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/top-profiles">Top Profiles</Link>
      </div>
      <Searchbar />
    </header>
  );
};

export default Header;
