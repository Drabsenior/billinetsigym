import React from "react";
import "./About.css";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div className="aboutpagecontainer">
      <div className="aboutflexwrap">
        <div className="leftsideaboutimagecontainer">
          <img className="image1contain" src={image1} alt="" />
          <img className="image2contain" src={image2} alt="" />
        </div>
        <div className="rightsideaboutdesecription">
          <h1>About us</h1>
          <h2>Hey am Bili</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="aboutbutton1">
            <Link to="features" smooth={true} duration={1000} offset={-180}>
              {" "}
              <button>READ MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
