"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import IconsBox from "./IconsBox";
import axios from "axios";

const NewsSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    //need arrows
    arrows: true,

    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="bg-[#fff]  
     
       "
      >
        <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div
            className="logoslider 
          "
          >
            {/* <Slider {...settings}  
            > */}
            <IconsBox categories="news" />
            {/* </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsSlider;
