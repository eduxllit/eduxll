import React from "react";
import SideBarLayout from "../ui/sidebarlayout/page";
import Image from "next/image";
import { connect } from "@/app/dbConfig";
import Link from "next/link";
import DeleteBlogButton from "@/app/components/blog/DeleteBlogButton";
import DeleteFreeCourseButton from "@/app/components/free-Course/DeleteFreeCourseButton";
import Inquiry from "../../../models/inquiryModel";
import Tbody from "@/app/components/Tbody";

const getAllInquires = async () => {
  try {
    await connect();
    const inquires = await Inquiry.find();
    return inquires;
  } catch (error) {
    return error;
  }
};

const FreeCourseList = async () => {
  const response: any = await getAllInquires();
  console.log("response inquires", { response });

  return (
    <>
      <SideBarLayout>
        <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
          <div className="bg-white dark:bg-dark-card shadow  rounded-md w-full relative">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-700 p-4 dark:text-slate-300/70">
              <h4 className="font-medium text-lg">All Inquires</h4>
            </div>
            <div className="grid grid-cols-1 p-4">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                  <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    <Tbody response={response} />
                    {/* <div className="dataTable-container">
                      <table
                        className="w-full border-collapse dataTable-table"
                        id="datatable_1"
                      >
                        <thead className="bg-gray-50 dark:bg-gray-700/10">
                          <tr>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                User Name
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase asc">
                              <a href="#" className="dataTable-sorter">
                                User Email
                              </a>
                            </th> 
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                User Phone Number
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Work Status
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Course Name
                              </a>
                            </th>
                            <th className="p-3 text-xs font-medium tracking-wider text-start text-gray-700 dark:text-gray-400 uppercase">
                              <a href="#" className="dataTable-sorter">
                                Action
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <Tbody response={response} />
                        
                      </table>
                    </div> */}
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
export default FreeCourseList;
