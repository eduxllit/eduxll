"use client";
import Image from "next/image";
import React, { useState } from "react";

const SideBarLayout = ({ children }: any) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [isSidemenu, setIsSidemenu] = useState(false);
  const handleSidemenu = () => {
    setIsSidemenu(!isSidemenu);
  };
  return (
    <>
      <div className="wrapperbox">
        <div
          className={` ${
            isSidemenu ? "w-[70px] max-w-[70px]" : "w-[280px] max-w-[280px]"
          } 
            sidebarlayout  border-r-[1px] border-slate-200  h-[100vh]  fixed overflow-hidden top-[0] botttom-[0]	`}
        >
          <div className="innerbar">
            <div className="logoimage h-[55px] p-[10px]  border-b-[1px] border-slate-200">
              {isSidemenu ? (
                <>
                  {" "}
                  <Image
                    src={"/logoicon.jpg"}
                    width={50}
                    height={50}
                    alt="bar"
                    className="ml-auto mr-auto  h-[30px] object-contain	"
                  />
                </>
              ) : (
                <>
                  {" "}
                  <Image
                    src={"/logo.webp"}
                    width={115}
                    height={50}
                    alt="bar"
                    className="ml-auto mr-auto"
                  />
                </>
              )}
            </div>

            <div className="sidebar-menu mt-[30px]">
              <ul className="sidebarlist px-[10px]">
                {navlist?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="nav px-[15px] py-[10px] hover:bg-slate-200  rounded-[3px]"
                    >
                      <a
                        href={item.query}
                        className="flex items-center gap-[10px] "
                      >
                        <div className="icon">
                          <Image
                            src={item.SvgIcon}
                            width={20}
                            height={20}
                            alt={item.text}
                          />
                        </div>
                        {isSidemenu ? (
                          <></>
                        ) : (
                          <>
                            {" "}
                            <span> {item.text}</span>
                          </>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={` ${
            isSidemenu ? "pl-[70px]" : "pl-[280px]"
          } rightbarlayout `}
        >
          <div className="header z-10 sticky top-[0] h-[55px] flex justify-between flex-1 items-center bg-[#fff] px-[20px]  border-b-[1px] border-slate-200">
            <div className="barwithsearch">
              <div
                className="cursor-pointer hover:bg-slate-200 rounded-[50px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
                onClick={handleSidemenu}
              >
                <Image
                  src={"/menu-2-line.svg"}
                  width={25}
                  height={25}
                  alt="bar"
                />
              </div>
              <div className="searchbox"></div>
            </div>
            <div className="nav-right flex items-center	 gap-[10px] relative">
              <div
                onClick={handleToggle}
                className="userimage w-[30px] h-[30px] rounded-[50px] border-[1px] border-[#727272] p-[5px] "
              >
                <Image src="/user-line.svg" width={30} height={30} alt="user" />
              </div>
              {/* {isToggled ? (
                <> */}
              <div className="relative">
                <a href="#" className="text-sm text-gray-700">
                  Logout
                </a>
              </div>
              {/* </>
              ) : null} */}
            </div>
          </div>

          <div className="p-[20px] bg-slate-100  min-h-[calc(100vh-56px)] ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBarLayout;

const navlist = [
  {
    SvgIcon: "/dashboard-3-line.svg",
    text: "Dashboard",
    query: "/admin/newdashboard",
    active: ["home"],
    subMenu: [],
  },

  {
    SvgIcon: "/news-line.svg",
    text: "Blog List",
    query: "/admin/newdashboard/bloglist",
    active: ["home"],
    subMenu: [],
  },
  {
    SvgIcon: "/news-line.svg",
    text: "News List / Recruiters List",
    query: "/admin/newdashboard/newsList",
    active: ["home"],
    subMenu: [],
  },

  {
    SvgIcon: "/booklet-line.svg",
    text: "Course List",
    query: "/admin/newdashboard/course/course-list",
    active: ["home"],
    subMenu: [],
  },
  {
    SvgIcon: "/booklet-line.svg",
    text: "Study List",
    query: "/admin/newdashboard/study/study-list",
    active: ["home"],
    subMenu: [],
  },

  {
    SvgIcon: "/user-voice-line.svg",
    text: "Free Master List",
    query: "/admin/newdashboard/freeMaster/freemasterlist",
    active: ["home"],
    subMenu: [],
  },
  {
    SvgIcon: "/user-voice-line.svg",
    text: "Webinar",
    query: "/admin/newdashboard/webinar/webinarlist",
    // query: "/admin/newdashboard/webinar/webinarlist",
    active: ["home"],
    subMenu: [],
  },
  {
    SvgIcon: "/news-line.svg",
    text: "Free Course List",
    query: "/admin/newdashboard/free-course",
    active: ["home"],
    subMenu: [],
  },
  {
    SvgIcon: "/user-voice-line.svg",
    text: "Inquiry List",
    query: "/admin/newdashboard/inquires",
    active: ["home"],
    subMenu: [],
  },
];
