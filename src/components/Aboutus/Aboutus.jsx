import React, { useContext } from "react";
import "./Aboutus.css";
import billipic from "../../assets/images/billipic.png";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Aboutus = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="aboutus2container" id="aboutus">
      <div className="leftcontainerabout2">
        <img src={billipic} alt="" />
      </div>
      <div className="rightcontinerabout2">
        <h1>{`${language === "english" ? "ABOUT US" : "ስለኛ"}`}</h1>
        <span>{`${language === "english" ? "Hi am Billi" : "ሃይ ቢሊ ነኝ"}`}</span>
        <p>
          {`${
            language === "english"
              ? "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable I"
              : "ድፍስክ ድክስጅፍ ድፍ ድክጅፈዎላ እኦጅውፍ ድፍ ፍስውፋክሁወፍ ፈህፍፕክጎፕ ሳህፍውጅፍ ጅውጅጅ  ዎጅድስ ፍጅስድጅጅልጅልጅፋ ጆድጅፍው ኦኪጅፍ ፈኦውፍጅ ዋእጅፍጅ አስጅፎው አፍጆውፍአጂጅፍ ፎጆውጅፍ ስፍጆጅዊ  ሶድጅፍስድፍ ልፍዶፍጅ ፍጆጃጆልጅጊኦጅ አፍ ፍ ኦድፍጅ ዶፍጆአድፍጅስድጅፍ ስዶፍጅዶጅፍ ጅፍድፍጆአጅፍ ፍጆጅፎአ"
          }`}
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
