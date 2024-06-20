"use client";
import Image from "next/image";

interface ListitemProp {
  listname?: string;
}

const Listitem = ({ listname }: ListitemProp) => {
  return (
    <>
      <div className="py-[10px] text-[16px] font-[600] border-[#e5e5e5] border-b-[1px] flex items-center gap-[10px]  ">
        <div className="icon">
          <Image
            src={"/amityonline/check-line.svg"}
            alt={"check"}
            width={20}
            height={20}
            objectFit="contain"
          />
        </div>
        <div className="text">{listname}</div>
      </div>
    </>
  );
};
export default Listitem;
