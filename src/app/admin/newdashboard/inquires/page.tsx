"use client";
import React from "react";
import SideBarLayout from "../ui/sidebarlayout/page";
import Tbody from "@/app/components/Tbody";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const FreeCourseList = () => {
  const [response, setResponse] = React.useState<any>([]);

  const getAllInquiryData = async () => {
    const data = await axios.get("/api/inquiry");
    if (data.status === 200) {
      console.log("data inquiry", data);
      setResponse(data?.data);
    }
  };

  React.useEffect(() => {
    getAllInquiryData();
  }, []);

  console.log("response data", { response });

  const downloadExcel = (data: any[], fileName: string) => {
    // Convert JSON data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    // Create a Blob from the buffer
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    // Use FileSaver to save the Blob as a file
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <>
      <SideBarLayout>
        <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
          <div className="bg-white dark:bg-dark-card shadow  rounded-md w-full relative">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-700 p-4 dark:text-slate-300/70">
              <h4 className="font-medium text-lg">All Inquires</h4>
              <button
                onClick={() => downloadExcel(response, "UserData")}
                className="bg-[#002e5e] text-[#fff] px-[20px] py-[10px] uppercase !rounded-none"
                style={{
                  display: "block",
                  marginTop: "20px",
                }}
              >
                Download Excel
              </button>
            </div>
            <div className="grid grid-cols-1 p-4">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                  <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    {/* <Tbody response={response} /> */}
                    <div className="dataTable-container">
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
export default FreeCourseList;
