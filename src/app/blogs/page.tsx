"use client";
import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import Button from "../components/button/Button";
import LatestNews from "../components/latest-news/latest-news";
import { connect } from "../dbConfig";
import Blog from "../models/blogModels";
import { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogData, setBlogData] = useState<any>([]);

  const getAllBlogsData = async () => {
    const data = await axios.get("/api/blog");
    if (data.status === 200) {
      setBlogData(data?.data);
    }
  };

  useEffect(() => {
    getAllBlogsData();
  }, []);

  const filterBlogData = blogData?.filter((item: any) => {
    return item?.customCategory[0]?.value === "blogs";
  });

  return (
    <div className="bg-[#e2e8f0]">
      <HeaderLayout>
        <div className="h-[400px]   relative bg-[url('/65e8a443d3a217849e428432_dhruv-hero-image.png')] bg-no-repeat bg-cover">
          <div className="sm:pr-12 pr-4 lg:pl-32 pl-4 py-8 bg-gradient-to-r from-black to-transparent h-full">
            {/* <div className="flex gap-2 text-white">
            <Link href={"/"} className="cursor-pointer text-[#dbd8d8]">
              Home
            </Link>
            <span> {">"} </span>
            <span>Blogs</span>
          </div> */}
            <div className="sm:absolute  mt-[100px] z-[9]">
              <div className="text-white max-w-[720px] lg:px-20 sm:pl-8 pl-2 sm:mt-0 mt-4 grid sm:gap-6 gap-2">
                <h2 className="sm:text-3xl text-xl font-semibold">
                  Read Our Latest Blogs
                </h2>
                <p className="sm:text-md text-sm">
                  Are you someone who is - Feeling stuck in your job? Ambitious
                  to continue learning? Not sure what’s next for you in your
                  career? Our FREE masterclasses with leading industry leaders
                  is exactly what you need!
                </p>
                {/* <button className="bg-red-500 w-fit sm:px-16 px-4 sm:py-4 py-2 rounded-md sm:font-semibold tracking-wide">
                REGISTER NOW
              </button> */}
              </div>
              {/* <div className="bg-white max-w-[1140px] lg:ml-20 sm:mx-8 mx-2 md:h-[100px] rounded-md shadow-md text-black grid md:grid-cols-4 grid-cols-2 gap-4 py-4 md:px-8 px-4 font-semibold mt-4 md:text-[16px] text-xs">
              <span>FREE registration</span>
              <span>Best-in-class industry experts</span>
              <span>Live hands-on learning</span>
              <span>1-1 career counselling</span>
            </div> */}
            </div>
          </div>
        </div>
        <div className="my-16">
          {/* <LatestNews response={response} /> */}
          <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
            <div className="relative"></div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {filterBlogData?.map((item: any, index: any) => {
                return (
                  <div
                    className="max-w-[410px] rounded-xl bg-white shadow-md hover:shadow-xl cursor-pointer"
                    key={index}
                  >
                    <Link href={`/blogs/${item.slug}`}>
                      <div className="h-[230px]">
                        <Image
                          className="rounded-xl h-[230px] object-cover"
                          src={item.featureImage}
                          alt={"image"}
                          width={410}
                          height={230}
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <div className="contentbox p-[30px]">
                          {/* <div className="flex justify-between">
                          <div className="flex gap-2">
                            <div>
                              <Image
                                src={"/calendar.png"}
                                alt="calendar"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="text-sm">20 Jan 2022</span>
                          </div>
                          <div className="flex gap-2">
                            <div>
                              <Image
                                src={"/png/user.png"}
                                alt="user"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="text-sm">Mark Hanry</span>
                          </div>
                        </div> */}
                          <div>
                            <h3 className="text-[16px] font-semibold mb-4">
                              {item?.title}
                            </h3>
                            <Link href={`/blogs/${item.slug}`}>
                              <Button
                                text={"Read more"}
                                className={
                                  "   bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg   text-white font-medium     min-w-124px"
                                }
                              />
                            </Link>
                            {/* 
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.content as string,
                              }}
                            /> */}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </HeaderLayout>
    </div>
  );
};
export default Blogs;
