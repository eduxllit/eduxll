"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./components/button/Button";
import LogoSlider from "./components/logoslider";
import BestCourses from "./components/bestCourses";
import Banner from "./components/banner/banner";
import CoursesBox from "./components/courses-box/courses-box";
import ReviewSlider from "./components/review-slider/review-slider";
import LatestNews from "./components/latest-news/latest-news";
import RecruitersSlider from "./components/logoslider/Recruiters";
import NewsSlider from "./components/logoslider/News";
import AbroadCourses from "./components/Abroad";
import FreeCoursesSlider from "./components/free-courses/free-courses";
import HeaderLayout from "./components/headerLayout/HeaderLayout";
import Blog from "@/app/models/blogModels";
import { connect } from "./dbConfig";
import News from "./models/newsModels";
import Link from "next/link";
import axios from "axios";
import FreecoursesNew from "./components/free-courses/free-coursesnew/page";
import Head from "next/head";

const page = () => {
  // const [resNews, setResNews] = useState<any>([]);

  // const getAllNews= async ()=>{
  //   const data = await axios.get('/api/news')
  //   if(data.status === 200){
  //     setResNews(data?.data)
  //   }
  // }

  // useEffect(()=>{
  //   getAllNews()
  // }, [])

  return (
    <HeaderLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div>
        <Banner />
      </div>

      <LogoSlider />
      <BestCourses />

      <AbroadCourses />
      <div className="bg-[url('/blue-bg.png')] bg-contain">
        <div className="md:max-w-[1230px] w-[100%] mx-auto px-[15px] py-12 grid lg:grid-cols-3 md:grid-cols-2     gap-10">
          <div className="flex gap-6 items-center">
            <div>
              <Image src="/learn.png" alt="learn" width={60} height={60} />
            </div>
            <h3 className="sm:text-[20px]  leading-6 text-md tracking-wide font-semibold text-white flex-1">
              Learn new skills from a wide array of courses
            </h3>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <Image
                src="/certificate.png"
                alt="learn"
                width={60}
                height={60}
              />
            </div>
            <h3 className="sm:text-[20px]  	leading-6 text-md tracking-wide font-semibold text-white flex-1">
              Gain accredited degrees and certificates
            </h3>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <Image src="/anywhere.png" alt="learn" width={60} height={60} />
            </div>
            <h3 className="sm:text-[20px]  	leading-6 text-md tracking-wide font-semibold text-white flex-1">
              Educate yourself anywhere, anytime, 24/7
            </h3>
          </div>
        </div>
      </div>
      <div className="  my-12 lg:px-0 px-4">
        <div className="md:flex justify-between mb-8 md:max-w-[1200px] w-[100%] mx-auto px-[15px]">
          <div>
            <h2 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[10px]">
              Top categories
            </h2>
            <p className="text-[16px] font-[500]">
              Browse our courses, select your favourites, and start learning
              with us!
            </p>
          </div>
          {/* <div className="md:mt-0 mt-8">
            <Button
              text={"View All Categories"}
              className="justify-center items-center gap-spacing8 inline-flex whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg shadow-cta text-white font-medium px-spacing24 py-spacing14 md:py-spacing10 z-10 min-w-124px"
            ></Button>
          </div> */}
        </div>
        <section className="my-12">
          <CoursesBox />
        </section>
        <section>
          <div className="lg:flex grid gap-10 md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
            <div className="relative">
              <Image src={"/girl.jpg"} alt="image" width={630} height={270} />
              <div className="absolute sm:top-[20%] top-[2%] left-[3%] ">
                <span className="font-semibold text-2xl text-[#2467ec] max-sm:text-[15px]">
                  Start Now
                </span>
                <h3 className="sm:text-[20px] text-[10px] font-semibold md:mt-4 mt-2 md:mb-6 mb-2">
                  Become a mentor and disseminate <br /> your knowledge.
                </h3>
                <Link href="/contact-us">
                  <button className="sm:text-md text-[12px] bg-gradient-to-r from-[#ee2c3c] to-[#da202f] text-white font-medium   text-white sm:px-6 px-4 sm:py-2 py-1 rounded-md">
                    Let&apos;s Connect
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image src={"/cpl.jpg"} alt="image" width={630} height={270} />
              <div className="absolute sm:top-[20%] top-[2%] left-[3%] ">
                <span className="font-semibold text-2xl text-[#2467ec] max-sm:text-[15px] ">
                  Explore your rewards!
                </span>
                <h3 className="sm:text-[20px] text-[10px] font-semibold md:mt-4 mt-2 md:mb-6 mb-2">
                  Sustain competitiveness in <br /> your centers of excellence
                </h3>
                <Link href="/contact-us">
                  <button className="bg-[#2467EC] sm:text-md text-[12px] text-white sm:px-6 px-4 sm:py-2 py-1 rounded-md">
                    Refer and Earn
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="sm:mt-12 sm:mb-12 mt-12 mb-0 md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <h2 className="text-center text-3xl font-semibold sm:text-[35px]   max-sm:text-[24px]">
            What Students <br />
            Think and Say About eduxLL
          </h2>
          <ReviewSlider />
        </div>
        {/* <section className="sm:py-[50px] py-[20px] bg-[#fcf1f5]">
          <div className="  md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
            <h2 className="text-center text-3xl font-semibold">
              Start with our Free Courses
            </h2>
            <p className="my-2 text-center">
              Earn certifications by upskilling with 750+ Hours of learning
              content taught by <br /> academic and industry experts
            </p>

            <FreecoursesNew />
            <div className="mt-[20px] w-full text-center">
              <Link
                href={"/free-courses"}
                className={
                  " bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg shadow-cta text-white font-medium px-spacing24 py-spacing14 md:py-spacing10 z-10 min-w-124px py-[8px] px-[16px] "
                }
              >
                View All Free Courses
              </Link>
            </div>
          </div>
        </section> */}
        <div>
          <LatestNews />
        </div>
      </div>

      <div className="my-[30px] md:max-w-[1200px] w-[100%] mx-auto px-[15px]  ">
        <Image src="/attendimage.png" width={1200} height={200} alt="" />
      </div>

      <div className="block md:grid  grid-cols-1 md:max-w-[1200px] w-[100%] mx-auto px-[15px] mb-[30px]">
        <div className="w-[100%]">
          <div>
            <h2 className="text-3xl font-semibold mb-[16px] text-center">
              edu<span className="text-[red]">XLL</span> in the News
            </h2>
            <NewsSlider />
          </div>
        </div>
        {/* <div className="w-[100%]">
          <div>
            <h2 className="text-3xl font-semibold mb-[16px] text-center">
              Our Top Recruiters
            </h2>
            <RecruitersSlider />
          </div>
        </div> */}
      </div>
    </HeaderLayout>
  );
};

export default page;
