"use client";

import Image from "next/image";
interface ManipalCardDegreePRE {
  degreename?: string;
  coursename?: string;
  amount?: string;
  universityname?: string;
  colour?: string;
  Months?: "36" | "24";
}

const ManipalCardDegree = ({
  degreename,
  coursename,
  amount,
  universityname,
  colour,
  Months,
}: ManipalCardDegreePRE) => {
  return (
    <>
      <div className="bg-[#F7F7F7] pt-[14px] pr-[18px] pb-[10px] pl-[18px] rounded-br-[5px] rounded-bl-[5px] ">
        <div
          className={`flex gap-[30px] items-center styleboxcolor${colour} h-[70px] rounded-[2px] `}
        >
          <div className="icon leading-0 mx-[10px]">
            {colour === "orange" && (
              <>
                <Image
                  src="/onlinemanipal/orangederr.svg"
                  width={24}
                  height={24}
                  alt="orangederr"
                  priority
                />
              </>
            )}

            {colour === "purple" && (
              <>
                <Image
                  src="/onlinemanipal/purplederr.svg"
                  width={24}
                  height={24}
                  alt="orangederr"
                  priority
                />
              </>
            )}
            {colour === "Blue" && (
              <>
                <Image
                  src="/onlinemanipal/Bluederr.svg"
                  width={24}
                  height={24}
                  alt="orangederr"
                  priority
                />
              </>
            )}
          </div>
          <h3 className="smu-courses flex-1   font-bold tracking-[0.5px] mb-0">
            {degreename}
          </h3>
        </div>

        <p
          className="pt-[9px] pb-[1px] text-[12px] tracking-[2.64px] uppercase text-[#535353] h-[70px]
           leading-[1.3em]"
        >
          {coursename}
        </p>
        <div className="flex justify-between border-b-[1px] border-[#D8D8D8] pt-[2px] pb-[12px]">
          <div className="duration flex items-center gap-[5px] ">
            <Image
              src={
                "/onlinemanipal/event_available_FILL0_wght400_GRAD0_opsz48.png"
              }
              width={12}
              height={10}
              alt={"duration"}
              objectFit="c"
              className="object-contain"
            />
            <span className="text-[12px]  text-[#000000] ">
              {Months} Months
            </span>
          </div>

          <div className="duration flex items-center gap-[5px]">
            <Image
              src={"/onlinemanipal/payments_FILL0_wght300_GRAD0_opsz48.png"}
              width={12}
              height={11}
              alt={"duration"}
            />
            <span className="text-[12px]  text-[#000000] font-bold ">
              INR {amount}
            </span>
          </div>
        </div>

        <div className="institute h-[50px] pt-[8px] pb-[5px] tracking-[0.16px] font-bold leading-[18px] text-[#00000]">
          {universityname}
        </div>

        <div className="text-[12px] underline leading-[20px] tracking-[0.12px] text-[#343634] ">
          Know More
        </div>
      </div>
    </>
  );
};
export default ManipalCardDegree;
