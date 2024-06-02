"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { id } from "date-fns/locale";
const AbroadUniveritySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
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
    <div className="relative">
      {/* <Slider
        autoplay
        {...settings}
        className="items-center justify-center grid gap-6"
      > */}
        <Slidernav1 navfix="3" />
        <Swiper
             slidesPerView={4.2}
             spaceBetween={15}
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

        {abroadUniArray?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative"
              onMouseEnter={() => setPopUp(item.id)}
              onMouseLeave={() => setPopUp("")}
            >
            <div className="shadow-xl rounded-xl">
              <div>
                <Image src={item?.imageUrl} alt="image" width={336} height={336} />
              </div>
              <div className="text-center p-4 text-[#0288d1]">
                <p className="font-semibold">{item?.caption}</p>
                <span>{item?.country}</span>
              </div>
            </div>
            </SwiperSlide>
          );
        })}
      {/* </Slider> */}
      </Swiper>
    </div>
  );
};
export default AbroadUniveritySlider;
const abroadUniArray = [
  {
    id: "1",
    imageUrl: "/abroad-slider/01.jpg",
    caption: "University of Arizona",
    country: "(United States of America)",
  },
  {
    id: "2",
    imageUrl: "/abroad-slider/02.jpg",
    caption: "Walsh College",
    country: "(United States of America)",
  },
  {
    id:"3",
    imageUrl: "/abroad-slider/03.jpg",
    caption: "Oklahoma City University",
    country: "(United States of America)",
  },
  {
    id:"4",
    imageUrl: "/abroad-slider/04.png",
    caption: "FOM University",
    country: "(Germany)",
  },
  {
    id:"5",
    imageUrl: "/abroad-slider/05.png",
    caption: "Eller College of Management",
    country: "(United States of America)",
  },
];
