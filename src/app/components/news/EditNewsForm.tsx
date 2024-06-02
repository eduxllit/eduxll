"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import LinkModelBox from "@/app/components/linkmodelbox/linkmodelbox";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useParams } from "next/navigation";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
const options = [
  { value: "news", label: "News" },
  { value: "recruiters", label: "Recruiters" },
];
const animatedComponents = makeAnimated();

const EditNewsForm = () => {
  const router = useRouter();
  const params = useParams();

  const { slug } = params;

  const [blogPopup, setBlogPopup] = React.useState(false);
  const [loading, setLoadig] = React.useState<Boolean>(false);
  const [category, setCategory] = useState([]);

  const [news, setNews] = useState({
    title: "",
    link: "",
  });

  const getSingleNews = async () => {
    try {
      const respone = await axios.get(`/api/news/${slug}`);
      if (respone?.data) {
        setNews({
          title: respone.data.title,
          link: respone.data.link,
        });

        console.log(respone.data);
        setCategory(respone.data.customCategory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleNews();
  }, []);

  const handleSubmit = async () => {
    setLoadig(true);
    try {
      const response = await axios.patch(`/api/news/${slug}`, {
        ...news,
        customCategory: category,
      });
      if (response?.status === 200) {
        getSingleNews();
        setLoadig(false);
        setBlogPopup(true);
      }
    } catch (error) {
      console.log(error);
      setLoadig(false);
    }
  };

  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={() => router.push("/admin/newdashboard/newsList")}
          modelheading="News"
          itemicon="sussess"
          modelcontent="News Updated Sussessfully"
        />
      )}
      <div className="flex bg-[#fff] items-center justify-between   px-[15px] py-[15px] mb-[20px] rounded-[10px]">
        <h2>Create News</h2>
      </div> 

      <div className="flex flex-col   bg-[#fff] p-8 w-full rounded-[10px]">
        <form className="flex flex-col">
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
                  value={news.title}
                  onChange={(e) =>
                    setNews({ ...news, title: e.target.value })
                  }
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
                  onChange={(value: any) => setCategory(value)}
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
                  value={news.link}
                  onChange={(e) =>
                    setNews({ ...news, link: e.target.value })
                  }
                />
              </div>
            </div>
 
          </div>

          {loading && (
           <button
           className="text-white p-2 rounded-md max-w-[636px]"
         >
          
           <div className="ball"></div>
           <div className="ball"></div>
         
            </button>
          )}

          {!loading && (
            <button
              onClick={handleSubmit}
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

export default EditNewsForm;
