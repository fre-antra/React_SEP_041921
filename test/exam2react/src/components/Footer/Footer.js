import React from "react";
import { Grid } from "semantic-ui-react";
import "./Footer.scss";
import CenterDiv from "../utils/CenterDiv";
import fbLogo from "../../images/facebook.svg";
import liLogo from "../../images/linkedin.svg";
import pinLogo from "../../images/pinterest.svg";
import emailLogo from "../../images/email.svg";

const Contact = () => {
  return (
    <div>
      <div className="footer-section">
        <CenterDiv>
          <div className="mt-50"></div>
          <Grid columns={8} centered>
            <Grid.Row>
              <Grid.Column>
                <img className="icon" src={fbLogo} alt="logo" />
              </Grid.Column>
              <Grid.Column>
                <img className="icon" src={liLogo} alt="logo" />
              </Grid.Column>
              <Grid.Column>
                <img className="icon" src={pinLogo} alt="logo" />
              </Grid.Column>
              <Grid.Column>
                <img className="icon" src={emailLogo} alt="logo" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2} centered>
              <Grid.Column>
                <p style={{ textAlign: "right" }}>Phone: XXXXXX</p>
              </Grid.Column>
              <Grid.Column>
                <p>Email: XXXXX@gmail.com</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered columns={5}>
              <Grid.Column>
                <div className="footer-section__list">
                  <a className="footer-section__list-header">XXXXXX</a>
                  <a href="#">Copyright © 2021</a>
                  <a href="#">NY</a>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="footer-section__list">
                  <a href="#home" className="footer-section__list-header">Home</a>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="footer-section__list">
                  <a href="#portfolio" className="footer-section__list-header">
                    Portfolio
                  </a>
                  <a href="#">Project 1</a>
                  <a href="#">Project 2</a>
                  <a href="#">Project 3</a>
                  <a href="#">See All</a>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="footer-section__list">
                  <a href="#portfolio" className="footer-section__list-header">
                    Resume
                  </a>
                  <a href="#home">Download</a>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="footer-section__list">
                  <a href="#contact" className="footer-section__list-header">
                    Contact
                  </a>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </CenterDiv>
      </div>
    </div>
  );
};

export default Contact;
