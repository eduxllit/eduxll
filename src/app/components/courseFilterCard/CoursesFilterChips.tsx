'use client'
import React, { useState } from 'react'

const CoursesFilterChips = () => {
      
  const [filteractive, setfilteractive] = useState<any>("View All");
  const activeTab = (item: any) => {
    setfilteractive(item);
  };
  return (
    <div className="md:flex  grid grid-cols-3 gap-[45px] mb-[10px]">
            {Coursesfilter.map((item, index) => {
              return (
                  <div
                    key={index}
                    onClick={() => activeTab(item)}
                    className={`${
                      filteractive?.tabname === item.tabname
                        ? "  after:w-full    after:transition-all transition-all  after:h-[2px] after:bg-[#ed1d26] after:absolute relative after:left-[0] after:bottom-[0px] text-[#ed1d26]"
                        : ""
                    } `}
                  >
                    {item.tabname}
                  </div>
                
              );
            })}
          </div>
  )
}

export default CoursesFilterChips

const Coursesfilter = [
    { tabname: "View All" },
    { tabname: "Data Science" },
    { tabname: "Development" },
    { tabname: "Business" },
    { tabname: "Life Styles" },
  ];
  