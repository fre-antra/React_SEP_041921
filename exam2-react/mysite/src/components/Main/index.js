import React from "react";
import { Link } from "react-router-dom";

const Main = props => {
  const { targetRef } = props;

  const handleScroll = id => {
    if (typeof id == "object") {
      id.scrollIntoView({ behavior: "smooth", block: "center" }); //scroll to ref dom element from other component
    } else {
      const anchorAbout = document.querySelector(id);
      anchorAbout.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="entry-banner text-center">
              <h1 id="hello">Hello, I'm</h1>
              <h1 id="name">XXXX</h1>
              <h1 id="person-description">
                UI Developer. UX Desinger. Problem Solver.
              </h1>
            </div>
          </div>

          <div className="row text-center">
            <div className="banner-buttons">
              <div className="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                <Link
                  to="#"
                  className="btn btn-default btn-border"
                  onClick={() => handleScroll("#about")}
                >
                  Info
                </Link>
              </div>

              <div className="col-sm-1 col-md-1">
                <Link
                  // href="#projects" //this must to be used with <a> tag to work
                  to="#"
                  className="btn btn-default btn-border"
                  onClick={() => handleScroll(targetRef)}
                  // onClick={() => handleScroll(#projects)} // or this!!! didnt work during exam bc of typos, smh
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
