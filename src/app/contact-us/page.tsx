import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import Button from "../components/button/Button";
import FormUI from "../components/form/FormUI";

const ContactUs = () => {
  return (
    <HeaderLayout>
      <div className="bg-[url('/about-us/contact.webp')] bg-cover bg-no-repeat w-full">
        <div className="bg-gradient-to-r from-[#052044] to-transparent">
          <div className="text-white font-semibold lg:h-[300px] sm:h-[220px] h-[160px] grid content-center items-center sm:px-32 px-8">
            <h2 className="sm:text-4xl text-2xl block">Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-6 max-w-[1200px] m-auto sm:p-12 p-4">
        <div className="grid gap-6">
          <div className="flex gap-4">
            <div className="bg-[#03B97C1F] w-fit p-2 flex-none rounded-full h-fit">
              <Image src="/svg/home.svg" alt="home" width={38} height={38} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Head Office</h3>
              <p className="text-sm">
                603, 6th Floor, ILD Trade Centre, Sector 47, Sohna Road,
                Gurugram – 122018, Haryana
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#03B97C1F] w-fit p-2 flex-none rounded-full h-fit">
              <Image src="/svg/mail.svg" alt="home" width={28} height={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Drop A Mail</h3>
              <p className="text-sm">info@eduxll.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#03B97C1F] w-fit p-2 flex-none rounded-full h-fit">
              <Image
                src="/svg/phone-new.svg"
                alt="home"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-sm">+91 8448 198 656 / +91 9773 774 209</p>
            </div>
          </div>
        </div>
        <div className="max-w-[600px] m-auto w-full sm:p-6 p-2 bg-[#D6D6D682] rounded-md">
          <div className="bg-white sm:p-6 p-2 rounded-md">
            <FormUI />
          </div>
        </div>
      </div>
      <div>
        {/* <div id="embedded-map-display" style={{ height: "100%" }}>
          <iframe
            frameBorder="0"
            className={"w-full md:h-[400px] sm:h-[300px] h-[200px]"}
            src="https://www.google.com/maps/embed/v1/place?q=Sector+62,+Noida,+Uttar+Pradesh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div> */}
      </div>
      {/* <div className="bg-gradient-to-r from-[#ee2c3c] to-[#da202f] px-6 py-12 text-white font-semibold sm:text-[22px] text-[16px]">
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-0 gap-4 text-center max-w-[1200px] m-auto">
          <div>
            <h2>
              {" "}
              EduXLL Learner Support- (INDIA / Foreign Nations) Talk to our
              experts
            </h2>
            <h2>We’re available 24/7.</h2>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={"/svg/whatsapp.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <div>
              <Image
                src={"/svg/slash.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <div>
              <Image
                src={"/svg/phone-white.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <p className="ml-4 sm:text-2xl text-lg">+91 8448 198 656</p>
          </div>
        </div>
      </div> */}
    </HeaderLayout>
  );
};
export default ContactUs;
const coursesCollection = [
  {
    option: "Select Courses",
  },
  {
    option: "Driving Business Using Economics",
  },
  {
    option: "Financial Analytics Cost Optimization",
  },
  {
    option: "Business Value and Corporate Investment",
  },
  {
    option: "HRM as Strategy",
  },
  {
    option: "Strategic Marketing",
  },
  {
    option: "Strategic Supply Chain Six Sigma",
  },
  {
    option: "Business Intelligence",
  },
  {
    option: "Transforming Digitally",
  },
  {
    option: "Strategic Leadership and Innovation",
  },
  {
    option: "Sustainability and Ethics",
  },
];
