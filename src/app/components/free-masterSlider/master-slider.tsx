"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../button/Button";
import WebniarBox from "../upcoming-webinar/webinar-box";
import axios from "axios";

const MasterSlider = () => {
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
    const data = await axios.get('/api/freeclass')
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
          <div className="reviewSlider max-w-[1230px] m-auto grid sm:grid-cols-[1fr_1fr_1fr] grid-cols-1 gap-8">
            {/* <Slider
              autoplay
              {...settings}
              className="items-center justify-center mx-[-10px]"
            > */}

            <>
              <WebniarBox category="Masterclasses" data={data} />
            </>

            {/* </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default MasterSlider;

const reviewArray = [
  {
    image: "/master.jpeg",
    title: "17th Apr | Wed | 7:30 PM",
    desc: "Understand the essential skills needed to achieve your desired Product Management position",
  },
  {
    image: "/master02.jpeg",
    title: "18th Apr | Thu | 7:30 PM",
    desc: "Get assessed by our expert on how to secure a high paying job in Digital Marketing",
  },
  {
    image: "/ankush.jpeg",
    title: "20th Apr | Sat | 11:00 AM",
    desc: "Analyze the ROI of an online MBA ",
  },
  {
    image: "/master02.jpeg",
    title: "18th Apr | Thu | 7:30 PM",
    desc: "Get assessed by our expert on how to secure a high paying job in Digital Marketing",
  },
  {
    image: "/ankush.jpeg",
    title: "20th Apr | Sat | 11:00 AM",
    desc: "Analyze the ROI of an online MBA ",
  },
];
