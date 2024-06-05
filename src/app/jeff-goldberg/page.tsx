"use client";
import Image from "next/image";
import Link from "next/link";
import FormUI from "../components/form/FormUI";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const JeffGoldberg = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
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
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={"/png/jeff-logo.jpg"}
            alt="jeff"
            width={200}
            height={60}
            className="sm:w-[50%] w-[50%]"
          />
        </div>
        <div>
          <Image
            src={"/logo.webp"}
            alt="jeff"
            width={200}
            height={60}
            className="sm:w-[50%] w-[60%] m-auto"
          />
        </div>
      </div>
      <div className="relative  ">
        <Image
          src={"/jeff-banner-new.jpeg"}
          alt="banner"
          width={1550}
          height={500}
          className="w-full h-[800px] object-cover bannerimagejjj  "
        />

        <Image
          src={"/lights.png"}
          alt="banner"
          width={350}
          height={450}
          className="absolute sm:w-[25%] w-[30%] sm:left-2 left-0 top-0"
        />
        <Image
          src={"/strip.jpeg"}
          alt="banner"
          width={1550}
          height={250}
          className="w-[80%] h-auto absolute bottom-12 left-0 right-0 m-auto  max-sm:w-[100%] max-sm:bottom-0"
        />
        <div className="grid w-[320px] justify-center sm:block absolute top-12 right-16 jjjform">
          <FormUI heading="Contact Form" />
        </div>
      </div>

      <div className="sm:grid grid-cols-3 items-center justify-center text-center text-white ">
        <div className="bg-red-600 p-4 h-full">
          <Image
            src={"/svg/mask.svg"}
            alt="icon"
            width={48}
            height={48}
            className="m-auto "
          />
          <h3 className="text-2xl font-semibold my-2 mt-6 tracking-wider">
            FOUNDATION ACTING
          </h3>
        </div>
        <div className="bg-red-700 p-4 h-full">
          <Image
            src={"/svg/media.svg"}
            alt="icon"
            width={48}
            height={48}
            className="m-auto"
          />
          <h3 className="text-2xl font-semibold my-2 mt-6 tracking-wider">
            SCREENPLAY WRITING
          </h3>
          <p>FILMS & OTT</p>
        </div>
        <div className="bg-red-600 p-4 h-full">
          <Image
            src={"/svg/printer.svg"}
            alt="icon"
            width={48}
            height={48}
            className="m-auto"
          />
          <h3 className="text-2xl font-semibold my-2 mt-6 tracking-wider">
            SCRIPT WRITING
          </h3>
          <p>THEATRE & FILMS</p>
        </div>
      </div>
      <div className="max-w-[1250px] m-auto sm:grid grid-cols-[1fr_1.5fr] my-4 items-center">
        <div>
          <Image
            src={"/jeff.jpeg"}
            alt="jeff"
            width={450}
            height={600}
            className="w-[80%] h-auto"
          />
        </div>
        <div className="p-8">
          <h3 className="text-right text-4xl text-red-900">Jeff Goldberg</h3>
          <p className="text-right">(Founder, Director & Faculty)</p>
          <p className="text-justify mt-4">
            Jeff Goldberg is a filmmaker, writer, director, theatre maker, and
            an actor. He has worked for over 20 years in the film industry, from
            Paris, France; to Mumbai India; to New York. He has been an educator
            at the leading acting institute in India,
          </p>
          <p>
            The Jeff Goldberg Studio, for the last 10 years. Jeff continues to
            write, direct, and act for the stage as well.
          </p>
        </div>
      </div>

      {/* <div>
        <Image
          src={"/ticket.jpeg"}
          alt="ticket"
          width={1650}
          height={950}
          className="w-full h-auto"
        />
      </div> */}
      <div
        className="p-8 pb-0 lg:flex bg-[url('/jeff-banner-new.jpeg')] sm:bg-contain !bg-cover bg-no-repeat w-full"
        style={{ backgroundSize: "100%" }}
      >
        <div className="flex-none">
          <Image
            src={"/demo.png"}
            alt="ticket"
            width={300}
            height={280}
            className="sm:h-auto sm:m-0 m-auto !h-[125px] sm:object-cover object-contain"
          />
        </div>
        <div className="text-white sm:text-4xl leading-normal text-center">
          <h3>
            Live Online Interactive Sessions I Practical Hands-on Training 3
            Months Program I 3 hours Per Class I Twice a Week Placement
            Assistance I Weekend Offline Workshop
          </h3>
          <div className="flex gap-2 justify-between">
            <div className="flex m-auto">
              <div>
                <Image
                  src={"/online.png"}
                  alt="image"
                  width={300}
                  height={80}
                  className="h-[80px]"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-2">
                <Image
                  src={"/second.png"}
                  alt="image"
                  width={300}
                  height={80}
                  className="h-[80px]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <Image
                src={"/enroll-new.png"}
                alt="enroll"
                width={300}
                height={80}
                className="h-[80px]"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto my-4 mt-0">
        <h2 className="bg-red-600 p-2 text-white sm:text-3xl text-2xl font-[300] text-center tracking-wide mb-1 mt-1">
          ALUMNI
        </h2>
        {/*  grid grid-cols-3 gap-4 */}
        <div className="px-4 mt-0 mb-0">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={isMobile ? 1 : 4}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {actorsArray?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="pt-1">
                    <Image
                      src={item?.imageUrl}
                      alt="actor"
                      width={400}
                      height={200}
                      className="w-full h-[300px] rounded-xl"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="bg-red-600 p-12 text-[#e3d3d3]">
        <div className="grid gap-4 max-w-[1250px] m-auto dfgdfgdfg">
          <h2 className="sm:text-3xl text-2xl text-center font-[400] max-w-[550px] m-auto">
            The Jeff Goldberg Studio Performing Arts Programs
          </h2>
          <div className="sdffsdf">
            {goldArray?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="sm:flex gap-12 justify-between items-center sm:my-6 mt-2 mb-2 boxcard"
                >
                  {index % 2 == 0 && (
                    <div className="">
                      <Image
                        src={item?.gridImage}
                        alt="image"
                        width={450}
                        height={450}
                        className="h-auto sm:m-0 m-auto rounded-xl"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex gap-4 items-center mb-2 py-0">
                      <Image
                        src={item?.imageUrl}
                        alt="mask"
                        width={44}
                        height={52}
                      />
                      <h3 className="mb-0 font-[600] text-[20px]">
                        {item?.head}
                      </h3>
                    </div>
                    <ul className="list-disc">
                      {item?.desc?.map((value, ind) => {
                        return (
                          <li key={ind} className="font-[400]">
                            {value?.list}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {index % 2 !== 0 && (
                    <div className="sm:pl-12">
                      <Image
                        src={item?.gridImage}
                        alt="image"
                        width={450}
                        height={450}
                        className="h-auto sm:m-0 m-auto rounded-xl"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="my-12 items-center sm:grid sm:grid-cols-[1fr_1fr] grid-cols-[1fr_1fr]">
        <div>
          <div className="grid grid-cols-2 gap-1">
            <div>
              <Image
                src={"/thtr.png"}
                alt="theater"
                width={500}
                height={500}
                className="w-[300px] h-auto m-0 sm:ml-8 ml-8"
              />
            </div>
            <div className="grid sm:pl-0 pl-4">
              <Image
                src={"/enroll.png"}
                alt="enroll"
                width={320}
                height={450}
                className=" h-auto"
              />
            </div>
          </div>
          <div className="sm:flex gap-2 justify-between    sm:px-12 px-4 my-8 ">
            <Link
              href="tel:+918448699637"
              className="flex items-center font-semibold gap-2 sm:mb-0 mb-4 max-sm:justify-center"
            >
              {" "}
              <span className="bg-red-500 p-2 flex justify-center w-[40px] h-[40px] rounded-full block">
                {" "}
                <Image
                  src={"/svg/phone-white.svg"}
                  alt="phone"
                  width={20}
                  height={20}
                />
              </span>{" "}
              +91 8448699637
            </Link>{" "}
            <Link
              href="mailto:info@eduxll.com"
              className="flex items-center font-semibold gap-2 max-sm:justify-center"
            >
              <span className="bg-red-500 p-2 flex justify-center w-[40px] h-[40px] rounded-full block">
                {" "}
                <Image
                  src={"/svg/mail-white.svg"}
                  alt="phone"
                  width={20}
                  height={20}
                />
              </span>{" "}
              info@eduxll.com
            </Link>
          </div>
        </div>
        <div className="sm:px-12 px-4">
          <div className="sm:flex gap-6 grid gap-4">
            <Image src={"/logo.webp"} alt="logo" width={170} height={45} />
            <div>
              <p className="font-semibold">
                The official Global Online Partners of{" "}
              </p>
              <p className="text-red-500 font-semibold">
                The Jeff Goldberg Studio
              </p>
            </div>
          </div>
          <p className="text-justify mt-6">
            EduXLL Online Higher Education Academy offers a unique blend of
            academic and industry-focused curriculum across its diverse
            programs, serving students and professionals on a global scale. At
            eduXLL, learners benefit from the expertise of renowned professors
            from esteemed universities and business schools worldwide. Through a
            flexible learning model and the integration of live corporate
            projects, our courses provide a practical grasp of theoretical
            concepts, empowering individuals to excel in their professional
            environments. This approach ensures that students are well-prepared
            to thrive in their respective careers.
          </p>
        </div>
      </div>
    </>
  );
};
export default JeffGoldberg;
const goldArray = [
  {
    imageUrl: "/svg/mask.svg",
    gridImage: "/grid01.jpeg",
    head: "3-Months Online Foundation Acting Program",
    desc: [
      {
        list: "Act in several scenes and a monologue (solo performance) at an ACTOR’s SHOWCASE",
      },
      {
        list: "Access your inner emotional lives as a means and tool for performance.",
      },
      {
        list: "Learn the skills of concentration, relaxation and comfort to deliver rich performances.",
      },
      {
        list: "Build the actors character of being honest, open, innocent, vulnerable and sensitive.",
      },
      {
        list: "Discover a series of emotional triggers and develop Emotional Memory.",
      },
      {
        list: "Get introduced to the tools of language and learn how to deliver dialogue.",
      },
    ],
  },
  {
    imageUrl: "/svg/media.svg",
    gridImage: "/grid02.jpeg",

    head: "3-Months Online Screenplay Writing Program Films & OTT",
    desc: [
      {
        list: "Learn the basics and advanced techniques of screenplay structure to tell your story effectively.",
      },
      {
        list: "Learn to develop characters with distinct personalities and motivations.",
      },
      {
        list: "Grab the skill of writing naturalistic dialogues.",
      },
      {
        list: "Modify your writing style to suit genres and tones.",
      },
      {
        list: "Know industry-standard formatting guidelines.",
      },
      {
        list: "Expert the tips and tricks on pitching scripts, networking with industry professionals.",
      },
    ],
  },
  {
    imageUrl: "/svg/arts.svg",
    gridImage: "/cinema(2).jpg",

    head: "3-Months Online Script Writing Program Theatre & Films",
    desc: [
      {
        list: "Develop the ability to write scripts with strong thematic elements.",
      },
      {
        list: "Learn to write scripts with well-designed plots, richly described settings, and well-developed characters.",
      },
      {
        list: "Enhance your capabilities in creating engaging challenges, barriers, and risks that bring out suspense and move the plot forward.",
      },
      {
        list: "Enhance your capability to clearly convey visual and auditory aspects through written descriptions and dialogue.",
      },
      {
        list: "Develop strong collaboration skills to effectively communicate ideas and incorporate feedback to bring scripts to life.",
      },
    ],
  },
  {
    imageUrl: "/svg/printer.svg",
    gridImage: "/cinema.jpg",

    head: "1-Month performing Arts Immersion Program (optional)",
    desc: [
      {
        list: "Participate in live performances to apply what you've learned.",
      },
      {
        list: "Gain hands-on experience and refine your acting and writing techniques.",
      },
      {
        list: "Experience diverse theatrical traditions and styles.",
      },
      {
        list: "Work closely with peers, enhancing teamwork and communication.",
      },
    ],
  },
];
const actorsArray = [
  {
    imageUrl: "/actors/01.jpg",
  },
  {
    imageUrl: "/actors/02.jpg",
  },
  {
    imageUrl: "/actors/03.jpg",
  },
  {
    imageUrl: "/actors/04.jpg",
  },
  {
    imageUrl: "/actors/05.jpg",
  },
  {
    imageUrl: "/actors/06.jpg",
  },
  {
    imageUrl: "/actors/07.jpg",
  },
  {
    imageUrl: "/actors/08.jpg",
  },
];
