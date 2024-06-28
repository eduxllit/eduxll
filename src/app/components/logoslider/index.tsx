"use client";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { link } from "fs";
import Link from "next/link";

const LogoSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
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
            <Slider
              autoplay
              {...settings}
              className="items-center justify-center"
            >
              {logosliderarry.map((item, index) => {
                return (
                  <>
                    <div className="flex  items-center justify-center h-[100% ] cursor-pointer">
                      <Link href={item?.link} target="_blank">
                        <Image
                          src={item.logo}
                          width={160}
                          height={70}
                          key={index}
                          alt=""
                          objectFit="contain"
                          objectPosition="center"
                          className="  h-[70px] object-contain  "
                        />
                      </Link>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default LogoSlider;

const logosliderarry = [
  /* {
    logo: "/logoslider/1.webp",
    link: "#",
  },
  {
    logo: "/logoslider/2.webp",
    link: "#",
  }, */
  {
    logo: "/logoslider/33.png",
    link: "https://eduxll.com/jeff-goldberg",
  },
  {
    logo: "/logoslider/3.webp",
    link: "https://upesonline.ac.in/enrollment?pc_code=Eduxll%20",
  },
  {
    logo: "/logoslider/amity.png",
    link: "/amityonline/",
  },
  // {
  //   logo: "/logoslider/5.webp",
  //   link: "#",
  // },
   {
     logo: "/logoslider/miauniv.png",
     link: "#",
   },
  {
    logo: "/logoslider/IIT-Kanpur.png",
    link: "/IIT-kanpur",
  },
  {
    logo: "/logoslider/manipal-Univ.webp",
    link: "/onlinemanipal",
  },
  {
    logo: "/logoslider/nasscom.jpg",
    link: "#",
  },
];
