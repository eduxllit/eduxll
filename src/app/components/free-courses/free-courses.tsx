"use client";
import Image from "next/image";
import Badgechip from "../badge";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slidernav1 from "../slidernav";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BadgeChip from "../badge";

const FreeCoursesSlider = () => {
  const [popUp, setPopUp] = useState("");
  const [filteractive, setfilteractive] = useState<any>("View All");
  console.log("filteractive", { filteractive });

  const activeTab = (item: any) => {
    setfilteractive(item);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };


    handleResize();

  
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <section className="   lg:px-0 sm:px-6">
        <div className=" md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="flex justify-between items-center"></div>
          <div className="md:flex hidden grid grid-cols-3 gap-[45px] mb-[10px]">
            {/* {Coursesfilter.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => activeTab(item)}
                    className={`${
                      filteractive?.tabname === item.tabname
                        ? "  after:w-full    after:transition-all transition-all  after:h-[2px] after:bg-[#ed1d26] after:absolute relative after:left-[0] after:bottom-[0px] text-[#ed1d26]"
                        : ""
                    } `}
                  >
                    {item.tabname}
                  </div>
                </>
              );
            })} */}
          </div>

          <div className="relative ">
            <Slidernav1 navfix="2" />

            <Swiper
              slidesPerView={isMobile ? 1 : 3.2}
              spaceBetween={15}
              className="mySwiper2 width-100 "
              navigation={{
                nextEl: ".review2-swiper-button-next",
                prevEl: ".review2-swiper-button-prev",
              }}
              grid={{
                rows: 2,
              }}
              modules={[Navigation]}
            >
              {bestSellerArray?.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="relative   mb-[20px]"
                    onMouseEnter={() => setPopUp(item.key)}
                    onMouseLeave={() => setPopUp("")}
                  >
                    <div>
                      <div className=" rounded-xl overflow-hidden bg-white shadow-md hover:shadow-md">
                        <div className="relative after:bg-gradient-to-r after:from-black after:rounded-t-xl overflow-hidden	 after:absolute after:w-[100%] after:h-[100%]    after:top-[0px] after:left-[0px]">
                          <Image
                            className="rounded-t-xl h-[120px] w-full object-cover object-top"
                            src={item.imageUrl}
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
                              src={item.logo}
                              alt={"image"}
                              width={100}
                              height={50}
                              objectFit="cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="contentbox p-[25px] pt-[10px]">
                            <h3 className="text-[16px] font-semibold mt-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm mt-2">{item.content}</p>

                            <div className="flex gap-2 items-center mt-4">
                              <div>
                                <Image
                                  src={"/book-open-line.svg"}
                                  alt="book"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              <span>{item.courses} Courses</span>
                            </div>
                          </div>
                          <div className="border-t-1 px-[30px] align-center text-center w-full py-2">
                            <div className="text-[#2467ec] cursor-pointer ">
                              View Details
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default FreeCoursesSlider;

const bestSellerArray = [
  {
    key: "cardOne",
    imageUrl: "/best-seller/01.jpg",
    logo: "/logoslider/1.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardTwo",
    imageUrl: "/best-seller/02.jpg",
    logo: "/logoslider/2.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardThree",

    imageUrl: "/best-seller/03.jpg",
    logo: "/logoslider/3.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardFourth",

    imageUrl: "/best-seller/04.jpg",
    logo: "/logoslider/4.webp",
    badge: "Development",
    book: "/book.png",
    title: "Gen AI & ChatGPT",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardFifth",

    imageUrl: "/best-seller/05.jpg",
    logo: "/logoslider/5.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardSixth",

    imageUrl: "/best-seller/06.jpg",
    logo: "/logoslider/6.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
];
const listArray = [
  {
    list: "Scratch to HTML",
  },
  {
    list: "Learn how to code in Python",
  },
  {
    list: "Unlimited backend database creation",
  },
  {
    list: "Adobe XD Tutorials",
  },
];
