import React from "react";
import "./Portfolio.scss";

const Item = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + props.background + ")",
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
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default Item;