import React from "react";
import "./Pricing.css";
import weight1 from "../../assets/icons/weight1.png";
import weight2 from "../../assets/icons/weight2.png";
const Pricing = ({ color, image1, title, desc, price }) => {
  return (
    <div className="pricingcomponent">
      <div className="topbarprice" style={{ backgroundColor: color }}></div>
      <img className="pricingimage1" src={image1} alt="" />
      <span className="abouttitle">{title}</span>
      <p className="pricedescription">{desc}</p>
      <span className="priceabout">{price}</span>
      <button className="aboutbutton">Buy Now</button>
      <img className="pricingimage2" src={weight2} alt="" />
      <p className="loweraboutdesc">5 YEARS OR MORE</p>
      <p className="loweraboutdesc">Request a personal trainer</p>
    </div>
  );
};

export default Pricing;
