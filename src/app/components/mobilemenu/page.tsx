"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BachelorBranch,
  CertificateBranch,
  CourseFilter,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantData";
import MobileMenuList from "./mobileMenuList";
import CourseCard from "../courseCard/index";
import page from "@/app/page";

const MobileMenu = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [activeTab, setActiveTab] = useState("");

  const [colorMagic, setCOlorMagic] = useState("");
  const [activeCourseBranch, setActiveCourseBranch] = useState("");

  return (
    <>
      <div>
        <h3 className="pt-[15px] mb-0 text-[18px] font-[500] text-[#cf3917] p-0 m-[5px]  ">
          Course
        </h3>

        <div className="flex flex-col justify-start items-start self-stretch gap-[5px] ">
          {CourseFilter?.map((item, index) => {
            return (
              <>
                <div
                  className={`w-[100%] ${
                    activeTab === item?.value
                      ? "border-red-500 border rounded-[10px] rounded-b-[0px]"
                      : "A"
                  }`}
                >
                  <div
                    key={index}
                    onClick={() => {
                      setActiveTab(item?.value), setActiveCourseBranch("");
                      handleToggle();

                      if (activeTab === item?.value) {
                        setActiveTab("");
                      }
                    }}
                    className={`
                  
                  ${activeTab === item?.value ? "rounded-b-[0px]" : ""}
                  
                  ${
                    activeTab === item?.value
                      ? ` py-[10px] px-[14px] border-[1px] w-[100%] rounded-[10px] border-inherit 
                      ${
                        activeTab === "view-all"
                          ? "bg-[#fdbebf] border-[#fdbebf] text-[#ea1d22]"
                          : activeTab === "master"
                          ? "bg-yellow-100 border-yellow-100 text-yellow-800"
                          : activeTab === "bachelor"
                          ? "bg-green-100 border-green-100 text-green-800"
                          : activeTab === "certificate"
                          ? "bg-purple-100 border-purple-100 text-purple-800"
                          : ""
                      }`
                      : `py-[10px] px-[14px] border-[1px] w-[100%] rounded-[10px] border-inherit ${
                          colorMagic === item?.value &&
                          colorMagic === "view-all"
                            ? "bg-[#fdbebf] border-[#fdbebf] text-[#ea1d22]"
                            : colorMagic === item?.value &&
                              colorMagic === "master"
                            ? "bg-yellow-100 border-yellow-100 text-yellow-800"
                            : colorMagic === item?.value &&
                              colorMagic === "bachelor"
                            ? "bg-green-100 border-green-100 text-green-800"
                            : colorMagic === item?.value &&
                              colorMagic === "certificate"
                            ? "bg-purple-100 border-purple-100 text-purple-800"
                            : ""
                        }`
                  }     `}
                    onMouseEnter={() => setCOlorMagic(item?.value)}
                  >
                    <p className="flex justify-between items-center  text-[14px] text-[#333333] leading-[14px] ">
                      {item.label}

                      <Image
                        src="/arrow-drop-right-line.svg"
                        width={25}
                        height={22}
                        alt={"right"}
                      />
                    </p>
                  </div>
                  {activeTab === item?.value && (
                    <>
                      <MobileMenuList
                        activeTab={activeTab}
                        activeCourseBranch={activeCourseBranch}
                        setActiveCourseBranch={setActiveCourseBranch}
                      />
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>

        <h3 className="pt-[15px] mb-0 text-[18px] font-[500] text-[#cf3917] p-0 m-[5px] ">
          Pages
        </h3>
        <div className="flex flex-col justify-start items-start self-stretch gap-[5px] ">
          {pagearray?.map((pages, index) => {
            return (
              <>
                <div
                  key={index}
                  className="  py-[10px] px-[14px] border-[1px] w-[100%] rounded-[10px] border-inherit"
                >
                  <a
                    href={pages.link}
                    className="flex justify-between items-center h-[25px]  text-[14px] text-[#333333] leading-[14px] "
                  >
                    {pages.pages}
                  </a>
                </div>
              </>
            );
          })}
        </div>

        <h3 className="pt-[15px] mb-0 text-[18px] font-[500] text-[#cf3917] p-0 m-[5px] ">
          Still unsure?
        </h3>

        <div className="  py-[10px] px-[14px] border-[1px] w-[100%] rounded-[10px] border-inherit">
          <a className="flex justify-between items-center h-[25px]  text-[14px] text-[#333333] leading-[14px] ">
            Get a 1:1 Counselling for FREE
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

const mobilemenuparentsarry = [
  {
    navname: "MBA",
    submenu: [
      { subnavname: "BBA" },
      { subnavname: "BBA" },
      { subnavname: "BBA" },
      { subnavname: "BBA" },
      { subnavname: "BBA" },
      { subnavname: "BBA" },
      { subnavname: "BBA" },
      { subnavname: "BBA" },
      { subnavname: "BBA" },
    ],
  },
  {
    navname: "MBA",
  },
  {
    navname: "MBA",
  },
  {
    navname: "MBA",
  },
  {
    navname: "MBA",
  },
];

const pagearray = [
  {
    pages: "Study Abroad",
    link: "/study-abroad",
  },
  {
    pages: "Career Support",
    link: "careersupport",
  },
  {
    pages: "About us",
    link: "/about-us/",
  },
  {
    pages: "Blogs",
    link: "/blogs/",
  },
  {
    pages: "Contact us",
    link: "/contact-us/",
  },
];
