"use client";
import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BadgeChip from "../badge";
import { useRouter } from "next/navigation";
import CourseCard from "../courseCard";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";

import Slider from "react-slick";
import {
  BachelorBranch,
  CertificateBranch,
  CourseCatgory,
  CourseFilter,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantData";
import AboradCard from "../abroadCard";
import Link from "next/link";
import StaticCard from "../staticCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CourseStaticCardWith from "../course-withoutSlider-card";

const CourseStaticAbroad = ({ onlyCards }: any) => {
  const [popUp, setPopUp] = useState("");
  const [activeTab, setActiveTab] = useState("view-all");
  const [activeCourseBranch, setActiveCourseBranch] = useState("");
  const nestedFilter =
    activeTab === "master"
      ? MasterBranch
      : activeTab === "bachelor"
      ? BachelorBranch
      : activeTab === "certificate"
      ? CertificateBranch
      : activeTab === "free-courses"
      ? FreeCoursesBranch
      : [];

  return (
    <>
      <section className="bg-[#f6f8fb] sm:py-[50px] sm:py-8 py-4 sm:mt-0 mt-4">
        <div className=" md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="flex justify-between items-center mb-[20px]">
            <h2 className="sm:text-[35px] text-xl text-black leading-[1.3] font-bold">
              All Courses
            </h2>
            <Link href="/study-abroad">
              <Button
                text={"View All  "}
                className={
                  "  whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] !rounded-lg sm:text-md text-xs text-white font-medium px-spacing24    "
                }
              />
            </Link>
          </div>
          <div className="md:flex  grid grid-cols-3 sm:gap-[45px] gap-4 mb-[10px]">
            {CourseFilter?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => {
                      setActiveTab(item?.value), setActiveCourseBranch("");
                    }}
                    style={{ cursor: "pointer" }}
                    className={`${
                      activeTab == item?.value
                        ? "  after:w-full    after:transition-all transition-all  after:h-[2px] after:bg-[#ed1d26] after:absolute relative after:left-[0] after:bottom-[0px] text-[#ed1d26]"
                        : ""
                    } `}
                  >
                    {item?.label}
                  </div>
                </>
              );
            })}
          </div>

          <div className="relative tabsliderlayout mb-[16px]">
            <Slidernav1 navfix="3" navsize="25" />

            <Swiper
              slidesPerView={6}
              spaceBetween={15}
              className="mySwiper3 width-100"
              navigation={{
                nextEl: ".review3-swiper-button-next",
                prevEl: ".review3-swiper-button-prev",
              }}
              modules={[Navigation]}
            >
              {nestedFilter?.map((item, index) => {
                return (
                  <SwiperSlide key={item?.label}>
                    <BadgeChip
                      theme={
                        item?.value == activeCourseBranch
                          ? "success"
                          : "default"
                      }
                      size="medium"
                      key={item?.label}
                      onClick={() => setActiveCourseBranch(item?.value)}
                    >
                      {item?.label}
                    </BadgeChip>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="relative gap-[15px]">
            <CourseStaticCardWith
              activeTab={activeTab}
              activeCourseBranch={activeCourseBranch}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default CourseStaticAbroad;
