"use client";
import { useState } from "react";
import { id } from "date-fns/locale";

type FormUIProps = {
  setOpenPopup?: any;
  className?: any;
  heading?: string;
};

const OnlineManipalForm = ({
  setOpenPopup,
  className,
  heading,
}: FormUIProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  // validation function for email id ,  mobile no and name , work experience in years
  const validate = () => {
    const name: any = document.querySelector("input[placeholder='Name :']");
    const mobile: any = document.querySelector(
      "input[placeholder='Mobile No :']"
    );
    const email: any = document.querySelector(
      "input[placeholder='Email id :']"
    );
    const workExperience: any = document.querySelector("select");

    if (
      name?.value === "" ||
      mobile?.value === "" ||
      email?.value === "" ||
      workExperience?.value === ""
    ) {
      alert("Please fill all the fields");
    } else {
      alert("Form submitted successfully");
      setOpenPopup(false);
    }
  };
  return (
    <>
      <div className="max-w-[400px]   rounded-[5px]    bg-[#535353] relative p-[27px]">
        <h3 className="text-[15px] text-center font-bold mb-[10px] text-[#fff]">
          {heading
            ? heading
            : "Enter your details and our experts will get in touch with you shortly!"}
        </h3>
        <div className={`formbox flex flex-col gap-[10px] ${className}`}>
          <div className="max-w-[100%]  ">
            <input
              type="text"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="Enter your name*"
            />
          </div>
          <div className="max-w-sm space-y-3">
            <input
              type="email"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="yourname@email.com*"
            />
          </div>
          <div className="max-w-sm space-y-3">
            <input
              type="text"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="Enter mobile number*"
            />
          </div>

          <div className="max-w-sm space-y-3">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
            >
              <option>Select course applying for*</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Com">B.Com</option>
              <option value="M.Com">M.Com</option>
              <option value="MA.JMC">MA.JMC</option>
              <option value="BA">BA</option>
              <option value="MA in English">MA in English</option>
              <option value="MA in Political Science">
                MA in Political Science
              </option>
              <option value="MA in Sociology">MA in Sociology</option>
            </select>
          </div>

          <div className="checkboxonlinemanipal">
            <input type="checkbox" id="25" className="hidden" />
            <label
              htmlFor="25"
              className="text-[12px] text-[#fff] leading-[1em] flex "
            >
              I authorize Online Manipal and its associates to contact me with
              updates & notifications via email, SMS, WhatsApp, and voice call.
              This consent will override any registration for DNC / NDNC.
            </label>
          </div>

          <div className="flex justify-center">
            <button
              onClick={validate}
              type="button"
              className=" checkboxonlinemanipalbutton "
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineManipalForm;
