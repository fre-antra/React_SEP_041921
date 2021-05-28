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
    <div className="contact">
      <CenterDiv>
        <p className="contact-section__intro">Contact</p>
        <i className="contact-section__subintro">
          "XXXXXXXXXXX"
          <br />
          -XXXXXXXXXXXX
        </i>
        <Container style={{width: "80%"}}>
          <Grid verticalAlign='middle' columns={2} centered>
            <Grid.Row>
              <Grid.Column width={6}>
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
              <Grid.Column width={6}>
                  <div className="mt-50"></div>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="First name *"
                        placeholder="First name"
                      />
                      <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        label="Last name *"
                        placeholder="Last name"
                      />
                    </Form.Group>

                    <Form.Input label="Email" placeholder="joe@schmoe.com" />

                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Message *"
                      placeholder="Message"
                    />
                  </Form>
                  <CenterDiv>
                  <div className="mt-60"></div>
                  <button className="btn__ghost-btn mb-50 ">
                    <a href="#">More Projects</a>
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
