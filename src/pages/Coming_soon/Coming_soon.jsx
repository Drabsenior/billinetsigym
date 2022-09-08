import React, { useContext } from "react";
import "./Coming_soon.css";
import { Languagecontext } from "../../Contexts/Languagecontext";

const Coming_soon = () => {
  const { language } = useContext(Languagecontext);
  return (
    <div className="comingsoonpagecontainer">
      <h1>{`${language === "english" ? "Coming soon !" : "በቅርቡ እንመጣለን !"}`}</h1>
    </div>
  );
};

export default Coming_soon;
