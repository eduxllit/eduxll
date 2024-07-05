"use client";
import React, { useState } from "react";
import SideBarLayout from "../../ui/sidebarlayout/page";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { set } from "mongoose";
import { uploadFiletoFirebase } from "@/app/utils";
import { createCourse, updateCourseFields } from "@/app/actions";
import LinkModelBox from "@/app/components/linkmodelbox/linkmodelbox";
import { useRouter } from "next/navigation";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  BachelorBranch,
  CertificateBranch,
  CourseCatgory,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantAbroadData";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const featureOptions = [{ value: "latest-card", label: "Latest Card" }];
const animatedComponents = makeAnimated();

const CreateCourse = () => {
  const [courseImage, setCourseImage] = useState<any>(null);
  const [universityImage, setUniImage] = useState<any>(null);
  const [universityLogo, setUniversityLogo] = useState<any>(null);
  const [logoOne, setLogoOne] = useState<any>(null);
  const [logoTwo, setLogoTwo] = useState<any>(null);
  const [courseBrochure, setCourseBrochure] = useState<any>(null);
  const [courseCertificate, setCourseCertificate] = useState<any>(null);
  const [blogPopup, setBlogPopup] = React.useState(false);

  const [loading, setLoadig] = useState<Boolean>(false);
  const router = useRouter();
  const [category, setCategory] = React.useState<any>([]);
  const [featureCategory, setFeatureCategory] = React.useState([]);
  const [courseBranch, setCourseBranch] = React.useState([]);

  console.log("category nehat", category);

  const branchOptions =
    category?.value === "master"
      ? MasterBranch
      : category?.value === "bachelor"
      ? BachelorBranch
      : category?.value === "certificate"
      ? CertificateBranch
      : category?.value === "free-courses"
      ? FreeCoursesBranch
      : [];

  const [courses, setCourses] = useState({
    title: "",
    duration: "",
    coursePrice: "",
    semesterPrice: "",
    priceContent: "",
    description: "",
    certificateDescription: "",
    universityDescription: "",
    courseImage: "",
    logoOne: "",
    logoTwo: "",
    logoOnedescription: "",
    logoTwodescription: "",
    certificate: "",
    brochure: "",
    metaTitle: "",
    metaDescription: "",
    universityLogo: "",
  });
  const [courseModule, setCourseModule] = useState([
    {
      id: 1,
      modulTitle: "",
      modulDescription: "",
    },
  ]);
  const [courseFaq, setCourseFaq] = useState([
    {
      id: 1,
      modulTitle: "",
      modulDescription: "",
    },
  ]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoadig(true);
    e.preventDefault();
    const courseData = {
      ...courses,
      customCategory: category,
      featureCategoryInsert: featureCategory,
      courseBranch: courseBranch,
      courseModule: courseModule,
      courseFaq: courseFaq,
    };
    const response = await axios.post("/api/study", courseData);

    if (response.status === 200) {
      if (courseImage) {
        const url = await uploadFiletoFirebase(courseImage);
        const data = {
          field: "courseImage",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/study", data);
      }
      if (universityImage) {
        const url = await uploadFiletoFirebase(universityImage);
        const data = {
          field: "universityImage",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/study", data);
      }
      if (universityLogo) {
        const url = await uploadFiletoFirebase(universityLogo);
        const data = {
          field: "universityLogo",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/study", data);
      }
      if (logoOne) {
        const url = await uploadFiletoFirebase(logoOne);
        const data = {
          field: "logoOne",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/study", data);
      }

      if (logoTwo) {
        const url = await uploadFiletoFirebase(logoTwo);
        const data = {
          field: "logoTwo",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/study", data);
      }

      if (courseBrochure) {
        const url = await uploadFiletoFirebase(courseBrochure);
        if (url) {
          const data = {
            field: "brochure",
            url: url,
            courseId: response.data.newCourse._id,
          };
          const response2 = await axios.put("/api/study", data);
        }
      }

      if (courseCertificate) {
        const url = await uploadFiletoFirebase(courseCertificate);
        const data = {
          field: "certificate",
          url: url,
          courseId: response.data.newCourse._id,
        };
        const response2 = await axios.put("/api/study", data);
      }
    }
    setBlogPopup(true);
    setLoadig(false);
  };

  const addMoreModuee = () => {
    setCourseModule([
      ...courseModule,
      { id: courseModule.length + 1, modulTitle: "", modulDescription: "" },
    ]);
  };
  const addMoreFaq = () => {
    setCourseFaq([
      ...courseFaq,
      { id: courseFaq.length + 1, modulTitle: "", modulDescription: "" },
    ]);
  };
  const removeModule = (id: number) => {
    setCourseModule(courseModule.filter((module) => module.id !== id));
  };
  const removeFaq = (id: number) => {
    setCourseFaq(courseFaq.filter((module) => module.id !== id));
  };

  return (
    <>
      <SideBarLayout>
        {blogPopup && (
          <LinkModelBox
            buttonclose={() => setBlogPopup(false)}
            buttonsave={() =>
              router.push("/admin/newdashboard/study/study-list")
            }
            modelheading="Study"
            itemicon="sussess"
            modelcontent="Study Created Sussessfully"
          />
        )}
        <div className="flex items-center justify-between border-b-[1px] border-slate-200 px-[15px] pb-[15px] mb-[20px]">
          <h2>Study Aborad</h2>
        </div>

        <div className="bg-[#fff] rounded-[10px] p-8">
          <div className="flex flex-col w-full flex-1">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full flex-1"
            >
              <div className="grid grid-cols-[2fr_1fr] gap-[30px]  justify-center">
                <div className="inputfieldbox ">
                  <div className="flex flex-col gap-[10px] justify-center">
                    <div className="w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        University Name*
                      </label>
                      <input
                        type="text"
                        placeholder="Course Title"
                        name="title"
                        className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses?.title}
                        onChange={(e) =>
                          setCourses({ ...courses, title: e.target.value })
                        }
                      />
                    </div>

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Category*
                      </label>

                      <Select
                        options={CourseCatgory}
                        components={animatedComponents}
                        onChange={(value: any) => {
                          setCategory(value), setCourseBranch([]);
                        }}
                        value={category}
                      />
                    </div>
                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Featured Category*
                      </label>

                      <Select
                        options={featureOptions}
                        components={animatedComponents}
                        onChange={(value: any) => setFeatureCategory(value)}
                        value={featureCategory}
                      />
                    </div>

                    {category?.id && (
                      <div className=" w-full">
                        <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                          Course Branch*
                        </label>

                        <Select
                          options={branchOptions}
                          components={animatedComponents}
                          onChange={(value: any) => setCourseBranch(value)}
                          value={courseBranch}
                        />
                      </div>
                    )}

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Duration*
                      </label>
                      <input
                        type="text"
                        placeholder="Course Duration"
                        name="duration"
                        className="text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses.duration}
                        onChange={(e) =>
                          setCourses({ ...courses, duration: e.target.value })
                        }
                      />
                    </div>

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Full course fee*
                      </label>
                      <input
                        type="text"
                        placeholder="Course Duration"
                        name="coursePrice"
                        className="text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses.coursePrice}
                        onChange={(e) =>
                          setCourses({
                            ...courses,
                            coursePrice: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Each semester fee*
                      </label>
                      <input
                        type="text"
                        placeholder="Course Duration"
                        name="semesterPrice"
                        className="text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses.semesterPrice}
                        onChange={(e) =>
                          setCourses({
                            ...courses,
                            semesterPrice: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Price content*
                      </label>
                      <input
                        type="text"
                        placeholder="Course Duration"
                        name="priceContent"
                        className="text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                        required
                        value={courses.priceContent}
                        onChange={(e) =>
                          setCourses({
                            ...courses,
                            priceContent: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Description*
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
                        value={courses.description}
                        onChange={(value) =>
                          setCourses({ ...courses, description: value })
                        }
                      />
                    </div>
                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Course Certificate Description*
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
                        value={courses.certificateDescription}
                        onChange={(value) =>
                          setCourses({
                            ...courses,
                            certificateDescription: value,
                          })
                        }
                      />
                    </div>

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Other Description*
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
                        value={courses.universityDescription}
                        onChange={(value) =>
                          setCourses({
                            ...courses,
                            universityDescription: value,
                          })
                        }
                      />
                    </div>

                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Logo One Description (Max 15-20 Characters)
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
                        value={courses.logoOnedescription}
                        onChange={(value) =>
                          setCourses({
                            ...courses,
                            logoOnedescription: value,
                          })
                        }
                      />
                    </div>
                    <div className=" w-full">
                      <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                        Logo Two Description (Max 15-20 Characters)
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
                        value={courses.logoTwodescription}
                        onChange={(value) =>
                          setCourses({
                            ...courses,
                            logoTwodescription: value,
                          })
                        }
                      />
                    </div>
                    <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                      Course Module*
                    </label>

                    <div className="modulebox flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-slate-400/60">
                      <div className="rounded-md flex flex-col gap-[5px]  p-[10px]  border border-slate-400/60">
                        {courseModule?.map((item, index) => {
                          return (
                            <React.Fragment key={item?.id}>
                              <div className="w-full">
                                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                                  Modul Title*
                                </label>

                                <input
                                  type="text"
                                  placeholder="Modul Title"
                                  name="modultitle"
                                  className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                  value={item.modulTitle}
                                  onChange={(e) => {
                                    setCourseModule(
                                      courseModule.map((module) =>
                                        module.id === item.id
                                          ? {
                                              ...module,
                                              modulTitle: e.target.value,
                                            }
                                          : module
                                      )
                                    );
                                  }}
                                />

                                {index > 0 && (
                                  <p onClick={() => removeModule(item?.id)}>
                                    Del
                                  </p>
                                )}
                              </div>

                              <div className="w-full">
                                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                                  Modul Description*
                                </label>

                                <IRichTextEditor
                                  id="rte"
                                  sticky={false}
                                  controls={[
                                    ["bold", "italic", "underline"],
                                    [
                                      "link",
                                      "image",
                                      "video",
                                      "blockquote",
                                      "code",
                                    ],
                                    ["unorderedList", "h1", "h2", "h3"],
                                    ["alignLeft", "alignCenter", "alignRight"],
                                  ]}
                                  value={item?.modulDescription}
                                  // need to add onchange function here for eichtexteditor

                                  onChange={(value) =>
                                    setCourseModule(
                                      courseModule.map((module) =>
                                        module.id === item.id
                                          ? {
                                              ...module,
                                              modulDescription: value,
                                            }
                                          : module
                                      )
                                    )
                                  }
                                />
                                {/* <textarea
                                  placeholder="Modul Description"
                                  name="modulDescription"
                                  className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                  value={item.modulDescription}
                                  onChange={(e) => {
                                    setCourseModule(
                                      courseModule.map((module) =>
                                        module.id === item.id
                                          ? {
                                              ...module,
                                              modulDescription: e.target.value,
                                            }
                                          : module
                                      )
                                    );
                                  }}
                                /> */}
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>

                      <div
                        onClick={() => addMoreModuee()}
                        className="text-[15px] cursor-pointer flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700"
                      >
                        <Image
                          src="/add-line.svg"
                          width={20}
                          height={20}
                          alt="add"
                        />
                        Add More
                      </div>
                    </div>

                    <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                      Course Faq*
                    </label>
                    <div className="modulebox flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-slate-400/60">
                      <div className="rounded-md flex flex-col gap-[5px]  p-[10px]  border border-slate-400/60">
                        {courseFaq?.map((item, index) => {
                          return (
                            <React.Fragment key={item?.id}>
                              <div className="w-full">
                                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                                  Faq Title*
                                </label>

                                <input
                                  type="text"
                                  placeholder="Modul Title"
                                  name="modultitle"
                                  className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                  value={item.modulTitle}
                                  onChange={(e) => {
                                    setCourseFaq(
                                      courseFaq.map((module) =>
                                        module.id === item.id
                                          ? {
                                              ...module,
                                              modulTitle: e.target.value,
                                            }
                                          : module
                                      )
                                    );
                                  }}
                                />

                                {index > 0 && (
                                  <p onClick={() => removeFaq(item?.id)}>Del</p>
                                )}
                              </div>

                              <div className="w-full">
                                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                                  Faq Description*
                                </label>

                                <textarea
                                  placeholder="Modul Description"
                                  name="modulDescription"
                                  className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                  value={item.modulDescription}
                                  onChange={(e) => {
                                    setCourseFaq(
                                      courseFaq.map((module) =>
                                        module.id === item.id
                                          ? {
                                              ...module,
                                              modulDescription: e.target.value,
                                            }
                                          : module
                                      )
                                    );
                                  }}
                                />
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>

                      <div
                        onClick={() => addMoreFaq()}
                        className="text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700"
                      >
                        <Image
                          src="/add-line.svg"
                          width={20}
                          height={20}
                          alt="add"
                        />
                        Add More
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inputfile flex flex-col gap-[10px] pt-[25px]">
                  <div
                    className="gap-[10px] grid "
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Upload Course Image
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="courseImage"
                        onChange={(e: any) => setCourseImage(e.target.files[0])}
                      />
                    </label>
                    {courseImage && (
                      <Image
                        src={URL.createObjectURL(courseImage)}
                        width={100}
                        height={100}
                        alt="courseImage"
                        className="rounded-md object-contain w-full h-[100px]"
                      />
                    )}
                  </div>

                  <div
                    className="gap-[10px] grid "
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Upload University Image
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="universityImage"
                        onChange={(e: any) => setUniImage(e.target.files[0])}
                      />
                    </label>
                    {universityImage && (
                      <Image
                        src={URL.createObjectURL(universityImage)}
                        width={100}
                        height={100}
                        className="rounded-md object-contain w-full h-[100px]"
                        alt="universityImage"
                      />
                    )}
                  </div>
                  <div
                    className="gap-[10px] grid "
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Upload University Logo
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="universityLogo"
                        onChange={(e: any) =>
                          setUniversityLogo(e.target.files[0])
                        }
                      />
                    </label>
                    {universityLogo && (
                      <Image
                        src={URL.createObjectURL(universityLogo)}
                        width={100}
                        height={100}
                        alt="universityLogo"
                        className="rounded-md object-contain w-full h-[100px]"
                      />
                    )}
                  </div>

                  <div
                    className="gap-[10px] grid "
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Rank Logo One
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="logoOne"
                        onChange={(e: any) => setLogoOne(e.target.files[0])}
                      />
                    </label>
                    {logoOne && (
                      <Image
                        src={URL.createObjectURL(logoOne)}
                        width={100}
                        height={100}
                        alt="universityImage"
                        className="rounded-md object-contain w-full h-[100px]"
                      />
                    )}
                  </div>
                  <div
                    className="gap-[10px] grid "
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Rank Logo Two
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="logoTwo"
                        onChange={(e: any) => setLogoTwo(e.target.files[0])}
                      />
                    </label>
                    {logoTwo && (
                      <Image
                        src={URL.createObjectURL(logoTwo)}
                        width={100}
                        height={100}
                        alt="logoTwo"
                        className="rounded-md object-contain w-full h-[100px]"
                      />
                    )}
                  </div>
                  <div
                    className="gap-[10px] grid "
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Upload Course Certificate
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        name="certificate"
                        onChange={(e: any) =>
                          setCourseCertificate(e.target.files[0])
                        }
                      />
                    </label>
                    {courseCertificate && (
                      <Image
                        src={URL.createObjectURL(courseCertificate)}
                        width={100}
                        height={100}
                        alt="courseCertificate"
                        className="rounded-md object-contain w-full h-[100px]"
                      />
                    )}
                  </div>

                  <div
                    className="gap-[10px] grid "
                    style={{
                      gridTemplateColumns: "2fr 1fr",
                    }}
                  >
                    <label className="w-full rounded-md  border border-slate-400/60 flex flex-col items-center px-4 py-6 bg-white text-blue   tracking-wide    cursor-pointer">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Upload Course Brochure
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        name="brochure"
                        onChange={(e: any) =>
                          setCourseBrochure(e.target.files[0])
                        }
                      />
                    </label>
                    {courseBrochure && (
                      <Image
                        src={URL.createObjectURL(courseBrochure)}
                        width={100}
                        height={100}
                        alt="courseBrochure"
                        className="rounded-md object-contain w-full h-[100px]"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-[10px] bg-[#ffe4e6] flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-[#fda4af]">
                <div className=" w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Meta Title*
                    <b
                      style={{
                        color: "red",
                      }}
                    >
                      {" "}
                      ( Make sure this is unique for each course )
                    </b>
                  </label>
                  <input
                    type="text"
                    placeholder="Meta Title"
                    name="Meta Title"
                    className="bg-[#fff] text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300   px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                    required
                    value={courses.metaTitle}
                    onChange={(e) =>
                      setCourses({ ...courses, metaTitle: e.target.value })
                    }
                  />
                </div>
                <div className=" w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Meta description*
                  </label>
                  <input
                    type="text"
                    placeholder="Meta description"
                    name="meta description"
                    className="bg-[#fff] text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300  px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                    required
                    value={courses.metaDescription}
                    onChange={(e) =>
                      setCourses({
                        ...courses,
                        metaDescription: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              {loading && <p>Loading...</p>}

              {!loading && (
                <button
                  type="submit"
                  className="mt-[20px] w-min text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </SideBarLayout>
    </>
  );
};
export default CreateCourse;
