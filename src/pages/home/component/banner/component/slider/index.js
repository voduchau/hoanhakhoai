import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const IMAGES = [
  "https://assets.flowerstore.vn/uploads/sliders/k0FoOVRSeV3vgedOAXjspFP3ZkYLYO7aWCAPRL8C.jpeg",
  "https://assets.flowerstore.vn/uploads/sliders/381PHaCNWFbrSbrhNnF8W4gTHt01XP9vsY7RwJlw.jpeg",
  "https://assets.flowerstore.vn/uploads/sliders/ZhdDiWMohJF0hRN0K62XKVnl4tlFsVl6dNUmRCmL.jpeg",
  "https://assets.flowerstore.vn/uploads/sliders/EnTp2FYg8GTECXBFFp8hrSf4xOGaFVXGywF85TW0.jpeg",
  "https://assets.flowerstore.vn/uploads/sliders/tTYHijPxRiG0hb6aoixHT1xhbwRCfkWEQqjJuD4W.jpeg",
  "https://assets.flowerstore.vn/uploads/sliders/k0FoOVRSeV3vgedOAXjspFP3ZkYLYO7aWCAPRL8C.jpeg",
  "https://assets.flowerstore.vn/uploads/sliders/381PHaCNWFbrSbrhNnF8W4gTHt01XP9vsY7RwJlw.jpeg",
];

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnDotsHover: true,
  };
  return (
    <div className="order-1 mx-2 xl:max-w-[100%] xl:flex-1" id="slider-banner">
      <div className="flex items-center h-full" id="slider-wrap">
        <div className="w-full h-full xl:max-w-740" id="slider-image-container">
          <div className="home-slide h-full">
            <div className="home-slide h-full">
              <Slider
                {...settings}
                className="slick-carousel h-full slick-initialized slick-dotted"
              >
                {IMAGES.map((item, index) => (
                  <a
                    href="https://flowerstore.vn/collection/Ch%C3%BAc+M%E1%BB%ABng+T%E1%BB%91t+Nghi%E1%BB%87p"
                    className=""
                    data-slick-index="9"
                    aria-hidden="true"
                    tabIndex="-1"
                    key={index}
                  >
                    <img
                      className=""
                      src={item}
                      alt="Slider Image"
                      width="100%"
                      height="100%"
                    />
                  </a>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
