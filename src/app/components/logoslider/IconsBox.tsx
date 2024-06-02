"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Blog from "@/app/models/blogModels";
import { connect } from "@/app/dbConfig";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const IconsBox = ({ categories }: any) => {
  const [resNews, setResNews] = useState<any>([]);

  const getAllNews = async () => {
    const data = await axios.get("/api/news");
    if (data.status === 200) {
      setResNews(data?.data);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const filterData = resNews?.filter(
    (item: any) => item?.customCategory[0]?.value === categories
  );

  const [popUp, setPopUp] = useState("");

  console.log("filterData length", filterData?.length);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log("resNews", { resNews });

  return (
    <Slider {...settings}>
      {filterData?.length > 0 &&
        filterData?.map((item: any, index: any) => {
          return (
            <>
              <div
                key={index}
                className="flex  items-center justify-center max-sm:mx-[5px]  "
              >
                {categories === "news" ? (
                  <>
                    <a
                      href={`${item?.link}`}
                      target="_blank"
                      //className="py-[15px]"
                    >
                      <Image
                        src={item?.featureImage}
                        width={100}
                        height={36}
                        alt=""
                        objectFit="contain"
                        objectPosition="center"
                        className="brightness-100 transition-all hover:transition-all cursor-pointer border-[1px] flex items-center justify-center object-contain rounded-[10px] p-[10px] shadow-[3px 3px 3px] shadow-[#00000014] bg-[#fbfbfb] border-[#d9d9d9] w-[100px] h-[100px] "
                      />
                    </a>
                  </>
                ) : categories === "recruiters" ? (
                  <>
                    <Image
                      src={item?.featureImage}
                      width={100}
                      height={36}
                      alt=""
                      objectFit="contain"
                      objectPosition="center"
                      className="brightness-100 transition-all hover:transition-all cursor-pointer border-[1px] flex items-center justify-center object-contain rounded-[10px] p-[10px] shadow-[3px 3px 3px] shadow-[#00000014] bg-[#fbfbfb] border-[#d9d9d9] w-[100px] h-[100px] "
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          );
        })}
    </Slider>
  );
};

export default IconsBox;
