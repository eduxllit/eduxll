// "use client"
import { connect } from "@/app/dbConfig";
import Blog from "@/app/models/blogModels";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const getAllBlogs = async () => {
  try {
    connect();
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    return error;
  }
};
// const [blogs,setBlogs] = useState([]);

const page = async () => {
  const response: any = await getAllBlogs();

  //  setBlogs(response);


  return (
    <div className="w-full p-4">
      <div className="flex justify-end">
        <Link
          href="/admin/blogs/create-blog"
          className="bg-black text-white px-6 py-2 rounded-md"
        >
          {" "}
          Create Blog
        </Link>
      </div>
      {response?.length > 0 && (
        <>
          <div className="mt-8">
            {response?.map((blog: any) => {
             
              return (
                <Link href={`/admin/blogs/${blog?.slug}`} key={blog?._id}>
                  <div className="grid grid-cols-[10%_25%_40%_25%] items-center mb-6 bg-white rounded-xl p-4">
                    <Image
                      src={blog.featureImage}
                      width={100}
                      height={100}
                      alt="image"
                      className="w-[80px] h-[80px] rounded-xl"
                    />
                    <h2>{blog?._id}</h2>
                    <h2>{blog?.title}</h2>
                    <p>{blog.content}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
