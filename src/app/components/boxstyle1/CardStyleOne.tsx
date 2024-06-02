"use client";
import Image from "next/image";
import { useState } from "react";
import FormUI from "../form/FormUI";

type CardStyleOnePRop = {
  imageUrl?: any;
  title?: string;
  amount?: string;
  pdfurl?: string;
  studentnumber?: string;
  rating?: string;
  onClick?: any;
};

const CardStyleOne = ({
  imageUrl,
  title,
  amount,
  pdfurl,
  studentnumber,
  rating,
  onClick,
}: CardStyleOnePRop) => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      {/* {openPopup && (
        // <div>sahil hai</div>
        // <div className="fixed backdrop-blur-md top-0 left-0 w-screen h-screen z-[9] flex items-center justify-center">
        <div className="w-fit w-[350px] relative">
          <FormUI setOpenPopup={setOpenPopup} />
          <div
            className="w-6 h-6 flex justify-center items-center bg-white border rounded-full absolute top-2 right-2 cursor-pointer"
            // onClick={() => setCard("")}
          >
            <span className="mt-[-4px]" onClick={() => setOpenPopup(false)}>
              x
            </span>
          </div>
        </div>
        // </div>
      )} */}
      <div className="p-[4px] rounded-[4px] border-1 border-[#ddd] bg-[#fff]">
        <div className="">
          <Image src={imageUrl ?? ""} width={400} height={250} alt="" />
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

          <button
            // onClick={() => setOpenPopup(true)}
            onClick={onClick}
            className=" mt-[10px] bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-[4px] shadow-cta text-white font-medium px-spacing24 py-spacing14 md:py-spacing10 z-10 w-[100%] py-[3px] px-[16px] "
          >
            Registration
          </button>
        </div>
      </div>
    </>
  );
};

export default CardStyleOne;
