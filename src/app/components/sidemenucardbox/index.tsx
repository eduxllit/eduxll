"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SideMenuCardboxProp {
  listArray?: any;
  activeTab?: string;
  activeCourseBranch?: string;
}

const SideMenuCardbox = ({
  listArray,
  activeTab,
  activeCourseBranch,
}: SideMenuCardboxProp) => {
  const [data, setData] = useState<any>([]);
  const [popUp, setPopUp] = useState("");

  const getAllCourses = async () => {
    // if active tab is view all then fetch all courses
    if (activeTab === "view-all") {
      const data = await axios.get("/api/course");
      if (data.status === 200) {
        setData(data?.data);
      }
    } else {
      const data = await axios.get(`/api/course?category=${activeTab}`);
      if (data.status === 200) {
        setData(data?.data);
      }
    }
  };

  useEffect(() => {
    getAllCourses();
  }, [activeTab]);

  const getNestedCoursesbyBranch = async () => {
    const data = await axios.get(`/api/course/branch/${activeCourseBranch}`);
    console.log("test sgwg", data);
    if (data.status === 200) {
      setData(data?.data);
    }
  };

  useEffect(() => {
    if (activeCourseBranch) {
      getNestedCoursesbyBranch();
    }
  }, [activeCourseBranch]);

  const isFeatured = data?.filter(
    (item: any) => item?.featureCategoryInsert[0]?.value === "latest-card"
  );

  const router = useRouter();

  // need only 7 items at one time and when user click on view all then show all items
  const selectedCard = isFeatured?.filter((item: any, index: number) => {
    return index <= 7;
  });

  // need only 7 card items at one time and when user click on show more button then show all items

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const showMoreCard = isFeatured?.filter((item: any, index: number) => {
    return index > 7;
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-[10px]">
        {selectedCard?.map((item: any, index: number) => {
          const slug = item.title.replace(/\s+/g, "-").toLowerCase();
          return (
            <>
              <div
                key={index}
                className="hover:bg-[#d5d5d5] m-auto bg-[#ebebeb] flex items-center gap-[10px] border border-[#000] rounded-[5px] border-t border-slate-100 dark:border-slate-400/10 p-[10px] cursor-pointer w-full"
                onClick={() => router.push(`/product/${item?.slug}`)}
              >
                <div className="logo h-[70px] w-[70px]">
                  <Image
                    src={item.courseImage || "/logo/IBM-Logo-Blk---Square.png"}
                    width={70}
                    height={70}
                    alt=""
                    objectFit="cover"
                    className=" rounded-[5px] object-cover h-full w-[70]"
                  />
                </div>
                <div className="contentbox flex-1">
                  <h4 className="text-[15px] font-[500] text-[#000] p-0 m-0">
                    {item.courseBranch[0]?.label}
                  </h4>
                  <h4 className="text-[13px] font-[400] text-[#000] p-0 m-0 mt-[5px]">
                    {item.title.substring(0, 40)}
                  </h4>
                  {/* <p className="text-[13px] font-[400] text-[#6e6d6d] p-0 m-0">
            <div
              dangerouslySetInnerHTML={{
                __html: item.description
                  .substring(0, 40)
                  .replace(/<[^>]*>/g, ""),
              }}
            ></div>
          </p> */}
                </div>
              </div>
            </>
          );
        })}
        {showMore &&
          showMoreCard?.map((item: any, index: number) => {
            const slug = item.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <>
                <div
                  key={index}
                  className="hover:bg-[#d5d5d5] m-auto bg-[#ebebeb] flex items-center gap-[10px] border border-[#000] rounded-[5px] border-t border-slate-100 dark:border-slate-400/10 p-[10px] cursor-pointer w-full"
                  onClick={() => router.push(`/product/${item?.slug}`)}
                >
                  <div className="logo h-[70px] w-[70px]">
                    <Image
                      src={
                        item.courseImage || "/logo/IBM-Logo-Blk---Square.png"
                      }
                      width={70}
                      height={70}
                      alt=""
                      objectFit="cover"
                      className=" rounded-[5px] object-cover h-full w-[70]"
                    />
                  </div>
                  <div className="contentbox flex-1">
                    <h4 className="text-[15px] font-[500] text-[#000] p-0 m-0">
                      {item.courseBranch[0]?.label}
                    </h4>
                    <h4 className="text-[13px] font-[400] text-[#000] p-0 m-0 mt-[5px]">
                      {item.title.substring(0, 40)}
                    </h4>
                    {/* <p className="text-[13px] font-[400] text-[#6e6d6d] p-0 m-0">
            <div
              dangerouslySetInnerHTML={{
                __html: item.description
                  .substring(0, 40)
                  .replace(/<[^>]*>/g, ""),
              }}
            ></div>
          </p> */}
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <a
        className="flex items-center justify-center cursor-pointer w-[100%] text-center text-[#ed1e27] text-[15px] font-[500] mt-[15px] align-center"
        onClick={handleShowMore}
      >
        {selectedCard.length > 7 && (showMore ? "Show Less" : "Show More")}
      </a>
    </>
  );
};
export default SideMenuCardbox;
