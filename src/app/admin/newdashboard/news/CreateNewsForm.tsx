"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { Component, useState } from "react";
import dynamic from "next/dynamic";
import LinkModelBox from "@/app/components/linkmodelbox/linkmodelbox";
import Select from 'react-select'
import makeAnimated from "react-select/animated";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const CreateNewsForm = () => {
  const router = useRouter();
  const [loading, setLoadig] = React.useState<Boolean>(false);
  const options = [
    { value: "news", label: "News" },
    { value: "recruiters", label: "Recruiters" },
  ];

const animatedComponents = makeAnimated();
const [category, setCategory] = useState([]);
const handleCategory = (value:any)=>{
  setCategory(value);
}



  const [blogPopup, setBlogPopup] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoadig(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form); 
    formData.append("customCategory", JSON.stringify(category));
    const response = await axios.post("/api/news/create-news", formData);
    console.log(response);
    router.refresh();
    setLoadig(false);
    setBlogPopup(true);
  };

  const [state, setState] = React.useState({
    content: "",
  });

  const onChangeState = (key: any, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };
  
  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={() => router.push("/admin/newdashboard/newsList")}
          modelheading="News"
          itemicon="sussess"
          modelcontent="News Created Sussessfully"
        />
      )}
      <div className="flex bg-[#fff] items-center justify-between   px-[15px] py-[15px] mb-[20px] rounded-[10px]">
        <h2>Create News</h2>
      </div>

      {blogPopup && <h2>blogs created sussessfully</h2>}

      <div className="flex flex-col   bg-[#fff] p-8 w-full rounded-[10px]">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="grid grid-cols-[2fr_1fr] gap-8 justify-center">
            <div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  News Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                />
              </div>

              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  News Category
                </label>
                <Select 
                    options={options}
                    isMulti
                    components={animatedComponents}
                    onChange={(value)=>handleCategory(value)}
                    value={category}
                    />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  News link
                </label>
                <input
                  type="text"
                  placeholder="link"
                  name="link"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                />
              </div>
            </div>

            <div className="mb-4 ">
              <h3 className="font-medium text-sm text-slate-600 dark:text-slate-400 mb-2">
                Featured Image
              </h3>

              {/* <ImageUploader /> */}
              <div className="mb-4 w-[60%]">
                <h3 className="font-semibold text-xl mb-2">Banner Image</h3>
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
          </div>

          {loading && (
            <button
              disabled
              className="bg-black text-white p-2 rounded-md max-w-[636px]"
            >
              Loading..
            </button>
          )}

          {!loading && (
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-md max-w-[636px]"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateNewsForm;
