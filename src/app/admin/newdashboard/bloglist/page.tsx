import React from "react";
import SideBarLayout from "../ui/sidebarlayout/page";
import Image from "next/image";
import Blog from "@/app/models/blogModels";
import { connect } from "@/app/dbConfig";
import Link from "next/link";
import DeleteBlogButton from "@/app/components/blog/DeleteBlogButton";

const getAllBlogs = async () => {
  try {
    connect();
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    return error;
  }
};



const BlogList = async () => {
  const response: any = await getAllBlogs();
  return (
    <>
      <SideBarLayout>
        <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
          <div className="bg-white dark:bg-dark-card shadow  rounded-md w-full relative">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-700 p-4 dark:text-slate-300/70">
              <h4 className="font-medium text-lg">Blog List</h4>
              <Link href="/admin/newdashboard/create-blog">
                <button className="bg-blue-700 rounded-[5px] hover:bg-blue-900 text-[#fff] py-[5px] px-[15px] text-[15px]">
                  Create Blog
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 p-4">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                  <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    <div className="dataTable-container">
                      <table
                        className="w-full border-collapse dataTable-table"
                        id="datatable_1"
                      >
                        <thead className="bg-gray-50 dark:bg-gray-700/10">
                          <tr>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Blog Image
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Blog Slug
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase asc">
                              <a href="#" className="dataTable-sorter">
                                Blog Name
                              </a>
                            </th>
                            {/* <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Blog Description
                              </a>
                            </th> */}
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Category
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Action
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {response?.map((blogs: any, index: any) => (
                            <>
                              <tr className="bg-white border-b border-dashed dark:bg-dark-card dark:border-gray-700">
                                <td
                                  className="p-3 text-sm font-medium whitespace-nowrap dark:text-white"
                                  key={index}
                                >
                                  <Image
                                    src={blogs?.featureImage}
                                    width={50}
                                    height={50}
                                    alt="blog"
                                  />
                                  {/* {blogs?.featuredImage} */}
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-blue">
                                  <div
                                    className="titlemet titlemet line-clamp-1 max-w-[200px]"
                                    title={blogs?.slug}
                                  >
                                    {blogs?.slug}
                                  </div>
                                </td>
                                <td className="p-3  text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div
                                    className="titlemet line-clamp-1 max-w-[200px]"
                                    title={blogs?.title}
                                  >
                                    {blogs?.title}
                                  </div>
                                </td>
                                {/* <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: blogs?.content,
                                    }}
                                  />
                                </td> */}
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {blogs?.category}
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div className="flex gap-[10px]">
                                    
                                    <Link
                                      href={`/admin/newdashboard/bloglist/edit-blog/${blogs?.slug}`}
                                      className=" hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer"

                                    >
                                      <Image
                                        src="/edit-box-line.svg"
                                        width={15}
                                        height={15}
                                        alt="edit"
                                      />
                                    </Link>

                                    <DeleteBlogButton id={blogs?._id} model='blog'/>
                                    {/* <a
                                      href="#"
                                      className=" hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
                                    >
                                      <Image
                                        src="/delete-bin-line.svg"
                                        width={15}
                                        height={15}
                                        alt="delete"
                                      />
                                    </a> */}
                                  </div>
                                </td>
                              </tr>
                            </>
                          ))}
                          {response?.map((blog: any, index: any) => {
                            
                            return <></>;
                          })}
                          {/* <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                              Donald Gardner
                            </td>
                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              xyx@gmail.com
                            </td>
                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              +123456789
                            </td>
                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <span className="bg-indigo-600/5 text-indigo-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                New Lead
                              </span>
                            </td>
                            <td></td> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBarLayout>
    </>
  );
};
export default BlogList;
