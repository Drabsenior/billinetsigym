import React from "react";
import "./Challenges.css";
import gymfeatureimage from "../../assets/images/gymfeaturesimage1.png";
import challengeicon from "../../assets/icons/challengericon.png";
import { Link as LinkNav } from "react-router-dom";
const Challenges = () => {
  return (
    <div className="flexchallengecontainer">
      <h2>challanges</h2>
      <div className="challengescontainer">
        <div className="leftchallengecontainer">
          <img src={gymfeatureimage} alt="" />
        </div>
        <div className="rightchallengecontainer">
          <img src={challengeicon} alt="" />
          <h2>30 Day challange</h2>
          <p>Contrary to popular in a piece of classical Latin literature.</p>
          <LinkNav to="/comingsoon">
            <button>Register</button>
          </LinkNav>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
