import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <>
      <div className="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
              <div className="logo">
                <Link to="/">
                  <img src={logo} />
                </Link>
              </div>
            </div>

            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
