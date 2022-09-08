import React, { useContext } from "react";
import "./Experttrainers.css";
import Trainers from "../../components/Trainers/Trainers";
import trainer1 from "../../assets/images/trainer1.png";
import trainer2 from "../../assets/images/trainer2.png";
import trainer3 from "../../assets/images/trainer3.png";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Experttrainers = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="experttrainerflexwrap">
      <h2 className="experttrainerstitle">{`${
        language === "english" ? "Trainers" : "አስልጣኝ"
      }`}</h2>
      <div className="experttrainerscontainer">
        <Trainers
          image={trainer1}
          qualify={`${
            language === "english" ? "Expert trainer" : "ኤክስፐርት አሰልጣኝ"
          }`}
          name={`${language === "english" ? "Hugh Jackman" : "ሂው ጃክማን"}`}
        />
        <Trainers
          image={trainer2}
          qualify={`${
            language === "english" ? "Expert trainer" : "ኤክስፐርት አሰልጣኝ"
          }`}
          name={`${language === "english" ? "Katy perry" : "ኬቲ ፔሪ"}`}
        />
        <Trainers
          image={trainer3}
          qualify={`${
            language === "english" ? "Expert trainer" : "ኤክስፐርት አሰልጣኝ"
          }`}
          name={`${language === "english" ? "Adam Sadnler" : "አድም ሳንድለር"}`}
        />
      </div>
    </div>
  );
};

export default Experttrainers;
