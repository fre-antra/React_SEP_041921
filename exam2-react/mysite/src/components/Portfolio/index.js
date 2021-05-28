import { useEffect } from "react";
import $ from "jquery";
const Portfolio = () => {
  useEffect(() => {
    projects();
  }, []);

  function projects() {
    $(".luvtalk-project").css("height", $(".luvtalk-project").width());
    $(".luvtalk-project h3").css(
      "padding-top",
      ($(".luvtalk-project").height() -
        $(".luvtalk-project h3").height() -
        $(".luvtalk-project .row").outerHeight()) /
        2
    );
    $(".personal-website-project").css(
      "height",
      $(".personal-website-project").width()
    );
    $(".personal-website-project h3").css(
      "padding-top",
      ($(".personal-website-project").height() -
        $(".personal-website-project h3").height() -
        $(".personal-website-project .row").outerHeight()) /
        2
    );
    $(".strike-zone-project").css("height", $(".strike-zone-project").width());
    $(".strike-zone-project h3").css(
      "padding-top",
      ($(".strike-zone-project").height() -
        $(".strike-zone-project h3").height() -
        $(".strike-zone-project .row").outerHeight()) /
        2
    );

    // projects();
    var doit;
    $(window).resize(function () {
      clearTimeout(doit);
      doit = setTimeout(projects, 500);
    });
  }

  return (
    <div class="projects">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12 text-center">
            <div class="projects-header">
              <h1>Projects and Portfolio</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-12 text-center">
            <div class="projects-header-quote">
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 col-md-4 text-center">
            <div class="luvtalk-project">
              <h3>LUV TALK Website</h3>
              <p>
                Website, created during my first internship, which utilized
                HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.{" "}
              </p>
              <div class="row">
                <div class="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                  <div class="project-more-info">
                    <a class="btn btn-default btn-border" href="#">
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-md-4 text-center">
            <div class="personal-website-project">
              <h3>Personal Website</h3>
              <p>
                Enjoyable side project that was created to experiment with more
                HTML and CSS, but also provided an outlet to showcase my
                abilities and interests.
              </p>
              <div class="row">
                <div class="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                  <div class="project-more-info">
                    <a class="btn btn-default btn-border" href="#">
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-md-4 text-center">
            <div class="strike-zone-project">
              <h3>Strike Zone Analysis</h3>
              <p>
                Data analytics project completed during my time at the Illinois
                Math and Science Academy which studied the baseball strike zone
                based on the state of the game.
              </p>
              <div class="row">
                <div class="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                  <div class="project-more-info">
                    <a class="btn btn-default btn-border" href="#">
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
            <div class="see-more-button">
              <a class="btn btn-default btn-border" href="#">
                More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
