"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

type FormUIProps = {
  setOpenPopup?: any;
  className?: any;
  heading?: string;
  formWidth?: string;
};
const ReferAndEarnForm = ({
    setOpenPopup,
    className,
    heading,
    formWidth,
  }: FormUIProps) =>{
    const [selectedOption, setSelectedOption] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [isMobileNoVerified, setIsMobileNoVerified] = useState(false);
  const [otp, setOtp] = useState("");
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
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    } catch (error) {
      console.log(error);
    }
  };
    return(
        <>
        <div
          className={`max-w-[460px] z-0 rounded-[10px] border-[1px] border-slate-200 bg-[#002a2f] relative p-8 text-white m-auto ${formWidth}`}
        >
          <h3 className="text-[20px] text-center font-[600] mb-8">
            {heading ? heading : "Career Counseling "}
          </h3>
          <div className={`formbox flex flex-col gap-[10px] ${className}`}>
            <div className="max-w-sm space-y-3 m-auto w-full">
              <input
                type="text"
                className="py-[10px] px-[20px] pl-[12px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm "
                placeholder="Referee Name"
                value={inputValue.name}
                onChange={(e) =>
                  setInputValue({ ...inputValue, name: e.target.value })
                }
              />
            </div>
            {/* <div className="flex gap-[15px] items-center">
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
            </div> */}
            {/* <div className="flex gap-[15px] items-center">
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
            </div> */}
  
            <div className="max-w-sm space-y-3 m-auto w-full">
              <input
                type="email"
                className="py-[10px] px-[20px] pl-[12px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                placeholder="Referee Email"
                value={inputValue.email}
                onChange={(e) =>
                  setInputValue({ ...inputValue, email: e.target.value })
                }
              />
            </div>
            <div className="max-w-sm space-y-3 m-auto w-full">
              <input
                type="number"
                className="py-[10px] px-[20px] pl-[12px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                placeholder="Referee Contact"
                // value={inputValue.email}
                // onChange={(e) =>
                //   setInputValue({ ...inputValue, email: e.target.value })
                // }
              />
            </div>
            <div className="max-w-sm space-y-3 m-auto w-full">
              <select
                value={selectedOption}
                onChange={handleChange}
                className="py-[10px] px-[20px] pl-[12px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm text-black"
              >
                <option value="select">Select University</option>
                <option value="london">London metropolitan University</option>
                <option value="patil">D.Y Patil University</option>
                <option value="amity">Amity University</option>
                <option value="lovely">Lovely Professional University</option>
                <option value="manipal">Manipal University</option>
                <option value="uttaranchal">Uttaranchal University</option>
                <option value="jain">Jain University </option>
                <option value="shoolini">Shoolini University</option>
              </select>
            </div>
            <div className="max-w-sm space-y-3 m-auto w-full">
              <input
                type="text"
                className="py-[10px] px-[20px] pl-[12px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm "
                placeholder="Name"
                // value={inputValue.name}
                // onChange={(e) =>
                //   setInputValue({ ...inputValue, name: e.target.value })
                // }
              />
            </div>
            <div className="max-w-sm space-y-3 m-auto w-full">
              <input
                type="number"
                className="py-[10px] px-[20px] pl-[12px] block w-full border border-[#9f9f9f] rounded-[10px] text-sm"
                placeholder="Referal Contact No"
                // value={inputValue.email}
                // onChange={(e) =>
                //   setInputValue({ ...inputValue, email: e.target.value })
                // }
              />
            </div>
            <div>
                <input type="checkbox" id="agree" className="relative top-[1px]" />
                <label htmlFor="agree" className="text-xs font-[300] tracking-wider"> I authorise Edukyu and its associates to contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This consent will override any registration for DNC / NDNC.</label>
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
                    className="w-full focus:outline-none text-white bg-yellow-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 tracking-wider rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    )
}
export default ReferAndEarnForm