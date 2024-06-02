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
  { value: "webinar", label: "Webinar" },
];
const animatedComponents = makeAnimated();

const EditWebinarForm = () => {
  const router = useRouter();
  const params = useParams();

  const { slug } = params;

  const [blogPopup, setBlogPopup] = React.useState(false);
  const [loading, setLoadig] = React.useState<Boolean>(false);
  const [category, setCategory] = useState([]);

  const [webnibars, setWebinars] = useState({
    ptitle: "",
    content: "",
    mtitle: "",
    mdescription: "",
    name: "",
    description:"",
    ylink: "",
    date: "",
    time: "",
  });

  const getSingleWebinar = async () => {
    try {
      const respone = await axios.get(`/api/webinar/${slug}`);
      if (respone?.data) {
        setWebinars({
          ptitle: respone.data.ptitle,
          content: respone.data.content,
          mtitle: respone.data.mtitle,
          mdescription: respone.data.mdescription,
          name: respone.data.name,
          description: respone.data.description,
          ylink: respone.data.ylink,
          date: respone.data.date,
          time: respone.data.time,
        });

        console.log(respone.data);
        setCategory(respone.data.customCategory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleWebinar();
  }, []);

  const handleSubmit = async () => {
    setLoadig(true);
    try {
      const response = await axios.patch(`/api/webinar/${slug}`, {
        ...webnibars,
        customCategory: category,
      });
      if (response?.status === 200) {
        getSingleWebinar();
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
        buttonsave={() =>
          router.push("/admin/newdashboard/webinar/webinarlist")
        }
        modelheading="Webinar"
        itemicon="sussess"
        modelcontent="Webinar Updated Sussessfully"
      />
    )}
    <div className="flex bg-[#fff] items-center justify-between   px-[15px] py-[15px] mb-[20px] rounded-[10px]">
      <h2>Create Webinar</h2>
    </div>

    {blogPopup && <h2>blogs created sussessfully</h2>}

    <div className="flex flex-col   bg-[#fff] p-8 w-full rounded-[10px]">
      <form className="flex flex-col">
        <div className="grid grid-cols-[2fr_1fr] gap-8 justify-center">
          <div>
            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Meta Title
              </label>
              <input
                type="text"
                placeholder="Meta Title"
                name="mtitle"
                className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                required
                value={webnibars.mtitle}
                onChange={(e) =>
                  setWebinars({ ...webnibars, mtitle: e.target.value })
                }
              />
            </div>
            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Meta description
              </label>
              <input
                type="text"
                placeholder="Meta description"
                name="mdescription"
                className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                required
                value={webnibars.mdescription}
                onChange={(e) =>
                  setWebinars({ ...webnibars, mdescription: e.target.value })
                }
              />
            </div>
            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                name="ptitle"
                className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                required
                value={webnibars.ptitle}
                onChange={(e) =>
                  setWebinars({ ...webnibars, ptitle: e.target.value })
                }
              />
            </div>
            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                User Name
              </label>
              <input
                type="text"
                placeholder="User name"
                name="name"
                className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                required
                value={webnibars.name}
                onChange={(e) =>
                  setWebinars({ ...webnibars, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                User Description
              </label>
              <input
                type="text"
                placeholder="User description"
                name="description"
                className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                required
                value={webnibars.description}
                onChange={(e) =>
                  setWebinars({ ...webnibars, description: e.target.value })
                }
              />
            </div>

            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Link
              </label>
              <input
                type="text"
                placeholder="ylink"
                name="ylink"
                className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                required
                value={webnibars.ylink}
                onChange={(e) =>
                  setWebinars({ ...webnibars, ylink: e.target.value })
                }
              />
            </div>

            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Category
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
                Content
              </label>

              <IRichTextEditor
                id="rte"
                sticky={false}
                controls={[
                  ["bold", "italic", "underline"],
                  ["link", "image", "video", "blockquote", "code"],
                  ["unorderedList", "h1", "h2", "h3"],
                  ["alignLeft", "alignCenter", "alignRight"],
                ]}
                value={webnibars.content}
                onChange={(value) =>
                  setWebinars({ ...webnibars, content: value })
                }
              />
            </div>
            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Date
              </label>

              <input type="date" name="date" required 
              value={webnibars.date}
              onChange={(e) =>
                setWebinars({ ...webnibars, date: e.target.value })
              }
              />
            </div>
            <div className="mb-4 w-[100%]">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Time
              </label>

              <input type="time" name="time" required 
              value={webnibars.time}
              onChange={(e) =>
                setWebinars({ ...webnibars, time: e.target.value })
              }
              />
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

export default EditWebinarForm;
