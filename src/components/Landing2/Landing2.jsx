import React, { useContext } from "react";
import "./Landing2.css";
import { Languagecontext } from "../../Contexts/Languagecontext";
import landing2image from "../../assets/images/landin2billi.png";
const Landing2 = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="landing2conatiner">
      .
      <div className="leftlanding2">
        <h1>{`${language === "english" ? "Health" : "ጤና"}`}</h1>
        <h2>
          {`${
            language === "english"
              ? "life with amazing body"
              : "ሂዎት ከጤናማ ሰውነት ጋር"
          }`}{" "}
        </h2>
        <p>
          {`${
            language === "english"
              ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              : "ድስፍጅክስድጅ ድክስፍጅፍጅ ስ ድስፍጂውፍጅ ድስጅፍክ ፍድጂስፍጅ ድስድጅ ድክጅ!"
          }`}
        </p>
        <button>
          {" "}
          {`${language === "english" ? "Loss Weight" : "ሰውነት ለመቀነስ"}`}
        </button>
      </div>
      <div className="rightlanding2">
        <img src={landing2image} alt="" />
      </div>
    </div>
  );
};

export default Landing2;
