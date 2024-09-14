import React from "react";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 345,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className=" mx-5 md:m-auto">
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <div key={slide.id}>
              <div className="h-5/6 w-5/6 m-auto">
                <img src={slide.image} alt={slide.name} />
              </div>
              <div className="">
                <p className="text-center pt-2 font-semibold text-xs md:text-md lg:text-xl">
                  {slide.name}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
