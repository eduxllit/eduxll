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
            Invite your friends and earn {" "}
            <strong className="font-semibold text-[#ffa41c]">Reward</strong>{" "}
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
          <ReferAndEarnForm heading="Refer Now!" />
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
       
    </HeaderLayout>
  );
};
export default ReferAndEarn;
const faqArray = [
  {
    question:
      "Do I get a reward every time a friend of mine signs up?",
    answer:
      "You get a referral reward for every friend you refer through the website. You will be eligible to receive the reward once the referral pays their full fee.",
    anslist: null,
  },
  {
    question: "When and How will I get the reward for referral?",
    answer:
      "You will be eligible to receive the reward once your friend pays their full fee. You will be contacted by the eduXLL team to collect your reward. You will receive the referral reward 15 days after your friend has made the full payment of fees.",
    anslist: null,
  },
  {
    question: "How will my friends be informed that I referred them?",
    answer:
      "Your friends will receive an email confirmation from eduXLL informing them that they have been referred by you. They will be asked to confirm.",
    anslist: null,
  },
  {
    question: "4. How can I refer my friends/connections?",
    answer:
      "Refer your friends from the eduXLL website.. You will have to provide your name, email id, mobile no. for us to contact you. You can refer your friends by entering their Name, Contact number and University on the website",
    anslist: null,
  },
   
];
 
