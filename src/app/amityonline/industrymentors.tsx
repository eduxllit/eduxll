"use client";
import Image from "next/image";

interface IndustryMentorsPROP {
  image?: any;
  title?: string;
  position?: string;
}

const IndustryMentors = ({ image, title, position }: IndustryMentorsPROP) => {
  return (
    <>
      <div className="hover:bg-[#ffaa17] hover:!border[#ffaa17]  p-[20px] text-center flex h-[287px] flex-col items-center bg-[#fff] rounded-[10px] border-[2px] border-[#002e5e]  shadow-md">
        <div className="image mb-[20px] rounded-[100%] ">
          <Image
            src={image}
            width={117}
            height={117}
            alt={""}
            className="rounded-[100%]"
          />
        </div>
        <div className="contentblock">
          <h6 className="text-[16px] font-[600] text-[#002e5e] mb-[10px]">
            {title}
          </h6>
          <p className="text-[14px] text-[#333]">{position}</p>
        </div>
      </div>
    </>
  );
};
export default IndustryMentors;
