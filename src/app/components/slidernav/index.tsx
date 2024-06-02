"use client";
import Image from "next/image";
import React from "react";

interface Slidernav1Prop {
  navlaout?: "leftright | topright";
  navfix?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
  navsize?: "25" | "20" | "30" | "40";
}

const Slidernav1 = ({ navlaout, navsize, navfix }: Slidernav1Prop) => {
  const sizeClass = React.useMemo(() => {
    switch (navsize) {
      case "20":
        return " w-[20px] h-[20px]";
      case "25":
        return " w-[25px] h-[25px]";
      default:
        return "w-[40px] h-[40px]";
      case "20":
        return "w-[30px] h-[30px]";
    }
  }, [navsize]);

  return (
    <>
      <div
        className={`review${navfix}-swiper-button-next shadow-lg hover:shadow-red-500/40 newswiper3-button-next absolute flex justify-center items-center ${sizeClass}  bg-[#fcf1f5] hover:bg-[#da202f] rounded-[100px] cursor-pointer   right-[-20px]`}
        style={{
          zIndex: "9",
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        <span className="line-height-0">
          <Image
            src="/svg/chevron-right1.svg"
            width={20}
            height={20}
            alt="left1"
          />
        </span>
      </div>
      <div
        className={`review${navfix}-swiper-button-prev shadow-lg hover:shadow-red-500/40 newswiper3-button-prev  flex justify-center items-center ${sizeClass} bg-[#fcf1f5] hover:bg-[#da202f]  rounded-[100px]  absolute cursor-pointer left-[-20px]`}
        style={{
          zIndex: "9",
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        <span className="line-height-0">
          <Image
            src="/svg/chevron-left1.svg"
            width={20}
            height={20}
            alt="left1"
            priority
          />
        </span>
      </div>
    </>
  );
};
export default Slidernav1;
