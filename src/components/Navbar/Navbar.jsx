import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { BsFillTelephoneFill } from "react-icons/bs";
import billinestigym from "../../assets/icons/billinetsigymlogo.png";
import { Link as LinkNav } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Languagecontext } from "../../Contexts/Languagecontext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage } = useContext(Languagecontext);
  const { language } = useContext(Languagecontext);
  console.log(language);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  useEffect(() => {}, [language]);
  return (
    <div className="navbarwrapper">
      <div className="navlogo">
        <LinkNav to="/">
          {" "}
          <img src={billinestigym} alt="" />
        </LinkNav>
      </div>
      <div className="Mobilescreen">
        <div className="MenuIcon" onClick={handleOpen}>
          <HiMenu />
        </div>
        <div className={`${isOpen ? "MobileMenu" : "CloseMenu"}`}>
          <div
            className={`${isOpen ? "OpenIcon" : "CloseIcon"}`}
            onClick={handleOpen}
          >
            {" "}
            <VscChromeClose color="black" size={18} />
          </div>
          <ul>
            <Link to="home" smooth={true} duration={1000} offset={-80}>
              {" "}
              <li onClick={handleOpen}>
                {" "}
                {`${language === "english" ? "HOME" : "አቤት"}`}{" "}
              </li>
            </Link>{" "}
            <Link to="aboutus" smooth={true} duration={1000} offset={-50}>
              <li onClick={handleOpen}>{`${
                language === "english" ? "ABOUT" : "ስለኛ"
              }`}</li>
            </Link>
            <Link to="services" smooth={true} duration={1000} offset={-50}>
              <li onClick={handleOpen}>
                {" "}
                {`${language === "english" ? "SERVICES" : "አገልግሎት"}`}{" "}
              </li>
            </Link>
            <Link to="trainers" smooth={true} duration={1000} offset={-190}>
              {" "}
              <li onClick={handleOpen}>
                {" "}
                {`${language === "english" ? "TRAINERS" : "አሰልጣኝ"}`}
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navlinks">
        <ul>
          <LinkNav to="/">
            <li>{`${language === "english" ? "HOME" : "አቤት"}`}</li>
          </LinkNav>

          <Link to="aboutus" smooth={true} duration={1000} offset={-50}>
            <li>{`${language === "english" ? "ABOUT" : "ስለኛ"}`}</li>
          </Link>

          <Link to="services" smooth={true} duration={1000} offset={-50}>
            <li>{`${language === "english" ? "SERVICES" : "አገልግሎት"}`} </li>
          </Link>

          <Link to="trainers" smooth={true} duration={1000} offset={-190}>
            <li>{`${language === "english" ? "TRAINERS" : "አሰልጣኝ"}`} </li>
          </Link>
        </ul>
        <div className="contactnavbtn">
          <BsFillTelephoneFill color="2D807F" />
          <span>{`${language === "english" ? "Contact us" : "ያግኙን"}`}</span>
        </div>
        <div className="languagecontain">
          <label htmlFor="lan">Lan: </label>{" "}
          <select onChange={handleLanguage} id="lan">
            <option
              selected={language === "english" ? true : false}
              value="english"
            >
              Eng
            </option>
            <option
              selected={language === "amharic" ? true : false}
              value="amharic"
            >
              Amh
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
