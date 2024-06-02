import { connect } from "@/app/dbConfig";
import Courses from "@/app/models/coursesModels";
import Image from "next/image";

const InnerFaq = ({
  faqToggle,
  showFaq,
  headingbgcolor,
  courseModule,
}: any) => {
  return (
    <div className="grid gap-4">
      {courseModule?.map((value: any) => {
        console.log("value check", { value });
        return (
          <div
            key={value._id}
            className={`${headingbgcolor} border  rounded-md overflow-hidden `}
          >
            <div
              className="flex justify-between cursor-pointer p-4 bg-[#f3f4f678] cursor-pointer"
              onClick={() => faqToggle(value?.modulTitle)}
            >
              <h4 className="text-[15px] font-[500] text-[#000] !mb-[0px]">
                {value?.modulTitle}
              </h4>
              <Image
                src={"/svg/arrow-down.svg"}
                alt="arrow-down"
                width={12}
                height={12}
              />
            </div>
            {showFaq === value?.modulTitle && (
              <div className="p-4">
                <p className="text-[15px] font-[400] text-[#000]">
                  {value?.modulDescription}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default InnerFaq;
