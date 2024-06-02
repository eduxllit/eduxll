// "use client";
import Button from "@/app/components/button/Button";
import HeaderLayout from "@/app/components/headerLayout/HeaderLayout";
import { connect } from "@/app/dbConfig";
import FreeMaster from "@/app/models/freeMaster";
import Web from "@/app/models/webinar";
import { Input } from "@nextui-org/react";
import { format } from "date-fns";
import Image from "next/image";

const getMaster = async (slug: string) => {
  try {
    connect();
    const freeMaterClassess = await FreeMaster.findOne({ slug });
    return freeMaterClassess;
  } catch (error) {
    return error;
  }
};
const FreeClasses = async ({ params }: any) => {
  const paramA = params.slug;
  const response = await getMaster(paramA);
  console.log(response, "got it on slug page..!!");

  const formattedDate = format(new Date(response?.date), " do MMM '|' EEEE,");
  const time = response?.time;
  const hours = time.split(":")[0];
  const minutes = time.split(":")[1];
  const AMPM = hours >= 12 ? "PM" : "AM";
  const newHours = hours % 12 || 12;
  const formattedTime = `${newHours}:${minutes} ${AMPM}`;
  console.log("formattedTime", formattedTime);
  const content = response?.content.replace(/"/g, "");
  return (
    <HeaderLayout>
      <div className="grid lg:grid-cols-[1.5fr_1fr] h-[400px]">
        <div className="bg-blue-900 text-white py-8 relative sm:px-0 px-4">
          <div className="max-w-[500px] m-auto">
            {/* <div className="flex gap-2">
              <span className="cursor-pointer">Home</span>
              <span>{">"}</span>
              <span>Free Master Classes</span>
            </div> */}
            <h2 className="text-2xl font-semibold mt-12 mb-6">
              AI&apos;s Impact on Healthcare Digitalization
            </h2>
            <div>
              <div className="flex">
                <span className="bg-red-800 py-2 px-4 sm:text-md text-xs">
                  Date:
                </span>
                <p className="border border-white py-2 px-4 sm:text-md text-xs flex items-center">
                  {/* 30 March 2024 */}
                  {formattedDate}
                </p>
              </div>
              <div className="flex">
                <span className="py-2 px-4 bg-orange-600 sm:text-md text-xs">
                  Time:
                </span>
                <p className="border border-white py-2 px-4 sm:text-md text-xs flex items-center">
                  {/* 2:30 PM to 3:30 PM */}
                  {formattedTime}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute lg:right-[-60px] lg:top-[33%] sm:right-4 sm:top-4 top-2 right-2 w-fit sm:block flex justify-end">
            <Image
              src={response?.featureImage}
              alt="user"
              width={120}
              height={120}
              className="rounded-full lg:w-full w-[50%]"
            />
          </div>
        </div>
        <div className="lg:flex items-center justify-center py-8 max-w-[500px] m-auto w-full sm:px-0 px-4">
          <div className="max-w-[300px]">
            <h3 className="text-xl font-semibold text-blue-900">
              {response?.name}
            </h3>
            <p>
              {/* Regional Pharma Executive & <br /> Vice-Chairman of the AmCham of{" "}
              <br /> Dubai Northern Emirates{" "} */}
              {response?.description}
            </p>
          </div>
        </div>
      </div>
      {/* content box */}
      <div className="bg-white lg:my-0 sm:my-16 my-8 sm:py-16 py-8 ">
        <div className="max-w-[1200px] m-auto">
          <h3 className="sm:text-3xl text-2xl text-center font-semibold">
            Content
          </h3>
          {/* <p>{response?.content.replace(/"/g, "")}</p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: response?.content.replace(/"/g, ""),
            }}
          ></div>
        </div>
      </div>
      <div className="bg-red-700 lg:my-0 my-16 sm:py-16 py-8 text-white">
        <div className="max-w-[600px] m-auto">
          <h3 className="sm:text-3xl text-2xl text-center font-semibold">
            Let&apos;s Stay in Touch
          </h3>
          <p className="text-center mt-2 text-sm">
            Get updates on courses, market insights, and offers.
          </p>
          <div className="grid gap-4 mt-8 sm:px-0 px-4">
            <Input label="First Name" type="text" className="lg:h-full h-10" />
            <Input label="Email" type="email" className="lg:h-full h-10" />
            <Input label="Mobile" type="number" className="lg:h-full h-10" />
            <Input
              label="Country/Region"
              type="text"
              className="lg:h-full h-10"
            />
            <div>
              <h4 className="text-md">Get the Certificate</h4>
              <input type="radio" name="certificate" id="yes" />{" "}
              <label htmlFor="yes" className="mr-4">
                Yes
              </label>
              <input type="radio" name="certificate" id="no" />{" "}
              <label htmlFor="no">No</label>
            </div>
            <p className="text-xs">
              By clicking the button below, you agree to receive communications
              via Email/Call/Whatsapp/SMS from Emeritus. <br />{" "}
              <span className="underline cursor-pointer"> Privacy Policy</span>
            </p>
            <Button
              className={
                "bg-green-800 text-white border-0 py-4 w-fit px-10 !rounded-md m-auto"
              }
              text={"Submit"}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white text-3xl bg-black text-center sm:py-16 py-8 sm:px-0 px-4">
          Watch Our Previous Webinars
        </h3>
        <div className="sm:px-16 px-4 md:mx-16 py-16">
          <h3 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold">
            upGrad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-purple-700 to-pink-600">
              {" "}
              Learner Support
            </span>
          </h3>
          <p className="mt-2 sm:text-left text-center">
            Talk to our experts. We&apos;re available 24/7.
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
              <span className="sm:text-lg text-xs">1800 210 2020</span>
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
              <span className="sm:text-lg text-xs">+918045604032</span>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
export default FreeClasses;
