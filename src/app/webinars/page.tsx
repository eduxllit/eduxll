"use client";
import HeaderLayout from "@/app/components/headerLayout/HeaderLayout";
import WebinarSlider from "@/app/components/upcoming-webinar/webinar-slider";
import Image from "next/image";
import { connect } from "../dbConfig";
import FreeMaster from "../models/freeMaster";
import Link from "next/link";
import Webinar from "../models/webinar";
import Web from "../models/webinar";

// const getAllClassess = async () => {
//   try {
//     connect();
//     const freeMaterClassess = await Web.find();
//     console.log(freeMaterClassess, "hii");
//     return freeMaterClassess;
//   } catch (error) {
//     return error;
//   }
// };
const Webinars = () => {
  // const response: any = await getAllClassess();
  // console.log(response, "hii");

  return (
    <HeaderLayout>
      <div className="h-[400px]   relative bg-[url('/65e8a443d3a217849e428432_dhruv-hero-image.png')] bg-no-repeat bg-cover">
        <div className="sm:pr-12 pr-4 lg:pl-32 pl-4 py-8 bg-gradient-to-r from-black to-transparent h-full">
          {/* <div className="flex gap-2 text-white">
          <Link href={"/"} className="cursor-pointer text-[#dbd8d8]">
            Home
          </Link>
          <span> {">"} </span>
          <span>Free Masterclass</span>
        </div> */}
          <div className="sm:absolute bottom-[-30px] z-[9]">
            <div className="text-white max-w-[720px] lg:px-20 sm:pl-8 pl-2 sm:mt-0 mt-4 grid sm:gap-6 gap-2">
              <h2 className="sm:text-3xl text-xl font-semibold">
                LIVE LEARNING FOR CAREER GROWTH
              </h2>
              <p className="sm:text-md text-sm">
                Are you someone who is - Feeling stuck in your job? Ambitious to
                continue learning? Not sure what’s next for you in your career?
                Our FREE masterclasses with leading industry leaders is exactly
                what you need!
              </p>
              <button className="bg-red-500 w-fit sm:px-16 px-4 sm:py-4 py-2 rounded-md sm:font-semibold tracking-wide">
                REGISTER NOW
              </button>
            </div>
            <div className="bg-white max-w-[1140px] lg:ml-20 sm:mx-8 mx-2 md:h-[100px] rounded-md shadow-md text-black grid md:grid-cols-4 grid-cols-2 gap-4 py-4 md:px-8 px-4 font-semibold mt-4 md:text-[16px] text-xs">
              <span>FREE registration</span>
              <span>Best-in-class industry experts</span>
              <span>Live hands-on learning</span>
              <span>1-1 career counselling</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-16 my-8">
        <h3 className="sm:text-3xl text-2xl font-semibold text-center">
          Register for Upcoming Webinars
        </h3>
        <div className="mx-4">
        <WebinarSlider />
        </div>
      </div>
    </HeaderLayout>
  );
};
export default Webinars;
