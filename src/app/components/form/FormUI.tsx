"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import LinkModelBox from "../linkmodelbox/linkmodelbox";

type FormUIProps = {
  setOpenPopup?: any;
  className?: any;
  heading?: string;
  formWidth?: string;
};

const FormUI = ({
  setOpenPopup,
  className,
  heading,
  formWidth,
}: FormUIProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [isMobileNoVerified, setIsMobileNoVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [blogPopup, setBlogPopup] = React.useState(false);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  console.log("pendingVerification", pendingVerification);

  const { id } = useParams();
  console.log("id check", { id });
  const path = usePathname();
  console.log("pathname", path);

  const [inputValue, setInputValue] = useState({
    name: "",
    mobile: "",
    email: "",
    workExperience: "",
  });

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    setInputValue({ ...inputValue, workExperience: event.target.value });
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

  const verifyMobileNo = async () => {
    const mobile = inputValue.mobile;
    if (mobile.length !== 10) {
      alert("Please enter a valid mobile number");
      return;
    }
    const response = await axios.post("/api/verification/sendotp", {
      mobileNo: mobile,
    });

    console.log("otp check", { response });
    if (response?.status === 200) {
      setPendingVerification(true);
    }
  };

  const verifyOtp = async () => {
    const mobile = inputValue.mobile;
    try {
      const response = await axios.post("/api/verification/verify-otp", {
        mobile,
        otp,
      });

      if (response?.status === 200) {
        setIsMobileNoVerified(true);
        setPendingVerification(false);
      }
    } catch (error) {
      alert("Invalid OTP ss");
    }
  };

  const handleSendInquiry = async () => {
    if (!isMobileNoVerified) {
      alert("Please verify your mobile number first");
      return;
    }
    const nesteddata = {
      courseName: id ? id : path,
      name: inputValue?.name,
      email: inputValue?.email,
      phone: inputValue?.mobile,
      work_experience: inputValue?.workExperience,
    };

    try {
      setLoading(true);
      const response = await axios.post("/api/inquiry", nesteddata);

      const emailRes = await axios.post("/api/sendemail", {
        name: inputValue?.name,
        email: inputValue?.email,
        message: inputValue?.workExperience,
        phone: inputValue?.mobile,
        work_experience: inputValue?.workExperience,
        pageDirection: id ? id : path,
      });
      console.log("emailRes", emailRes);

      if (response?.status === 200) {
        setInputValue({
          name: "",
          mobile: "",
          email: "",
          workExperience: "",
        });
        console.log("sahiltest", response);
        // alert("Inquiry submitted successfully");
        setLoading(false);
        setBlogPopup(true);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 100);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSavePop = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <>
      {blogPopup && (
        <LinkModelBox
          buttonclose={() => setBlogPopup(false)}
          buttonsave={handleSavePop}
          modelheading="Form Submitted Successfully"
          itemicon="sussess"
          modelcontent="Thanks for submitting your inquiry. Our team will get back to you soon."
        />
      )}
      <div
        className={`max-w-[400px] z-0 rounded-[10px] border-[1px] border-slate-200 bg-slate-100 relative p-[20px] ${formWidth}`}
      >
        <h3 className="text-[20px] text-center font-[600] mb-[10px]">
          {heading ? heading : "Career Counseling "}
        </h3>
        <div className={`formbox flex flex-col gap-[10px] ${className}`}>
          <div className="max-w-sm space-y-3">
            <input
              type="text"
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm "
              placeholder="Name :"
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
          </div>
          <div className="flex gap-[15px] items-center">
            <input
              disabled={isMobileNoVerified || pendingVerification}
              required
              min={10}
              max={10}
              type="text"
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
              placeholder="Mobile No :"
              name="mobile"
              id="mobile"
              value={inputValue.mobile}
              onChange={(e) =>
                setInputValue({ ...inputValue, mobile: e.target.value })
              }
            />

            {!pendingVerification && (
              <button
                onClick={verifyMobileNo}
                disabled={isMobileNoVerified}
                type="button"
                className={` focus:outline-none   text-red-600     font-medium  text-sm px-0 py-0 me-0 mb-0  ${
                  isMobileNoVerified ? "" : "border-b-1 border-red-600"
                } `}
              >
                {isMobileNoVerified ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/verified-badge-fill.svg"
                      width={20}
                      height={20}
                      alt="check"
                    />

                    <span
                      className="text-[10px] text-black"
                      style={{
                        lineHeight: "10px",
                      }}
                    >
                      Verified
                    </span>
                  </div>
                ) : (
                  <>Verify</>
                )}
              </button>
            )}
          </div>
          <div className="flex gap-[15px] items-center">
            {pendingVerification && (
              <input
                required
                min={5}
                max={5}
                type="text"
                className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] flex-1 rounded-[10px] text-sm"
                placeholder="OTP:"
                name="otp"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
            {pendingVerification && (
              <button
                onClick={verifyOtp}
                disabled={isMobileNoVerified}
                type="button"
                className="focus:outline-none   text-red-600     font-medium  text-sm px-0 py-0 me-0 mb-0  border-b-1 border-red-600"
              >
                Verify OTP
              </button>
            )}
          </div>

          <div className="max-w-sm space-y-3">
            <input
              type="email"
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
              placeholder="Email id :"
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
            />
          </div>
          <div className="max-w-sm space-y-3">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
            >
              <option value="Experience">Work Experience in years</option>
              <option value="Currently">Currently a college student</option>
              <option value="0 Years">0 Years</option>
              <option value="1 Year">1 Year</option>
              <option value="1-2 Year">1-2 Year</option>
              <option value="2-3 Year">2-3 Year</option>
              <option value="3-4 Year">3-4 Year</option>
              <option value="4-5 Year">4-5 Year</option>
            </select>
          </div>

          <div className="flex justify-center">
            {loading ? (
              <>
                <button
                  type="button"
                  disabled
                  className=" focus:outline-none text-red-700 bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  loading...
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSendInquiry}
                  type="button"
                  className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUI;
