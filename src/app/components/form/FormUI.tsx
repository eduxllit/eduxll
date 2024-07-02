"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

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

  const { id } = useParams();

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
    // const response = await axios.post('/api/verification/sendotp', { mobileNo:mobile });

    const response = await axios.post(
      `https://nstechindia.co.in/api/mt/SendSMS?user=eduxll&password=nsts@123&senderid=EDUXLL&channel=Trans&DCS=0&flashsms=0&number=8743906997&text=Your login verification code is 12345 valid till 2 minutes. eduXLL  https://eduxll.com/`
    );
    console.log("otp check", { response });
    if (response?.status === 200) {
      setPendingVerification(true);
    }
  };

  const verifyOtp = async () => {
    const mobile = inputValue.mobile;
    const response = await axios.post("/api/verification/verify-otp", {
      mobile,
      otp,
    });
    console.log(response);
    if (response?.status === 200) {
      setIsMobileNoVerified(true);
      setPendingVerification(false);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleSendInquiry = async () => {
    if (!isMobileNoVerified) {
      alert("Please verify your mobile number first");
      return;
    }
    const nesteddata = {
      courseName: id,
      name: inputValue?.name,
      email: inputValue?.email,
      phone: inputValue?.mobile,
      work_experience: inputValue?.workExperience,
    };

    try {
      const response = await axios.post("/api/inquiry", nesteddata);
      if (response?.status === 200) {
        setInputValue({
          name: "",
          mobile: "",
          email: "",
          workExperience: "",
        });
        console.log("nehat", response);
        alert("Inquiry submitted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
          <div className="max-w-sm space-y-3">
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
            {pendingVerification && (
              <input
                required
                min={5}
                max={5}
                type="text"
                className="py-[10px] px-[20px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                placeholder="OTP:"
                name="otp"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
            {!pendingVerification && (
              <button
                onClick={verifyMobileNo}
                disabled={isMobileNoVerified}
                type="button"
                className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                {isMobileNoVerified ? "Verified" : "Verify"}
              </button>
            )}

            {pendingVerification && (
              <button
                onClick={verifyOtp}
                disabled={isMobileNoVerified}
                type="button"
                className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
            <button
              onClick={handleSendInquiry}
              type="button"
              className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUI;
