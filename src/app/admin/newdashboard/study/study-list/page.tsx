import Image from "next/image";
import React, { useState } from "react";
import SideBarLayout from "../../ui/sidebarlayout/page";

import { connect } from "@/app/dbConfig";
import FreeMaster from "@/app/models/freeMaster";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Courses from "@/app/models/coursesModels";
import DeleteBlogButton from "@/app/components/blog/DeleteBlogButton";
import Study from "@/app/models/studyAbroad";

const getAllStudy = async () => {
  try {
    connect();
    const study = await Study.find();
    return study;
  } catch (error) {
    return error;
  }
};

const Page = async () => {
  const response: any = await getAllStudy();
  return (
    <>
      <SideBarLayout>
        <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
          <div className="bg-white dark:bg-dark-card shadow  rounded-md w-full relative">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-700 p-4 dark:text-slate-300/70">
              <h4 className="font-medium text-lg">Study List</h4>
              <Link href="/admin/newdashboard/study/create_study">
                <button className="bg-blue-700 rounded-[5px] hover:bg-blue-900 text-[#fff] py-[5px] px-[15px] text-[15px]">
                  Study List
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
                                Study Image
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                University Name
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                University Course
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
                          {response?.map((course: any, index: any) => {
                            const id = course?._id.toString();

                            return (
                              <React.Fragment key={course?._id}>
                                <tr className="bg-white border-b border-dashed dark:bg-dark-card dark:border-gray-700">
                                  <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                    <Image
                                      src={course?.courseImage}
                                      width={50}
                                      height={50}
                                      alt="blog"
                                    />
                                  </td>
                                  <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-black">
                                    {course?.title}
                                  </td>
                                  <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-black">
                                    {course?.courseBranch[0]?.label}
                                  </td>

                                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                    <div className="flex gap-[10px]">
                                      <Link
                                        href={`/admin/newdashboard/study/update-study/${course?.id}`}
                                        className=" hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
                                      >
                                        <Image
                                          src="/edit-box-line.svg"
                                          width={15}
                                          height={15}
                                          alt="edit"
                                        />
                                      </Link>

                                      <DeleteBlogButton id={id} model="study" />
                                    </div>
                                  </td>
                                </tr>
                              </React.Fragment>
                            );
                          })}
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

export default Page;
