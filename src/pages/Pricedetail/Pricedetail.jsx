import React from "react";
import "./Pricedetail.css";
import Detailcomponent from "../../components/Detailcomponent/Detailcomponent";
import Navbar from "../../components/Navbar/Navbar";
import Content1 from "../../components/Content1/Content1";
import Footer from "../../components/Footer/Footer";
import Sliderimage from "../../components/Slider/Sliderimage";
const Pricedetail = () => {
  return (
    <div className="predictdetailcontainer">
      <Navbar />
      <Detailcomponent />
      <Content1 />
      <Sliderimage />
      <Footer />
    </div>
  );
};

export default Pricedetail;
