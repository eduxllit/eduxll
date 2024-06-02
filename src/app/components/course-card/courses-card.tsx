import Image from "next/image";
import Button from "../button/Button";

const CoursesCard = () => {
  return (
    <>
      <div className="max-w-[300px] rounded-md border shadow-md">
        <Image
          src="/marketing.png"
          alt="marketing"
          width={300}
          height={200}
          className="w-full rounded-tr-md rounded-tl-md"
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold my-2">Digital Marketing</h4>
          <p className="text-xs text-[#bdbdbd]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            repudiandae velit, numquam magnam, minima,
          </p>
          <div className="flex gap-2 items-center my-2">
            <Image src="/book.png" alt="marketing" width={20} height={20} />
            <p className="text-sm font-semibold text-[#979b97]">7 Courses</p>
          </div>
          <Button text={"Explore Courses"} className={"bg-red-500 text-white text-sm w-full mt-2"} />
        </div>
      </div>
    </>
  );
};
export default CoursesCard;
