"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Slidernav1 from "../slidernav";
import { Swiper, SwiperSlide } from "swiper/react";
import BadgeChip from "../badge";
import { enumToValue } from "@/app/utils/enum";
import {
  BachelorBranch,
  CertificateBranch,
  CourseFilter,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantData";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

interface SideMenuCardboxProp {
  listArray?: any;
  activeTab?: string;
  activeCourseBranch?: string;
  setActiveCourseBranch?: any;
}

const MobileMenuList = ({
  listArray,
  activeTab,
  activeCourseBranch,
  setActiveCourseBranch,
}: SideMenuCardboxProp) => {
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

  const router = useRouter();

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

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const showMoreCard = isFeatured?.filter((item: any, index: number) => {
    return index > 7;
  });

  const selectedCard = isFeatured?.filter((item: any, index: number) => {
    return index <= 7;
  });

  console.log("nestedFilter", { nestedFilter });

  return (
    <>
      <div className="flex flex-wrap relative tabsliderlayout   gap-[10px] gap-y-[5px] my-[10px] px-[10px] mx-[25px]">
        {nestedFilter?.length > 0 && <Slidernav1 navfix="3" navsize="25" />}

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          className="mySwiper3 width-100"
          navigation={{
            nextEl: ".review3-swiper-button-next",
            prevEl: ".review3-swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {nestedFilter.map((item, index) => {
            console.log("chip ko dikho", { item });
            return (
              <>
                <SwiperSlide key={item?.label}>
                  {enumToValue(item?.label) && (
                    <BadgeChip
                      // need to active the chip by default if the value is same as activeCourseBranch value
                      theme={
                        item?.value == activeCourseBranch
                          ? "success"
                          : "default"
                      }
                      size="medium"
                      key={index}
                      onClick={() => setActiveCourseBranch(item?.value)}
                      className="cursor-pointer"
                    >
                      {/* {item?.label} */}
                      {enumToValue(item?.label)}
                    </BadgeChip>
                  )}
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
      <div className="flex flex-col gap-[5px]">
        {selectedCard?.map((item: any, index: number) => {
          const slug = item.title.replace(/\s+/g, "-").toLowerCase();
          return (
            <>
              <div
                key={index}
                className="hover:bg-[#d5d5d5] m-auto bg-[#ebebeb] flex items-center gap-[10px] border border-[#000] rounded-[5px] border-t border-slate-100 dark:border-slate-400/10 p-[10px] cursor-pointer w-full"
                onClick={() => router.push(`/product/${item?.slug}`)}
              >
                <div className="logo h-[70px] w-[70px]">
                  <Image
                    src={item.courseImage || "/logo/IBM-Logo-Blk---Square.png"}
                    width={70}
                    height={70}
                    alt=""
                    objectFit="cover"
                    className=" rounded-[5px] object-cover h-full w-[70]"
                  />
                </div>
                <div className="contentbox flex-1">
                  <h4 className="text-[15px] font-[500] text-[#000] p-0 m-0">
                    {item.courseBranch[0]?.label}
                  </h4>
                  <h4 className="text-[13px] font-[400] text-[#000] p-0 m-0 mt-[5px]">
                    {item.title.substring(0, 40)}
                  </h4>
                  {/* <p className="text-[13px] font-[400] text-[#6e6d6d] p-0 m-0">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description
                          .substring(0, 40)
                          .replace(/<[^>]*>/g, ""),
                      }}
                    ></div>
                  </p> */}
                </div>
              </div>
            </>
          );
        })}

        {showMore &&
          showMoreCard?.map((item: any, index: number) => {
            const slug = item.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <>
                <div
                  key={index}
                  className="hover:bg-[#d5d5d5] m-auto bg-[#ebebeb] flex items-center gap-[10px] border border-[#000] rounded-[5px] border-t border-slate-100 dark:border-slate-400/10 p-[10px] cursor-pointer w-full"
                  onClick={() => router.push(`/product/${item?.slug}`)}
                >
                  <div className="logo h-[70px] w-[70px]">
                    <Image
                      src={
                        item.courseImage || "/logo/IBM-Logo-Blk---Square.png"
                      }
                      width={70}
                      height={70}
                      alt=""
                      objectFit="cover"
                      className=" rounded-[5px] object-cover h-full w-[70]"
                    />
                  </div>
                  <div className="contentbox flex-1">
                    <h4 className="text-[15px] font-[500] text-[#000] p-0 m-0">
                      {item.courseBranch[0]?.label}
                    </h4>
                    <h4 className="text-[13px] font-[400] text-[#000] p-0 m-0 mt-[5px]">
                      {item.title.substring(0, 40)}
                    </h4>
                    {/* <p className="text-[13px] font-[400] text-[#6e6d6d] p-0 m-0">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description
                          .substring(0, 40)
                          .replace(/<[^>]*>/g, ""),
                      }}
                    ></div>
                  </p> */}
                  </div>
                </div>
              </>
            );
          })}
      </div>

      <a
        className="flex items-center justify-center cursor-pointer w-[100%] text-center text-[#ed1e27] text-[15px] font-[500] mt-[15px] align-center"
        onClick={handleShowMore}
      >
        {selectedCard.length > 7 && (showMore ? "Show Less" : "Show More")}
      </a>
    </>
  );
};
export default MobileMenuList;
