import React, { useContext } from "react";
import "./Detailcomponent.css";
import weight1 from "../../assets/icons/weight1.png";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Detailcomponent = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="pricedetailcontainer">
      <div className="leftpricedetailcontainer">
        <img src={weight1} alt="" />
        <h2>{`${
          language === "english" ? "Weight Lose plan" : "ክብደት መቀነሻ ፕላን"
        }`}</h2>
        <p>
          {`${
            language === "english"
              ? "It is a long established fact that areader will be distracted by the readable content of a page that it has a more-or-lessWeight Lose plan"
              : "ዎፍ ኦውጅፍ ፍድስፍጆ ድፍጅስድፍ ፍ ድፍጅጅፍድ ፍ ፍድጅፍ ፍጅዲክቭ ፍስድፍጅ ፍጅስፍጅ ፍጅዲስፍ ጅሲኦጅ ፍብጂፍ ዊጅ ቅጅር ጅፍጅ ጅጆ ውፍጅቢኦጀ ግጂግጅፍ ፍድስጅፍፍ ድስፍ ጅክፍጅ "
          }`}
        </p>
        <span>{`${language === "english" ? "800 birr" : "800 ብር"}`}</span>
        <button>{`${language === "english" ? "BUY NOW" : "አሁን ይግዙ"}`}</button>
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
