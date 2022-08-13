import React from "react";
import "./Trainers.css";
import facebook from "../../assets/icons/facebookgym.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twittergym.png";
import trainer1 from "../../assets/images/trainer1.png";
import trainer2 from "../../assets/images/trainer2.png";
import trainer3 from "../../assets/images/trainer3.png";
const Trainers = () => {
  return (
    <div className="trainerscomponentcontainer">
      <div className="trainerimagecontainer">
        <img src={trainer1} alt="" />
      </div>
      <div className="trainerdesc">
        <h2>Expert trainer</h2>
        <h1>Hugh Jackman</h1>
      </div>
      <div className="trainerssocial">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
};

export default Trainers;
