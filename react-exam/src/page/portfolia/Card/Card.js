import React from 'react';

export const Card = (props) => {
  const { style, content } = props;
  return (
    <>
      <div className='col-sm-4 col-md-4 text-center'>
        <div className={style}>
          <div className='card-content'>
            <h3>LUV TALK Website</h3>
            <p>{content}</p>
          </div>

          <div className='d-flex justify-content-center'>
            <div className='project-more-info'>
              <a className='btn btn-default btn-border' href='#'>
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
