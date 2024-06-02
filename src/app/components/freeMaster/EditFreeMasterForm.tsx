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
  { value: "Masterclasses", label: "Masterclasses" },
];
const animatedComponents = makeAnimated();

const EditFreeMasterForm = () => {
  const router = useRouter();
  const params = useParams();

  const { slug } = params;

  const [blogPopup, setBlogPopup] = React.useState(false);
  const [loading, setLoadig] = React.useState<Boolean>(false);
  const [category, setCategory] = useState([]);

  const [freeM, setFreeM] = useState({
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

  const getSingleFreeMaster = async () => {
    try {
      const respone = await axios.get(`/api/freeclass/${slug}`);
      if (respone?.data) {
        setFreeM({
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
    getSingleFreeMaster();
  }, []);

  const handleSubmit = async () => {
    setLoadig(true);
    try {
      const response = await axios.patch(`/api/freeclass/${slug}`, {
        ...freeM,
        customCategory: category,
      });
      if (response?.status === 200) {
        getSingleFreeMaster();
        setLoadig(false);
        setBlogPopup(true);
        // alert("Freeclass Updated Sussessfully");
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
            router.push("/admin/newdashboard/freeMaster/freemasterlist")
          }
          modelheading="Free Master Classess"
          itemicon="sussess"
          modelcontent="Free Master Classess Updated Sussessfully"
        />
      )}
      <div className="flex bg-[#fff] items-center justify-between   px-[15px] py-[15px] mb-[20px] rounded-[10px]">
        <h2>Create Free Master Classess</h2>
      </div>
 

      <div className="flex flex-col   bg-[#fff] p-8 w-full rounded-[10px]">
        <form  className="flex flex-col">
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
                  value={freeM?.mtitle}
                  onChange={(e: any) =>
                    setFreeM({ ...freeM, mtitle: e.target.value })
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
                  value={freeM?.mdescription}
                  onChange={(e: any) =>
                    setFreeM({ ...freeM, mdescription: e.target.value })
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
                  value={freeM?.ptitle}
                  onChange={(e: any) =>
                    setFreeM({ ...freeM, ptitle: e.target.value })
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
                  value={freeM?.name}
                  onChange={(e: any) =>
                    setFreeM({ ...freeM, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  User Description
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                  value={freeM?.description}
                  onChange={(e: any) =>
                    setFreeM({ ...freeM, description: e.target.value })
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
                  value={freeM?.ylink}
                  onChange={(e: any) =>
                    setFreeM({ ...freeM, ylink: e.target.value })
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
                  value={freeM?.content}
                  onChange={(value: any) => setFreeM({ ...freeM, content: value })}
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Date
                </label>

                <input type="date" name="date" required 
                value={freeM?.date}
                onChange={(e: any) =>
                  setFreeM({ ...freeM, date: e.target.value })
                }
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Time
                </label>

                <input type="time" name="time" required 
                value={freeM?.time}
                onChange={(e: any) =>
                  setFreeM({ ...freeM, time: e.target.value })
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

export default EditFreeMasterForm;
