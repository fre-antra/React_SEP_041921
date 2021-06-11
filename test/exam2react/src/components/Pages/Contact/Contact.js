import React from "react";
import "./Contact.scss";
import CenterDiv from "../../utils/CenterDiv";
import {
  Container,
  Grid,
  Form,
  Input,
  TextArea,
  Button,
  Select,
} from "semantic-ui-react";
const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const Contact = () => {
  return (
    <div className="contact pl-60 pr-60">
      <CenterDiv>
        <p className="contact-section__intro text-center" data-testid="contact-header">Contact</p>
        <i className="contact-section__subintro text-center">
          "XXXXXXXXXXX"
          <br />
          -XXXXXXXXXXXX
        </i>
        <Container style={{ width: "80%" }} className="pr-60 pl-60">
          <Grid verticalAlign="middle" columns={2} centered>
            <Grid.Row>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <p className="contact-section__header">Reaching out to me</p>
                <p>
                  Don't be afraid to contact me! I'm happy to answer any
                  questions, provide more information, or just have a nice
                  conversation! Fill out the form below to being reaching out to
                  me. If you prefer another email client other than your
                  default, which will appear after clicking the button and have
                  all of the information you just entered, you can email me at
                  XXXXX.
                </p>

                <p className="contact-section__header">Contact Information</p>
                <p>
                  XXXX <br /> XXXX <br /> (XXXX)-445-7747 <br />{" "}
                  XXXXXX@gmail.com
                </p>
              </Grid.Column>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <div className="mt-50"></div>
                <form>
                    <Grid>
                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            <p className="contact-section__form-title">First Name *</p>
                            <input className="contact-section__form-input" />
                        </Grid.Column>

                        <Grid.Column computer={8} tablet={8} mobile={16}>
                        <p className="contact-section__form-title">Last Name *</p>
                            <input className="contact-section__form-input" />
                        </Grid.Column>

                        <Grid.Column computer={16} tablet={16} mobile={16}>
                        <p className="contact-section__form-title">Email *</p>
                            <input className="contact-section__form-input" />
                        </Grid.Column>

                        <Grid.Column computer={16} tablet={16} mobile={16}>
                        <p className="contact-section__form-title">Message *</p>
                            <input className="contact-section__form-input" />
                        </Grid.Column>
                    </Grid>
                </form>
                <CenterDiv>
                  <div className="mt-60"></div>
                  <button className="btn__ghost-btn mb-50 ">
                    <a href="#">Submit</a>
                  </button>
                </CenterDiv>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </CenterDiv>
    </div>
  );
};

export default Contact;
