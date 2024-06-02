"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";


const SuccessStories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [popUp, setPopUp] = useState("");
  return (
    <>
      <div className="relative">
       
        <Slidernav1 navfix="2" />
        <Swiper
              slidesPerView={2}
              spaceBetween={30}
              className="mySwiper3 width-100"
              navigation={{
                nextEl: ".review3-swiper-button-next",
                prevEl: ".review3-swiper-button-prev",
              }}
              grid={{
                rows: 2,
              }}
              modules={[Navigation]}
            >

          {storyCollection?.map((item, index) => {
            return (
              <SwiperSlide
              key={index}
              className="relative"
              onMouseEnter={() => setPopUp(item.name)}
              onMouseLeave={() => setPopUp("")}
            >
              <div
                className="!grid grid-cols-[1fr_1.7fr] gap-4 shadow-xl rounded-xl my-16"
                
              >
                <div className="!w-[250px]">
                  <Image
                    src={item?.imageUrl}
                    alt="image"
                    width={270}
                    height={320}
                    className="w-full h-[320px] rounded-xl"
                  />
                </div>
                <div className="grid content-between p-4">
                  <p>{item?.desc}</p>
                  <div className="grid items-end h-fit">
                    <span className="font-semibold text-lg">{item?.name}</span>
                    <p>{item?.profile}</p>
                    <Image src={"/logouni.svg"} alt="university" width={80} height={24} className="mt-4" />
                  </div>
                </div>
              </div>
              </SwiperSlide>
            );
          })}
         
        </Swiper>
      </div>
    </>
  );
};
export default SuccessStories;
const storyCollection = [
  {
    imageUrl: "/image01.webp",
    desc: "I'm very thrilled to pursue my Masters in Data Analytics at Clark University USA. It was my dream & through upGrad I was able to fulfill it. If you ask me why I chose this program it is because I got 2 courses waived off",
    name: "Varshitha M F",
    profile: "MS Data Analytics, Clark University",
  },
  {
    imageUrl: "/image02.webp",
    desc: "I'm very thrilled to pursue my Masters in Data Analytics at Clark University USA. It was my dream & through upGrad I was able to fulfill it. If you ask me why I chose this program it is because I got 2 courses waived off",
    name: "Varshitha M S",
    profile: "MS Data Analytics, Clark University",
  },
  {
    imageUrl: "/image03.webp",
    desc: "I'm very thrilled to pursue my Masters in Data Analytics at Clark University USA. It was my dream & through upGrad I was able to fulfill it. If you ask me why I chose this program it is because I got 2 courses waived off",
    name: "Varshitha M T",
    profile: "MS Data Analytics, Clark University",
  },
];
