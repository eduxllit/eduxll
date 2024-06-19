import Head from "next/head";
import InfoSection from "./infosection";

const AmityOnline = () => {
  return (
    <>
      <div className="relative flex flex-col    bannersection">
        <div className="header relative z-[9] max-w-[1230px] w-[100%] flex-1 m-auto pt-[20px] pb-[20px]">
          <div>
            <img
              src="/amityonline/logo.png"
              alt=""
              className="logo-wrapper max-h-[260px] h-[60px]"
            />
          </div>
        </div>

        <div className="banner-bg absolute top-0 left-0 h-[100%] w-[100%]">
          <img
            src="/amityonline/banner3.jpg"
            alt=""
            className="h-[500px] w-[100%] object-cover "
          />
        </div>

        <div className="banner-block relative pt-[0px] pr-[60px] pl-[60px] pb-[40px] w-[100%] z-[3]  min-h-[400px] flex  items-center">
          <div className="w-[66%] px-[12px] ">
            <div className="flex w-[100%]">
              <div className="w-[100%]">
                <div className="w-[100%] banner-caption bg-[#ffaa1766] flex items-start flex-col p-[5%]">
                  <h2 className="text-[#002e5e] amithh tracking-[-1px] font-[500] text-[50px] uppercase   leading-[1.2]">
                    Shape your future with <br /> Online Degree programmes
                  </h2>
                  <button className="bg-[#002e5e] text-[#fff] px-[20px] py-[10px] uppercase">
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#002e5e] py-[20px]">
        <div className="max-w-[1230px]   m-auto w-[100%] flex flex-col items-center ">
          <h4 className="text-[#fff] mb-[0] amithh">
            Online Degrees are equivalent to Offline Degrees*
          </h4>
          <p className="text-[#fff] text-[12px] mb-[0] ">
            *As per UGC Notification dated Sep 2, 2022.
          </p>
        </div>
      </section>

      <section className="bg-[url('/amityonline/usp-bg.jpg')] py-[60px] bg-cover">
        <div className="max-w-[1230px] m-auto w-[100%] ">
          <div className="flex justify-center mb-[]">
            <h2
              className="amithh relative text-[#002e5e] font-[600] text-[36px] pl-[20px] uppercase leading-[36px]
            before:bg-[#ffaa17] before:w-[5px] before:h-[100%] before:absolute  before:top-[0] before:left-[0]
            "
            >
              WHY CHOOSE US
            </h2>
          </div>

          <div className="box flex flex-wrap">
            <div className="w-[100%]">
              <div className="flex justify-center">
                <a
                  href="#"
                  className=" flex-col flex items-center justify-center p-[10px] rounded-[100px]"
                >
                  <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div>
                  {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                  <div>
                    <h5 className="text-[15px] text-center font-[500] mb-[8px]">
                      Top Indian & <br /> Global Faculty
                    </h5>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-[100%] flex justify-center">
              <div className="usp-block flex flex-col justify-between">
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-end justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp2.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-right font-[500] mb-[8px]">
                        Choose the way you <br />
                        want to learn
                      </h5>
                    </div>
                  </a>
                </div>
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-end justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp3.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-right font-[500] mb-[8px]">
                        Flexible <br />
                        payment options
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
              <div className="usp-img-block flex justify-center	">
                <div className="usp-img-wrapper relative p-[20px] before:w-[100%] before:h-[100%] before:absolute before:top-[0px] before:left-[0px] before:rounded-[100%] rounded-[100%] before:border-[3px] before:border-[#ffaa17]">
                  <div className="usp-img w-[350px] h-[350px] border-[#002e5e] border-[2px] border-dashed relative overflow-hidden rounded-[100%]">
                    <img src="/amityonline/girl.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="usp-block flex flex-col justify-between">
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-start justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp4.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-left font-[500] mb-[8px]">
                        Career Services for <br />
                        Job Readiness
                      </h5>
                    </div>
                  </a>
                </div>
                <div className="usp-item">
                  <a
                    href="#"
                    className=" flex-col flex items-start justify-center p-[10px] rounded-[100px]"
                  >
                    <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                      <img src="/amityonline/usp5.png" alt="" />
                    </div>
                    {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                    <div>
                      <h5 className="text-[15px] text-left font-[500] mb-[8px]">
                        Placement <br />
                        Assistance
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="flex justify-center">
                <a
                  href="#"
                  className=" flex-col flex items-center justify-center p-[10px] rounded-[100px]"
                >
                  <div className=" mb-[10px]   rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp6.png" alt="" />
                  </div>
                  {/* <div className="before:w-[100%] before:h-[100%] before:block before:rounded-[100px] before:animation-ping-slow before:bg-[#ffaa17] rounded-[100px] before:left-[0px] before:right-[0px] relative before:animate-ping  usp-icon w-[80px] h-[80px] rounded-[100px] bg-[#002e5e]  p-[20px] relative">
                    <img src="/amityonline/usp1.png" alt="" />
                  </div> */}
                  <div>
                    <h5 className="text-[15px] text-center font-[500] mb-[8px]">
                      Online to <br />
                      Offline connect
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#002e5e09] py-[80px]">
        <div className="max-w-[1230px]   m-auto w-[100%]">
          <div className="grid grid-cols-2 gap-[15px]">
            {InfoSectionarray?.map((item, index) => {
              return (
                <>
                  <InfoSection
                    key={index}
                    image={item.image}
                    heading={item.heading}
                    content={item.content}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AmityOnline;

const InfoSectionarray = [
  {
    image: "/amityonline/usp1.png",
    heading: "Top Indian & Global Faculty",
    content:
      "You will learn from the best at Amity Online, as we impart world-class education in the true sense with our faculty who have rich academic and industry experience",
  },
  {
    image: "/amityonline/usp2.png",
    heading: "Choose the way you want to learn",
    content:
      "Enhance your learning potential by creating your own customised learning combination of printed books, audio books, e-books, video content and campus library",
  },
  {
    image: "/amityonline/usp3.png",
    heading: "Career Services for Job Readiness",
    content:
      "From resume building sessions and masterclass for interview preparation, you go from pursuing your degree to being job-ready.",
  },
  {
    image: "/amityonline/usp4.png",
    heading: "Placement Assistance",
    content:
      "Placement opportunities with over 300+ hiring partners from diverse domains makes getting a job a seamless experience after your degreee.",
  },
  {
    image: "/amityonline/usp5.png",
    heading: "Flexible payment options",
    content:
      "At Amity Online, we offer payment options through credit and debit cards as well as 0% cost EMI options through our partner EDUVANZ.",
  },
  {
    image: "/amityonline/usp6.png",
    heading: "Online to Offline connect",
    content:
      "Offline campus-orientation programs, access to libraries of Amity campus worldwide, Physical books to cater to conventional learning habit of Indians",
  },
];
