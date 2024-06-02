"use client";
import Image from "next/image";
import Button from "../button/Button";
import { useState } from "react";
import FormUI from "../form/page";

const CardStyleOne = ({
  imageurl,
  title,
  amount,
  pdfurl,
  studentnumber,
  rating,
  onClick,
}: any) => {


  return (
    <>
      <div
        className="p-[4px] rounded-[4px] border-1 border-[#ddd] bg-[#fff] online-cards"
        // onMouseEnter={() => setCard(title)}
      >
        <div className="relative online-cards">
          <Image src={imageurl} width={400} height={250} alt="" />
          
        </div>

        <div className="px-[5px] my-[10px]">
          <h3 className="text-[16px] font-semibold   line-clamp-2 ">{title}</h3>

          <div className="flex gap-[5px] flex-col border-1 border-[#0000001a] rounded-[3px] m-[4px]">
            <div className="flex justify-between items-center pt-[5px] pl-[5px] pr-[5px]">
              <div className="flex gap-[3px]  items-center ">
                <Image
                  src="/free-courses/money-rupee-circle-fill.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                <span className="text-[14px] font-[#000]">Rs. {amount}</span>
              </div>

              <div className="flex gap-[3px] items-center">
                <Image
                  src="/free-courses/file-pdf-2-fill.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                <span className="text-[14px] font-[#000]">Brochure</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center pb-[5px] pl-[5px] pr-[5px]">
              <div className="flex gap-[3px] items-center">
                <Image
                  src="/free-courses/graduation-cap-fill.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                <span className="text-[14px] font-[#000]">{studentnumber}</span>
              </div>

              <div className="flex gap-[3px] items-center">
                <Image
                  src="/free-courses/star-fill.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                <span className="text-[14px] font-[#000]">
                  Rating: {rating}
                </span>
              </div>
            </div>
          </div>

          <button className=" mt-[10px] bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-[4px] shadow-cta text-white font-medium px-spacing24 py-spacing14 md:py-spacing10 z-10 w-[100%] py-[3px] px-[16px] ">
            Registration
          </button>
        </div>
      </div>
      {/* {card===registerPopup &&
      <FormUI />
      } */}
    </>
  );
};

export default CardStyleOne;
