import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import billinestigym from "../../assets/icons/billinetsigymlogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbarwrapper">
      <div className="navlogo">
        <Link to="home" smooth={true} duration={1000} offset={-80}>
          {" "}
          <img src={billinestigym} alt="" />
        </Link>
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
              <li onClick={handleOpen}> HOME </li>
            </Link>{" "}
            <Link to="aboutus" smooth={true} duration={1000} offset={-50}>
              <li onClick={handleOpen}>ABOUTUS</li>
            </Link>
            <Link to="services" smooth={true} duration={1000} offset={-50}>
              <li onClick={handleOpen}> SERVICES</li>
            </Link>
            <Link to="trainers" smooth={true} duration={1000} offset={-190}>
              {" "}
              <li onClick={handleOpen}> TRAINERS</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navlinks">
        <ul>
          <Link to="home" smooth={true} duration={1000} offset={-80}>
            <li>HOME</li>
          </Link>

          <Link to="aboutus" smooth={true} duration={1000} offset={-50}>
            <li>ABOUT</li>
          </Link>

          <Link to="services" smooth={true} duration={1000} offset={-50}>
            <li>SERVICES </li>
          </Link>

          <Link to="trainers" smooth={true} duration={1000} offset={-190}>
            <li>TRAINERS </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
