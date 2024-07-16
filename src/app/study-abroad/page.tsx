import Image from "next/image";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Link from "next/link";
import AbroadCourses from "../components/Abroad";
import ProgramsDropdown from "../components/programs-dropdown/program-dropdown";
import SuccessStories from "../components/success-stories/success-stories";
import AbroadUniveritySlider from "../components/abroad-university-slider/abroad-university-slider";
import Button from "../components/button/Button";
import FaqComponent from "../components/faq/faq-abroad";
import AbroadWebinarSlider from "../components/abroad-webinar-slider/abroad-webinar-cards";
import { connect } from "../dbConfig";
import Web from "../models/webinar";
import BlogsSlider from "../components/blogs-slider/blogs-slider";
import FormUI from "../components/form/FormUI";
import ReviewSlider from "../components/review-slider/review-slider";
import StaticAbroad from "../components/StaticAbroad";
import WebinarSlider from "../components/upcoming-webinar/webinar-slider";
import LatestNews from "../components/latest-news/latest-news";
const getAllClassess = async () => {
  try {
    connect();
    const freeMaterClassess = await Web.find();
    console.log(freeMaterClassess, "hii");
    return freeMaterClassess;
  } catch (error) {
    return error;
  }
};
const Courses = async () => {
  const response = await getAllClassess();
  console.log(response, "hii");
  return (
    <HeaderLayout>
      <div
        className="  bg-cover bg-center studyabroadstyle "
        style={{
          backgroundImage: "../ranger-4df6c1b6.png",
        }}
      >
        <div className="max-w-[1280px] m-auto grid md:grid-cols-2 items-center px-4 pb-4">
          <div className="sm:p-8 pt-8 pb-8">
            <h1 className="sm:text-[42px] text-3xl sm:text-left text-center font-semibold mb-4">
              Study Abroad Programs
            </h1>
            <p>
              Studying abroad exposes students to diverse cultures and global
              education systems, enhancing personal and professional growth. It
              broadens perspectives, improves language skills, and provides
              networking opportunities with a diverse peer group, significantly
              boosting employability and offering a competitive edge in career
              advancements.
            </p>
            <div className="grid gap-2 mt-8">
              <div className="flex gap-2 items-center">
                <span className="bg-[#FFBF00] flex justify-center w-6 h-6 p-[4px] rounded-full">
                  <Image
                    src="/svg/dollar.svg"
                    alt="dollar"
                    width={20}
                    height={20}
                  />
                </span>
                <span>Save on tuition and living expenses</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#34B742] w-6 h-6 p-[4px] rounded-full">
                  <Image
                    src="/svg/check-white.svg"
                    alt="dollar"
                    width={20}
                    height={20}
                  />
                </span>
                <span>No GRE/TOEFL required for admission </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#4E3CD1] w-6 h-6 p-[4px] rounded-full">
                  <Image
                    src="/svg/workload.svg"
                    alt="dollar"
                    width={20}
                    height={20}
                  />
                </span>
                <span>Assured Paid Internship Opportunities </span>
              </div>
              <div className="p-4 bg-white border rounded-md">
                <div className="bg-[#FFBF00] text-xs flex w-fit p-2 gap-2">
                  <Image
                    src="/svg/alarm.svg"
                    alt="alarm"
                    width={18}
                    height={18}
                  />
                  <span> limited time offer</span>
                </div>
                <h2>
                  Get a{" "}
                  <span className="text-[#B37000]"> Comprehensive Guide</span>{" "}
                  on Studying in the US with a{" "}
                  <span className="text-[#B37000]">
                    {" "}
                    1 : 1 Counselling for FREE
                  </span>
                </h2>
              </div>
              <div className="flex gap-2 text-sm font-semibold tracking-wide">
                <Image
                  src={"/svg/call.svg"}
                  alt="call"
                  width={20}
                  height={16}
                />
                ENQUIRE: +91- 8448 198 656
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-[716px] flex justify-center items-center rounded-full   block relative">
              <div className="flex-1 max-w-[400px]">
                <FormUI />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        {/* <div className="max-w-[1200px] m-auto">
          <h2 className="text-4xl font-semibold">
            Discover Study Abroad Programs
          </h2>
          <div className="mt-10 mb-4">
            <span className="font-[450] mr-2">Domain:</span>
            <ProgramsDropdown />
          </div>
        </div> */}

        <StaticAbroad onlyCards={true} />
      </div>
      <div className="max-w-[1200px] m-auto px-4">
        <div className="sm:mt-12 mt-6">
          <h2 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold">
            What Students <br />
            Think and Say About eduxLL
          </h2>

          <div>
            <ReviewSlider />
          </div>
        </div>
      </div>

      <div className="bg-purple-900 py-8 px-4">
        <div className="text-white max-w-[900px] m-auto sm:flex grid sm:gap-[50px] gap-4">
          <div>
            <Image src={"/refer.png"} alt="refer" width={200} height={200} />
          </div>
          <div className="flex-1">
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
        {/* <div className="sm:py-[50px] py-6 sm:text-left text-center">
          <h2 className="sm:text-4xl text-2xl font-semibold mb-4">
            Study Abroad Destinations
          </h2>
          <div className="sm:flex grid gap-4 overflow-hidden">
            {abroadArray?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl w-[410px] h-[220px] hover:shadow-xl relative "
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={item?.imageUrl}
                      alt="usa"
                      width={410}
                      height={220}
                    />
                  </div>
                  <h3 className="absolute bottom-0 text-left text-white font-semibold text-xl p-2 w-[410px] bg-gradient-to-r from-black to-transparent rounded-bl-xl rounded-br-xl">
                    {item?.caption}
                  </h3>
                </div>
              );
            })}
          </div>
        </div> */}
        {/* <div>
          <h2 className="my-12 text-4xl font-semibold">
            Top Study Abroad Colleges/Universities
          </h2>
          <AbroadUniveritySlider />
        </div> */}
      </div>

      <div className="bg-[#f4f4f4] sm:py-[50px] py-6 mb-8 px-4">
        <div className="max-w-[1200px] m-auto mb-12">
          <h2 className="sm:text-4xl text-2xl sm:text-left text-center font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <FaqComponent faqCollection={faqCollection} />
        </div>
      </div>
      <div className="max-w-[1200px] m-auto px-4">
        {/* <div>
          <h2 className="sm:text-4xl text-2xl sm:text-left text-center font-semibold">
            Study Abroad Webinars
          </h2>
          <WebinarSlider />
        </div> */}
        <div className="mb-12">
          {/* <h2 className="text-4xl font-semibold mb-2">
            Explore Study Abroad Blogs
          </h2> */}
          {/* <p className="mb-12">
            Read our blog collection to find the answers of your most asked
            questions
          </p> */}
          <LatestNews />
        </div>
      </div>
    </HeaderLayout>
  );
};
export default Courses;
const abroadArray = [
  {
    imageUrl: "/usa.jpg",
    caption: "Study in USA",
  },
  {
    imageUrl: "/germany.jpg",
    caption: "Study in Germany",
  },
];
const faqCollection = [
  {
    question: "How much do I pay to block my seat?",
    answer: "Consult our team.",
  },
  {
    question: "How can i select best university for me?",
    answer: "Consult our team.",
  },
  {
    question: "Is the information provided on this site accurate?",
    answer:
      "Yes, all the information we have provided on this site are accurate.",
  },
];
