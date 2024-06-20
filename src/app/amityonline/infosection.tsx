"use client";
import Image from "next/image";

interface InfoSection {
  image?: any;
  heading?: string;
  content?: string;
}

const InfoSection = ({ image, heading, content }: InfoSection) => {
  return (
    <>
      <div className="shadow-md flex bg-[#fff] p-[30px] shadow-[10px 10px 10px #00000022] rounded-[20px] max-sm:block max-sm:text-center ">
        <div className="image w-[90px] px-[10px] max-sm:m-auto">
          <Image src={image} alt={""} width={70} height={70} />
        </div>
        <div className="contentbox usp-info-detail flex-1 pl-[30px]">
          <h6 className="text-[20px] font-[700] text-[#002e5e] mb-[8px]">
            {heading}
          </h6>
          <p className="text-[#333] text-[16px] font-[400]">{content}</p>
        </div>
      </div>
    </>
  );
};
export default InfoSection;
