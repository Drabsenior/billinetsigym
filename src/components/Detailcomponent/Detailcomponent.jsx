import React from "react";
import "./Detailcomponent.css";
import weight1 from "../../assets/icons/weight1.png";
const Detailcomponent = () => {
  return (
    <div className="pricedetailcontainer">
      <div className="leftpricedetailcontainer">
        <img src={weight1} alt="" />
        <h2>Weight Lose plan</h2>
        <p>
          It is a long established fact that areader will be distracted by the
          readable content of a page that it has a more-or-less{" "}
        </p>
        <span>800 birr</span>
        <button>BUY NOW</button>
      </div>
      <div className="rightpricedetailcontainer">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RAOfxKLljNM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Detailcomponent;
