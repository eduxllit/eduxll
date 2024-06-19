"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 100); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="pt-[50px] pb-[0px] bg-[#e6f8ff] relative  ">
        <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px]   ">
          <div className=" md:flex sm:block  ">
            <div className="md:w-1/4 sm:max-w-full ">
              <div className="footer-widget">
                <div className="mb-[20px]">
                  {" "}
                  <Image
                    src={"/logo.webp"}
                    alt="close"
                    width={160}
                    height={50}
                  />
                </div>
                <p className="text-[15px] text-[#808292] font-medium  leading-[1.5em] pr-[15px]">
                  EduXLL is a higher education platform which delivers an
                  INNOVATIVE Methodology and latest and niche courses for
                  students and working professionals.
                </p>
                <ul className="flex gap-[10px] mt-[20px]">
                  {serarry?.map((item, index) => {
                    return (
                      <>
                        <li className="flex justify-center items-center w-[35px] h-[35px] bg-[#808292] hover:bg-[#08a9e6] hover:rounded-[5px]">
                          <a href={item.link}>
                            <Image
                              src={item.serarryicon}
                              width={18}
                              height={18}
                              alt=""
                            />
                          </a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/6 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  About Us
                </h3>
                <ul>
                  {Aboutlink?.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[15px] text-[#808292] mb-[8px] font-medium"
                      >
                        <a href={link.link} className="pointer">
                          {link.navname}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/6 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  Resourses
                </h3>
                <ul>
                  {Resourseslink?.map((link: any, index: any) => {
                    return (
                      <li
                        key={index}
                        className="text-[15px] text-[#808292] mb-[8px] font-medium"
                      >
                        <a href={link.link} className="pointer">
                          {link.navname}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/6 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  Quick Link
                </h3>
                <ul>
                  {QuickLink?.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[15px] text-[#808292] mb-[8px] font-medium"
                      >
                        <a href={link.link} className="pointer">
                          {link.navname}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/4 sm:max-w-full">
              <div className="footer-widget">
                <h3 className="text-[22px] text-[#21225f] mb-[20px] font-bold">
                  Contact Us
                </h3>
                <ul>
                  <li className="text-[15px] text-[#808292] mb-[8px] font-medium">
                    <span className="text-[#21225f]">Address:</span> 603, 6th
                    Floor, ILD Trade Centre, Sector 47, Sohna Road, Gurugram –
                    122018, Haryana
                  </li>
                  <li className="text-[15px] text-[#808292] mb-[8px] font-medium">
                    <span className="text-[#21225f]">Email:</span>{" "}
                    info@eduxll.com
                  </li>
                  <li className="text-[15px] text-[#808292] mb-[8px] font-medium">
                    <span className="text-[#21225f]">Phone:</span>
                    +91 8448 198 656 <br /> +91 9773 774 209
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:max-w-[1200px]  px-[15px] w-[100%] mx-auto mt-[30px] border-t-[1px] border-solid border-[#7070701a]">
          <p className="pt-[30px] pb-[30px]  text-center text-[13px] text-[#808292] font-medium  leading-[1.5em]">
            © 2024 edUXLL A UNIT OF EDOVU VENTURES PRIVATE LIMITED. All Rights
            Reserved{" "}
          </p>
        </div>

        {/* <div className="shape722 absolute bottom-[20%] right-[.5%] none sm:block ">
          <Image src="/shape7.png" width={200} height={117} alt="shape7" />
        </div> */}
      </div>

      {showButton && (
        <button
          className="scroll-top-btn  
        
          fixed bottom-[20px] right-[20px] border border-red-500 w-[50px] h-[50px]   justify-center flex items-center bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-[100px]    
        
        "
          onClick={scrollToTop}
        >
          <Image src="/arrow-up-line.svg" width={18} height={18} alt="arrow" />
        </button>
      )}
    </>
  );
};
export default Footer;

const serarry = [
  {
    serarryicon: "/soc/facebook-fill.svg",
    link: "https://www.facebook.com/eduxllofficial/",
  },
  {
    serarryicon: "soc/instagram-fill.svg",
    link: "https://www.instagram.com/eduxllofficial/?igsh=dzcya3doMWZwdzVn%20",
  },
  {
    serarryicon: "soc/linkedin-fill.svg",
    link: "https://www.linkedin.com/company/eduxll/?viewAsMember=true%20",
  },
  {
    serarryicon: "soc/twitter-fill.svg",
    link: "https://twitter.com/eduxllofficial",
  },
];

const Aboutlink = [
  { link: "/about-us", navname: "About Us" },
  { link: "/all-course", navname: "Course" },
  { link: "/study-abroad", navname: "Study Abroad" },
  // { link: "/free-courses", navname: "Free Courses" },
];
const Resourseslink = [
  { navname: "Home" },
  // { navname: "Free Course" },
  { navname: "Privacy Policy", link: "/privacy-policy" },
  { navname: "Terms & Conditions", link: "/terms-and-conditions" },
  { navname: "Refund & Cancellation policy ", link: "/refund-policy" },
];
const QuickLink = [
  { link: "/blogs", navname: "Blogs" },
  // { link: "/webinars", navname: "webinars" },
  // { link: "/free-masterclass", navname: "Free Masterclass" },
  { link: "#", navname: "Career Support" },
];
