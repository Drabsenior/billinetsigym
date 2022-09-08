import React, { useContext } from "react";
import "./weightlossing.css";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Weightlossing = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="weightlossingcontainer">
      <h2>{`${language === "english" ? "Weight lossing" : "ክብደት ለመቅነስ"}`}</h2>
      <p>{`${
        language === "english"
          ? "There are many variations of passages of Lorem Ipsum available,I"
          : "ስድፍወ ስልፍዎ ፍዎጅ ስፍጆውፍ ስድፎዎ ዎፍጅ አፎው ዎጅፍስ ጅ ዎጅፍዎፎፍጅ ጆውፍጅ፤አጅፍ ፎውጅ"
      }`}</p>
    </div>
  );
};

export default Weightlossing;
