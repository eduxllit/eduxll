"use client";
import Image from "next/image";

interface UniqueAdvantagesPROP {
  image?: any;
  title?: string;
}

const UniqueAdvantages = ({ image, title }: UniqueAdvantagesPROP) => {
  return (
    <>
      <div className="advantage-item advantage-item1 h-[100%] shadow-md  rounded-[10px] px-[20px] py-[30px]">
        <div className="imageicon flex justify-center mb-[20px]">
          <Image src={image} alt={""} width={100} height={100} />
        </div>
        <div className="contentblock text-center text-[16px] font-[600] ">
          {title}
        </div>
      </div>
    </>
  );
};
export default UniqueAdvantages;
