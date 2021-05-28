import React from "react";
import "./Home.scss";
import { Container, Grid } from "semantic-ui-react";
import CenterDiv from "../../utils/CenterDiv";
import MyParallax from "../../utils/MyParallax";
import heroImage from "../../../images/heroimage.jpg";
import aboutMeImage from "../../../images/aboutme.jpg";
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div id="home">
      <section className="hero-section">
        <div className="hero-section__background">
          <MyParallax bgImage={heroImage}>
            <div className="dark-layer">
              <CenterDiv style={{ height: "100vh", width: "100%" }}>
                <p className="hero-section__intro">Hello I'm</p>
                <p className="hero-section__name">XXXX</p>
                <p className="hero-section__jobtitle">
                  UI Developer. UX Desinger. Problem Solver.
                </p>
                <div>
                  <button className="btn__ghost-btn">Info</button>
                  <button className="btn__ghost-btn">Portfolio</button>
                </div>
              </CenterDiv>
            </div>
          </MyParallax>
        </div>
      </section>

      <section className="aboutme-section">
        <MyParallax bgImage={aboutMeImage}>
          <div className="white-layer">
            <CenterDiv>
              <p className="aboutme-section__intro">About me</p>

              <i className="aboutme-section__subintro">
                Sharing a little bit of my story...
              </i>
            </CenterDiv>

            <Container style={{ width: "50%" }}>
              <p className="aboutme-section__header">General Overview</p>

              <p className="aboutme-section__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>

              <p className="aboutme-section__header">Statistics</p>

              <i className="aboutme-section__text">
                And for those that don't fancy reading:
              </i>

              <p className="aboutme-section__text">
                Male, 200 years old. <br />
                Five feet 110 inches <br />
                Favorite fonts:Roboto <br />
                Loves to learn new things
              </p>

              <CenterDiv>
                <button className="btn__ghost-btn--black mb-50">
                  <a href="#contact">Contact</a>
                </button>
                <div className="mb-50"></div>
              </CenterDiv>
            </Container>
          </div>
        </MyParallax>
      </section>
      <section id="portfolio">
          <Portfolio />
      </section>
      <section id="contact">
          <Contact />
      </section>
      {/*<h1>Footer</h1>*/}
    </div>
  );
};

export default Home;
