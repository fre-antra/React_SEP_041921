import React from "react";
import { Parallax } from "react-parallax";

const MyParallax = (props) => {
    return (
        <Parallax
            blur={0}
            bgImage={props.bgImage}
            bgImageStyle={{ opacity: "0.9" }}
            bgImageAlt="the cat"
            strength={200}
          >
            {props.children}
          </Parallax>
    )
}

export default MyParallax;