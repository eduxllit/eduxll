"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../button/Button";
import BadgeChip from "../badge";
import { useRouter } from "next/navigation";
import WebniarBox from "./webinar-box";
import axios from "axios";

const WebinarSlider = () => {
  const router = useRouter();
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState<any>([]);

  const getAllWebinar= async ()=>{
    const data = await axios.get('/api/webinar')
    if(data.status === 200){
      setData(data?.data)
    }
  }

  useEffect(()=>{
    getAllWebinar()
  }, [])
 
  return (
    <>
      <section className="bg-[#fff] sm:py-[50px] py-[30px]">
        <div>
          <div className="reviewSlider max-w-[1230px] m-auto  grid lg:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] grid-cols-1 gap-8">
            {/* <Slider
              autoplay
              {...settings}
              className="items-center justify-center mx-[-10px]"
            > */}
            <WebniarBox  category="webinar" data={data} />
            {/* </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default WebinarSlider;
