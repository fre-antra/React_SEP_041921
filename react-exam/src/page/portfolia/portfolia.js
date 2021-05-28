import React, { useEffect, useState } from 'react';
import { Layout } from '../component/Layout/Layout';
import { Card } from './Card/Card';
export const Portf = (props) => {
  // const { id } = props;
  return (
    <>
      <div className='projects'>
        <div className='container-fluid'>
          <div className='projects-header'>
            <h1>Projects and Portfolio</h1>
          </div>

          <div className='projects-header-quote'>
            <h3>Sharing my endeavors and passions...</h3>
          </div>

          <div className='row'>
            <Card
              style={'luvtalk-project'}
              content={
                'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.'
              }
            />
            <Card
              style={'personal-website-project'}
              content={
                'Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.'
              }
            />
            <Card
              style={'strike-zone-project'}
              content={
                'Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.'
              }
            />
          </div>
          <div className='d-flex justify-content-center'>
            <div className='see-more-button'>
              <a className='btn btn-default btn-border' href='#'>
                More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
