import React, { useContext } from "react";
import facebookicon from "../../assets/images/facebook.png";
import twittericon from "../../assets/images/twittericon.png";
import youtubeicon from "../../assets/images/youtubeicon.png";
import googleicon from "../../assets/images/googleicon.png";
import phoneicon from "../../assets/images/phone.png";
import messageicon from "../../assets/images/Message.png";
import "./Footer.css";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Footer = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="footercontainer" id="fotter">
      <div className="footerflex">
        <h2>{`${language === "english" ? "Billi Nesit" : "ቢሊ ነፂ"}`}</h2>
        <span>{`${
          language === "english" ? "FITTNESS CENTER" : "የሰውነት ማጎልመሻ ቦታ"
        }`}</span>
        <div className="footersocial">
          <img src={facebookicon} alt="" />
          <img src={googleicon} alt="" />
          <img src={twittericon} alt="" />
          <img src={youtubeicon} alt="" />
        </div>
        <p className="footerdescription">
          {`${
            language === "english"
              ? "  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
              : "ድፍሶ ስዶፕቆ ኦወጅፎጅ ፍዎፍፕጅ ስድፍኮድ አጅፍጅዶ ኦጅ ጅፎውፍጅ ስድፎው ቅፓኦእ ቅልክምምል ልድፍልስፍክ ድክስጅፎው ፍድ ፈኦውጅ ስድፍጆ ስፍጆ ኦፍስጅ ስፍጆ ፍዶስጅፍ ኦስጅፎው ዎጅፋጅ ስልፍጅ ኦጃጅፍል ድፍሶቅ ጆውጂኦእ ኦአጅፍል ኦፍውጅ ሶድጅፍ ፎስድጅፍ ፍስዶ"
          }`}
        </p>
        <div className="contactfootercontainer">
          <div className="address">
            <img src={phoneicon} alt="" />
            <span>+251949072855 </span>
          </div>
          <div className="address2">
            <img src={messageicon} alt="" />
            <span>info@plusovagym.com</span>
          </div>
        </div>
        <p className="copyright">
          Copyrigyt plusova gym 2022. All Right Reserved. Designed and Devloped
          by Plusova solution
        </p>
      </div>
    </div>
  );
};

export default Footer;
