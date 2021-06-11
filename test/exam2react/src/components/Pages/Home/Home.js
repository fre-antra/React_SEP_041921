import React from "react";
import "./Home.scss";
import { Container, Grid } from "semantic-ui-react";
import CenterDiv from "../../utils/CenterDiv";
import { CenterDivRow, CenterDivColumnRow } from "../../utils/CenterDiv";
import MyParallax from "../../utils/MyParallax";
import heroImage from "../../../images/heroimage.jpg";
import aboutMeImage from "../../../images/aboutme.jpg";
import responsiveImage from "../../../images/architecture-2178604_1920-main1.jpg";
import responsiveImage1 from "../../../images/developerdesign.png";

import responsiveImage2 from "../../../images/responsivedesign.png";
import responsiveImage3 from "../../../images/innovativesolutions.png";
import responsiveImage4 from "../../../images/passion.png";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div id="home">
      <section className="hero-section">
        <div className="hero-section__background">
          <MyParallax bgImage={heroImage}>
            <div className="dark-layer text-center">
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
        <MyParallax bgImage={aboutMeImage} alt="aboutMe">
          <div className="white-layer">
            <CenterDiv>
              <p className="aboutme-section__intro">About me</p>

              <i className="aboutme-section__subintro">
                Sharing a little bit of my story...
              </i>
            </CenterDiv>

            <Container className="pl-60 pr-60">
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

      <section className="responsive-section" alt="responsive">
        <MyParallax bgImage={responsiveImage} style={{ color: "red" }}>
          <CenterDivColumnRow
            className=" pl-50 pr-50 pt-60 pb-60 "
            style={{
              backgroundColor: "black",
              opacity: 0.8,
              minHeight: "600px",
            }}
          >
            <Grid centered>
              <Grid.Row>
                <Grid.Column computer={7} tablet={8} mobile={16}>
                  <CenterDivColumnRow>
                    <Grid>
                      <Grid.Column computer={3} tablet={6} mobile={16}>
                        <img
                          className="responsive-section__image"
                          src={responsiveImage1}
                        />
                      </Grid.Column>

                      <Grid.Column computer={10} tablet={10} mobile={16}>
                        <div>
                          <p className="responsive-section__header-text">
                            Development and Design
                          </p>
                          <p className="responsive-section__body-text">
                            I aim to put my creativity to the test, designing
                            and building unique, meaningful products for clients
                            or merely for my own interests.
                          </p>
                        </div>
                      </Grid.Column>
                    </Grid>
                  </CenterDivColumnRow>
                </Grid.Column>

                <Grid.Column computer={7} tablet={8} mobile={16}>
                  <CenterDivColumnRow>
                    <Grid>
                      <Grid.Column computer={3} tablet={6} mobile={16}>
                        <img
                          className="responsive-section__image"
                          src={responsiveImage2}
                        />
                      </Grid.Column>

                      <Grid.Column computer={10} tablet={10} mobile={16}>
                        <div>
                          <p className="responsive-section__header-text">
                            Responsive Layouts
                          </p>
                          <p className="responsive-section__body-text">
                            Development and design isn't merely putting
                            information on the site or preferred media outlet. I
                            organize content and present information in an
                            engaging fashion, driving new and unique layouts in
                            tandem with novel solutions and cool animations.
                          </p>
                        </div>
                      </Grid.Column>
                    </Grid>
                  </CenterDivColumnRow>
                </Grid.Column>
              </Grid.Row>
              <div className="mb-50"></div>
              <Grid.Row>
                <Grid.Column computer={7} tablet={8} mobile={16}>
                  <CenterDivColumnRow>
                    <Grid>
                      <Grid.Column computer={3} tablet={6} mobile={16}>
                        <img
                          className="responsive-section__image"
                          src={responsiveImage3}
                        />
                      </Grid.Column>

                      <Grid.Column computer={10} tablet={10} mobile={16}>
                        <div>
                          <p className="responsive-section__header-text">
                            Ideas and Solutions
                          </p>
                          <p className="responsive-section__body-text">
                            There are still many problems that exist in today's
                            society, including laziness. Luckily, I hope to
                            combat these issues by innovating, developing
                            easy-to-use programs, solutions, or products.
                          </p>
                        </div>
                      </Grid.Column>
                    </Grid>
                  </CenterDivColumnRow>
                </Grid.Column>

                <Grid.Column computer={7} tablet={8} mobile={16}>
                  <CenterDivColumnRow>
                    <Grid>
                      <Grid.Column computer={3} tablet={6} mobile={16}>
                        <img
                          className="responsive-section__image"
                          src={responsiveImage4}
                        />
                      </Grid.Column>

                      <Grid.Column computer={10} tablet={10} mobile={16}>
                        <div>
                          <p className="responsive-section__header-text">
                            Passion and Dedication
                          </p>
                          <p className="responsive-section__body-text">
                            With my profound interest and commitment to my field
                            of study, my projects rarely go unfinished and my
                            problems are never left unresolved.
                          </p>
                        </div>
                      </Grid.Column>
                    </Grid>
                  </CenterDivColumnRow>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </CenterDivColumnRow>
        </MyParallax>
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
