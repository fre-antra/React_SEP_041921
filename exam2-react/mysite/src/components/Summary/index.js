import React from "react";
import developerDesign from "../../images/developerdesign.svg";
import responsiveDesign from "../../images/responsivedesign.svg";
import passion from "../../images/passion.svg";
import innovativesolutions from "../../images/innovativesolutions.svg";

const Summary = () => {
  return (
    <div className="summary">
      <div className="container-fluid">
        <div className="row">
          <div className="development-summary">
            <div className="col-sm-1 col-md-1">
              <div className="development-img">
                <img className="img-responsive" src={developerDesign} />
              </div>
            </div>

            <div className="col-sm-4 col-md-4">
              <div className="development-description">
                <h3>Development and Design</h3>
                <p>
                  I aim to put my creativity to the test, designing and building
                  unique, meaningful products for clients or merely for my own
                  interests.
                </p>
              </div>
            </div>
          </div>

          <div className="responsive-summary">
            <div className="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
              <div className="responsive-img">
                <img className="img-responsive" src={responsiveDesign} />
              </div>
            </div>

            <div className="col-sm-4 col-md-4">
              <div className="responsive-description">
                <h3>Responsive Layouts</h3>
                <p>
                  Development and design isn't merely putting information on the
                  site or preferred media outlet. I organize content and present
                  information in an engaging fashion, driving new and unique
                  layouts in tandem with novel solutions and cool animations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="ideas-summary">
            <div className="col-sm-1 col-md-1">
              <div className="idea-img">
                <img className="img-responsive" src={innovativesolutions} />
              </div>
            </div>

            <div className="col-sm-4 col-md-4">
              <div className="idea-description">
                <h3>Ideas and Solutions</h3>
                <p>
                  There are still many problems that exist in today's society,
                  including laziness. Luckily, I hope to combat these issues by
                  innovating, developing easy-to-use programs, solutions, or
                  products.
                </p>
              </div>
            </div>
          </div>

          <div className="passion-summary">
            <div className="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
              <img className="img-responsive" src={passion} />
            </div>

            <div className="col-sm-4 col-md-4">
              <div className="passion-description">
                <h3>Passion and Dedication</h3>
                <p>
                  With my profound interest and commitment to my field of study,
                  my projects rarely go unfinished and my problems are never
                  left unresolved.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
