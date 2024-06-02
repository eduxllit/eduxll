import Image from "next/image";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import { Input } from "@nextui-org/react";
import Button from "../components/button/Button";
import FreeOnlineCourses from "../components/free-online-courses/free-online-courses";
import WebinarSlider from "../components/upcoming-webinar/webinar-slider";
import ReviewSlider from "../components/review-slider/review-slider";
import FaqComponent from "../components/faq/faq-abroad";

const FreeCourses = () => {

  const header2 = "Achieve your goals with World's leading educators"
  const p = "We'll send an OTP for verification."
  return (
    <HeaderLayout>
      <div className="md:grid grid-cols-2 items-center gap-12 sm:py-12 py-2 max-w-[1140px] m-auto px-4">
        <div className="md:mb-0 mb-6">
          <h2 className="font-semibold sm:text-5xl text-2xl sm:mt-0 mt-4">
          {header2}
          </h2>
          <p className="font-semibold mt-4">
            Over <span className="text-green-600"> 10 crore</span> learners
            trust us for their preparation
          </p>
          <div className="border border-black rounded-xl mt-6">
            <Input placeholder="Enter your mobile number" />
          </div>
          <p className="text-xs mt-2 text-gray-500">
           {p}
          </p>
          <Button
            text={"Join for free"}
            className={
              "bg-[#555f70] border-none text-white !rounded-md w-full flex justify-center py-4 font-semibold mt-8"
            }
          />
        </div>
        <div >
          <Image
          className="m-auto"
            src="/courses-banner.svg"
            alt="banner"
            width={560}
            height={333}
          />
        </div>
      </div>
      <div className="max-w-[1200px] m-auto my-12 px-4">
        <h2 className="text-center sm:text-4xl text-2xl font-semibold mb-6">
          Explore Free Online Courses
        </h2>
        <div>
          <div className="flex font-semibold gap-6 overflow-x-auto">
            {freeCoursesTabs?.map((item, index) => {
              return (
                <p className="cursor-pointer whitespace-nowrap pb-2" key={index}>
                  {item?.tabs}
                </p>
              );
            })}
          </div>
          <FreeOnlineCourses />
        </div>
        <div className="sm:my-16 my-6">
          <h3 className="sm:text-3xl text-2xl font-semibold text-center">
            Register for Upcoming Webinars
          </h3>
          <WebinarSlider />
        </div>
        <div className="sm:my-16 my-6">
          <h2 className="sm:text-3xl text-2xl font-semibold text-center">
            Popular Topics to explore on Great Learning Academy
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 py-4 mt-4">
            {topicsollection?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-4 items-center shadow-xl p-4 border rounded-xl cursor-pointer"
                >
                  <span
                    className={`${item?.color} block w-8 h-8 rounded-md`}
                  ></span>
                  <p>{item?.topic}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-purple-900 py-8 my-12 px-4">
        <div className="text-white max-w-[900px] m-auto sm:flex grid  gap-4">
          <div className="">
            <Image src={"/refer.png"} alt="refer" width={100} height={100} />
          </div>
          <div>
            <h2 className="text-2xl">Refer and Earn</h2>
            <p className="text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, iure.
            </p>
            <Button
              text={"Refer Now"}
              className={"bg-white !rounded-md text-black border-0 mt-4"}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto px-4">
        <div className="my-12">
          <h2 className="text-center text-3xl font-semibold">
            Success Stories
          </h2>
          <p className="lg:text-left text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <ReviewSlider />
          <p className="text-center">
            And thousands more such success success stories...
          </p>
        </div>
      </div>
        <div className="mb-12 bg-[#f4f4f4] py-8 px-4">
          <div className="max-w-[1200px] m-auto">
          <h2 className="font-semibold text-3xl text-center mb-6">Frequently Asked Questions</h2>
          <FaqComponent faqCollection={faqArray} />
          </div>
        </div>
    </HeaderLayout>
  );
};
export default FreeCourses;
const freeCoursesTabs = [
  {
    tabs: "Browse By Domains",
  },
  {
    tabs: "View All",
  },
  {
    tabs: "Data Science",
  },
  {
    tabs: "Development",
  },
  {
    tabs: "Business",
  },
  {
    tabs: "Life Styles",
  },
];
const topicsollection = [
  {
    topic: "ChatGPT",
    color: "bg-pink-600",
  },
  {
    topic: "AI",
    color: "bg-blue-600",
  },
  {
    topic: "Data Science",
    color: "bg-orange-600",
  },
  {
    topic: "Microsoft Excel",
    color: "bg-green-600",
  },
  {
    topic: "Python",
    color: "bg-red-600",
  },
  {
    topic: "Machine Learning",
    color: "bg-pink-600",
  },
  {
    topic: "CyberSecurity",
    color: "bg-blue-600",
  },
  {
    topic: "SQL",
    color: "bg-orange-600",
  },
];
const faqArray = [
  {
    question:"What is great learning academy?",
    answer:"Lorem ipsum..!!"
  },
  {
    question:"Are there any hidden charges?",
    answer:"Lorem ipsum..!!"
  },
  {
    question:"How many free courses can i enroll?",
    answer:"Lorem ipsum..!!"
  },
  {
    question:"Can these free courses help me?",
    answer:"Lorem ipsum..!!"
  },

]