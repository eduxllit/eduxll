"use client";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Slidernav1 from "../components/slidernav";
import { useEffect, useState } from "react";
import TabWraper from "../components/tab/wraper";
import TabItem from "../components/tab/items";
import TabPanel from "../components/tab/panel";
import ManipalCardDegree from "../components/manipalcarddegree/page";
import ExperienceCard2 from "../components/manipalcarddegree/experiencecard2";
import OnlineManipalForm from "../components/form/onlinemanipalform";
import FormUI from "../components/form/FormUI";

const OnlineManipal = () => {
  const [activeTab, setActiveTab] = useState("Master's Degree");

  const mobileSize = 500;
  const desktopsize = 501;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="bg-[#fff] sticky top-0    relative z-[999]">
        <div className="max-w-[1133px] m-auto ">
          <div className="topheader flex justify-between items-center py-[20px] max-sm:px-[15px] ">
            <div className="leftlogo">
              <Image
                src={"/onlinemanipal/logo.png"}
                width={212}
                height={69}
                alt={""}
                className="max-sm:w-[150px]"
              />
            </div>
            <div className="rightlogo max-sm:hidden">
              <a
                href="#"
                className=" block m-auto bg-[#ff270d] w-fit py-[13px] px-[31px] font-[600]  rounded-[2px] pointer text-[#fff] text-[16px] "
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="max-w-[1133px] m-auto">
          <div className="flex gap-[10px] mb-[40px] max-sm:block max-sm:px-[15px]">
            <div className="max-w-[70%] flex-1 max-sm:w-full max-sm:max-w-[100%]">
              <div className="relative">
                <Slidernav1 navfix="4" navsize="40" />

                <Swiper
                  slidesPerView={1}
                  loop={true}
                  className="mySwiper4 width-100"
                  navigation={{
                    nextEl: ".review4-swiper-button-next",
                    prevEl: ".review4-swiper-button-prev",
                  }}
                  modules={[Navigation, Pagination]}
                >
                  <SwiperSlide className="rounded-[5px]">
                    <Image
                      src={"/onlinemanipal/Capture.PNG"}
                      alt={""}
                      width={794}
                      height={387}
                      className="rounded-[5px]"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-[5px]">
                    <Image
                      src={"/onlinemanipal/Capture2.PNG"}
                      alt={""}
                      width={794}
                      height={387}
                      className="rounded-[5px]"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="notifaction bg-[#E1EFBA] p-[20px] rounded-[5px] mt-[10px] flex gap-[10px] items-center">
                <div className="image">
                  <Image
                    src={"/onlinemanipal/date-ticker.gif"}
                    alt={""}
                    width={20}
                    height={20}
                    className="leading-0"
                  />
                </div>

                <span className="divider text-[#535353] text-[16px] font-[700] flex-1 max-sm:text-[14px]">
                  Last date of admission: 13th June{" "}
                  <span className="px-[10px]">|</span> Limited seats available!
                </span>
              </div>
            </div>
            <div className="max-w-[30%] flex-1 max-sm:w-full max-sm:max-w-[100%] max-sm:mt-[10px]">
              <div className="forms ">
                <OnlineManipalForm />
              </div>
            </div>
          </div>

          <section className="bg-[#efefef] py-[24px] px-[50px] rounded-[5px] mb-[40px] max-sm:px-[15px]">
            <div className="grid  grid-cols-5 max-sm:grid-cols-3">
              {bannerbottomarry?.map((items, index) => {
                return (
                  <>
                    <div key={index}>
                      <h3 className="text-[#ff6600] text-[30px] pb-[5px] leading-[30px] font-[700] mb-0 max-sm:font-[500] max-sm:text-[20px] max-sm:leading-[24px]">
                        {items.number}
                      </h3>
                      <p className="text-[#535353] text-[16px] pb-[5px] leading-[1.3] font-[600] max-sm:font-[400] max-sm:text-[14px] max-sm:leading-[14px]">
                        {items.text}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </section>

          <div className="mb-[40px] max-sm:px-[15px]">
            <div>
              <h4 className="text-[#343634]  max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px] font-[500] pb-[20px]">
                Rankings &{" "}
                <span className="italic text-[#343634] max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px]">
                  accreditations
                </span>
              </h4>
            </div>

            <div className="relative">
              <Slidernav1 navfix="4" navsize="40" />

              <Swiper
              slidesPerView={isMobile ? 1 : 6}
                spaceBetween={10}
                loop={true}
                height={200}
                className="mySwiper4 width-100"
                navigation={{
                  nextEl: ".review4-swiper-button-next",
                  prevEl: ".review4-swiper-button-prev",
                }}
                modules={[Navigation, Pagination]}
              >
                {accreditationsarry?.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide key={index} className="">
                        <div className="bg-[#f7f7f7] py-[18px] px-[13px] rounded-[5px] h-[260px] relative">
                          <div className="p-[4px] bg-[#fff] rounded-[2px] shadow-md absolute top-0 left-0">
                            <Image
                              src="/onlinemanipal/acc-icon.svg"
                              alt={item.text}
                              width={21}
                              height={21}
                              className=""
                            />
                          </div>

                          <div className="bg-[#fff] flex justify-center items-center p-[12px] rounded-[2px] mb-[18px]">
                            <Image
                              src={item.image}
                              alt={item.text}
                              width={150}
                              height={150}
                              className="m-auto w-[150px]"
                            />
                          </div>
                          <p className="text-[#000] text-[12px] min-h-[30px] font-bold leading-[17px] text-center mb-0">
                            {item.text}
                          </p>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <section className="mb-[40px] max-sm:px-[15px]">
            <div>
              <h4 className="text-[#343634]  max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px] font-[500] pb-[20px]">
                Explore our online{" "}
                <span className="italic text-[#343634] max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px]">
                  degree courses
                </span>
              </h4>
            </div>

            <div className="Degreetab">
              <TabWraper bottomline>
                {tabsArray.map((item, index) => (
                  <TabItem
                    width="auto"
                    active={activeTab === item.tabname}
                    key={index}
                    onClick={() => setActiveTab(item.tabname)}
                  >
                    {item.tabname}
                  </TabItem>
                ))}
              </TabWraper>

              <div className="mt-[16px]">
                <TabPanel active={activeTab === "Master's Degree"}>
                  <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-[15px]">
                    {MasterDegreetabesarry?.map((items, index) => {
                      return (
                        <>
                          <ManipalCardDegree
                            Months="24"
                            amount={items.amount}
                            degreename={items.degreename}
                            colour={items.colour}
                            key={index}
                            coursename={items.coursename}
                            universityname={items.universityname}
                          />
                        </>
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel active={activeTab === "Bachelor's Degree"}>
                  <div className="grid grid-cols-4  max-sm:grid-cols-1 gap-[15px]">
                    {BachelorDegreetabesarry?.map((items, index) => {
                      return (
                        <>
                          <ManipalCardDegree
                            Months="24"
                            amount={items.amount}
                            degreename={items.degreename}
                            colour={items.colour}
                            key={index}
                            coursename={items.coursename}
                            universityname={items.universityname}
                          />
                        </>
                      );
                    })}
                  </div>
                </TabPanel>
              </div>
            </div>
          </section>

          <section className="mb-[40px]  max-sm:mx-[15px]">
            <div className="bg-[#F5FFD9] p-[50px] w-full max-sm:px-[15px] ">
              <div className="grid grid-cols-2  max-sm:grid-cols-1  mb-[20px]">
                {Requestcallarry?.map((items, index) => {
                  return (
                    <>
                      <div key={index} className="text-center">
                        <Image
                          src={items.image}
                          alt={""}
                          width={32}
                          height={35}
                          className="m-auto h-[35px]"
                        />

                        <h3 className="text-[20px] text-[#343634] leading-[24px] font-[600] m-[10px]">
                          {items.heading}
                        </h3>
                        <p className="text-[16px] text-[#535353] m-[10px]">
                          {items.pre}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>

              <a
                href="#CareerCounseling"
                className=" block m-auto bg-[#131212] w-fit py-[13px] px-[31px] font-[600]  rounded-[2px] pointer text-[#fff] text-[16px] "
              >
                Request Call Back
              </a>
            </div>
          </section>

          <section className="mb-[40px] max-sm:px-[15px]">
            <div>
              <h4 className="text-[#343634]  max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px] font-[500] pb-[20px]">
                Online Manipal
                <span className="italic text-[#343634] max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px]">
                  advantages
                </span>
              </h4>
            </div>

            <div className="grid grid-cols-4 gap-[12px] mb-[20px] advantagesarrybox max-sm:grid-cols-1">
              {advantagesarry?.map((items, index) => {
                return (
                  <>
                    <div
                      className={`items p-[24px] rounded-[5px]  ${items.card}`}
                      key={index}
                    >
                      <Image
                        src={items.image}
                        alt={items.heading}
                        width={30}
                        height={30}
                        className="mb-[30px]"
                      />
                      <h4 className="text-[16px] font-bold pb-[20px] h-[65px] max-sm:h-auto text-[#535353] tracking-[0.16px] mb-0">
                        {items.heading}
                      </h4>
                      <p className="text-[16px] text-[#535353] font-[400]">
                        {items.pre}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </section>

          <div className="mb-[40px] max-sm:px-[15px]">
            <div>
              <h4 className="text-[#343634]  max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px] font-[500] pb-[20px]">
                Learner
                <span className="italic text-[#343634] max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px]">
                  experience
                </span>
              </h4>
            </div>
            <div className=" ">
              <div className="relative">
                <Slidernav1 navfix="5" navsize="40" />

                <Swiper
                  // slidesPerView={window.innerWidth < mobileSize ? 1 : 4}
                  slidesPerView={4}
                  spaceBetween={10}
                  loop={true}
                  height={200}
                  className="mySwiper5 width-100"
                  navigation={{
                    nextEl: ".review5-swiper-button-next",
                    prevEl: ".review5-swiper-button-prev",
                  }}
                  modules={[Navigation, Pagination]}
                >
                  {experiencearry?.map((items, index) => {
                    return (
                      <>
                        <SwiperSlide key={index} className="">
                          <ExperienceCard2
                            key={index}
                            image={items.image}
                            content={items.content}
                            name={items.name}
                            online={items.online}
                          />
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#efefef] py-[50px]  max-sm:p-[20px] "
        id="CareerCounseling"
      >
        <div className="max-w-[1133px] m-auto">
          <div className="grid grid-cols-2 items-center max-sm:grid-cols-1">
            <div className="">
              <div>
                <p className="text-[#343634] max-sm:text-center  max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px] font-[500] pb-[20px]">
                  Interested to join <br />
                  <span className="italic text-[#343634] max-sm:text-[27px] max-sm:leading-[34px] text-[38px] pb-[5px] leading-[40px]">
                    our courses?
                  </span>
                </p>

                <p className="text-[16px] text-[#000] max-sm:text-center max-sm:text-[14px]">
                  Share your details and we ll get back to you.
                </p>
              </div>
            </div>
            <div className="FormUIstyle max-sm:mt-[20px]">
              <FormUI heading="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#000] py-[20px]  max-sm:bg-[#070E2B]  max-sm:px-[15px]">
        <div className="max-w-[1133px] m-auto flex justify-between max-sm:text-center items-center   max-sm:block">
          <div>
            <p className="text-[14px] text-[#fff] ">© Online Manipal 2024</p>
          </div>
          <div className="flex justify-center max-sm:mt-[15px]">
            <div className="flex gap-[10px]">
              <Image
                src={"/onlinemanipal/help-center.png"}
                alt={""}
                width={20}
                height={20}
              />
              <p className="text-[16px] text-[#fdf8f4] font-bold ">
                Help Center
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineManipal;

const bannerbottomarry = [
  {
    number: "70+",
    text: "years of Manipal legacy",
  },
  {
    number: "1500+",
    text: "Learner footprint across towns & cities of India",
  },
  {
    number: "60+",
    text: "Student nationalities",
  },
  {
    number: "500+",
    text: "Expert faculty",
  },
  {
    number: "100+",
    text: "Recruiters from Fortune 500 companies",
  },
];

const accreditationsarry = [
  {
    image: "/onlinemanipal/NAAC-A-2.jpg",
    text: "NAAC A+ Accredited University",
  },
  {
    image: "/onlinemanipal/AICTE-3.jpg",
    text: "AICTE Approved Programs ",
  },
  {
    image: "/onlinemanipal/UGC-2.jpg",
    text: "UGC-entitled Online Degrees Equivalent to Campus Degree  ",
  },
  {
    image: "/onlinemanipal/NIRF-1.jpg",
    text: "Amongst India’s Top #101-150 Universities in 2023 ",
  },
  {
    image: "/onlinemanipal/WES-2.jpg",
    text: "Globally Recognized Online Degrees",
  },
  {
    image: "/onlinemanipal/ACU-3.jpg",
    text: "Member of ACU ",
  },
  {
    image: "/onlinemanipal/ICAS-1.jpg",
    text: "International Credential Assessment Service of Canada ",
  },
  {
    image: "/onlinemanipal/IQAS_Online-Manipal-Website.jpg",
    text: "International Qualifications Assessment Service (IQAS) ",
  },
  {
    image: "/onlinemanipal/zaqa-logo.jpg",
    text: "Zambia Qualifications Authority ",
  },
  {
    image: "/onlinemanipal/Career360-1.jpg",
    text: "Amongst India's Top 15 Universities (Management) 2023",
  },
];

const tabsArray = [
  {
    tabname: "Master's Degree",
  },
  {
    tabname: "Bachelor's Degree",
  },
];

const MasterDegreetabesarry = [
  {
    degreename: "Online MBA",
    coursename: "MASTER OF BUSINESS ADMINISTRATION",
    amount: "175000",
    universityname: "Manipal University Jaipur",
    colour: "orange",
  },
  {
    degreename: "Online MCA",
    coursename: "MASTER OF COMPUTER APPLICATIONS",
    amount: "158000",
    universityname: "Manipal University Jaipur",
    colour: "orange",
  },
  {
    degreename: "Online MBA",
    coursename: "MASTER OF BUSINESS ADMINISTRATION FOR WORKING PROFESSIONALS",
    amount: "280000",
    universityname: "Manipal Academy of Higher Education",
    colour: "purple",
  },
  {
    degreename: "Online MCA",
    coursename: "MASTER OF COMPUTER APPLICATIONS",
    amount: "98000",
    universityname: "Sikkim Manipal University",
    colour: "Blue",
  },
  {
    degreename: "Online MCOM",
    coursename: "MASTER OF COMMERCE",
    amount: "108000",
    universityname: "Manipal University Jaipur",
    colour: "orange",
  },
  {
    degreename: "Online MA",
    coursename: "MASTER OF ARTS",
    amount: "75000",
    universityname: "Sikkim Manipal University",
    colour: "Blue",
  },
  {
    degreename: "Online MCOM",
    coursename: "MASTER OF COMMERCE",
    amount: "75000",
    universityname: "Sikkim Manipal University",
    colour: "Blue",
  },
  {
    degreename: "Online MSC-DS",
    coursename: "M.SC. IN DATA SCIENCE",
    amount: "280000",
    universityname: "Manipal Academy of Higher Education",
    colour: "purple",
  },
  {
    degreename: "Online MSC-BA",
    coursename: "M.SC. IN BUSINESS ANALYTICS",
    amount: "280000",
    universityname: "Manipal Academy of Higher Education",
    colour: "purple",
  },
  {
    degreename: "Online MA-JMC",
    coursename: "MA IN JOURNALISM & MASS COMMUNICATION",
    amount: "140000",
    universityname: "Manipal University Jaipur",
    colour: "orange",
  },
];

const BachelorDegreetabesarry = [
  {
    degreename: "Online BBA ",
    coursename: "BACHELOR OF BUSINESS ADMINISTRATION",
    amount: "135000",
    universityname: "Manipal University Jaipur",
    colour: "orange",
  },
  {
    degreename: "Online BA",
    coursename: "BACHELOR OF ARTS",
    amount: "75000",
    universityname: "Sikkim Manipal University",
    colour: "Blue",
  },
  {
    degreename: "Online BCA ",
    coursename: "BACHELOR OF COMPUTER APPLICATIONS",
    amount: "135000",
    universityname: "Manipal University Jaipur",
    colour: "orange",
  },
  {
    degreename: "Online BCOM ",
    coursename: "BACHELOR OF COMMERCE",
    amount: "75000",
    universityname: "Sikkim Manipal University",
    colour: "Blue",
  },
];

const Requestcallarry = [
  {
    image: "/onlinemanipal/Path3664.svg",
    heading: "Avail easy financing options",
    pre: "With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.",
  },
  {
    image: "/onlinemanipal/Union20.svg",
    heading: "Get attractive scholarships",
    pre: "Exclusive scholarships designed for defense personnel, government employees, differently-abled people & meritorious students.",
  },
];

const advantagesarry = [
  {
    image: "/onlinemanipal/OM-Advantage-_Convenient_class_schedule.svg",
    heading: "Flexible & convenient schedule",
    pre: "Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.",
    card: "bg-[#FEE8DA]",
  },
  {
    image: "/onlinemanipal/UGC-entitled_degree.svg",
    heading: "At par with on-campus degrees",
    pre: "Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.",
    card: "bg-[#E9F4FC]",
  },
  {
    image: "/onlinemanipal/OM-Advantage-_Industry_webinars__simulations.svg",
    heading: "Experienced faculty & mentors",
    pre: "Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.",
    card: "bg-[#FEF5DF]",
  },
  {
    image: "/onlinemanipal/Prestigious_Manipal_alumni_status.svg",
    heading: "Prestigious Manipal alumni network",
    pre: "Be a part of the prestigious Manipal alumni network to build connections and to gain easy access to a wide range of career opportunities.",
    card: "bg-[#F5FFD9]",
  },
];

const experiencearry = [
  {
    image: "/onlinemanipal/Menka-Sharma-Test.jpg",
    content:
      "I always wanted to pursue my higher education dream without quitting my job, and MUJ has made it possible for me through their online degrees. My online MCA degree has given me wings to fly and chase my career aspirations.",
    name: "Menka Sharma",
    online: "Online MCA",
  },
  {
    image: "/onlinemanipal/Sahana-K-Test.jpg",
    content:
      "Funding my undergraduate degree and my younger brother’s education has been possible only because of Manipal University Jaipur’s affordable online B.Com degree. Thanks to Online Manipal, I’m able to manage my work and academics. I believe this online degree will help me become personally and financially independent. ",
    name: "Sahana K",
    online: "Online BCom",
  },
  {
    image: "/onlinemanipal/Botsa-Anitha.jpg",
    content:
      "After being married off, I couldn’t fulfill my dream of continuing my studies. With a bachelor’s degree in hand and one and a half years of experience in accounts, I chose to pursue an online MBA degree from the comfort of my home. With Online Manipal, I’m able to study at my own pace and convenience. So, I’m easily able to balance my academics and personal commitments. ",
    name: "Botsa Anitha",
    online: "Online MBA",
  },
  {
    image: "/onlinemanipal/Sabin-Lamichchane.jpg",
    content:
      "As a working professional, I wanted to enhance my domain knowledge and move to managerial roles. I found Manipal University Jaipur’s online MBA program as the right opportunity to climb up my career ladder. The program has helped me build new skills required to thrive in the industry.&nbsp;",
    name: "Sabin Lamichchane",
    online: "Online MBA",
  },
  {
    image: "/onlinemanipal/Syed.jpg",
    content:
      "With over 2 years of work experience in accounting, I wanted to pursue an online M.Com degree to boost my career further and get a higher salary. Thanks to Online Manipal, I’m able to manage my work life and academic through flexible live classes and recorded sessions which are available on the portal. ",
    name: "Syed Abdul Faizan",
    online: "Online M.Com",
  },
];
