"use client";
import Image from "next/image";
import SideBarLayout from "../ui/sidebarlayout/page";
import React, { useState } from "react";

const Page = () => {
  return (
    <>
      <SideBarLayout>
        <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
          <div className="bg-white dark:bg-dark-card shadow  rounded-md w-full relative">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-700 p-4 dark:text-slate-300/70">
              <h4 className="font-medium text-lg">Course List</h4>
              <button className="bg-blue-700 rounded-[5px] hover:bg-blue-900 text-[#fff] py-[5px] px-[15px] text-[15px]">
                Create Course
              </button>
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
                                Lead
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Email
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase asc">
                              <a href="#" className="dataTable-sorter">
                                Phone No
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Status
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
                          <tr className="bg-white border-b border-dashed dark:bg-dark-card dark:border-gray-700">
                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
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
                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <div className="flex gap-[10px]">
                                <a
                                  href="#"
                                  className="cursor-pointer hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center "
                                >
                                  <Image
                                    src="/edit-box-line.svg"
                                    width={15}
                                    height={15}
                                    alt="edit"
                                  />
                                </a>
                                <a
                                  href="#"
                                  className="cursor-pointer hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center "
                                >
                                  <Image
                                    src="/delete-bin-line.svg"
                                    width={15}
                                    height={15}
                                    alt="delete"
                                  />
                                </a>
                              </div>
                            </td>
                          </tr>
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
