import HeaderLayout from "@/app/components/headerLayout/HeaderLayout";
import RelatedBlogs from "@/app/components/related-blogs/related-blogs";
import { connect } from "@/app/dbConfig";
import Blog from "@/app/models/blogModels";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// const getSingleBlog = async (slug: string) => {
//   connect();
//   try {
//     const blog = await Blog.findOne({ slug });
//     return blog;
//   } catch (error) {
//     return error;
//   }
// };

const getSingleBlog = async (slug: string) => {
  try {
    connect();
    const blog = await Blog.findOne({ slug });
    return blog;
  } catch (error) {
    return error;
  }
};

const News = async ({ params }: any) => {
  const paramA = params.id;
  const response = await getSingleBlog(paramA);
  console.log(params, "check kro bhai");

  return (
    <>
      <HeaderLayout>
        <section className=" singleblog flex items-center justify-center w-[100%] before:absolute relative h-[250px] before:w-[100%] before:h-[100%] before:left-[0px] before:top-[0px]  before:bg-gradient-to-r before:from-[#00000096] before:via-[#00000096] before:to-[#00000096] ">
          <h1 className="   ">{response?.title}</h1>
        </section>

        <section>
          <div className="md:max-w-[1000px] w-[100%] mx-auto px-[15px] py-[50px]   ">
            <div className="flex gap-[30px]">
              <div className="blogcontent flex-1 w-[100%]">
                <div className="blogcontentbox">
                  <img
                    src={response?.featureImage}
                    alt="936-Highest-Paying-Non-IT-Jobs-in-India"
                  />
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: response?.content.replace(/"/g, ""),
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* <div className="blogright max-w-[300] w-[300px] "> */}
              {/* <div className="forms ">
                  <div className="max-w-[400px] rounded-[10px] border-[1px] border-slate-200 bg-slate-100  p-[20px]">
                    <h3 className="text-[20px] font-[600] mb-[10px]">
                      Career Counseling
                    </h3>
                    <div className="formbox flex flex-col gap-[10px]">
                      <div className="max-w-sm space-y-3">
                        <input
                          type="text"
                          className="py-[7px] px-[20px] block w-full border border-[#9f9f9f] rounded-[5px] text-sm "
                          placeholder="Name :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <input
                          type="text"
                          className="py-[7px] px-[20px] block w-full border border-[#9f9f9f] rounded-[5px] text-sm"
                          placeholder="Mobile No :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <input
                          type="email"
                          className="py-[7px] px-[20px] block w-full border border-[#9f9f9f] rounded-[5px] text-sm"
                          placeholder="Email id :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <input
                          type="text"
                          className="py-[7px] px-[20px] block w-full border border-[#9f9f9f] rounded-[5px] text-sm"
                          placeholder="Course :"
                        />
                      </div>
                      <div className="max-w-sm space-y-3">
                        <textarea
                          className="py-[7px] px-[20px] block w-full border border-[#9f9f9f] rounded-[5px] text-sm"
                          placeholder="Massage :"
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

              {/* <div className="ourtrendingcourses rounded-[10px] mt-[30px] p-[15px] bg-[#f9f8f8]">
                  <div className="box">
                    <h4 className="border-b-[1px] border-[#efefef] py-[10px] mb-[10px] ">
                      Our Trending Blogs
                    </h4>
                    <ul className="flex flex-col gap-[15px]">
                      <RelatedBlogs />
                    </ul>

                    <Link
                      href="#"
                      className="text-[13px] text-[red] text-center block cursor-pointer"
                    >
                      All View
                    </Link>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </section>

        <section className="px-[15px] py-[50px] bg-[#f9f8f8]">
          <div className="ourtrendingcourses    md:max-w-[1200px] w-[100%] mx-auto  ">
            <div className="box">
              <h2 className="text-center text-3xl font-semibold mb-[16px]">
                Our Trending Blogs
              </h2>
              <ul className="grid grid-cols-3 max-sm:grid-cols-1 gap-[15px]">
                <RelatedBlogs />
              </ul>
            </div>
          </div>
        </section>
      </HeaderLayout>
    </>
  );
};

export default News;

const ourtrendingcoursesarry = [
  {
    image: "/course/course-img-01.jpg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/course/course-img-01.jpg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/course/course-img-01.jpg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/course/course-img-01.jpg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
