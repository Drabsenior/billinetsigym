import React from "react";
import "./Landing2.css";
import landing2image from "../../assets/images/landin2billi.png";
const Landing2 = () => {
  return (
    <div className="landing2conatiner">
      .
      <div className="leftlanding2">
        <h1>Healthy</h1>
        <h2>life with amazing body </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </p>
        <button>Loss Weight</button>
      </div>
      <div className="rightlanding2">
        <img src={landing2image} alt="" />
      </div>
    </div>
  );
};

export default Landing2;
