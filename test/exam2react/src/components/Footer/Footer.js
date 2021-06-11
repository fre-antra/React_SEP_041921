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
      <div className="footer-section">
        <CenterDiv>
          <div className="mt-50"></div>
          <Grid centered>
            <CenterDiv>
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={4} mobile={16}>
                    <img className="icon" src={fbLogo} alt="logo" data-testid="1" />
                  </Grid.Column>

                  <Grid.Column computer={4} mobile={16}>
                    <img className="icon" src={liLogo} alt="logo" data-testid="2" />
                  </Grid.Column>

                  <Grid.Column computer={4} mobile={16}>
                    <img className="icon" src={pinLogo} alt="logo" data-testid="3"/>
                  </Grid.Column>

                  <Grid.Column computer={4} mobile={16}>
                    <img className="icon" src={emailLogo} alt="logo" data-testid="4"/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </CenterDiv>

            <Grid.Row>
              <Grid centered>
                <Grid.Column computer={8} tablet={8} mobile={8}>
                  <p>Phone: XXXXXX</p>
                </Grid.Column>
                <Grid.Column computer={8} tablet={8} mobile={8}>
                  <p>Email: XXXXX@gmail.com</p>
                </Grid.Column>
              </Grid>
            </Grid.Row>

            <Grid.Row centered>
              <CenterDiv>
                <Grid  data-testid="grid">
                  <Grid.Column computer={3} mobile={16}>
                    <div className="footer-section__list">
                      <a className="footer-section__list-header">XXXXXX</a>
                      <a href="#">Copyright © 2021</a>
                      <a href="#">NY</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={3} mobile={16}>
                    <div className="footer-section__list">
                      <a href="#home" className="footer-section__list-header">
                        Home
                      </a>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={3} mobile={16}>
                    <div className="footer-section__list">
                      <a
                        href="#portfolio"
                        className="footer-section__list-header"
                      >
                        Portfolio
                      </a>
                      <a href="#">Project 1</a>
                      <a href="#">Project 2</a>
                      <a href="#">Project 3</a>
                      <a href="#">See All</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={3} mobile={16}>
                    <div className="footer-section__list">
                      <a
                        href="#portfolio"
                        className="footer-section__list-header"
                      >
                        Resume
                      </a>
                      <a href="#home">Download</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={3} mobile={16}>
                    <div className="footer-section__list">
                      <a
                        href="#contact"
                        className="footer-section__list-header"
                      >
                        Contact
                      </a>
                    </div>
                  </Grid.Column>
                </Grid>
              </CenterDiv>
            </Grid.Row>
          </Grid>
        </CenterDiv>
      </div>
  );
};

export default Contact;
