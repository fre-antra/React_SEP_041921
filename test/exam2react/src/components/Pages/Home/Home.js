import React from "react";
import "./Home.scss";
import { Container, Grid } from "semantic-ui-react";
import CenterDiv from "../../utils/CenterDiv";
import Navbar from "../../Navbar/Navbar";
import { Parallax } from "react-parallax";
import heroImage from "../../../images/heroimage.jpg";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-section__background">
          <Parallax
            blur={0}
            bgImage={heroImage}
            bgImageStyle={{ opacity: "0.9" }}
            bgImageAlt="the cat"
            strength={200}
          >
            <div className="dark-layer">
              <CenterDiv style={{ height: "100vh", width: "100%" }}>
                <p className="hero-section__intro">Hello I'm</p>
                <p className="hero-section__name">XXXX</p>
                <p className="hero-section__title">
                  UI Developer. UX Desinger. Problem Solver.
                </p>
                <div>
                  <button className="btn__ghost-btn">Info</button>
                  <button className="btn__ghost-btn">Portfolio</button>
                </div>
              </CenterDiv>
            </div>
          </Parallax>
        </div>
      </section>

      
      <h1>About Me</h1>
      <h1>Show ideas</h1>
      <h1>Project and Portfolio</h1>
      <h1>Contact</h1>
      <h1>Footer</h1>
    </div>
  );
};

export default Home;
