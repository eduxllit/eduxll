"use client";
import { useState } from "react";

interface faqProp {
  faqCollection?: any;
}
const FaqComponent = ({ faqCollection }: faqProp) => {
  const [faq, setFaq] = useState("");
  const faqToggle = (value: string) => {
    faq === "" ? setFaq(value) : faq !== value ? setFaq(value) : setFaq("");
  };
  return (
    <div className="grid gap-4">
      {faqCollection?.map((value: any, index: any) => {
        return (
          <div key={index} className="p-4 bg-white rounded-md border-b">
            <h3
              className="mb-[0px] font-semibold flex justify-between cursor-pointer"
              onClick={() => faqToggle(value?.question)}
            >
              <p className="mb-[0px]">
                
              {/* {index + 1}  */}
              {value?.question}{" "}
              </p>
              <span>{faq !== value?.question ? "+" : "-"}</span>
            </h3>
            {faq === value?.question && (
              <>
              {value?.anslist!==null ?
                <>
                <ul className="list-disc">
                 
                <p>
                  {value?.anslist?.map((item:any,ind:number)=>{
                    return(
                      <li key={ind} className="ml-6 mt-4 text-sm">
                     {item?.list}
                      </li>
                    )
                  })}
                  </p>
                </ul>
                </>
                :
              <p className="mt-2">Ans: {value?.answer}</p>
                }
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FaqComponent;
