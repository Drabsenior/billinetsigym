import React, { useContext } from "react";
import "./Challenges.css";
import gymfeatureimage from "../../assets/images/gymfeaturesimage1.png";
import challengeicon from "../../assets/icons/challengericon.png";
import { Link as LinkNav } from "react-router-dom";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Challenges = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="flexchallengecontainer">
      <h2>{`${language === "english" ? "Challanges" : "ውድድሮች"}`}</h2>
      <div className="challengescontainer">
        <div className="leftchallengecontainer">
          <img src={gymfeatureimage} alt="" />
        </div>
        <div className="rightchallengecontainer">
          <img src={challengeicon} alt="" />
          <h2>{`${
            language === "english" ? "30 Day challange" : "የ 30 ቀን ቻሌንጅ"
          }`}</h2>
          <p>{`${
            language === "english"
              ? "Contrary to popular in a piece of classical Latin literature."
              : "ድፍዎ ውፈኦጅፍ ዎፍጃ ዎፍ ኢድፍጆውድ ዎፍጆድፍጅ ዎጅስፍድ ፎ ሶድጅፍውጅ ድስፎኦ ፍድስጅ"
          }`}</p>
          <LinkNav to="/comingsoon">
            <button>{`${
              language === "english" ? "Register" : "ይመዝገቡ"
            }`}</button>
          </LinkNav>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
