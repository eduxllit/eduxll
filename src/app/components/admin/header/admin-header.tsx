"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeaderAdmin = () => {
  const [submenu, setSubmenu] = useState("");
  const router = useRouter();
  {submenu === "Courses" ? router.push("/admin/courses") : ""}
  {submenu === "Blogs" ? router.push("/admin/blogs") : ""}
  const toggleSidebar = (value: any) => {
    setSubmenu(value)
    //   submenu === "" ? setSubmenu(value) : submenu===value ? "" : setSubmenu("");
      // {submenu === "Pages" ?  : ""}
    };
  return (
    <div>
      <div className="w-[270px] h-[95vh] border shadow-xl p-2">
        {sidebarCollection?.map((item, index) => {
          return (
            <div
              className="cursor-pointer mb-2 rounded-md hover:bg-black hover:text-white p-2"
              key={index}
              onClick={() => toggleSidebar(item.title)}
            >
              <div className=" flex justify-between">
                <h2>{item.title}</h2>
                <Image
                  src={"/svg/arrow-down.svg"}
                  alt="arrow-down"
                  width={12}
                  height={12}
                />
              </div>
              {/* {submenu === item.title && (
                <>
                  {item.subMenu !== null && (
                    <ul className="p-2 mt-2">
                      {item?.subMenu?.map((value, ind) => {
                        return (
                          <li key={ind} className="mb-2">
                            {value.title}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HeaderAdmin;
const sidebarCollection = [
  {
    title: "Courses",
   submenu:null
  },
  {
    title: "Blogs",
    subMenu: null,
  },
  
];
