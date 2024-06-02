"use client";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardStyleOne from "../../boxstyle1/CardStyleOne";
import FormUI from "../../form/FormUI";
import Slidernav1 from "../../slidernav";
import axios from "axios";

const FreecoursesNew = ({ category }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  const [registerPopup, setRegisterPopup] = useState("button");
  const [card, setCard] = useState("");
  console.log(registerPopup, "gggggggggggggggggggggggggggggg");
  console.log(card, "zzzzzzzzzzzzz");

  const [blogData, setBlogData] = useState<any>([]);

  const getAllBlogsData = async () => {
    const data = await axios.get("/api/freecourse");
    if (data.status === 200) {
      setBlogData(data?.data);
    }
  };

  useEffect(() => {
    getAllBlogsData();
  }, []);

  console.log("free course", { blogData });
  const latestNewsArray = blogData;
  const onlyThree = latestNewsArray?.slice(0, 4);

  // const categoryFilter = latestNewsArray?.map((item: any) => {
  //   return item?.customCategory.map((item: any) => {
  //     return item?.value;
  //   });
  // });

  // const categoryFilter = React.useCallback(() => {
  //   return latestNewsArray?.map((item: any) => {
  //     return item?.customCategory.map((item: any) => {
  //       return item?.value;
  //     });
  //   });
  // }, [latestNewsArray]);

  // console.log("categoryFilter", categoryFilter());

  const filterBlogData = latestNewsArray?.filter((item: any) => {
    return item?.customCategory.map((item: any) => {
      return item?.value === category;
    });
  });

  const sliceData = filterBlogData?.slice(0, 8);
  console.log("onlyThree", sliceData?.length);

  return (
    <>
      <div className="relative">
        <Slidernav1 navfix="2" />
        <Swiper
          slidesPerView={isMobile ? 1 : 3.2}
          spaceBetween={15}
          className="mySwiper2 width-100 "
          navigation={{
            nextEl: ".review2-swiper-button-next",
            prevEl: ".review2-swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {sliceData?.map((items: any, index: any) => {
            return (
              <>
                <SwiperSlide
                  key={index}
                  className="relative online-cards  mb-[20px]"
                >
                  <div onMouseEnter={() => setRegisterPopup(items?.title)}>
                    <CardStyleOne
                      imageUrl={items.featureImage}
                      amount={items?.price}
                      key={index}
                      pdfurl={items?.brochure}
                      rating="4.5"
                      studentnumber={items?.student}
                      title={items.title}
                      onClick={() => setCard(items?.title)}
                    />
                    <div className="absolute top-[25%] flex justify-center w-full hidden register-button">
                      {/* <Button
                        text={"Register"}
                        className={"bg-red-700 text-white rounded-md"}
                        onClick={() => setCard(items?.title)}
                      /> */}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        {card === registerPopup && (
          <div className="fixed backdrop-blur-md top-0 left-0 w-screen h-screen z-[9] flex items-center justify-center">
            <div className="w-[350px] relative">
              <FormUI className={"!gap-6"} />
              <div
                className="w-6 h-6 flex justify-center items-center bg-white border rounded-full absolute top-2 right-2 cursor-pointer"
                onClick={() => setCard("")}
              >
                <span className="mt-[-4px]">x</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FreecoursesNew;

const bestSellerArray = [
  {
    key: "cardOne",
    imageUrl: "/best-seller/01.jpg",
    logo: "/logoslider/1.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT1",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardTwo",
    imageUrl: "/best-seller/02.jpg",
    logo: "/logoslider/2.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT2",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardThree",

    imageUrl: "/best-seller/03.jpg",
    logo: "/logoslider/3.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT3",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardFourth",

    imageUrl: "/best-seller/04.jpg",
    logo: "/logoslider/4.webp",
    badge: "Development",
    book: "/book.png",
    title: "Gen AI & ChatGPT4",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardFifth",

    imageUrl: "/best-seller/05.jpg",
    logo: "/logoslider/5.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT5",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
  {
    key: "cardSixth",

    imageUrl: "/best-seller/06.jpg",
    logo: "/logoslider/6.webp",
    book: "/book.png",
    title: "Gen AI & ChatGPT6",
    content:
      "Develop a fundamental understanding of deep learning and natural language processing. Learn to leverage Large Language Models to your advantage.",
    courses: 7,
  },
];
