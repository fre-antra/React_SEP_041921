import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../component/Layout/Layout';
import { Summary } from './component/Summary/Summary';
import { Portf } from '../../page/portfolia/portfolia';
import { Contact } from '../../page/contact/contact';
import develop from '../../assets/images/developerdesign.svg';
import response from '../../assets/images/responsivedesign.svg';
import innov from '../../assets/images/innovativesolutions.svg';
import passion from '../../assets/images/passion.svg';
export const Home = (props) => {
  return (
    <>
      <Layout>
        <div className='main'>
          <div className='d-flex justify-content-center'>
            <div className='entry-banner text-center'>
              <h1 id='hello'>Hello, I'm</h1>
              <h1 id='name'>XXXX</h1>
              <h1 id='person-description'>
                UI Developer. UX Desinger. Problem Solver.
              </h1>
            </div>
          </div>
          <div className='d-flex justify-content-center banner-buttons'>
            <a className='btn btn-default btn-border' href='#about'>
              Info
            </a>

            <a className='btn btn-default btn-border' href='#project'>
              Portfolio
            </a>
          </div>
        </div>

        <div className='about' id='about'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-12 col-md-12 text-center'>
                <div className='about-header'>
                  <h1>About Me</h1>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-md-12 text-center'>
                <div className='about-header-quote'>
                  <h3>Sharing a little bit of my story...</h3>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='about-general-description '>
                <div className='col-sm-8 col-md-8 '>
                  <h2>General Overview</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                  <h2>Statistics</h2>
                  <h5>
                    <em>And for those that don't fancy reading:</em>
                  </h5>
                  <br />
                  <p>Male, 200 years old.</p>
                  <p>Five feet 110 inches</p>
                  <p>Favorite fonts:Roboto </p>
                  <p>Loves to learn new things</p>
                </div>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <div className='about-option-buttons'>
                <a href='#contact' className='btn btn-default btn-black-border'>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='summary'>
          <div className='row'>
            <Summary
              icon={develop}
              title={'Development and Design'}
              content={`I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.`}
            />
            <Summary
              icon={response}
              title={'Responsive Layouts'}
              content={`Development and design isn't merely putting information on
              the site or preferred media outlet. I organize content and
              present information in an engaging fashion, driving new
              and unique layouts in tandem with novel solutions and cool
              animations.`}
            />
            <Summary
              icon={innov}
              title={'Ideas and Solutions'}
              content={`There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.`}
            />
            <Summary
              icon={passion}
              title={'Passion and Dedication'}
              content={`With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.`}
            />
          </div>
        </div>
        <div id='project'>
          <Portf />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        
      </Layout>
    </>
  );
};
