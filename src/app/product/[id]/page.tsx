import Button from "@/app/components/button/Button";
import CourseSyllabusPage from "@/app/components/course-syllabus/page";
import FaqNew from "@/app/components/faq-section/page";
import HeaderLayout from "@/app/components/headerLayout/HeaderLayout";
import { connect } from "@/app/dbConfig";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Courses from "@/app/models/coursesModels";
import FormUI from "@/app/components/form/FormUI";
import ApplyNowButton from "@/app/components/applyNowButton";

const getSingleCourse = async (slug: string) => {
  try {
    connect();
    const cour = await Courses.findOne({ slug });
    const json = JSON.stringify(cour);
    const plainObj = JSON.parse(json);
    return plainObj;
  } catch (error) {
    return error;
  }
};

const ProductPage = async ({ params }: any) => {
  const paramA = params.id;
  const response = await getSingleCourse(paramA);

  return (
    <>
      <HeaderLayout>
        <div>
          {/* bg-[url('/product-banner.jpg')] */}
          <div className="bg-[url('/65e8a443d3a217849e428432_dhruv-hero-image.png')] relative pt-10 pb-20 sm:px-24 px-2">
            <div className="max-w-[670px] bg-white relative rounded-md p-6">
              <div className="sm:flex justify-between">
                <div>
                  <Image
                    src={response?.universityLogo}
                    alt="logo"
                    width={185}
                    height={40}
                    className="object-contain"
                    objectFit="contain"
                  />
                </div>
                <div className="flex gap-4 sm:mt-0 mt-2 ">
                  <div className="flex gap-2 items-center">
                    {response?.logoOne && (
                      <>
                        <Image
                          src={response?.logoOne}
                          alt="plus"
                          width={70}
                          height={70}
                          className="w-[50px] h-[50px] object-contain"
                        />
                        {response?.logoOnedescription.length > 14 ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                response?.logoOnedescription
                                  ?.replace(/"/g, "")
                                  .substring(0, 15) + "...",
                            }}
                          ></div>
                        ) : (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: response?.logoOnedescription
                                ?.replace(/"/g, "")
                                .substring(0, 15),
                            }}
                          ></div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex gap-2 items-center">
                    {response?.logoTwo && (
                      <>
                        <Image
                          src={response?.logoTwo}
                          alt="plus"
                          width={70}
                          height={70}
                          className="w-[50px] h-[50px] object-contain"
                        />
                        {response?.logoTwodescription?.replace(/"/g, "")
                          .length > 14 ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                response?.logoTwodescription
                                  ?.replace(/"/g, "")
                                  .substring(0, 15) + "...",
                            }}
                          ></div>
                        ) : (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: response?.logoTwodescription?.replace(
                                /"/g,
                                ""
                              ),
                            }}
                          ></div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center relative max-sm:block">
                <div>
                  <div className="sm:mt-4 mt-2 bg-[#e8f0fc] w-fit px-2 py-[5px] text-[#00000099] text-sm">
                    <p>{response?.courseBranch?.[0]?.label}</p>
                  </div>
                  <h3 className="sm:text-3xl text-xl font-semibold tracking-wide sm:mt-4 mt-2 max-sm:mb-[0px]">
                    {response?.title}
                  </h3>
                  <div className="sm:flex items-center gap-4 text-[#999999] text-sm my-6 max-sm:my-[0px] max-sm:mt-[5px]">
                    {/* <div className="sm:mb-0 mb-2">
                  <Image
                    src={"/svg/four-and-half-starssvg.svg"}
                    alt="stars"
                    width={80}
                    height={16}
                  />
                </div>
                <span>8,367 Ratings</span> */}
                    <ul className="sm:flex gap-2 list-disc">
                      <li className="ml-4 text-[14px] max-sm:mb-[2px]">
                        Online Mentorship
                      </li>
                      <li className="ml-4 text-[14px] max-sm:mb-[2px]">
                        {response?.duration}
                      </li>
                      <li className="ml-4 text-[14px] max-sm:mb-[2px]">
                        Career Support
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src={response?.universityImage}
                    width={245}
                    height={200}
                    alt="certificate"
                    objectFit="cover"
                    className="rounded-md absolute right-0 top-4 max-sm:static max-sm:mb-[15px]"
                  />
                </div>
              </div>
              {/* <div className="flex gap-6">
               
                <Button
                  text={"Apply Now"}
                  className={
                    "hover:shadow-md sm:w-[226px] flex justify-center !rounded-md !border-black sm:py-4 py-2 sm:text-md text-sm"
                  }
                />
              </div> */}
              <ApplyNowButton />
              {/* play button for tabs and mobiles */}
              {/* <div
                className="absolute sm:top-[40%] top-[55%] md:hidden block top-[40%] border right-[5%] bg-white p-4 rounded-full flex items-center justify-center cursor-pointer"
                // onClick={() => setVideo(true)}
              >
                <Image
                  src="/svg/play.svg"
                  alt="play"
                  width={44}
                  height={44}
                  className="relative left-[2px]"
                />
              </div> */}
            </div>
            {/* <div
              className="absolute top-[40%] w-fit md:block hidden lg:left-[70%] lg:right-0 right-[5%] bg-white p-4 rounded-full flex items-center justify-center cursor-pointer"
              // onClick={() => setVideo(true)}
            >
              <Image
                src="/svg/play.svg"
                alt="play"
                width={44}
                height={44}
                className="relative left-[2px]"
              />
            </div> */}

            {/* <div className="backdrop-blur-md h-screen absolute top-0 w-screen left-0 m-auto">
                <iframe
                  className="relative top-[20%] m-auto"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Dmu2AL8em8M?si=jTKgBgXt1_I4Pzyi"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div
                  className="bg-white w-[20px] h-[20px] flex rounded-full text-center justify-center items-center text-xl rotate-45 absolute right-[28%] top-[15%] cursor-pointer"
                  // onClick={() => setVideo(false)}
                >
                  +
                </div>
              </div> */}
          </div>

          <section className="bg-gradient-to-r from-[#ee2c3c] to-[#da202f] py-[10px] sticky top-[66px] z-[9]">
            <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] flex justify-center max-sm:overflow-x-scroll mobileoverflow-x overflow-y-hidden	">
              <ul className="flex gap-[10px] mb-[0px] max-sm:whitespace-nowrap max-sm:w-[100%]">
                {tabsarry?.map((nav, index) => {
                  return (
                    <>
                      <li className="mb-[0px]">
                        <Link
                          href={nav.link}
                          className="text-[#fff] hover:bg-[#a51520] text-[16px] leading-[1.5em] cursor-pointer   px-[15px] py-[5px]  rounded-lg"
                        >
                          {nav.linkname}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </section>

          <div className="md:mx-9  pt-[30px]  px-4" id="overview">
            <div className="grid sm:grid-cols-[2fr_1fr] gap-[30px]">
              <div className="lg:pl-11 text-justify">
                <div
                  dangerouslySetInnerHTML={{
                    __html: response?.description?.replace(/"/g, ""),
                  }}
                ></div>
                {/* <div className="sm:mt-0 mt-4">
                  <Image
                    src={"/why.png"}
                    alt="why"
                    width={160}
                    height={250}
                    className="m-auto md:w-[50%]"
                  />
                </div> */}
              </div>
              <div>
                <div className="forms ">
                  <FormUI />
                </div>
              </div>
            </div>
          </div>

          <section
            id="certificate"
            className=" py-[30px] certtingt border border-b-slate-50 bg-[#cccfd3] border-t-slate-50 mt-[30px]  "
          >
            <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
              <div className="grid sm:grid-cols-2 gap-4 items-center">
                <div className="certificatebigimage p-[20px] bg-[#fff] border border-[#cfcece]  certificate shadow-[0px 0px 10px] shadow-[#cfcbcb] ">
                  <div>
                    <Image
                      src={response?.universityImage}
                      width={600}
                      height={500}
                      alt="certificate"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="contentbox md:mx-15">
                  <div>
                    <div
                      className={`grid ${
                        response?.logoOne
                          ? "sm:grid-cols-2"
                          : response?.logoTwo
                          ? "sm:grid-cols-2"
                          : "grid-cols-1"
                      } gap-4 items-start`}
                    >
                      <div
                        className={`certificate-detail-wrapper ${
                          response?.logoOne
                            ? ""
                            : response?.logoTwo
                            ? ""
                            : "w-fit m-auto"
                        }`}
                      >
                        <div className="inner">
                          <Image
                            src={response?.certificate}
                            width={
                              response?.logoOne
                                ? 550
                                : response?.logoTwo
                                ? 550
                                : 250
                            }
                            height={550}
                            alt="certificate"
                            className="object-contain"
                          />
                        </div>
                        {/* <div className="text-center mt-[20px]">
                          <Link
                            href="#"
                            className="text-[red] text-[15px] font-[500] underline underline-offset-8 cursor-pointer"
                          >
                            View Sample Certificate
                          </Link>
                        </div> */}
                      </div>

                      <div className="rank-detail-wrapper flex flex-col gap-[10px]">
                        {response?.logoOne && (
                          <div className="flex gap-[10px] ">
                            <div className="rankimage w-[70px] h-[70px] bg-[#fff] border border-[#cfcece]  certificate shadow-[0px 0px 10px] shadow-[#cfcbcb]">
                              <Image
                                src={response?.logoOne}
                                width={70}
                                height={70}
                                alt={"logo"}
                              />
                            </div>
                            <div className="rankcontentbox flex-1">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: response?.logoOnedescription?.replace(
                                    /"/g,
                                    ""
                                  ),
                                }}
                              ></div>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-[10px] ">
                          {response?.logoTwo && (
                            <>
                              <div className="rankimage w-[70px] h-[70px] bg-[#fff] border border-[#cfcece]    shadow-[0px 0px 10px] shadow-[#cfcbcb]">
                                <Image
                                  src={response?.logoTwo}
                                  width={70}
                                  height={70}
                                  alt={"logo"}
                                />
                              </div>
                              <div className="rankcontentbox flex-1 mt-[20px]">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      response?.logoTwodescription?.replace(
                                        /"/g,
                                        ""
                                      ),
                                  }}
                                ></div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <h4
                      className="text-[15px] font-[600] mb-[5px] text-[#343434]  mt-[15px]   "
                      dangerouslySetInnerHTML={{
                        __html: response?.certificateDescription?.replace(
                          /"/g,
                          ""
                        ),
                      }}
                    ></h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" !py-[30px] ">
            <div className="md:max-w-[1200px] w-[100%] mx-auto  textbox flex flex-col gap-[10px] p-[10px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: response?.universityDescription?.replace(/"/g, ""),
                }}
              ></div>
            </div>
          </section>

          <section id="course-cyllabus">
            <CourseSyllabusPage courseModule={response?.courseModule} />
          </section>

          {/* <section className="bg-slate-200 p-[30px]" id="fee">
            <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
              <div className=" ">
                <h4 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[10px]">
                  Fee & Scholarships
                </h4>
                <p className="text-[16px] font-[500] text-[#383838]">
                  Our flexi-payment options allow students to pay fees in
                  hassle-free installments.
                </p>
              </div>

              <div className=" flex gap-[15px] mt-[15px] ">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[20px] rounded-md flex-1 text-center flex flex-col justify-center">
                  <h3 className="sm:text-2xl text-lg   text-center font-semibold mb-[10px] text-[#fff]">
                    FULL COURSE FEE
                  </h3>
                  <p className="text-[15px] font-[500]   text-[#fff]">
                    <span>INR {response?.coursePrice} </span>
                  </p>
                  <p className="text-[10px] font-[500]   text-[#fff]">
                    incluslve Of all taxes
                  </p>
                </div>

                <div className="flex-1 flex flex-col gap-[15px]">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[20px] rounded-md flex-1">
                    <div className="flex items-center justify-center gap-[10px]">
                      <h3 className="sm:text-2xl text-lg  text-center font-semibold  text-[#fff]">
                        PER SEMESTERS
                      </h3>
                      <div>
                        <p className="text-[15px] font-[500]   text-[#fff]">
                          <span>INR {response?.semesterPrice} </span>
                        </p>
                        <p className="text-[10px] font-[500]   text-[#fff]">
                          incluslve Of all taxes
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[20px] rounded-md flex-1">
                    <div className="flex items-center justify-center gap-[10px]">
                      
                      <div className="flex-1">
                        <p className="sm:text-2xl text-lg text-center font-semibold   text-[#fff]">
                          {response?.priceContent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section id="faqNew">
            <FaqNew courseModule={response?.courseFaq} />
          </section>

          <div className="sm:px-16 px-4 md:mx-16">
            <h3 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[10px]">
              eduXLL Learner Support
            </h3>
            <p className="mt-2 text-[16px] font-[500]">
              Talk to our experts. We’re available 24/7.
            </p>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 items-center my-8">
              <div className="flex gap-2 sm:text-xl text-md items-center">
                <div>
                  <Image
                    src="/india.png"
                    alt="country"
                    width={32}
                    height={32}
                    className="sm:w-[100%] w-[75%]"
                  />
                </div>
                <span className="sm:text-xl text-sm">Indian Nationals</span>
              </div>
              <div className="border border-red-500 rounded-full w-fit md:p-4 p-2 font-semibold flex gap-2 items-center">
                <div>
                  <Image
                    src={"/svg/phone.svg"}
                    alt="phone"
                    width={24}
                    height={24}
                    className="sm:w-[100%] w-[75%]"
                  />
                </div>
                <span className="sm:text-lg text-xs">+91 8448 198 656</span>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    src="/svg/earth.svg"
                    alt="earth"
                    width={32}
                    height={32}
                    className="sm:w-[100%] w-[75%]"
                  />
                </div>
                <span className="sm:text-xl text-sm">Foreign Nationals</span>
              </div>
              <div className="w-fit flex gap-2 items-center md:p-4 p-2 border border-red-500 rounded-full font-semibold">
                <div>
                  <Image
                    src={"/svg/phone.svg"}
                    alt="phone"
                    width={24}
                    height={24}
                    className="sm:w-[100%] w-[75%]"
                  />
                </div>
                <span className="sm:text-lg text-xs">+91 8448 198 656</span>
              </div>
            </div>
          </div>
        </div>
      </HeaderLayout>
    </>
  );
};
export default ProductPage;

const tabsarry = [
  { link: "#overview", linkname: "Overview" },
  { link: "#certificate", linkname: "Certificate" },
  { link: "#course-cyllabus", linkname: "Course Syllabus" },
  // { link: "#fee", linkname: "Fee & scholarships" },
  { link: "#faqNew", linkname: "FAQ" },
];

const rankdetailarry = [
  {
    rankimage: "/no-4.png",
    rankheading: "Top Standalone Institution ",
    ranksubheading: "*Outlook India",
  },
  {
    rankimage: "/no-4.png",
    rankheading: "Private B-Schools",
    ranksubheading: "*Careers360",
  },
  {
    rankimage: "/no-5.png",
    rankheading: "Non-IIM/IIT Institute",
    ranksubheading: "*NIRF",
  },
];
