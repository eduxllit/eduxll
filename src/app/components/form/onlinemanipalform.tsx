"use client";
import { useState } from "react";
import { id } from "date-fns/locale";
import axios from "axios";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

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
  const [pendingVerification, setPendingVerification] = useState(false);
  const [isMobileNoVerified, setIsMobileNoVerified] = useState(false);
  const [otp, setOtp] = useState("");
  console.log("pendingVerification", pendingVerification);
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 100);
        // alert("Inquiry submitted successfully");
      }
    } catch (error) {
      console.log(error);
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
            {/* <input
              type="text"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="Enter your name*"
            /> */}
            <input
              type="text"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="Enter your name*"
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
          </div>

          <div className="max-w-sm  flex gap-[15px] items-center">
            {/* <input
              type="text"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="Enter mobile number*"
            /> */}

            <input
              disabled={isMobileNoVerified || pendingVerification}
              required
              min={10}
              max={10}
              type="text"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="Enter mobile number*"
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
                className={` focus:outline-none   text-white     font-medium  text-sm px-0 py-0 me-0 mb-0  ${
                  isMobileNoVerified ? "" : "border-b-1 border-white"
                } `}
              >
                {isMobileNoVerified ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
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
                        color: "#fff",
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
                className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
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
                className="focus:outline-none   text-white     font-medium  text-sm text-nowrap px-0 py-0 me-0 mb-0  border-b-1 border-white"
              >
                Verify OTP
              </button>
            )}
          </div>
          <div className="max-w-sm space-y-3">
            {/* <input
              type="email"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="yourname@email.com*"
            /> */}

            <input
              type="email"
              className="py-[10px] px-[20px] block text-[14px] w-full border border-[#f7f7f7] leading-[17px] rounded-[2px]   text-[#343634] placeholder:text-[#343634]"
              placeholder="yourname@email.com*"
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
            />
          </div>

          {/* <div className="max-w-sm space-y-3">
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
          </div> */}

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
            {loading ? (
              <>
                <button
                  type="button"
                  className="checkboxonlinemanipalbuttonloading"
                  disabled
                >
                  Loading...
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSendInquiry}
                  type="button"
                  className=" checkboxonlinemanipalbutton "
                >
                  Enroll Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineManipalForm;
