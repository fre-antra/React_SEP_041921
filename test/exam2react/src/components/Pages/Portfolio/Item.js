import React from "react";
import "./Portfolio.scss";
import CenterDiv from '../../utils/CenterDiv';

const Item = (props) => {
    console.log('in item 2');
    const {background, header, body } = props;
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + background + ")",
          height: "350px",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="dark-layer"
          style={{
            height: "350px",
            width: "100%",
          }}
        >
          <CenterDiv>
            <p className="portfolio-section__header">{header}</p>
            <div
              style={{ width: "90%", textAlign: "center" }}
              className="mb-50"
            >
              <p>
                {body}
              </p>
            </div>

            <button className="btn__ghost-btn mb-50">
              <a href="#">More</a>
            </button>
          </CenterDiv>
        </div>
      </div>
    </div>
  );
};

export default Item;
