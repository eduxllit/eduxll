"use client";
import { useState } from "react";
import Button from "../button/Button";
import FormUI from "../form/FormUI";

const ApplyNowButton = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="flex gap-6">
      <Button
        text={"Apply Now "}
        className={
          "hover:shadow-md sm:w-[226px] flex justify-center !rounded-md !border-black sm:py-4 py-2 sm:text-md text-sm"
        }
        onClick={() => setOpenPopup(true)}
      />

      {openPopup && (
        <div className="fixed backdrop-blur-md top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center">
          <div className="w-[350px] relative">
            <FormUI heading="Apply Now" className={"!gap-6"} setOpenPopup={setOpenPopup} />
            <div
              className="w-6 h-6 flex justify-center items-center bg-white border rounded-full absolute top-2 right-2 cursor-pointer"
              onClick={() => setOpenPopup(false)}
            >
              <span className="mt-[-4px]">x</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ApplyNowButton;
