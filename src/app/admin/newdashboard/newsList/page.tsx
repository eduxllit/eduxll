import React from "react";
import SideBarLayout from "../ui/sidebarlayout/page";
import Image from "next/image";
import { connect } from "@/app/dbConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
import News from "@/app/models/newsModels";
import DeleteNewsButton from "@/app/components/news/DeleteNewsButton";
const getAllNews = async () => {
  try {
    connect();
    const news = await News.find();
    return news;
  } catch (error) {
    return error;
  }
};

const NewsList = async () => {
  const response: any = await getAllNews();

  return (
    <>
      <SideBarLayout>
        <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
          <div className="bg-white dark:bg-dark-card shadow  rounded-md w-full relative">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-700 p-4 dark:text-slate-300/70">
              <h4 className="font-medium text-lg">News List</h4>
              <Link href="/admin/newdashboard/create-news">
                <button className="bg-blue-700 rounded-[5px] hover:bg-blue-900 text-[#fff] py-[5px] px-[15px] text-[15px]">
                  Create News
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
                                News Image
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase asc">
                              <a href="#" className="dataTable-sorter">
                                News Name
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Category
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                News link
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
                            
                              <tr key ={blogs?._id} className="bg-white border-b border-dashed dark:bg-dark-card dark:border-gray-700">
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
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {blogs?.title}
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {blogs?.category}
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {blogs?.link}
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div className="flex gap-[10px]">
                                  <Link
                                      href={`/admin/newdashboard/newsList/edit-news/${blogs?.slug}`}
                                      className=" hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer"

                                    >
                                      <Image
                                        src="/edit-box-line.svg"
                                        width={15}
                                        height={15}
                                        alt="edit"
                                      />
                                    </Link>
                                    <DeleteNewsButton id={blogs?._id} model='news'/>
                                    {/* <a
                                      href="#"
                                      className="cursor-pointer hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
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
                            
                          ))}
                          {response?.map((blog: any, index: any) => {
                            console.log("blog  list", { blog });
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
export default NewsList;
