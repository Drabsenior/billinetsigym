import React from "react";
import Aboutus from "../../components/Aboutus/Aboutus";
import Challenges from "../../components/Challenges/Challenges";
import Footer from "../../components/Footer/Footer";
import Landing2 from "../../components/Landing2/Landing2";
import Navbar from "../../components/Navbar/Navbar";
import Sliderimage from "../../components/Slider/Sliderimage";
import Status from "../../components/Status/Status";
import Weightlossing from "../../components/weightlossing/Weightlossing";
import Experttrainers from "../Expert/Experttrainers";
import Price from "../Price/Price";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing2 />
      <Status />
      <Aboutus />
      <Sliderimage />
      <Weightlossing />
      <Price />
      <Challenges />
      <Experttrainers />
      <Footer />
    </div>
  );
};

export default Home;
