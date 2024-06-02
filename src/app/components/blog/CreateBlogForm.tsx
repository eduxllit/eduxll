"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const CreateBlogForm = () => {
  const router = useRouter();
  const [blogPopup, setBlogPopup] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const response = await axios.post("/api/blog/create-blog", formData);
    console.log(response);
    router.refresh();
    setBlogPopup(true);
  };

  const handleClose = React.useCallback(() => {
    router.refresh();
    setBlogPopup(false);
  }, [router]);
  return (
    <>
      {blogPopup && (
        <>
          <div className="modelboxlight">
            <div className="modelinner">
              <h2>Blogs created sussessfully</h2>
              <button onClick={() => handleClose()}>Close</button>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col shadow-xl bg-[#f8f8f8] p-8 w-full rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="grid grid-cols-[2fr_1fr] gap-8 justify-center">
            <div>
              <div className="mb-4 w-[100%]">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-4 w-[100%]">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Blog Category
                </label>
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-4 w-[100%]">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Blog Content
                </label>
                <input
                  type="text"
                  placeholder="content"
                  name="content"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <h2>Seo</h2>
              <div className="mb-4 w-[100%]">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meta title
                </label>
                <input
                  type="text"
                  placeholder="meta title"
                  name="mtitle"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meta Description
                </label>
                <input
                  type="text"
                  placeholder="meta description"
                  name="mdescription"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4 w-[60%]">
              <h3 className="font-semibold text-xl mb-2">Blog Image</h3>
              <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Upload a Image
                </span>
                <input type="file" className="hidden" name="featureImage" />
              </label>
            </div>
          </div>

          <button type="submit" className="bg-black text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlogForm;
