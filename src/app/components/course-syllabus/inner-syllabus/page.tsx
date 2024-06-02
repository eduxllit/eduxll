import { connect } from "@/app/dbConfig";
import Courses from "@/app/models/coursesModels";
import Image from "next/image";

const Inner = ({ toggleSylabbus, syllabus, courseModule }: any) => {
  return (
    <div className="sm:my-16 my-8 max-w-[1200px] w-[100%] mx-auto px-[15px]">
      <h3 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[10px]">
        Course Syllabus
      </h3>
      <div className="flex flex-col gap-[10px]">
        {courseModule?.map((value: any) => {
          return (
            <div
              key={value._id}
              className="  border border-[#dd2231]  rounded-md overflow-hidden"
            >
              <div
                className={`grid sm:grid-cols-3 grid-cols-[3fr_2fr_1fr] cursor-pointer   p-4 bg-[#dd2231] ${
                  // toggleSylabbus === value.title ? "" : ""

                  toggleSylabbus === value.modulTitle ? "rounded-t-md" : ""
                }`}
                onClick={() => syllabus(value.modulTitle)}
              >
                <h4 className="text-[15px] font-[500] text-[#fff] mb-[0px]">
                  {value.modulTitle}
                </h4>
                <span className="text-[15px] font-[500] text-[#000]">
                  {value.lesson}
                </span>
                <div className="flex justify-end">
                  <Image
                    src={"/svg/arrow-down.svg"}
                    alt="aoow-down"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              {toggleSylabbus === value.modulTitle && (
                <>
                  <div
                    className="p-4  coursesyllabusui"
                    dangerouslySetInnerHTML={{
                      __html: value?.modulDescription.replace(/<p>/g, "<li>"),
                    }}
                  ></div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Inner;

const courseCollection = [
  {
    title: "Beginner Module",
    lesson: "4 Lessons",
    module: [
      {
        list: "Basics of RPA",
      },
      {
        list: "RPA Benefits",
      },
      {
        list: "Processes that can be automated",
      },
      {
        list: "Types of Robots",
      },
    ],
  },
  {
    title: "Intermediate Module",
    lesson: "3 Lessons",
    module: [
      {
        list: "Installing UiPath Studio (Academic Alliance Edition)",
      },
      {
        list: "Installing browser extensions",
      },
      {
        list: "Hello World Robot",
      },
    ],
  },
  {
    title: "Advanced Module",
    lesson: "5 Lessons",
    module: [
      {
        list: "Screen Scraping",
      },
      {
        list: "Recording",
      },
      {
        list: "Sequences and flowcharts",
      },
      {
        list: "Loops",
      },
      {
        list: "Coding the Robot",
      },
    ],
  },
  {
    title: "Expert Module",
    lesson: "5 Lessons",
    module: [
      {
        list: "Data persistence",
      },
      {
        list: "Working with Excel",
      },
      {
        list: "Selectors",
      },

      {
        list: "What Next",
      },
    ],
  },
];
