"use client";
import Image from "next/image";
import { useState } from "react";
import InnerFaq from "./ineer-faq/page";

const FaqNew = ({ headingbgcolor, courseModule }: any) => {
  const [showFaq, setShowFaq] = useState("");

  const faqToggle = (faq: any) => {
    showFaq === faq ? setShowFaq("") : setShowFaq(faq);
  };

  return (
    <div className="sm:my-16 my-8 md:mx-16 sm:px-16 px-4">
      <h3 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[10px]">
        Frequently Asked Questions
      </h3>

      <InnerFaq
        faqToggle={faqToggle}
        showFaq={showFaq}
        headingbgcolor={headingbgcolor}
        courseModule={courseModule}
      />
    </div>
  );
};
export default FaqNew;

const faqCollection = [
  {
    ques: "Will I gain access to any sort of Forum support?",
    ans: "Yes. You will gain complete access to our forum support to connect with our fellow aspiring users.",
  },
  {
    ques: "Apart from these courses, will I get access to any practice platforms?",
    ans: "You will gain access to CodeKata which is a gamified practice platform which hosts 1000+ curated coding problems and IDE, which is an Integrated Development Environment that lets you write, edit, run, test & debug your code.",
  },
  {
    ques: "On what basis are the certificates rolled out?",
    ans: "UiPath certification is available for a nominal fee. If paid, you will receive an E-certificate through email as soon as you complete the course with 100% progress.",
  },
  {
    ques: "Is it 100% online learning or should I come in person for any specific course?",
    ans: "It is a 100% online learning course package and there won’t be any necessity for you to be present in person.",
  },
];
