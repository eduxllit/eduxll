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
const BlogsSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.4,
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
             slidesPerView={3.2}
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

        {blogsCollection?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative"
              onMouseEnter={() => setPopUp(item.id)}
              onMouseLeave={() => setPopUp("")}
            >
            <div  className="border rounded-xl !w-[334px]">
              <div>
                <Image
                  src={item?.imageUrl}
                  alt="image"
                  width={334}
                  height={138}
                />
              </div>
              <div className="h-[150px] p-4 grid justify-between">
                <p className="font-semibold">{item?.desc}</p>
                <div className="flex gap-2 items-center">
                  <div>
                    <Image
                      src={"/calendar.png"}
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>{item?.date}</span>
                </div>
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
export default BlogsSlider;
const blogsCollection = [
  {
    id: "1",
    imageUrl: "/blog01.webp",
    desc: "Step-by-Step Procedure to Study Abroad: Your Comprehensive 7-Step Guide",
    date: "04 Mar'24",
  },
  {
    id  : "2",
    imageUrl: "/blog02.webp",
    desc: "Best Countries to Study Abroad for Indian Students in 2024",
    date: "04 Mar'24",
  },
  {
    id: "3",
    imageUrl: "/blog03.webp",
    desc: "Education Loan For Study Abroad – Eligibility, Amount & More",
    date: "04 Mar'24",
  },
  {
    id: "4",
    imageUrl: "/blog04.webp",
    desc: "8 Cheapest Countries to Study for Indian Students in 2024",
    date: "04 Mar'24",
  },
];
