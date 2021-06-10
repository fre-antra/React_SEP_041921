import React from "react";
import "./Portfolio.scss";
import { Grid } from "semantic-ui-react";
import CenterDiv from "../../utils/CenterDiv";
import MarginDiv from "../../utils/MarginDiv";
import Item from "./Item";

// images
import background from "../../../images/luvtalklogo.png";
import peronalWeb from "../../../images/logo.svg";
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
    backgroundImg: peronalWeb,
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
    <div className="portfolio mb-60">
      <div className="pt-60"></div>
      <CenterDiv>
        <p className="portfolio-section__intro">Projects and Portfolio</p>

        <i className="portfolio-section__subintro mb-50">
          Sharing my endeavors and passions...
        </i>
        <MarginDiv className="mb-50" />

        <Grid container columns={items.length}>
          {items.map((item) => {
            return (
              <Grid.Column computer={5} tablet={8} mobile={16}>
                <Item
                  background={item.backgroundImg}
                  header={item.centerDiv.header}
                  body={item.centerDiv.body}
                ></Item>
              </Grid.Column>
            );
          })}
        </Grid>
        <MarginDiv className="mt-60" />
        
        <button className="btn__ghost-btn mb-50 ">
          <a href="#">More Projects</a>
        </button>
      </CenterDiv>
    </div>
  );
};

export default Portfolio;
