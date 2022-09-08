import React, { useContext } from "react";
import "./Pricing.css";
import weight1 from "../../assets/icons/weight1.png";
import weight2 from "../../assets/icons/weight2.png";
import { Link } from "react-router-dom";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Pricing = ({ color, image1, title, desc, price }) => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="pricingcomponent" id="pricing">
      <div className="topbarprice" style={{ backgroundColor: color }}></div>
      <img className="pricingimage1" src={image1} alt="" />
      <span className="abouttitle">{title}</span>
      <p className="pricedescription">{desc}</p>
      <span className="priceabout">{price}</span>
      <Link to="/pricedetail">
        <button className="aboutbutton">{`${
          language === "english" ? "Buy Now" : "አሁን ይግዙ"
        }`}</button>
      </Link>
      <img className="pricingimage2" src={weight2} alt="" />
      <p className="loweraboutdesc">{`${
        language === "english" ? "5 YEARS OR MORE" : "5 አመት እና ከዛበላያ"
      }`}</p>
      <p className="loweraboutdesc">{`${
        language === "english"
          ? "Request a personal trainer"
          : "የግል አሰልጣኝ አንዲመደብሎት ይጠይቁ"
      }`}</p>
    </div>
  );
};

export default Pricing;
