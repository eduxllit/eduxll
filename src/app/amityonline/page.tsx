import Head from "next/head";

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
                    <h5 className="text-[15px] text-center font-[400] mb-[8px]">
                      Top Indian & <br /> Global Faculty
                    </h5>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-[100%]">
              <div className="usp-block flex"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AmityOnline;
