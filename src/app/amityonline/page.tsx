"use client";
import Head from "next/head";
import InfoSection from "./infosection";
import UniqueAdvantages from "./uniqueadvantages";
import Listitem from "./list";
import IndustryMentors from "./industrymentors";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Slidernav1 from "../components/slidernav";
import { useEffect, useState } from "react";
import TestimonialsCard from "./Testimonials";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import FormUI from "../components/form/FormUI";
import { useRouter } from "next/navigation";

const AmityOnline = () => {
  const mobileSize = 500;
  const desktopsize = 501;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [openPopup, setOpenPopup] = useState(false);

  const router = useRouter(); 
  const handleRoute = () => {
    router.push("/amityonline/amity-thank-you");
  };


  return (
    <>
      {openPopup && (
        <div className="fixed backdrop-blur-md top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center">
          <div className="w-[350px] relative">
            <FormUI
              heading="Apply Now"
              className={"!gap-6"}
              setOpenPopup={setOpenPopup}
              handleRoute={handleRoute}
            />
            <div
              className="w-6 h-6 flex justify-center items-center bg-white border rounded-full absolute top-2 right-2 cursor-pointer"
              onClick={() => setOpenPopup(false)}
            >
              <span className="mt-[-4px]">x</span>
            </div>
          </div>
        </div>
      )}
      <div className="relative flex flex-col    bannersection">
        <div className="header relative z-[9] max-w-[1230px] w-[100%] flex-1 m-auto py-[20px] max-sm:px-[15px]">
          <div>
            <img
              src="/amityonline/logo.png"
              alt=""
              className="logo-wrapper max-h-[260px] h-[60px]"
            />
          </div>
        </div>

        <div className="banner-bg absolute top-0 left-0 h-[100%] w-[100%] max-sm:relative">
          <img
            src="/amityonline/banner3.jpg"
            alt=""
            className="h-[500px] w-[100%] object-cover max-sm:h-[160px] "
          />
        </div>

        <div className="banner-block relative pt-[0px] pr-[60px] pl-[60px] pb-[40px] w-[100%] z-[3]  h-[400px] flex  items-center max-sm:p-0 max-sm:h-auto">
          <div className="w-[66%] px-[12px] max-sm:px-0 max-sm:w-[100%] ">
            <div className="flex w-[100%]">
              <div className="w-[100%]">
                <div className="w-[100%] banner-caption bg-[#ffaa1766] flex items-start flex-col p-[5%]">
                  <h2 className="text-[#002e5e] amithh tracking-[-1px] font-[500] max-sm:text-[20px] text-[50px]  uppercase   leading-[1.2]">
                    Shape your future with <br /> Online Degree programmes
                  </h2>
                  <Button
                    onClick={() => setOpenPopup(true)}
                    className="bg-[#002e5e] text-[#fff] px-[20px] py-[10px] uppercase !rounded-none"
                  >
                    Apply now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#002e5e] py-[20px]">
        <div className="max-w-[1140px]   m-auto w-[100%] flex flex-col items-center max-sm:px-[15px] ">
          <h4 className="text-[#fff] mb-[0] amithh text-center max-sm:text-[20px]">
            Online Degrees are equivalent to Offline Degrees*
          </h4>
          <p className="text-[#fff] text-[12px] mb-[0] ">
            *As per UGC Notification dated Sep 2, 2022.
          </p>
        </div>
      </section>

      <section className="bg-[url('/amityonline/usp-bg.jpg')] py-[60px] bg-cover max-sm:hidden">
        <div className="max-w-[1140px] m-auto w-[100%] ">
          <div className="flex justify-center mb-[]">
            <h2
              className="amithh relative text-[#002e5e] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]
            before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]
            "
            >
              WHY CHOOSE US
            </h2>
          </div>

          <div className="box flex flex-wrap">
            <div className="w-[100%]">
              <div className="flex justify-center">
                <a
                  href="#"
                  className=" flex-col flex items-center justify-center p-[10px] rounded-[100px]"
                >
                  <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div>
                  {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                  <div>
                    <h5 className="text-[15px] text-center font-[500] mb-[8px]">
                      Top Indian & <br /> Global Faculty
                    </h5>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-[100%] flex justify-center">
              <div className="usp-block flex flex-col justify-between">
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-end justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp2.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-right font-[500] mb-[8px]">
                        Choose the way you <br />
                        want to learn
                      </h5>
                    </div>
                  </a>
                </div>
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-end justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp3.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-right font-[500] mb-[8px]">
                        Flexible <br />
                        payment options
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
              <div className="usp-img-block flex justify-center	">
                <div className="usp-img-wrapper relative p-[20px] before:w-[100%] before:h-[100%] before:absolute before:top-[0px] before:left-[0px] before:rounded-[100%] rounded-[100%] before:border-[3px] before:border-[#ffaa17]">
                  <div className="usp-img w-[350px] h-[350px] border-[#002e5e] border-[2px] border-dashed relative overflow-hidden rounded-[100%]">
                    <img src="/amityonline/girl.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="usp-block flex flex-col justify-between">
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-start justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp4.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-left font-[500] mb-[8px]">
                        Career Services for <br />
                        Job Readiness
                      </h5>
                    </div>
                  </a>
                </div>
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-start justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp5.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-left font-[500] mb-[8px]">
                        Placement <br />
                        Assistance
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="flex justify-center">
                <a
                  href="#"
                  className=" flex-col flex items-center justify-center p-[10px] rounded-[100px]"
                >
                  <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp6.png" alt="" />
                  </div>
                  {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                  <div>
                    <h5 className="text-[15px] text-center font-[500] mb-[8px]">
                      Online to <br />
                      Offline connect
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#002e5e09] py-[80px]  max-sm:py-[15px] max-sm:px-[15px]">
        <div className="max-w-[1140px]   m-auto w-[100%]">
          <div className="grid grid-cols-2 gap-[15px] max-sm:grid-cols-1">
            {InfoSectionarray?.map((item, index) => {
              return (
                <>
                  <InfoSection
                    key={index}
                    image={item.image}
                    heading={item.heading}
                    content={item.content}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fff] py-[80px] max-sm:py-[15px] max-sm:px-[15px]">
        <div className="max-w-[1140px]   m-auto w-[100%]">
          <div className="flex justify-center mb-[20px]">
            <h2 className="amithh max-sm:text-[20px] max-sm:leading-[26px] max-sm:mb-0 relative text-[#002e5e] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]   before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]   ">
              OUR UNIQUE ADVANTAGES
            </h2>
          </div>

          <div className="grid grid-cols-6 gap-[15px] UniqueAdvantages max-sm:grid-cols-1">
            {UniqueAdvantagesarry?.map((item, index) => {
              return (
                <>
                  <UniqueAdvantages
                    key={index}
                    image={item.image}
                    title={item.title}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#002e5e09] py-[80px] max-sm:py-[15px] max-sm:px-[15px]">
        <div className="max-w-[1000px]   m-auto w-[100%]">
          <div className="flex justify-center mb-[20px]">
            <h2 className="amithh max-sm:text-[20px] max-sm:leading-[26px] max-sm:mb-0 relative text-[#002e5e] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]   before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]   ">
              OUR PROGRAMMES
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[30px] OURPROGRAMMES max-sm:grid-cols-1">
            <div className="w-[100%] flex-1 h-[100%]">
              <div className="box shadow-md bg-[#fff] h-[100%]">
                <div className="bg-[#ffaa17] px-[20px] py-[10px] text-[#002e5e] text-[16px] font-[600]">
                  UG Degree Programmes
                </div>
                <div className="outerlistbox p-[30px]">
                  {UGarry?.map((item, index) => {
                    return (
                      <>
                        <Listitem key={index} listname={item.text} />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-[100%] flex-1 h-[100%]">
              <div className="box shadow-md bg-[#fff]">
                <div className="bg-[#ffaa17] px-[20px] py-[10px] text-[#002e5e] text-[16px] font-[600]">
                  PG Degree Programmes
                </div>
                <div className="outerlistbox p-[30px]">
                  {PGarry?.map((item, index) => {
                    return (
                      <>
                        <Listitem key={index} listname={item.text} />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justfiy-center mt-[20px]">
            <Button
              onClick={() => setOpenPopup(true)}
              className="m-auto bg-[#002e5e] text-[#fff] px-[20px] py-[10px] uppercase hover:bg-[#ffaa17] hover:text-[#002e5e] !rounded-none"
            >
              Apply now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#fff] py-[80px] max-sm:py-[15px] max-sm:px-[30px]">
        <div className="max-w-[1140px]   m-auto w-[100%]">
          <div className="flex justify-center mb-[20px]">
            <h2 className="amithh  max-sm:text-[20px] max-sm:leading-[26px] max-sm:mb-0 relative text-[#002e5e] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]   before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]   ">
              INDUSTRY MENTORS
            </h2>
          </div>

          <div className="relative">
            <Slidernav1 navfix="4" navsize="40" />

            <Swiper
              slidesPerView={isMobile ? 1 : 5}
              spaceBetween={30}
              loop={true}
              height={287}
              className="mySwiper4 width-100"
              navigation={{
                nextEl: ".review4-swiper-button-next",
                prevEl: ".review4-swiper-button-prev",
              }}
              modules={[Navigation, Pagination]}
            >
              {IndustryMentorsarry?.map((items, index) => {
                return (
                  <>
                    <SwiperSlide key={index} className="h-[287px]">
                      <IndustryMentors
                        key={index}
                        image={items.image}
                        title={items.title}
                        position={items.position}
                      />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-[#002e5e] py-[60px] max-sm:py-[15px] max-sm:px-[30px]">
        <div className="max-w-[1140px]   m-auto w-[100%]">
          <div className="flex justify-center mb-[20px]">
            <h2 className="amithh max-sm:text-[20px] max-sm:leading-[26px] max-sm:mb-0 relative text-[#fff] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]   before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]   ">
              Testimonials
            </h2>
          </div>

          <div className="relative">
            <Slidernav1 navfix="3" navsize="40" />

            <Swiper
              slidesPerView={isMobile ? 1 : 2}
              spaceBetween={30}
              loop={true}
              height={287}
              className="mySwiper3 width-100"
              navigation={{
                nextEl: ".review3-swiper-button-next",
                prevEl: ".review3-swiper-button-prev",
              }}
              modules={[Navigation, Pagination]}
            >
              {TestimonialsCardarray?.map((items, index) => {
                return (
                  <>
                    <SwiperSlide
                      key={index}
                      className="!h-[280px] max-sm:!h-auto"
                    >
                      <TestimonialsCard
                        key={index}
                        content={items.content}
                        position={items.position}
                        username={items.username}
                      />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-[#002e5e11] py-[60px] max-sm:py-[15px] max-sm:px-[30px]">
        <div className="max-w-[1140px]   m-auto w-[100%]">
          <div className="flex justify-center mb-[20px]">
            <h2 className="amithh max-sm:text-[20px] max-sm:leading-[26px] max-sm:mb-0 relative text-[#002e5e] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]   before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]   ">
              OUR ALUMNI WORKING AT
            </h2>
          </div>

          <div className="relative">
            <Slidernav1 navfix="5" navsize="40" />

            <Swiper
              slidesPerView={isMobile ? 2 : 6}
              spaceBetween={30}
              loop={true}
              height={287}
              className="mySwiper5 width-100"
              navigation={{
                nextEl: ".review5-swiper-button-next",
                prevEl: ".review5-swiper-button-prev",
              }}
              modules={[Navigation, Pagination]}
            >
              {WORKINGArray?.map((items, index) => {
                return (
                  <>
                    <SwiperSlide key={index}>
                      <div className="bg-[#fff] rounded-[10px] py-[10px] px-[20px] shadow-md">
                        <Image
                          src={items.logoimage}
                          alt={""}
                          width={117}
                          height={61}
                          className="object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-[#ffaa17] py-[60px] max-sm:py-[15px] max-sm:px-[30px]">
        <div className="max-w-[1140px]   m-auto w-[100%]">
          <div className="flex  max-sm:block">
            <div className="w-[58%] max-sm:w-full">
              <div className="flex justify-center mb-[20px]">
                <h2 className="amithh max-sm:text-[20px] max-sm:leading-[26px] max-sm:mb-0 relative text-[#002e5e] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]   before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]   ">
                  OUR ALUMNI WORKING AT
                </h2>
              </div>
              <p className="text-justify text-[#333] text-[16px] font-[400] mb-[16px]">
                Amity University Online is devoted to creating a transformative
                learning environment, a digital classroom with true mobility and
                access to education from anywhere, inheriting Amity’s vision of
                building the nation through education. Amity University Online
                is India’s first university recognized by UGC to offer Online
                Degree, Diploma & Certification programs.
              </p>
              <p className="text-justify text-[#333] text-[16px] font-[400] mb-[16px]">
                These career-oriented programs are specially designed for
                working professionals offering futuristic learning experiences
                on our awarded LMS, along with face to face interactions, live
                sessions, webinars, video lectures & one-to-one session with
                faculty, designed and delivered by over 6000 eminent corporate
                experts and faculties.
              </p>
            </div>
            <div className="w-[33%] max-sm:w-full">
              <div className="grid grid-cols-3 gap-[15px] max-w-[320px] mt-[77px] mr-0 ml-auto">
                {FooterLogo?.map((items, index) => {
                  return (
                    <>
                      <div className="" key={index}>
                        <Image
                          src={items.imageurl}
                          alt={"fgd"}
                          width={103}
                          height={130}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#002e5e] py-[20px]">
        <div className="max-w-[1140px] flex   m-auto w-[100%]">
          <Button
            onClick={() => setOpenPopup(true)}
            className="m-auto bg-[#002e5e] text-[#fff] px-[20px] py-[10px] uppercase hover:bg-[#ffaa17] hover:text-[#002e5e] !rounded-none"
          >
            Apply now
          </Button>
        </div>
      </footer>
    </>
  );
};

export default AmityOnline;

const InfoSectionarray = [
  {
    image: "/amityonline/usp1.png",
    heading: "Top Indian & Global Faculty",
    content:
      "You will learn from the best at Amity Online, as we impart world-class education in the true sense with our faculty who have rich academic and industry experience",
  },
  {
    image: "/amityonline/usp2.png",
    heading: "Choose the way you want to learn",
    content:
      "Enhance your learning potential by creating your own customised learning combination of printed books, audio books, e-books, video content and campus library",
  },
  {
    image: "/amityonline/usp3.png",
    heading: "Career Services for Job Readiness",
    content:
      "From resume building sessions and masterclass for interview preparation, you go from pursuing your degree to being job-ready.",
  },
  {
    image: "/amityonline/usp4.png",
    heading: "Placement Assistance",
    content:
      "Placement opportunities with over 300+ hiring partners from diverse domains makes getting a job a seamless experience after your degreee.",
  },
  {
    image: "/amityonline/usp5.png",
    heading: "Flexible payment options",
    content:
      "At Amity Online, we offer payment options through credit and debit cards as well as 0% cost EMI options through our partner EDUVANZ.",
  },
  {
    image: "/amityonline/usp6.png",
    heading: "Online to Offline connect",
    content:
      "Offline campus-orientation programs, access to libraries of Amity campus worldwide, Physical books to cater to conventional learning habit of Indians",
  },
];

const UniqueAdvantagesarry = [
  {
    image: "/amityonline/advantage1.png",
    title: "India' first  AI-enabled Prof. AMI",
  },
  {
    image: "/amityonline/advantage2.png",
    title: "Books delivered at your doorstep ",
  },
  {
    image: "/amityonline/advantage5.png",
    title: " Dedicated Academic Advisor",
  },
  {
    image: "/amityonline/advantage4.png",
    title: "Audio books to make you learn on the go",
  },
  {
    image: "/amityonline/advantage5.png",
    title: "Access to Amity University Campus Library globally",
  },
  {
    image: "/amityonline/advantage4.png",
    title: "2,50,000 Global Alumni Network",
  },
];

const UGarry = [
  { text: " Bachelor of Business Administration" },
  { text: " Bachelor of Computer Applications" },
  { text: " Bachelor of Commerce" },
  { text: " Bachelor of Information Technology (Hons)" },
  { text: " Bachelor of Arts" },
  { text: " Bachelor of Arts (Journalism & Mass Communication)" },
];
const PGarry = [
  { text: "Master of Business Administration " },
  { text: "Master of Computer Applications " },
  { text: "Master of Commerce " },
  { text: "Master of Arts (Journalism & Mass Communication) " },
  { text: "Master of Information Technology " },
  { text: "Master of Arts (Public Policy & Governance) " },
  { text: "Master of Science (Environmental Science) " },
];

const IndustryMentorsarry = [
  {
    image: "/amityonline/anshuman-tiwari.png",
    title: "Anshuman Tiwari",
    position: "Director, Global Delivery DXC Technology",
  },

  {
    image: "/amityonline/gaurav-chopra.png",
    title: "Gaurav Chopra",
    position: "Global HR Leader, Asia Pacific Allianz Partners",
  },
  {
    image: "/amityonline/rajdeep-sahrawat.png",
    title: "Rajdeep Sahrawat",
    position: "Director, Deloitte Touche Tohmatsu India LLP",
  },
  {
    image: "/amityonline/avelo-roy.png",
    title: "Avelo Roy",
    position: "Managing Director & CEO, Nearify",
  },
  {
    image: "/amityonline/vairavan-thangavelu.png",
    title: "Vairavan Thangavelu",
    position: "DGM - Finance, Arcee electronics",
  },
  {
    image: "/amityonline/deepak-chakravarty.png",
    title: "Deepak Chakravarty",
    position: "General Manager - Bata India",
  },
  {
    image: "/amityonline/sandeep-golchha.png",
    title: "Sandeep Golchha",
    position: "Senior Partner, Axsource",
  },
  {
    image: "/amityonline/rajdeep-das.png",
    title: "Rajdeep Das",
    position: "CEO, Peters Surgical",
  },
  {
    image: "/amityonline/rajeev-batra.png",
    title: "Rajeev Batra",
    position: "Director - Product Engineer, United Health Group",
  },
  {
    image: "/amityonline/naveen-kejriwal.png",
    title: "Naveen Kejriwal",
    position:
      "General Manager- ASIA | Ex- HP | Ex- Cadbury | Ex- Nokia| Speaker",
  },
  {
    image: "/amityonline/anand-rao.png",
    title: "Anand Rao Moram",
    position: "Senior Director, Delhivery",
  },
  {
    image: "/amityonline/naresh-atreya.png",
    title: "Naresh Atreya",
    position: "Head Operations & Compliances, Shiv Nadar Foundation",
  },
  {
    image: "/amityonline/tanu-dang.png",
    title: "Dr. Tanu Dang",
    position: "Professor, KMCUAF University",
  },
  {
    image: "/amityonline/arun-prasad.png",
    title: "Arun Prasad Keshri",
    position: "Vice President - HR | Ex- British Telecom India - Head HR",
  },
  {
    image: "/amityonline/samrat-mandal.png",
    title: "Samrat Mandal",
    position: "Director - HR | Ex- Colt Technologies, Sr. Lead HR",
  },
  {
    image: "/amityonline/gautam-vijh.png",
    title: "Gautam Vijh",
    position: "Avp Talent Management CPA Global",
  },
  {
    image: "/amityonline/ankush-gadi.png",
    title: "Ankush Gadi",
    position: "Director - Data Business & Analytics  CRISIL LTD",
  },
  {
    image: "/amityonline/deepak-saxena.png",
    title: "Deepak Saxena",
    position:
      "Partner, ADN & Partners (Advocates, Solicitors & Legal Consultants)  Legal Prisn",
  },
  {
    image: "/amityonline/anuraag-srivastava.png",
    title: "Anuraag Srivastava",
    position: "CFO, Sterlite Group",
  },
  {
    image: "/amityonline/prakash-sharma.png",
    title: "Anuraag Srivastava",
    position: "CFO, NSDC",
  },
  {
    image: "/amityonline/rajiv-ghosh.png",
    title: "Rajiv Ghosh",
    position: "CEO, Selvel One Group",
  },
  {
    image: "/amityonline/sudhir-aggarwal.png",
    title: "Sudhir Aggarwal",
    position: "Chief Strategy Officer, Silver Touch technologies Ltd.",
  },
  {
    image: "/amityonline/indroneel-goho.png",
    title: "Indroneel Goho",
    position:
      "CEO - Darjeeling Organic Tea Estates, Ex Joint MD - IFB Agro Darjeeling Organic Tea ",
  },
];

const TestimonialsCardarray = [
  {
    content:
      "Amity University Online has crafted programmes keeping in mind the busy working schedule for working professionals. The study materials are in depth and comprehensive. Thanks to all the faculties for conducting really insightful sessions.",
    position: "Ajit Varghese",
    username: "Wipro Technologies, Amity Alumni",
  },
  {
    content:
      "Amity University Online is the best platform for working professionals who want to study without quitting their job. Their interactive learning content, recorded lectures by eminent faculty and industry interactions gives you an edge over others. I would highly recommend AUO to people who want to grow in their career.",
    position: "Avishi",
    username: "Edtech Company, Amity Alumni",
  },
  {
    content:
      "I chose Amity Online to brush up my management skills in the area of Finance & Accounting in order to climb up the ladder of success in my current job role. I found the course curriculum to be very effective in meeting industry standards. The presence of expert faculty and support from the management made the overall experience a wonderful one.",
    position: "Aavya Sidhu",
    username: "Senior Manager, Tata Power",
  },
  {
    content:
      "Amity Online has exceeded my expectations of what an online program can offer. The courses are well defined and thought through. Initially I had few concerns regarding my work schedule and keeping up with the course, but my program was flexible and could easily be combined with my demanding job. My journey with Amity has been memorable.",
    position: "Rakhi Singha",
    username: "Cabin Crew, Spice jet",
  },
];

const WORKINGArray = [
  { logoimage: "/amityonline/alumini8.png" },
  { logoimage: "/amityonline/alumini9.png" },
  { logoimage: "/amityonline/alumini10.png" },
  { logoimage: "/amityonline/alumini11.png" },
  { logoimage: "/amityonline/alumini12.png" },
  { logoimage: "/amityonline/alumini13.png" },
  { logoimage: "/amityonline/alumini14.png" },
  { logoimage: "/amityonline/alumini15.png" },
  { logoimage: "/amityonline/alumini16.png" },
  { logoimage: "/amityonline/alumini17.png" },
  { logoimage: "/amityonline/alumini18.png" },
  { logoimage: "/amityonline/alumini19.png" },
  { logoimage: "/amityonline/alumini20.png" },
  { logoimage: "/amityonline/alumini21.png" },
  { logoimage: "/amityonline/alumini22.png" },
  { logoimage: "/amityonline/alumini23.png" },
  { logoimage: "/amityonline/alumini24.png" },
  { logoimage: "/amityonline/alumini25.png" },
  { logoimage: "/amityonline/alumini26.png" },
  { logoimage: "/amityonline/alumini27.png" },
  { logoimage: "/amityonline/alumini28.png" },
  { logoimage: "/amityonline/alumini29.png" },
  { logoimage: "/amityonline/alumini30.png" },
];

const FooterLogo = [
  {
    imageurl: "/amityonline/accre1.jpg",
  },
  {
    imageurl: "/amityonline/accre2.jpg",
  },
  {
    imageurl: "/amityonline/accre3.jpg",
  },
  {
    imageurl: "/amityonline/accre4.jpg",
  },
  {
    imageurl: "/amityonline/accre5.jpg",
  },
];
