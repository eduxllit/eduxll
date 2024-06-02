"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconsBox from "./IconsBox";

const RecruitersSlider = ({ response }: any) => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-[#fff]   py-[30px] ">
        <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="logoslider">
             
              <IconsBox response={response} categories="recruiters" />
            
          </div>
        </div>
      </section>
    </>
  );
};
export default RecruitersSlider;
