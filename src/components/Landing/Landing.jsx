import React from "react";
import "./Landing.css";
import { Link } from "react-scroll";
const Landing = () => {
  return (
    <div className="landingpagercontainer" id="home">
      <div className="landingflexwrap">
        <div className="landingheadertitle">
          <h1>Billi Nesit weight lose program</h1>
        </div>
        <div className="landingbuttons">
          <Link to="fotter" smooth={true} duration={1000} offset={-50}>
            {" "}
            <button>CONTACT</button>
          </Link>
          <Link to="aboutus" smooth={true} duration={1000} offset={-50}>
            {" "}
            <button>READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
