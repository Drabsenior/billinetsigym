import React from "react";
import "./Aboutus.css";
import billipic from "../../assets/images/billipic.png";
const Aboutus = () => {
  return (
    <div className="aboutus2container">
      <div className="leftcontainerabout2">
        <img src={billipic} alt="" />
      </div>
      <div className="rightcontinerabout2">
        <h1>ABOUT US</h1>
        <span>Hey am Bili</span>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          I
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
