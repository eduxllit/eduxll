"use client";

import Image from "next/image";
interface TestimonialsCardPRop {
  username?: string;
  position?: string;
  content?: string;
}

const TestimonialsCard = ({
  username,
  position,
  content,
}: TestimonialsCardPRop) => {
  return (
    <>
      <div className="rounded-[10px] p-[30px] relative bg-[#ffaa17] h-[100%] flex flex-col">
        <div className="testimonial-text ">
          <p className="mb-[16px] text-[#333] text-[16px] font-[400]">
            {content}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="testimonial-user flex-1">
            <h6 className="text-[16px] font-[600]  mb-[0px] text-[#002e5e]">
              {username}
            </h6>
            <p className="text-[14px] mb-0 text-[#333]">{position}</p>
          </div>
          <div className="quote-right relative">
            <Image
              src={"/amityonline//double-quotes-r.svg"}
              alt={""}
              width={80}
              height={80}
              className=" mt-[-30px] mb-[-60px] opacity-[0.2]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialsCard;
