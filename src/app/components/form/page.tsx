"use client";
import Image from "next/image";
import { useState } from "react";

const FormUI = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="max-w-[400px] z-0 rounded-[10px] border-[1px] border-slate-200 bg-slate-100 relative p-[20px]">
        <h3 className="text-[20px] font-[600] mb-[10px]">Career Counseling</h3>
        <div className="formbox flex flex-col gap-[10px]">
          <div className="max-w-sm space-y-3">
            <input
              type="text"
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm "
              placeholder="Name :"
            />
          </div>
          <div className="max-w-sm space-y-3">
            <input
              type="text"
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
              placeholder="Mobile No :"
            />
          </div>
          <div className="max-w-sm space-y-3">
            <input
              type="email"
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
              placeholder="Email id :"
            />
          </div>
          <div className="max-w-sm space-y-3">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
            >
              <option value="">Work Experience in years</option>
              <option value="">Currently a college student</option>
              <option value="0 Years">0 Years</option>
              <option value="1 Year">1 Year</option>
              <option value="1-2 Year">1-2 Year</option>
              <option value="2-3 Year">2-3 Year</option>
              <option value="3-4 Year">3-4 Year</option>
              <option value="4-5 Year">4-5 Year</option>
            </select>
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
    </>
  );
};

export default FormUI;
