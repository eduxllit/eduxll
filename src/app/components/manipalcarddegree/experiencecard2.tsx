"use client";

import Image from "next/image";

interface ExperienceCard2PRP {
  image?: any;
  content?: string;
  name?: string;
  online?: string;
}

const ExperienceCard2 = ({
  image,
  content,
  name,
  online,
}: ExperienceCard2PRP) => {
  return (
    <>
      <div className="bg-[#e1efba] rounded-[5px] overflow-hidden">
        <Image
          src={image}
          width={260}
          height={143}
          alt={image}
          className="w-full"
        />
        <div className="contentbox p-[20px]">
          <p className="line-clamp-4 text-[15px] mb-[20px] h-[72px]  text-[#535353]">
            {content}
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#535353]">
                {name}
              </span>
              <span className="text-[11px] font-bold text-[#535353] tracking-[2.64px]">
                {online}
              </span>
            </div>
            <div>
              <a
                href="#"
                className="underline text-[#8A9F4F] text-[14px] font-normal"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExperienceCard2;
