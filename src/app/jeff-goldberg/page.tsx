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
      <div className="flex justify-between p-2 items-center">
        <div>
          <Image
            src={"/png/jeff-logo.jpg"}
            alt="jeff"
            width={200}
            height={60}
            className="sm:w-[70%] w-[50%]"
          />
        </div>
        <div>
          <Image
            src={"/logo.webp"}
            alt="jeff"
            width={200}
            height={60}
            className="sm:w-[70%] w-[60%] m-auto"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/jeff-banner-new.jpeg"}
          alt="banner"
          width={1550}
          height={850}
          className="w-full"
        />
        <Image
          src={"/lights.png"}
          alt="banner"
          width={450}
          height={550}
          className="absolute sm:w-[40%] w-[30%] sm:left-8 left-0 top-0"
        />
        <Image
          src={"/strip.jpeg"}
          alt="banner"
          width={1550}
          height={250}
          className="w-[80%] h-auto absolute bottom-4 left-0 right-0 m-auto"
        />

        <div className="grid w-[320px] justify-center sm:block absolute top-8 right-8">
          <FormUI heading="Contact Form" />
        </div>
      </div>
      <div>
        <Image
          src={"/red-strip.jpeg"}
          alt="strip"
          width={1650}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-[1250px] m-auto sm:grid grid-cols-[1fr_1.5fr] my-12 items-center">
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

      <div>
        <Image
          src={"/ticket.jpeg"}
          alt="ticket"
          width={1650}
          height={950}
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-[1250px] m-auto my-12">
        <h2 className="bg-red-500 p-2 text-white sm:text-3xl text-2xl font-[300] text-center tracking-wide">
          ALUMNI
        </h2>
        {/*  grid grid-cols-3 gap-4 */}
        <div className=" mt-12">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
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
                  <div className="pt-8">
                    <Image
                      src={item?.imageUrl}
                      alt="actor"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="bg-red-500 p-12 text-[#e3d3d3]">
        <div className="grid gap-4 max-w-[1250px] m-auto">
          <h2 className="sm:text-4xl text-2xl text-center font-[300] max-w-[550px] m-auto">
            The Jeff Goldberg Studio Performing Arts Programs
          </h2>
          {goldArray?.map((item, index) => {
            return (
              <div key={index} className="sm:flex gap-4 justify-between sm:my-12 my-4">
                {index % 2 == 0 && (
                  <div className="sm:pr-12">
                    <Image
                      src={"/grid.jpeg"}
                      alt="image"
                      width={250}
                      height={250}
                      className="h-auto sm:m-0 m-auto"
                    />
                  </div>
                )}
                <div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={item?.imageUrl}
                      alt="mask"
                      width={44}
                      height={52}
                    />
                    <h3 className="mb-0 font-semibold">{item?.head}</h3>
                  </div>
                  <ul className="list-disc">
                    {item?.desc?.map((value, ind) => {
                      return <li key={ind}>{value?.list}</li>;
                    })}
                  </ul>
                </div>
                {index % 2 !==0 &&
                <div className="sm:pl-12">
                    <Image src={"/grid.jpeg"} alt="image" width={250} height={250} className="h-auto sm:m-0 m-auto" />
                    </div>
                }
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="max-w-[1250px] m-auto my-12">
        <Image
          src={"/logo.webp"}
          alt="logo"
          width={300}
          height={150}
          className="m-auto sm:w-[30%] w-[50%]"
        />
        <div className="bg-yellow-100 text-red-800 p-4 my-6">
          <h3 className="text-center text-2xl mb-0 tracking-wide font-[300]">
            The official{" "}
            <span className="font-bold"> Global Online Partners</span> of The
            Jeff Goldberg Studio
          </h3>
        </div>
        <p className="text-justify p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi
          quasi repudiandae veritatis, doloremque vero aspernatur magni
          similique eos, molestiae sunt quas esse aliquid quod provident,
          officiis adipisci perspiciatis nobis! Sunt omnis neque, eveniet
          doloribus maxime alias eos distinctio placeat nulla voluptates dolorum
          quidem officiis deleniti error, vel asperiores earum facere quis
          dignissimos soluta? Eveniet consequuntur obcaecati praesentium
          corrupti, labore atque. Doloribus modi ex, reiciendis debitis rem
          dolorum inventore repellat! Consequuntur est enim veritatis, esse
          voluptatem omnis, sequi quo excepturi quos tempore cumque nobis. Est
          earum cupiditate minus pariatur. Ipsa incidunt perspiciatis libero
          reiciendis assumenda nisi laborum, aperiam quidem, possimus iure
          consequatur voluptate sed, nulla provident. Nihil eius doloribus
          quidem officiis suscipit exercitationem asperiores eaque quo magnam?
          Molestias, debitis nam.
        </p>
      </div> */}
      <div className="my-12 items-center sm:grid sm:grid-cols-[1fr_1fr] grid-cols-[1fr_1fr]">
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src={"/thtr.jpeg"}
                alt="theater"
                width={300}
                height={450}
                className="w-[300px] h-auto m-auto"
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
          <div className="flex gap-2 justify-between sm:px-12 px-4 my-8">
            <Link
              href="tel:+918448699637"
              className="flex items-center font-semibold gap-2"
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
              className="flex items-center font-semibold gap-2"
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
    imageUrl: "/actors/21.webp",
  },
  {
    imageUrl: "/actors/21.webp",
  },
  {
    imageUrl: "/actors/21.webp",
  },
  {
    imageUrl: "/actors/22.jpg",
  },
  {
    imageUrl: "/actors/22.jpg",
  },
  {
    imageUrl: "/actors/22.jpg",
  },
  {
    imageUrl: "/actors/21.webp",
  },
  {
    imageUrl: "/actors/21.webp",
  },
  {
    imageUrl: "/actors/21.webp",
  },
];
