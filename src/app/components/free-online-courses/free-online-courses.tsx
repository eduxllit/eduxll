"use client";
import Image from "next/image";
import Button from "../button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slidernav1 from "../slidernav";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FormUI from "../form/FormUI";
import { useState } from "react";

const FreeOnlineCourses = () => {
  const [registerPopup, setRegisterPopup] = useState("button");
  const [card, setCard] = useState("");
  return (
    <div className="relative free-online-courses my-12">
      <Slidernav1 navfix="3" />

      <Swiper
        slidesPerView={4.2}
        spaceBetween={15}
        className="mySwiper3 width-100 flex gap-6"
        navigation={{
          nextEl: ".review3-swiper-button-next",
          prevEl: ".review3-swiper-button-prev",
        }}
        grid={{
          rows: 2,
        }}
        modules={[Navigation]}
      >
        {coursesCollection?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <div
                className="w-[300px] h-[375px] p-2 border shadow-xl mb-8 rounded-xl cursor-pointer online-cards"
                onMouseEnter={() => setCard(item?.title)}
              >
                <div className="relative">
                  <div>
                    <Image
                      src={item?.imageUrl}
                      alt="image"
                      width={285}
                      height={260}
                      className="!w-[285px] !h-[260px]"
                    />
                  </div>
                  <div
                    className={
                      "absolute top-[40%] w-full flex justify-evenly hidden register-button"
                    }
                  >
                    <Button
                      onClick={() => setRegisterPopup(item?.title)}
                      text={"Register"}
                      className={"!bg-red-700 !rounded-md text-white"}
                    />
                  </div>
                  {/* <div className="absolute top-[40%] left-[2%]">
                  {item?.imageContent}
                </div> */}
                  <span className="absolute bottom-[5%] left-[5%] bg-green-600 rounded-md text-white font-semibold px-4">
                    FREE
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold mt-2">{item?.title}</h3>
                  <div className="flex gap-2 justify-between my-2">
                    <div className="flex items-center gap-[3px]">
                      <Image
                        src={"/svg/rating.svg"}
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <span className="text-sm">{item?.rating}</span>
                    </div>
                    <div className="text-sm"> {item?.learners}</div>
                    <div className="text-sm">{item?.stage}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div>
                        <Image
                          src="/svg/time.svg"
                          alt="time"
                          width={16}
                          height={16}
                        />
                      </div>
                      <span>{item?.duration}</span>
                    </div>
                    <Button
                      text={"Enroll Now"}
                      className={"bg-transparent border-none"}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {registerPopup === card ? (
        <div className="forms fixed top-0 left-0 grid items-center justify-center h-screen w-screen z-[9] backdrop-blur-md">
          <FormUI />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default FreeOnlineCourses;
const coursesCollection = [
  {
    imageUrl: "/free-courses/01.png",
    title: "Getting Started with Bard",
    imageContent: "Getting Started with Gemini AI (Bard)",
    rating: "4.56",
    learners: "15.7K+ Learners",
    stage: "Beginner",
    duration: "1.0 Hrs",
  },
  {
    imageUrl: "/free-courses/02.png",
    title: "Generative AI for beginners",
    imageContent: "Generative AI for beginners",
    rating: "4.48",
    learners: "10.7K+ Learners",
    stage: "Beginner",
    duration: "1.0 Hrs",
  },
  {
    imageUrl: "/free-courses/03.png",
    title: "ChatGPT for HR",
    imageContent: "ChatGPT for HR",
    rating: "4.7",
    learners: "60.8K+ Learners",
    stage: "Beginner",
    duration: "1.0 Hrs",
  },
  {
    imageUrl: "/free-courses/04.jpg",
    title: "Getting Started with Bards",
    imageContent: "Artificial Intelligence with Python",
    rating: "4.55",
    learners: "62.1K+ Learners",
    stage: "Intermediate",
    duration: "1.0 Hrs",
  },
  {
    imageUrl: "/free-courses/05.png",
    title: "Introduction to Cyber Attacks",
    imageContent: "Introduction to Cyber Attacks",
    rating: "4.61",
    learners: "2.5K+ Learners",
    stage: "Beginner",
    duration: "1.0 Hrs",
  },
];
