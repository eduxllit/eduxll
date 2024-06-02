"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import React, { useEffect, useState } from "react";

const RelatedBlogs = () => {
  const [blogData, setBlogData] = useState<any>([]);

  const getAllBlogsData = async () => {
    const data = await axios.get("/api/blog");
    if (data.status === 200) {
      setBlogData(data?.data);
    }
  };

  useEffect(() => {
    getAllBlogsData();
  }, []);

  //   only show 3 related blogs on the blog page
  const filterBlogData = blogData?.filter((item: any, index: any) => {
    return index < 3;
  });

  return (
    <>
      {filterBlogData?.map((item: any, index: any) => {
        console.log("related blogData", { item });

        return (
          <>
            <div
              className="max-w-[410px] rounded-xl bg-white shadow-md hover:shadow-xl cursor-pointer"
              key={index}
            >
              <Link href={`/blogs/${item.slug}`}>
                <div className="h-[230px]">
                  <Image
                    className="rounded-xl h-[230px] object-cover"
                    src={item.featureImage}
                    alt={"image"}
                    width={410}
                    height={230}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div className="contentbox p-[30px]">
                    <div>
                      <h3 className="text-[16px] font-semibold mb-4 line-clamp-2">
                        {item?.title}
                      </h3>
                      <Link href={`/blogs/${item?.slug}`}>
                        <Button
                          text={"Read more"}
                          className={
                            "   bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg   text-white font-medium     min-w-124px"
                          }
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default RelatedBlogs;
