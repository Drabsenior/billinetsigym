import React from "react";
import "./Features.css";
import gymfeaturesimage1 from "../../assets/images/gymfeaturesimage1.png";
import gymfeaturesimage2 from "../../assets/images/gymfeaturesimage2.png";
import gymfeaturesimage3 from "../../assets/images/gymfeaturesimage3.png";
import gymfeaturesicon1 from "../../assets/icons/gymfeaturesicon1.png";
import gymfeaturesicon2 from "../../assets/icons/gymfeaturesicon2.png";
import gymfeaturesicon3 from "../../assets/icons/gymfeaturesicon3.png";
const Features = () => {
  return (
    <div className="featurescontainer">
      <div className="gymfeaturesflexwrap">
        <div className="gymfeatureimage">
          <img src={gymfeaturesimage1} alt="" />
        </div>
        <div className="gymfeatuersdetail">
          <img src={gymfeaturesicon1} alt="" />
          <h2>Gym for men</h2>
          <p>Contrary to popular in a piece of classical Latin literature.</p>
          <button>Read More</button>
        </div>
        <div className="gymfeatureimage">
          <img src={gymfeaturesimage2} alt="" />
        </div>
        <div className="gymfeatuersdetail">
          <img src={gymfeaturesicon2} alt="" />
          <h2>Gym for men</h2>
          <p>Contrary to popular in a piece of classical Latin literature.</p>
          <button>Read More</button>
        </div>
        <div className="gymfeatureimage">
          <img src={gymfeaturesimage3} alt="" />
        </div>
        <div className="gymfeatuersdetail">
          <img src={gymfeaturesicon3} alt="" />
          <h2>Gym for men</h2>
          <p>Contrary to popular in a piece of classical Latin literature.</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
