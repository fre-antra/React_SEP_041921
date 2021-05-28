import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class = "navigation">
        <div class = "container-fluid">
            <div class = "row">
                <div class = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                    <div class = "logo">
                    <Link to="/"><img src = {logo} alt="img"></img></Link>
                    </div>
                </div>

                <div class = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                    <div class = "primary-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
