"use client";

import {
  BachelorBranch,
  CertificateBranch,
  CourseCatgory,
  FreeCoursesBranch,
  MasterBranch,
} from "@/constant/ConstantData";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  deleteImageFromFirebase,
  getFileNameFromFirebaseUrl,
  uploadFiletoFirebase,
} from "../utils";

const IRichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
const options = [
  { value: "development", label: "Development" },
  { value: "business", label: "Business" },
];
const featureOptions = [{ value: "latest-card", label: "Latest Card" }];
const animatedComponents = makeAnimated();

const UpdateCourse = ({ data }: any) => {
  console.log("data", data);
  const [courseImage, setCourseImage] = useState<any>("");
  const [universityImage, setUniversityImage] = useState<any>("");
  const [universityLogo, setUniversityLogo] = useState<any>("");
  const [logoOne, setLogoOne] = useState<any>("");
  const [logoTwo, setLogoTwo] = useState<any>("");
  const [courseBrochure, setCourseBrochure] = useState<any>(null);
  const [courseCertificate, setCourseCertificate] = useState<any>(null);
  const [blogPopup, setBlogPopup] = React.useState(false);

  const [loading, setLoadig] = useState<Boolean>(false);
  const router = useRouter();
  const [category, setCategory] = React.useState<any>([]);
  const [featureCategory, setFeatureCategory] = React.useState([]);
  const [courseBranch, setCourseBranch] = React.useState([]);

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

  const params = useParams();

  const id = params.id as string;

  const [courses, setCourses] = useState({
    title: "",
    duration: "",
    description: "",
    certificateDescription: "",
    metaTitle: "",
    metaDescription: "",
    coursePrice: "",
    priceContent: "",
    universityDescription: "",
    logoOnedescription: "",
    logoTwodescription: "",
    semesterPrice: "",
    universityImage: "",
    universityLogo: "",
    logoOne: "",
    logoTwo: "",
    courseImage: "",
    certificate: "",
    brochure: "",
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
    const response = await axios.patch(`/api/course/${id}`, courseData);

    if (response.status === 200) {
      if (courseImage) {
        const courseImageUrl = await uploadFiletoFirebase(courseImage);
        if (courseImageUrl) {
          const data = {
            field: "courseImage",
            url: courseImageUrl,
            courseId: response?.data?._id,
          };
          const response2 = await axios.put("/api/course", data);
          if (response2.status === 200) {
            await deleteImageFromFirebase(courses.courseImage);
          }
        }
      }

      if (universityImage) {
        const courseUniversityUrl = await uploadFiletoFirebase(universityImage);
        if (courseUniversityUrl) {
          const data = {
            field: "certificate",
            url: courseUniversityUrl,
            courseId: response?.data?._id,
          };
          const response2 = await axios.put("/api/course", data);
          if (response2.status === 200) {
            await deleteImageFromFirebase(courses.universityImage);
          }
        }
      }
      if (universityLogo) {
        const courseUniversityLogoUrl = await uploadFiletoFirebase(
          universityLogo
        );
        if (courseUniversityLogoUrl) {
          const data = {
            field: "universityLogo",
            url: courseUniversityLogoUrl,
            courseId: response?.data?._id,
          };
          const response2 = await axios.put("/api/course", data);
          if (response2.status === 200) {
            await deleteImageFromFirebase(courses.universityLogo);
          }
        }
      }
      if (logoOne) {
        const courselogoOneUrl = await uploadFiletoFirebase(logoOne);
        if (courselogoOneUrl) {
          const data = {
            field: "logoOne",
            url: courselogoOneUrl,
            courseId: response?.data?._id,
          };
          const response2 = await axios.put("/api/course", data);
          if (response2.status === 200) {
            await deleteImageFromFirebase(courses.logoOne);
          }
        }
      }
      if (logoTwo) {
        const courselogoTwoUrl = await uploadFiletoFirebase(logoTwo);
        if (courselogoTwoUrl) {
          const data = {
            field: "logoTwo",
            url: courselogoTwoUrl,
            courseId: response?.data?._id,
          };
          const response2 = await axios.put("/api/course", data);
          if (response2.status === 200) {
            await deleteImageFromFirebase(courses.logoTwo);
          }
        }
      }
      if (courseCertificate) {
        const courseCertificateUrl = await uploadFiletoFirebase(
          courseCertificate
        );
        if (courseCertificateUrl) {
          const data = {
            field: "certificate",
            url: courseCertificateUrl,
            courseId: response?.data?._id,
          };
          const response2 = await axios.put("/api/course", data);
          if (response2.status === 200) {
            await deleteImageFromFirebase(courses.certificate);
          }
        }
      }

      if (courseBrochure) {
        const ccourseBrochureUrl = await uploadFiletoFirebase(courseBrochure);
        if (ccourseBrochureUrl) {
          const data = {
            field: "brochure",
            url: ccourseBrochureUrl,
            courseId: response?.data?._id,
          };
          const response2 = await axios.put("/api/course", data);
          if (response2.status === 200) {
            await deleteImageFromFirebase(courses.certificate);
          }
        }
      }

      console.log(response?.data);
      setLoadig(false);
      setBlogPopup(true);
    }
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

  useEffect(() => {
    const ref = true;
    if (ref && data) {
      setCourses({
        title: data?.title,
        duration: data?.duration,
        description: data?.description,
        certificateDescription: data?.certificateDescription,
        metaTitle: data?.metaTitle,
        metaDescription: data?.metaDescription,
        coursePrice: data?.coursePrice,
        semesterPrice: data?.semesterPrice,
        priceContent: data?.priceContent,
        universityDescription: data?.universityDescription,
        logoOnedescription: data?.logoOnedescription,
        logoTwodescription: data?.logoTwodescription,
        courseImage: data?.courseImage,
        certificate: data?.certificate,
        brochure: data?.brochure,
        universityImage: data?.universityImage,
        universityLogo: data?.universityLogo,
        logoOne: data?.logoOne,
        logoTwo: data?.logoTwo,
      });
      setFeatureCategory(data?.featureCategoryInsert);
      setCourseModule(data?.courseModule);
      setCourseFaq(data?.courseFaq);
      setCourseBranch(data?.courseBranch);
      setCategory(data?.customCategory);
    }
  }, [data]);

  console.log("courses data t", { courses });

  return (
    <div className="bg-[#fff] rounded-[10px] p-8">
      <div className="flex flex-col w-full flex-1">
        <form onSubmit={handleSubmit} className="flex flex-col w-full flex-1">
          <div className="grid grid-cols-[2fr_1fr] gap-[30px]  justify-center">
            <div className="inputfieldbox ">
              <div className="flex flex-col gap-[10px] justify-center">
                <div className="w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Course Title
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
                    Course Category
                  </label>

                  <Select
                    options={CourseCatgory}
                    components={animatedComponents}
                    onChange={(value: any) => setCategory(value)}
                    value={category}
                  />
                </div>
                <div className=" w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Featured Category
                  </label>

                  <Select
                    options={featureOptions}
                    components={animatedComponents}
                    onChange={(value: any) => setFeatureCategory(value)}
                    value={featureCategory}
                  />
                </div>
                <div className=" w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Course Branch
                  </label>

                  <Select
                    options={branchOptions}
                    components={animatedComponents}
                    onChange={(value: any) => setCourseBranch(value)}
                    value={courseBranch}
                  />
                </div>
                <div className=" w-full">
                  <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                    Course Duration
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
                    Full course fee
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
                    Each semester fee
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
                    Price content
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
                    Course Description
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
                    Course Certificate Description
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
                    Univesity Description
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
                    Logo One Description
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
                    Logo Two Description
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
                  Course Module
                </label>
                <div className="modulebox flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-slate-400/60">
                  <div className="rounded-md flex flex-col gap-[5px]  p-[10px]  border border-slate-400/60">
                    {courseModule?.map((item, index) => {
                      return (
                        <React.Fragment key={item?.id}>
                          <div className="w-full">
                            <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                              Modul Title
                            </label>

                            <input
                              type="text"
                              placeholder="Modul Title"
                              name="modultitle"
                              className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                              value={item?.modulTitle}
                              onChange={(e) => {
                                setCourseModule(
                                  courseModule?.map((module) =>
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
                              <p onClick={() => removeModule(item?.id)}>Del</p>
                            )}
                          </div>

                          <div className="w-full">
                            <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                              Modul Description
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
                              value={item.modulDescription}
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
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  <div
                    onClick={() => addMoreModuee()}
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

                {/* faq */}
                <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                  Course Faq
                </label>
                <div className="modulebox flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-slate-400/60">
                  <div className="rounded-md flex flex-col gap-[5px]  p-[10px]  border border-slate-400/60">
                    {courseFaq?.map((item, index) => {
                      return (
                        <React.Fragment key={item?.id}>
                          <div className="w-full">
                            <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                              Faq Title
                            </label>

                            <input
                              type="text"
                              placeholder="Modul Title"
                              name="modultitle"
                              className=" text-[14px] text-[#686868] form-input w-full rounded-md  border border-slate-400/60 dark:border-slate-400 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                              value={item?.modulTitle}
                              onChange={(e) => {
                                setCourseFaq(
                                  courseFaq?.map((module) =>
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
                              Faq Description
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
                  {/* <span className="mt-2 text-base leading-normal">
                    {getFileNameFromFirebaseUrl(courses?.courseImage)}
                  </span> */}
                  <span className="mt-2 text-base leading-normal">
                    Update Course Image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="courseImage"
                    onChange={(e: any) => setCourseImage(e.target.files[0])}
                  />
                </label>

                {courses?.courseImage && (
                  <Image
                    src={courses?.courseImage}
                    width={200}
                    height={200}
                    alt="courseImage"
                    className="rounded-md object-contain w-full w-full h-[100px]"
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
                    Update University Image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="universityImage"
                    onChange={(e: any) => setUniversityImage(e.target.files[0])}
                  />
                </label>

                {courses?.universityImage && (
                  <Image
                    src={courses?.universityImage}
                    width={200}
                    height={200}
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
                    Update University Logo
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="universityLogo"
                    onChange={(e: any) => setUniversityLogo(e.target.files[0])}
                  />
                </label>

                {courses?.universityLogo && (
                  <Image
                    src={courses?.universityLogo}
                    width={200}
                    height={200}
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
                    Update Rank Logo One
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="rankLogoOne"
                    onChange={(e: any) => setLogoOne(e.target.files[0])}
                  />
                </label>

                {courses?.logoOne && (
                  <Image
                    src={courses?.logoOne}
                    width={200}
                    height={200}
                    alt="logoOne"
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
                    Update Rank Logo Two
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="logoTwo"
                    onChange={(e: any) => setLogoTwo(e.target.files[0])}
                  />
                </label>

                {courses?.logoTwo && (
                  <Image
                    src={courses?.logoTwo}
                    width={200}
                    height={200}
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
                  {/* <span className="mt-2 text-base leading-normal">
                    {getFileNameFromFirebaseUrl(courses?.certificate)}
                  </span> */}
                  <span className="mt-2 text-base leading-normal">
                    Update Course Certificate
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
                {courses?.certificate && (
                  <Image
                    src={courses?.certificate}
                    width={200}
                    height={200}
                    alt="courseImage"
                    className="rounded-md object-contain w-full w-full h-[100px]"
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

                  {/* <span className="mt-2 text-base leading-normal">
                    {getFileNameFromFirebaseUrl(courses?.brochure)}
                  </span> */}

                  <span className="mt-2 text-base leading-normal">
                    Update Course Brochure
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    name="brochure"
                    onChange={(e: any) => setCourseBrochure(e.target.files[0])}
                  />
                </label>
                {courses?.brochure && (
                  <Image
                    src={courses?.brochure}
                    width={200}
                    height={200}
                    alt="courseImage"
                    className="rounded-md object-contain w-full w-full h-[100px]"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mt-[10px] bg-[#ffe4e6] flex flex-col gap-[10px] p-[20px] justify-center rounded-md    border border-[#fda4af]">
            <div className=" w-full">
              <label className="font-medium text-sm text-slate-600 dark:text-slate-400">
                Meta Title
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
                Meta description
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
          {loading && (
            <button className="mt-[20px] w-min text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700">
              Loading...
            </button>
          )}

          {!loading && (
            <button
              type="submit"
              className="mt-[20px] w-min text-[15px] flex items-center rounded-md gap-[10px] justify-center	 px-[20px] py-[10px] text-[#fff] transition-all hover:transition-all bg-indigo-500 hover:bg-indigo-700"
            >
              Update
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
