import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <section className=" bg-[#f5f5f5]">
        <div className=" ">
          <div className="grid lg:grid-cols-[1fr_1fr] justify-between items-center gap-8 sm:p-12 p-4 sm:py-[30px] py-[20px]">
            <div>
              <h2 className="sm:text-[2.1rem] text-2xl mb-[16px] leading-[1.2em] font-bold text-[#21225F] tracking-wider">
                Discover Learning Without Borders
              </h2>
              <p className=" sm:text-[22px] text-[18px] text-[#808292]">
                Bridge the Distance and Join the Revolution
              </p>
              <p className="mb-[20px] sm:text-[18px] text-[16px] text-[#808292]">
                Connect with Top-Tier Educators and Innovative Curricula from
                Around the World
              </p>

              <div className="my-[15px] sm:flex gap-6 items-center">
                <div>
                  <div className="text-[#808292] sm:mt-0 mt-4">
                    <p>
                      Tell us about your query{" "}
                      <span className="text-red-500 font-semibold">
                        Call us
                      </span>{" "}
                      <span className="font-semibold text-red-500">
                        +91 8448198656
                      </span>{" "}
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 max-w-[700px] m-auto gap-6 items-center relative">
              {/* <div className="grid gap-[10px] md:justify-end ">
                <Image
                  src="/banner/1.jpg"
                  alt="banner"
                  width={300}
                  height={150}
                  className="rounded-tl-[25%] object-cover h-[200px] w-full z-[2] relative"
                />
                <Image
                  src="/banner/2.jpg"
                  alt="banner"
                  width={300}
                  height={150}
                  className="rounded-tr-[25%] object-cover h-[200px] w-full z-[2] relative"
                />
              </div> */}
              <div className="grid gap-[10px] md:justify-end ">
                <Image
                  src="/banner/smiling-woman-walking-outdoors-holding-folded-map.jpg"
                  alt="banner"
                  width={450}
                  height={300}
                  className="rounded-tl-[0%] object-cover h-[300px] w-full z-[2] relative"
                />
                {/* <Image
                  src="/banner/4.jpg"
                  alt="banner"
                  width={300}
                  height={150}
                  className="rounded-tr-[25%] object-cover h-[200px] w-full z-[2] relative"
                /> */}
              </div>
              <Image
                src="/dotts.png"
                alt="banner"
                width={300}
                height={300}
                className="absolute top-6 left-[100px]"
              />
              <Image
                src="/dotts.png"
                alt="banner"
                width={160}
                height={200}
                className="absolute bottom-6 left-0"
              />
              <Image
                src="/net.png"
                alt="banner"
                width={160}
                height={200}
                className="absolute bottom-[-30px] right-[-30px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
