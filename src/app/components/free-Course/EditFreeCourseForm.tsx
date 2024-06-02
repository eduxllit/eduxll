"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import LinkModelBox from "@/app/components/linkmodelbox/linkmodelbox";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useParams } from "next/navigation";
import { deleteImageFromFirebase, uploadFiletoFirebase } from "@/app/utils";
import Image from "next/image";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
const options = [{ value: "free-course", label: "Free Course" }];
const animatedComponents = makeAnimated();

const EditFreeCourseForm = ({ data }: any) => {
  const router = useRouter();
  const params = useParams();

  const { slug } = params;

  const [blogPopup, setBlogPopup] = React.useState(false);
  const [loading, setLoadig] = React.useState<Boolean>(false);
  const [category, setCategory] = useState([]);
  const [featureImage, setFeatureImage] = useState<any>(null);

  const [blogImage, setBlogImage] = useState<any>(null);

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    mtitle: "",
    mdescription: "",
    price: "",
    student: "",
  });

  const handleSubmit = async () => {
    setLoadig(true);
    try {
      const response = await axios.patch(`/api/freecourse/${slug}`, {
        ...blog,
        customCategory: category,
      });
      if (response?.status === 200) {
        if (featureImage) {
          const imageUrl = await uploadFiletoFirebase(featureImage);
          if (imageUrl) {
            const data = {
              field: "featureImage",
              url: imageUrl,
              courseId: response?.data?._id,
            };
            const response2 = await axios.put("/api/freecourse", data);
            if (response2?.status === 200) {
              await deleteImageFromFirebase(blogImage);
            }
          }
        }
        setLoadig(false);
        setBlogPopup(true);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoadig(false);
    }
  };

  useEffect(() => {
    if (data) {
      setBlog({
        title: data?.title,
        content: data?.content,
        mtitle: data?.mtitle,
        mdescription: data?.mdescription,
        price: data?.price,
        student: data?.student,
      });
      setCategory(data?.customCategory);
      setBlogImage(data?.featureImage);
    }
  }, []);

  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={() => router.push("/admin/newdashboard/free-course")}
          modelheading="Free Course"
          itemicon="sussess"
          modelcontent="Free Course Edit Sussessfully"
        />
      )}

      <div className="flex bg-[#fff] items-center justify-between   px-[15px] py-[15px] mb-[20px] rounded-[10px]">
        <h2>Edit Free Course</h2>
      </div>

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
                  value={blog?.mtitle}
                  onChange={(e: any) =>
                    setBlog({ ...blog, mtitle: e.target.value })
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
                  value={blog?.mdescription}
                  onChange={(e: any) =>
                    setBlog({ ...blog, mdescription: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Free Course Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                  value={blog?.title}
                  onChange={(e: any) =>
                    setBlog({ ...blog, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Free Course Price
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                  value={blog?.price}
                  onChange={(e: any) =>
                    setBlog({ ...blog, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Student Enrolled
                </label>
                <input
                  type="text"
                  placeholder="Student"
                  name="student"
                  className="form-input w-full rounded-md mt-1 border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                  required
                  value={blog?.student}
                  onChange={(e: any) =>
                    setBlog({ ...blog, student: e.target.value })
                  }
                />
              </div>

              <div className="mb-4 w-[100%]">
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Free Course Category
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
                  Free Course Content
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
                  value={blog.content}
                  onChange={(value, delta, sources) =>
                    setBlog({ ...blog, content: value })
                  }
                />
              </div>

              <div className="mb-4 ">
                <h3 className="font-medium text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Featured Image
                </h3>
                {blogImage && (
                  <Image
                    src={blogImage}
                    alt="blog image"
                    width={200}
                    height={200}
                  />
                )}

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
                      Upload a new Image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e: any) => setFeatureImage(e.target.files[0])}
                      name="featureImage"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {loading && (
            <button className="text-white p-2 rounded-md max-w-[636px]">
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

export default EditFreeCourseForm;
