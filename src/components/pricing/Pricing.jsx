import React from "react";
import "./Pricing.css";
import weight1 from "../../assets/icons/weight1.png";
import weight2 from "../../assets/icons/weight2.png";
const Pricing = () => {
  return (
    <div className="pricingcomponent">
      <div className="topbarprice" style={{ backgroundColor: "#f68014" }}></div>
      <img className="pricingimage1" src={weight1} alt="" />
      <span className="abouttitle">Weight Lose plan</span>
      <p className="pricedescription">
        It is a long established fact that areader will be distracted by the
        readable content of a page that it has a more-or-less{" "}
      </p>
      <span className="priceabout">1,800 birr</span>
      <button className="aboutbutton">Buy Now</button>
      <img className="pricingimage2" src={weight2} alt="" />
      <p className="loweraboutdesc">5 YEARS OR MORE</p>
      <p className="loweraboutdesc">Request a personal trainer</p>
    </div>
  );
};

export default Pricing;
