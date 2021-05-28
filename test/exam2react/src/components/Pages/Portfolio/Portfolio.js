import React from "react";
import "./Portfolio.scss";
import { Grid } from "semantic-ui-react";
import CenterDiv, { CenterDivXY } from "../../utils/CenterDiv";
import Item from "./Item";

// images
import background from "../../../images/luvtalklogo.png";
//import mlbproject from "../../../images/mlbproject.png";
import mlbproject from "../../../images/mlbproject.png";

const Portfolio = () => {
  console.log(background);
  return (
    <div className="portfolio ">
      <div className="pt-60"></div>
      <CenterDiv>
        <p className="portfolio-section__intro">Projects and Portfolio</p>

        <i className="portfolio-section__subintro mb-50">
          Sharing my endeavors and passions...
        </i>
        <div className="mb-50"></div>

        <Grid container columns={3}>
          <Grid.Column>
            <div>
              <div
                style={{
                  backgroundImage: "url(" + background + ")",
                  height: "350px",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div
                  className="dark-layer"
                  style={{
                    height: "350px",
                    width: "100%",
                  }}
                >
                  <CenterDiv>
                    <p className="portfolio-section__header">
                      LUV TALK Website
                    </p>
                    <div
                      style={{ width: "90%", textAlign: "center" }}
                      className="mb-50"
                    >
                      <p>
                        Website, created during my first internship, which
                        utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and
                        Wordpress.
                      </p>
                    </div>

                    <button className="btn__ghost-btn mb-50">
                      <a href="#">More</a>
                    </button>
                  </CenterDiv>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Item background={mlbproject}>
              <CenterDiv>
                <p className="portfolio-section__header">Personal Website</p>
                <div
                  style={{ width: "90%", textAlign: "center" }}
                  className="mb-50"
                >
                  <p>
                    Enjoyable side project that was created to experiment with
                    more HTML and CSS, but also provided an outlet to showcase
                    my abilities and interests.
                  </p>
                </div>

                <button className="btn__ghost-btn mb-50">
                  <a href="#">More</a>
                </button>
              </CenterDiv>
            </Item>
          </Grid.Column>
          <Grid.Column>
            <Item background={mlbproject}>
              <CenterDiv>
                <p className="portfolio-section__header">
                  Strike Zone Analysis
                </p>
                <div
                  style={{ width: "90%", textAlign: "center" }}
                  className="mb-50"
                >
                  <p>
                    Data analytics project completed during my time at the
                    Illinois Math and Science Academy which studied the baseball
                    strike zone based on the state of the game.
                  </p>
                </div>

                <button className="btn__ghost-btn mb-50">
                  <a href="#">More</a>
                </button>
              </CenterDiv>
            </Item>
          </Grid.Column>
        </Grid>
        <div className="mt-60"></div>
        <button className="btn__ghost-btn mb-50 ">
          <a href="#">More Projects</a>
        </button>
      </CenterDiv>
    </div>
  );
};

export default Portfolio;
