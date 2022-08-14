import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <img src={billinestigym} alt="" />
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
            {/* <Link to="/"> */} <li onClick={handleOpen}> HOME </li>
            {/* </Link>{" "}
            <Link to="/about"> */}{" "}
            <li onClick={handleOpen}>ABOUTUS</li>
            {/* </Link> */}
            {/* <Link to="/rooms"> */} <li onClick={handleOpen}> SERVICES</li>
            {/* </Link> */}
            {/* <Link to="/rooms"> */} <li onClick={handleOpen}> TRAINERS</li>
            {/* </Link> */}
          </ul>
        </div>
      </div>
      <div className="navlinks">
        <ul>
          {/* <Link to="/"> */}
          <li>HOME</li>
          {/* </Link> */}
          {/* 
          <Link to="/about"> */}
          <li>ABOUT</li>
          {/* </Link> */}
          {/* 
          <Link to="/rooms"> */}
          <li>SERVICES </li>
          {/* </Link> */}
          {/* 
          <Link to="/rooms"> */}
          <li>TRAINERS </li>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
