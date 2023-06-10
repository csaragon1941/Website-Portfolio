import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
  const { className, onClick, isDarkMode } = props;
  const arrowColor = isDarkMode ? "bg-#483A33" : "text-black";

  return (
    <div className={className} onClick={onClick}>
      <i className={`fas fa-chevron-right ${arrowColor}`}></i>
    </div>
  );
};

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => {
  const { className, onClick, isDarkMode } = props;
  const arrowColor = isDarkMode ? "text-black" : "text-black";

  return (
    <div className={className} onClick={onClick}>
      <i className={`fas fa-chevron-left ${arrowColor}`}></i>
    </div>
  );
};

export default function DiscordCarousel() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Set initial dark mode state here

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow isDarkMode={isDarkMode} />,
    prevArrow: <CustomPrevArrow isDarkMode={isDarkMode} />,
  };

  const slideStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100%", // Make slide take up full height of parent container
  };

  const imageStyle = {
    maxWidth: "70%",
    maxHeight: "500px", // Adjust the height as per your requirement
    margin: "0 auto", // Center the image horizontally
  };

  return (
    <div className="max-w-2xl m-auto">
      <Slider {...settings}>
        <div style={slideStyle}>
          <img
            src="DigitalWalletScreens/Welcome.svg"
            alt="Slide 1"
            style={imageStyle}
          />
        </div>
        <div style={slideStyle}>
          <img
            src="DigitalWalletScreens/LogIn.svg"
            alt="Slide 2"
            style={imageStyle}
          />
        </div>
        <div style={slideStyle}>
          <img
            src="DigitalWalletScreens/SignUp.svg"
            alt="Slide 3"
            style={imageStyle}
          />
        </div>
        <div style={slideStyle}>
          <img
            src="DigitalWalletScreens/MainMenu.svg"
            alt="Slide 4"
            style={imageStyle}
          />
        </div>
        <div style={slideStyle}>
          <img
            src="DigitalWalletScreens/PayMenu.svg"
            alt="Slide 5"
            style={imageStyle}
          />
        </div>
      </Slider>
    </div>
  );
}

