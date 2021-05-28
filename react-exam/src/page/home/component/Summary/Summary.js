import React from 'react';
export const Summary = (props) => {
  const { icon, title, content } = props;
  return (
    <>
      <div className="col-sm-6 col-md-6">
        <div className="d-flex">
          <div>
            <img className='img-summary' src={icon}></img>
          </div>
          <div>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};
