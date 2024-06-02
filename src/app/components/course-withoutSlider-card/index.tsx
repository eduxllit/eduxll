"use client";
import Image from "next/image";
import Badgechip from "../badge";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slidernav1 from "../slidernav";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

interface CourseCardProps {
  listArray?: any;
  activeTab?: string;
  activeCourseBranch?: string;
}

const CourseStaticCardWith = ({
  listArray,
  activeTab,
  activeCourseBranch,
}: CourseCardProps) => {
  const [data, setData] = useState<any>([]);
  const [popUp, setPopUp] = useState("");

  const getAllCourses = async () => {
    // if active tab is view all then fetch all courses
    if (activeTab === "view-all") {
      const data = await axios.get("/api/course");
      if (data.status === 200) {
        setData(data?.data);
      }
    } else {
      const data = await axios.get(`/api/course?category=${activeTab}`);
      if (data.status === 200) {
        setData(data?.data);
      }
    }
  };

  useEffect(() => {
    getAllCourses();
  }, [activeTab]);

  const getNestedCoursesbyBranch = async () => {
    const data = await axios.get(`/api/course/branch/${activeCourseBranch}`);
    console.log("test sgwg", data);
    if (data.status === 200) {
      setData(data?.data);
    }
  };

  useEffect(() => {
    if (activeCourseBranch) {
      getNestedCoursesbyBranch();
    }
  }, [activeCourseBranch]);

  const isFeatured = data?.filter(
    (item: any) => item?.featureCategoryInsert[0]?.value === "latest-card"
  );

  return (
    <>
      <div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ">
        {/* <Slidernav1 navfix="3" /> */}

        {/* <Swiper
          slidesPerView={3.2}
          spaceBetween={15}
          className="mySwiper3 width-100"
          navigation={{
            nextEl: ".review3-swiper-button-next",
            prevEl: ".review3-swiper-button-prev",
          }}
          grid={{
            rows: 2,
          }}
          modules={[Navigation]}
        > */}
        {isFeatured?.map((item: any, index: any) => {
          const slug = item.title.replace(/\s+/g, "-").toLowerCase();
          console.log("card", { item });
          return (
            <>
              {/* <SwiperSlide
                  key={item?.slug}
                  className=""
                  onMouseEnter={() => setPopUp(item._id)}
                  onMouseLeave={() => setPopUp("")}
                > */}
              <Link
                href={`/product/${item?.slug}`}
                key={index}
                className="h-[300px] block rounded-xl bg-white shadow-md"
              >
                <div className="cursor-pointer relative h-[100%] block pb-[20px]">
                  <div className=" h-[100%] ">
                    <div className="relative after:bg-gradient-to-r after:from-black after:rounded-t-xl overflow-hidden	 after:absolute after:w-[100%] after:h-[100%]    after:top-[0px] after:left-[0px]">
                      <Image
                        className="rounded-t-xl h-[120px] w-full object-cover object-top"
                        src={item?.courseImage}
                        alt={"image"}
                        width={380}
                        height={60}
                        objectFit="cover"
                      />

                      <div
                        className="z-[1] absolute shadow-lg shadow-black-500/50 top-[40%] left-[20px] bg-[#fff] rounded-[5px] p-[3px] "
                        style={{
                          transform: "translate(0%, -30%)",
                        }}
                      >
                        <Image
                          className="rounded-[5px]"
                          src={item?.universityLogo}
                          alt={"image"}
                          width={100}
                          height={50}
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="contentbox p-[25px] pt-[10px]">
                        <div className="flex justify-between">
                          <Badgechip className={"text-[#31bf82] bg-[#ebfcf7]"}>
                            {item?.customCategory[0]?.label}
                          </Badgechip>
                          {/* <div className="flex gap-2">
                            <div>
                              <Image
                                src={"/png/rating.png"}
                                alt="rating"
                                width={15}
                                height={15}
                              />
                            </div>
                            <span className="text-[12px]">4.9 (25)</span>
                          </div> */}
                        </div>
                        <h3 className="text-[16px] font-semibold mt-2 line-clamp-2">
                          {item?.courseBranch[0]?.label}
                        </h3>
                        <h3 className="text-[12px]  mt-2 line-clamp-2">
                          {item?.title}
                        </h3>
                        <div className="mt-2 flex gap-[10px] items-center">
                          <span className="">
                            <Image
                              src="/svg/news-line.svg"
                              alt="rating"
                              width={17}
                              height={17}
                            />
                          </span>
                          <span className="text-[14px]">
                            {item?.customCategory[0]?.label}
                          </span>
                        </div>
                        <div className="mt-2 flex gap-[10px] items-center">
                          <span className="">
                            <Image
                              src="/svg/calendar-todo-fill.svg"
                              alt="rating"
                              width={17}
                              height={17}
                            />
                          </span>
                          <span className="text-[14px]">{item.duration}</span>
                        </div>
                      </div>
                      <div className="border-t-1 px-[30px] align-center text-center w-full py-2">
                        <div className="text-[#2467ec] cursor-pointer ">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                        className={`absolute  z-[9]   ${
                          popUp === item._id ? "block" : "hidden"
                        }
                           top-[0px] left-[0px] w-[100%] h-[100%]  p-[15px]   flex-1`}
                      >
                        <div className="bg-[#f1f5f9] rounded-[5px] p-[10px] w-[100%] h-[100%]">
                          <div
                            className="line-clamp-5"
                            dangerouslySetInnerHTML={{
                              __html: item?.description.replace(/"/g, ""),
                            }}
                          ></div>

                          <div className="">
                            {listArray?.map((value: any, ind: any) => {
                              return (
                                <div className="flex gap-2 my-1" key={ind}>
                                  <div>
                                    <Image
                                      src={"/check.png"}
                                      alt="check"
                                      width={12}
                                      height={12}
                                    />
                                  </div>
                                  <span className="text-xs">{value.list}</span>
                                </div>
                              );
                            })}
                          </div>
                          <div className="my-4 mb-">
                            <Button
                              text={"View Details"}
                              className={
                                " bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg  text-white font-medium m-auto  "
                              }
                            />
                          </div>
                        </div>
                      </div> */}
                </div>
              </Link>
              {/* </SwiperSlide> */}
            </>
          );
        })}
        {/* </Swiper> */}
      </div>
    </>
  );
};
export default CourseStaticCardWith;
