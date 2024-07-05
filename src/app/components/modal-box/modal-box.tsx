import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import axios from "axios";
import FormUI from "../form/FormUI";

export default function ModalBox() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [openPopup, setOpenPopup] = useState(false);
  const [otp, setOtp] = useState(false);
  const [login, setLogin] = useState(false);
  const loginForm = () => {
    // console.log("hii");
    setOtp(false);
    setLogin(true);
  };

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [otpNumber, setOtpNumber] = React.useState<string>("");

  const verifyOtp = async () => {
    if (otpNumber.length === 4) {
      const response = await axios.post("/api/auth/register/verify", {
        otp: otpNumber,
        email: userData.email,
      });
      if (response.status === 200) {
        alert("User verified successfully");
        onClose();
      }
    } else {
      alert("Please enter a valid OTP");
    }
  };

  const handleSubmit = async () => {
    // check if the user data value is not empty
    if (
      userData.name &&
      userData.email &&
      userData.mobile &&
      userData.password
    ) {
      // send the data to the server
      const response = await axios.post("/api/auth/register", userData);
      console.log("nehat response", response);
      if (response.status === 200) {
        setOtp(true);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <Button
        // onPress={onOpen}
        onClick={() => setOpenPopup(true)}
        className="  justify-center items-center gap-spacing8 inline-flex whitespace-nowrap bg-gradient-to-r from-[#ee2c3c] to-[#da202f] rounded-lg shadow-cta text-white font-medium px-spacing24 py-spacing14 md:py-spacing10 z-10 min-w-124px"
      >
        Apply Now
      </Button>
      {openPopup && (
        <div className="fixed backdrop-blur-md top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center">
          <div className="w-[350px] relative">
            <FormUI
              heading="Apply Now"
              className={"!gap-6"}
              setOpenPopup={setOpenPopup}
            />
            <div
              className="w-6 h-6 flex justify-center items-center bg-white border rounded-full absolute top-2 right-2 cursor-pointer"
              onClick={() => setOpenPopup(false)}
            >
              <span className="mt-[-4px]">x</span>
            </div>
          </div>
        </div>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-2">
                International Degree Now in Your Budget
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 border-b-2 pb-4">
                  <div className="flex gap-2">
                    <Image
                      src="/svg/scholarship.svg"
                      alt="scholarship"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-semibold">250+ courses</span>
                  </div>
                  <div className="flex gap-2 justify-end border-l-2">
                    <Image
                      src="/svg/earth.svg"
                      alt="earth"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-semibold">9 countries</span>
                  </div>
                </div>
                {otp === false && (
                  <div>
                    <p>
                      Degree Interested in{" "}
                      <span className="text-red-600">*</span>
                    </p>
                    <div className="flex gap-4 my-2">
                      <Button className="bg-transparent border border-black py-1 rounded-md h-fit">
                        Masters
                      </Button>
                      <Button className="bg-transparent border border-black py-1 rounded-md h-fit">
                        Bachelors
                      </Button>
                    </div>
                  </div>
                )}
                {otp === true ? (
                  <div className="flex gap-6">
                    <Input
                      type="number"
                      placeholder="OTP"
                      value={otpNumber}
                      onChange={(e) => setOtpNumber(e.target.value)}
                    />
                    {/* <Input type="number" />
                    <Input type="number" />
                    <Input type="number" /> */}
                  </div>
                ) : login === true ? (
                  <div>
                    <Input placeholder="Email or Number" className="mb-2" />
                    <Input placeholder="Password" />
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      value={userData?.name}
                      onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      required
                      placeholder="Mobile*"
                      className="mt-1 px-3 mb-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      value={userData.mobile}
                      onChange={(e) =>
                        setUserData({ ...userData, mobile: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                    <input
                      type="password"
                      required
                      placeholder="Password*"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                    />
                  </div>
                )}
              </ModalBody>
              {otp === true ? (
                <ModalFooter>
                  <Button
                    color="primary"
                    className="w-full bg-red-500 text-white rounded-md"
                    onPress={onClose}
                    onClick={verifyOtp}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              ) : login === true ? (
                <ModalFooter>
                  <Button
                    color="primary"
                    className="w-full bg-red-500 text-white rounded-md"
                    onPress={onClose}
                    onClick={() => setLogin(false)}
                  >
                    Login
                  </Button>
                </ModalFooter>
              ) : (
                <ModalFooter>
                  <Button
                    color="primary"
                    className="w-full bg-red-500 text-white rounded-md"
                    // onPress={onClose}
                    onClick={handleSubmit}
                  >
                    Book Your Free Counseling
                  </Button>
                </ModalFooter>
              )}

              <p
                className="text-sm text-center mb-6"
                onClick={() => loginForm()}
              >
                Already have an account?{" "}
                <span className="cursor-pointer text-blue-500"> Login</span>
              </p>
            </>
          )}
        </ModalContent>
        {/* {otp===true &&
        <ModalContent>
        {(onClose) => (
          <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>

            <ModalHeader className="flex flex-col gap-1 mt-2">
              International Degree Now in Your Budget
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 border-b-2 pb-4">
                <div className="flex gap-2">
                  <Image
                    src="/svg/scholarship.svg"
                    alt="scholarship"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-semibold">250+ courses</span>
                </div>
                <div className="flex gap-2 justify-end border-l-2">
                  <Image
                    src="/svg/earth.svg"
                    alt="earth"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-semibold">9 countries</span>
                </div>
              </div>
              <div>
                <p>
                  Degree Interested in <span className="text-red-600">*</span>
                </p>
                <div className="flex gap-4 my-2">
                  <Button className="bg-transparent border border-black py-1 rounded-md h-fit">
                    Masters
                  </Button>
                  <Button className="bg-transparent border border-black py-1 rounded-md h-fit">
                    Bachelors
                  </Button>
                </div>
              </div>
              <Input type="number" />
              <Input type="number" />
              <Input type="number" />
              <Input type="number" />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="w-full bg-red-500 text-white rounded-md"
                onPress={onClose}
                onClick={()=>setOtp(false)}
              >
                Submit
              </Button>
            </ModalFooter>
            </Modal>
          </>
        )}
      </ModalContent>
        } */}
      </Modal>
    </>
  );
}
