import React from "react";
import Slider from "react-slick";
import "./Sliderimage.css";
import billimage1 from "../../assets/images/billimage1.png";
import billimage2 from "../../assets/images/billimage2.png";
import billimage3 from "../../assets/images/billimage3.png";

const Sliderimage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: -100,
    pauseOnHover: true,
  };
  return (
    <div className="sliderimagecontainer">
      <Slider {...settings}>
        <div className="slideimages">
          <img src={billimage1} alt="" />
        </div>
        <div className="slideimages">
          <img src={billimage3} alt="" />
        </div>
        <div className="slideimages">
          <img src={billimage2} alt="" />
        </div>
        <div className="slideimages">
          <img src={billimage1} alt="" />
        </div>
        <div className="slideimages">
          <img src={billimage3} alt="" />
        </div>
        <div className="slideimages">
          <img src={billimage2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliderimage;
