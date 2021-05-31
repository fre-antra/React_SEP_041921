import React from "react";
import "./Portfolio.scss";
import { Grid } from "semantic-ui-react";
import CenterDiv, { CenterDivXY } from "../../utils/CenterDiv";
import Item from "./Item";

// images
import background from "../../../images/luvtalklogo.png";
import mlbproject from "../../../images/mlbproject.png";

const items = [
  {
    backgroundImg: background,
    centerDiv: {
      header: "LUV TALK Website",
      body: "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.",
    },
  },

  {
    backgroundImg: mlbproject,
    centerDiv: {
      header: "Personal Website",
      body: "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.",
    },
  },

  {
    backgroundImg: mlbproject,
    centerDiv: {
      header: "Strike Zone Analysis",
      body: "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio ">
      <div className="pt-60"></div>
      <CenterDiv>
        <p className="portfolio-section__intro">Projects and Portfolio</p>

        <i className="portfolio-section__subintro mb-50">
          Sharing my endeavors and passions...
        </i>
        <div className="mb-50"></div>

        <Grid container columns={items.length}>
          {items.map((item) => {
            return (
              <Grid.Column>
                <Item
                  background={item.backgroundImg}
                  header={item.centerDiv.header}
                  body={item.centerDiv.body}
                ></Item>
              </Grid.Column>
            );
          })}
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
