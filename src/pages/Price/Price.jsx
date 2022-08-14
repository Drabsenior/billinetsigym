import React from "react";
import "./Price.css";
import Pricing from "../../components/pricing/Pricing";
import weight1 from "../../assets/icons/weight1.png";
import weight2 from "../../assets/icons/weight2.png";
import weight3 from "../../assets/icons/weight3.png";
const Price = () => {
  return (
    <div className="flexpricingwrap">
      <h2>Pricing</h2>
      <div className="pricingcontainer">
        <Pricing
          color="#F68014"
          image1={weight1}
          title="Weight Lose plan"
          desc="It is a long established fact that areader will be distracted by the readable content of a page  that it has a more-or-less "
          price="1,800birr"
        />
        <Pricing
          color="#14DBF6"
          image1={weight3}
          title="Muscle gain Supplement"
          desc="It is a long established fact that areader will be distracted by the readable content of a page  that it has a more-or-less "
          price="2,700birr"
        />
      </div>
    </div>
  );
};

export default Price;
