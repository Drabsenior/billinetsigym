import React, { useContext } from "react";
import Sliderimage from "../Slider/Sliderimage";
import "./Content1.css";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Content1 = () => {
  const { language } = useContext(Languagecontext);
  return (
    <>
      <div className="contnet1container">
        <h2>{`${language === "english" ? "Weight lossing" : "ክብደት ለመቀነስ"}`}</h2>
        <p>
          {`${
            language === "english"
              ? "There are many variations of passages of Lorem Ipsum available,I There are many variations of passages of Lorem Ipsum available,I"
              : "ድፍጅክ ፎውፍ ጅልፍ ጅስድፎ ጅፍድ ፍጅስዶፍጅ ስድፍጅ ድፍጅ ኢኦስድ ፍጅልፍጅ ድክስጅፎስድ ፍጅፍጅ ፍድስጅ ቅልክጅፍስ ፍጆስድፍጅ ስድፍ ጅድፍ ጆድፍጅ ልስድፍስ ድልፍጅ ድስፍጅልስድጅ አፈውፋ ፋፍ ወፍውፍ"
          }`}
        </p>
      </div>
    </>
  );
};

export default Content1;
