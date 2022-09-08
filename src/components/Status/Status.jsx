import React, { useContext } from "react";
import "./Status.css";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Status = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="statuscontainer">
      <div className="flexstatus">
        <div className="statdesc">
          <h2> {`${language === "english" ? "4 Years" : "4 አመት"}`}</h2>
          <p>{`${
            language === "english"
              ? "In the fitness industry"
              : "በስውንት ማጎልመሻው አለም"
          }`}</p>
        </div>
        <div className="statdesc">
          <h2>+ 130</h2>
          <p>
            {" "}
            {`${language === "english" ? "Happy Clients" : "የተደሰቱ ተጠቃሚዎች"}`}
          </p>
        </div>
        <div className="statdesc">
          <h2> {`${language === "english" ? "1 Rank" : "1ኛ ደረጃ"}`}</h2>
          <p>
            {" "}
            {`${
              language === "english"
                ? "Yonas Bodybuilding Competition"
                : "ዮናስ የሰውነት ቅርፅ"
            }`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
