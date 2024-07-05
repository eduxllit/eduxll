import Image from "next/image";

import HeaderLayout from "../components/headerLayout/HeaderLayout";
import ReferAndEarnForm from "../components/form/Refer-and-earn";
import FaqComponent from "../components/faq/faq-abroad";

const ReferAndEarn = () => {
  return (
    <HeaderLayout>
      <div className="sm:grid grid-cols-2 gap-8 max-w-[1150px] m-auto my-12 px-4">
        <div>
          <h2 className="text-4xl leading-snug font-[450] mb-4">
            Earn Reward For <br />
            Every Friend You Refer!
          </h2>
          <p className="mb-4">
            Invite your friends and earn upto{" "}
            <strong className="font-semibold text-[#ffa41c]">Rs 10,000*</strong>{" "}
            for <br />
            each successful referral.
          </p>
          <h3 className="font-semibold">
            The more friends your bring, the more you can earn.
          </h3>
          <Image
            src={"/refer/refer.webp"}
            alt="refer"
            width={850}
            height={650}
            className="w-full h-auto"
          />
        </div>
        <div className="sm:mt-0 mt-6">
          <ReferAndEarnForm heading="Unlock Rewards Together Reach Out and Refer!" />
        </div>
      </div>
      <div className="max-w-[1150px] m-auto px-4">
        <h2 className="text-center text-[#025E68] sm:text-4xl text-2xl mt-12 mb-6">
          How To Earn ?
        </h2>
        <div className="grid grid sm:grid-cols-3 grid-cols-1">
          <div className="sm:mb-0 mb-4">
            <div className="sm:h-[140px] h-[95px] flex">
              <Image
                src={"/refer/share.webp"}
                alt="image"
                width={120}
                height={100}
                className="m-auto sm:w-[25%] w-[15%]"
              />
            </div>
            <p className="text-center">Share Your Referal Details</p>
          </div>
          <div className="sm:mb-0 mb-4">
            <div className="sm:h-[140px] h-[95px] flex">
              <Image
                src={"/refer/user.webp"}
                alt="image"
                width={120}
                height={100}
                className="m-auto sm:w-[25%] w-[15%]"
              />
            </div>
            <p className="text-center">Your Referal Registeration Complete</p>
          </div>
          <div>
            <div className="sm:h-[140px] h-[95px] flex">
              <Image
                src={"/refer/gift.webp"}
                alt="image"
                width={120}
                height={100}
                className="m-auto sm:w-[25%] w-[15%]"
              />
            </div>
            <p className="text-center">Earn Your Reward</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] m-auto sm:my-20 my-12 px-4">
        <h2 className="sm:mb-12 mb-4 sm:text-4xl text-2xl text-[#025E68] tracking-wider text-center">
          FAQs
        </h2>
        <FaqComponent faqCollection={faqArray} />
      </div>
      <div className="bg-[#024047] py-12">
        <div className="max-w-[1150px] m-auto grid sm:grid-cols-3 pb-6 border-b border-white px-4">
          {footerGrid?.map((item, index) => {
            return (
              <div key={index} className="text-white flex gap-2 sm:mb-0 mb-4 justify-center">
                <div className="flex-none">
                  <Image src={item?.imageURl} alt={item?.alt} width={40} height={40} className="!w-[40px]" />
                </div>
                <div>
                  <h3 className="mb-0 font-semibold sm:text-xl text-lg tracking-wide">{item?.title}</h3>
                  <p className="font-[300] tracking-wide">{item?.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HeaderLayout>
  );
};
export default ReferAndEarn;
const faqArray = [
  {
    question:
      "What is the eligibility criteria to receive Referral Bonus after referring a friend?",
    answer:
      "The referee must complete their admission process within 15 days from the date of application. The referee must paid the admission fees for the program.",
    anslist: null,
  },
  {
    question: "Who is an enrolled user & who is not?",
    answer:
      "Students who have paid for an EduKyu's course are “Enrolled” users. Students who have not completed admission or payment for any specific course are 'Non- Enrolled' users.",
    anslist: [
      {
        list: "Go to https://edukyu.com/refer-and-earn/",
      },
      {
        list: "Fill out the form with your details (likely your name & email).",
      },
      {
        list: "Enter the name of the university you are associated with.",
      },
      {
        list: "Provide your friend's name and email ID whom you would like to refer.",
      },
      {
        list: "The referee must paid the full fees for the program.",
      },
    ],
  },
  {
    question: "How can I refer my friends/connections?",
    answer:
      "The referee must complete their admission process within 15 days from the date of application. The referee must paid the admission fees for the program.",
    anslist: null,
  },
  {
    question: "When can you expect to receive a Referral Bonus?",
    answer:
      "The referrer will receive the payout within 15 days after the referee successfully completes the admission process and pays the required admission fees for the program.",
    anslist: null,
  },
  {
    question: "Why I have not still received my referral bonus?",
    answer:
      "The referee has not used your code on the application. The referee has not paid the full fees for the course.",
    anslist: null,
  },
];
const footerGrid = [
  {
    imageURl: "/svg/location-yellow.svg",
    alt: "location",
    title: "Find us",
    value: "603, 6th Floor, ILD Trade Centre, Sector 47, Sohna Road, Gurugram – 122018, Haryana",
  },
  {
    imageURl: "/svg/phone-yellow.svg",
    alt: "phone",
    title: "Call us",
    value: "+91 8448 198 656",
  },
  {
    imageURl: "/svg/mail-yellow.svg",
    alt: "mail",
    title: "Mail us",
    value: "info@eduxll.com",
  },
];
