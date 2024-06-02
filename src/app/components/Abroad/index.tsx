"use client";
import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BadgeChip from "../badge";
import { useRouter } from "next/navigation";
import CourseCard from "../courseCard";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Slider from "react-slick";
import {
  BachelorBranch,
  CertificateBranch,
  CourseCatgory,
  // CourseFilter,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantAbroadData";
import AboradCard from "../abroadCard";
import Link from "next/link";

const AbroadCourses = () => {
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

  const CourseFilter = [
    {
      id: 0,
      label: "View All",
      value: "view-all",
    },
    {
      id: 1,
      label: "Master",
      value: "master",
    },
    {
      id: 2,
      label: "Bachelor",
      value: "bachelor",
    },
    {
      id: 3,
      label: "Certificate",
      value: "certificate",
    },
  ];

  return (
    <>
      <section className="bg-[#f6f8fb] py-[50px] sm:px-[15px] max-sm:py-[20px] lg:px-0 px-[20px]">
        <div className=" md:max-w-[1200px] w-[100%] mx-auto max-sm:px-[0px] px-[15px] ">
          <div className="flex justify-between items-center">
            <h2 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[20px]">
              Study Abroad
            </h2>
            <Link href="/study-abroad" className="max-sm:hidden">
              <Button
                text={"View All  "}
                className={
                  "  whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] !rounded-lg   text-white font-medium px-spacing24    "
                }
              />
            </Link>
          </div>
          <div className="flex   max-sm:gap-[20px]   gap-[45px] mb-[10px]">
            {CourseFilter?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => {
                      setActiveTab(item?.value), setActiveCourseBranch("");
                    }}
                    style={{ cursor: "pointer" }}
                    className={`whitespace-nowrap   ${
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

          <div className="hidden ">
            <div className="relative  ">
              <Slidernav1 navfix="4" navsize="25" />

              <Swiper
                slidesPerView={2}
                spaceBetween={15}
                className="mySwiper4 width-100"
                navigation={{
                  nextEl: ".review4-swiper-button-next",
                  prevEl: ".review4-swiper-button-prev",
                }}
                modules={[Navigation]}
              >
                {nestedFilter?.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
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
                    </>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className=" ">
            <div className="relative tabsliderlayout">
              <Slidernav1 navfix="4" navsize="25" />

              <Swiper
                slidesPerView={"auto"}
                spaceBetween={15}
                className="mySwiper4 width-100"
                navigation={{
                  nextEl: ".review4-swiper-button-next",
                  prevEl: ".review4-swiper-button-prev",
                }}
                modules={[Navigation]}
              >
                {nestedFilter?.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={index}>
                      <BadgeChip
                        className="whitespace-nowrap"
                        theme={
                          item?.value == activeCourseBranch
                            ? "success"
                            : "default"
                        }
                        size="medium"
                        onClick={() => setActiveCourseBranch(item?.value)}
                      >
                        {item?.label}
                      </BadgeChip>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="relative  mt-[15px] ">
            <AboradCard
              activeTab={activeTab}
              activeCourseBranch={activeCourseBranch}
            />
          </div>

          <Link
            href="/study-abroad"
            className="max-sm:block hidden max-sm:mx-auto w-max"
          >
            <Button
              text={"View All  "}
              className={
                "  whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] !rounded-lg   text-white font-medium px-spacing24    "
              }
            />
          </Link>
        </div>
      </section>
    </>
  );
};
export default AbroadCourses;
