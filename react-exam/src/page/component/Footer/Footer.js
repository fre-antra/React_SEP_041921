import React from 'react';

import linkedin from '../../../assets/images/linkedin.svg';
import facebook from '../../../assets/images/facebook.svg';
import pinterest from '../../../assets/images/pinterest.svg';
import email from '../../../assets/images/email.svg';
export const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div className="facebook">
              <a href="#">
                <img className="img-responsive" src={facebook} />
              </a>
            </div>
            <div className="linkedin">
              <a href="#">
                <img className="img-responsive" src={linkedin} />
              </a>
            </div>
            <div className="pinterest">
              <a href="#">
                <img className="img-responsive" src={pinterest} />
              </a>
            </div>
            <div className="email-icon">
              <a href="#">
                <img className="img-responsive" src={email} />
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="personal-contact phone">
            <h4>Phone: XXXXXX</h4>
          </div>

          <div className="personal-contact email-personal-contact">
            <h4>Email: XXXXX@gmail.com</h4>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="company-information">
            <h3>XXXX</h3>
            <h4>Copyright © 2021</h4>
            <h4>NY</h4>
          </div>

          <div className="home-footer">
            <h4>
              <a href="#">Home</a>
            </h4>
          </div>

          <div className="portfolio-footer">
            <h4>
              <a href="#">Portfolio</a>
            </h4>
            <ul>
              <li>
                <a href="#">Project1</a>
              </li>
              <li>
                <a href="#">Project2</a>
              </li>
              <li>
                <a href="#">Project3</a>
              </li>
              <li>
                <a href="#">See All</a>
              </li>
            </ul>
          </div>

          <div className="resume-footer">
            <h4>
              <a href="#">Resume</a>
            </h4>
            <ul>
              <li>
                <a href="#">Download</a>
              </li>
            </ul>
          </div>

          <div className="contact-footer">
            <h4>
              <a href="#">Contact</a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
