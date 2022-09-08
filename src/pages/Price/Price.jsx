import React, { useContext } from "react";
import "./Price.css";
import Pricing from "../../components/pricing/Pricing";
import weight1 from "../../assets/icons/weight1.png";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Price = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="flexpricingwrap">
      <h2>{`${language === "english" ? "Our Program" : "የኛ ፕሮግራም"}`}</h2>
      <div className="pricingcontainer">
        <Pricing
          color="#2D807F"
          image1={weight1}
          title={`${
            language === "english" ? "Weight Lose plan" : "ክብደት ለመቀነስ"
          }`}
          desc={`${
            language === "english"
              ? "It is a long established fact that areader will be distracted by the readable content of a page  that it has a more-or-less "
              : "ዎፍጅስድ ጅድፎፍው ድሶፍጆ ቅፍጅ ድሶፍጅ ድልፍ ስድፍጆአ ፍጅልስድፍ  ፎስድጅ ፎስድጅፎ ውጅፍጅ ኦፍስዶ ፍጅሶፍጃልፍጅ ጆስጅፎው ጂጅስጅፍ ፍጅ ሶኢ ዲጅፍ አፍጅ ልስድፍጅ ዲ ፍ ጅዲ ኢ  ኦ"
          }`}
          price={`${language === "english" ? "1,800birr" : "1,800 ብር"}`}
        />
      </div>
    </div>
  );
};

export default Price;
