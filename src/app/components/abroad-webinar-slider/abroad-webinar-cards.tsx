"use client";


import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouter } from "next/navigation";
import WebniarBox from "../upcoming-webinar/webinar-box";

const AbroadWebinarSlider = ({ response }: any) => {
  const router = useRouter();
  console.log("inner response", { response });
  
  return (
    <>
      <section className="bg-[#fff] py-[50px]">
        <div>
          <div className="reviewSlider max-w-[1230px] m-auto  grid grid-cols-[1fr_1fr_1fr] gap-8  ">
            {/* <Slider
              autoplay
              {...settings}
              className="items-center justify-center mx-[-10px]"
            > */}
            <WebniarBox abroadCards={true}  category="webinar" />
            {/* </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default AbroadWebinarSlider;
