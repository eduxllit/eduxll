import Image from "next/image";
import FormUI from "../components/form/FormUI";
import FaqComponent from "../components/faq/faq-abroad";

const IITKanpur = () => {
  return (
    <div>
      <div className="relative bg-[url('/kanpur/banner.webp')] bg-contain py-8" style={{backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
        {/* <Image
          src={"/kanpur/banner.webp"}
          alt="banner"
          width={1650}
          height={950}
          className="w-full h-auto"
        /> */}
        <div className="grid sm:grid-cols-2 top-8 w-full sm:px-12 px-4 h-[90%]">
          <div className="sm:max-w-[650px] grid justify-between h-[90%] text-white ">
            <div className="flex gap-4 items-center">
              <div>
                <h1 className="text-6xl tracking-wider">IIT KANPUR</h1>
                <p className="tracking-wider">
                  Indian Institute of Technology Kanpur
                </p>
              </div>
              <div>
                <Image
                  src={"/kanpur/logo.png"}
                  alt="logo"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-xl tracking-wide mt-8">
                IIT CERTIFIED PROFESSIONAL CERTIFICATE IN
              </h2>
              <h3 className="font-bold text-3xl text-red-500 mb-2">ESG AND</h3>
              <h3 className="font-bold text-3xl text-green-400 mb-2">
                BUSINESS
              </h3>
              <h3 className="font-bold text-3xl text-pink-300 mb-2">
                SUSTAINABILITY
              </h3>
              <p>FOR PRACTITIONER: CORPORATE MIDDLE MANAGEMENT</p>
            </div>
            <div>
              <h4 className="text-green-600">FACULTY RESOURCES:</h4>
              <ul>
                <li>IIT Kanpur</li>
                <li>IIT Delhi</li>
              </ul>
            </div>
          </div>
          <div className="grid justify-end relative sm:static absolute top-8">
            <div>
              <FormUI formWidth="sm:w-[350px]" />
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
      <div>
        <Image
          src={"/kanpur/about.png"}
          alt="about"
          width={1650}
          height={450}
          className="w-full h-auto"
        />
        <div className="grid sm:grid-cols-2 gap-8 items-center sm:px-12 px-4">
          <div className="bg-">
            <p className="mb-4 text-[18px]">
              IIT Kanpur, established in 1959, is one of the premier
              institutions of higher education in India, renowned for its
              comprehensive excellence across diverse fields, ranging from
              engineering and technology to the humanities and social sciences,
              affirming its holistic approach to education. It excels in
              fostering innovation and academic excellence across a wide range
              of disciplines. The institute is particularly distinguished for
              its engineering courses and cutting-edge research, contributing
              significantly to sectors like defense, space, and computer
              science.
            </p>
            <p className="text-[18px]">
              The institution&apos;s involvement in ESG and Business
              Sustainability exemplifies its commitment to expanding its
              academic purview into critical contemporary areas like
              sustainability and corporate governance. This program underscores
              IIT Kanpur&apos;s dedication to developing forward-thinking
              leaders capable of integrating ethical practices into business
              strategies, thereby contributing positively to global
              environmental and social challenges.
            </p>
          </div>
          <div>
            <Image
              src={"/kanpur/about-iit.jpg"}
              alt="iit"
              width={850}
              height={850}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 items-center sm:px-12 px-4 my-12 bg-green-100 py-12">
        <Image
          src={"/kanpur/certificate.png"}
          alt="certificate"
          width={850}
          height={850}
          className="w-full h-auto rounded-xl"
        />
        <div>
          <h2 className="font-semibold sm:text-6xl text-2xl sm:text-left text-center mb-8">CERTIFICATION</h2>
          <p className="text-xl mb-4">
            Participants who fulfill the evaluation and attendance requirements
            will receive a <b>Certificate of Completion</b>.
          </p>
          <p className="text-xl">
            Participants who meet the attendance requirements but do not pass
            the evaluation will receive a <b>Participation Certificate</b>.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-[60%_40%]">
        <div>
          <Image
            src={"/kanpur/hat.png"}
            alt="kanpur"
            width={850}
            height={450}
            className="w-full h-[180px]"
          />
        </div>
        <div>
          <Image
            src={"/kanpur/green-logo.png"}
            alt="kanpur"
            width={850}
            height={450}
            className="w-full h-[180px]"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-[60%_40%]">
        <div>
          <div className="bg-yellow-100 p-8 h-full">
            <h2 className="text-3xl font-semibold text-green-800 tracking-wider mb-2">
              LEARNING OUTCOMES
            </h2>
            <span className="w-24 h-[3px] bg-green-800 block"></span>
            <h3 className="mt-4 font-semibold text-lg">
              At the end of the "ESG and Business Sustainability" program,
              learners should have acquired the following knowledge and skills:
            </h3>
            <ul className="list-disc">
              {learningArray?.map((item, index) => {
                return (
                  <li className="ml-8" key={index}>
                    {item?.content}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bg-green-300 pb-4 sm:px-0 px-8">
          <h3 className="sm:text-3xl text-2xl font-semibold text-green-800 tracking-wider mb-0 py-4 sm:px-8 px-4 sm:text-left text-center">
            KEY SKILLS YOU&apos;LL LEARN
          </h3>
          <ul className="list-disc max-w-[460px] m-auto mb-2">
            {skillsArray?.map((item, index) => {
              return (
                <li className="mb-0" key={index}>
                  {item?.list}
                </li>
              );
            })}
          </ul>
          <h3 className="sm:text-3xl text-2xl font-semibold text-green-800 tracking-wider mb-0 py-4 sm:px-8 px-4 sm:text-left text-center">
            CAREER PROSPECTS
          </h3>

          <ul className="list-disc max-w-[460px] m-auto">
            {careerAray?.map((item, index) => {
              return (
                <li className="mb-0" key={index}>
                  {item?.list}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="relative">
        <div className="grid sm:grid-cols-[80%_20%]">
          <div>
            <div className="bg-yellow-50 sm:py-12 sm:px-12 px-4 py-8">
              <h3 className="sm:text-2xl text-xl tracking-wide sm:text-left text-center">CURRICULUM</h3>
              {curriculumArray?.map((item, index) => {
                return (
                  <div key={index} className="flex">
                    <h4 className="text-lg whitespace-nowrap">{item?.heading}:&nbsp; </h4>
                    <p>{item?.content}</p>
                  </div>
                );
              })}
            </div>
              <div className="">
                <Image
                  src={"/kanpur/ranking.png"}
                  alt="rank"
                  width={1250}
                  height={850}
                  className="w-full h-auto"
                />
              </div>
          </div>
          <div className="bg-green-100"></div>
        </div>
        <div className="absolute right-8 top-8 sm:block hidden">
          <Image
            src={"/kanpur/girl.png"}
            alt="girl"
            width={450}
            height={850}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* faq */}
      <div className="py-12 sm:px-8 px-4 bg-green-700">
        <h2 className="text-4xl font-semibold tracking-wider text-center mb-8 text-white">FAQ's</h2>
      <FaqComponent faqCollection={faqArray} />
      </div>
    </div>
  );
};
export default IITKanpur;
const learningArray = [
  {
    content:
      "Understanding overall concept of ESG and its relevance in business to ensure the sustainability.",
  },
  {
    content:
      "Clarity on climate change mitigation and resource conservation processes.",
  },
  {
    content:
      "Relevance of social inclusion and social impact assessment tools.",
  },
  {
    content:
      "Corporate Governance and best practices to ensure business ethics and value system.",
  },
  {
    content:
      "Strategy and Policy implication for effective adoption of ESG in India.",
  },
  {
    content: "Learning from peers and best case for better application of ESG.",
  },
  {
    content: "Developing training module for capacity development programs.",
  },
];
const skillsArray = [
  {
    list: "Sustainability Analysis",
  },
  {
    list: "Strategic Planning",
  },
  {
    list: "Regulatory Compliance",
  },
  {
    list: "Project Management",
  },
  {
    list: "Collaboration and Teamwork",
  },
];
const careerAray = [
  {
    list: "Sustainability Consultant",
  },
  {
    list: "CSR Manager",
  },
  {
    list: "Environmental Analyst",
  },
  {
    list: "Chief Sustainability Officer (CSO)",
  },
  {
    list: "ESG Analyst/Investor",
  },
  {
    list: "Risk and Compliance Manager",
  },
  {
    list: "Public Policy Advisor",
  },
  {
    list: "Sustainability Communications Specialist",
  },
];
const curriculumArray = [
  {
    heading: "Module 1",
    content: "Introduction and overall view of ESG",
  },
  {
    heading: "Module 2",
    content: "Environmental Pillar of ESG",
  },
  {
    heading: "Module 3",
    content: "Social Pillar of ESG",
  },
  {
    heading: "Module 4",
    content: "Governance Structure",
  },
  {
    heading: "Module 5",
    content: "Strategy for effective Implementation of ESG",
  },
  {
    heading: "Module 6",
    content:
      "Case Studies and Best Practices related to ESG and Business Sustainability",
  },
  {
    heading: "Module 7",
    content: "Capacity development and ESG Leadership",
  },
  {
    heading: "Module 8",
    content:
      "Business Responsibility (BR) Reporting and Sustainability Reporting (SR)",
  },
];
const faqArray = [
  {
    question:"WHAT ARE THE ELIGIBILITY CRITERIA FOR ENROLLING IN THIS COURSE?",
    answer:"Applicants should hold a bachelor's degree from a recognized university. A background in business, environmental studies, social sciences, or related fields is helpful but not mandatory."
  },
  {
    question:"IS THIS COURSE RECOGNIZED INTERNATIONALLY?",
    answer:"Yes, the course offered by IIT Kanpur in collaboration with EduXLL is recognized both in India and internationally, making it a valuable credential for global career opportunities."
  },
  {
    question:"WHAT ARE THE CAREER PROSPECTS AFTER COMPLETING THIS COURSE?",
    answer:"Graduates can pursue roles such as Sustainability Consultant, CSR Manager, ESG Analyst, Chief Sustainability Officer, and more, across industries that are increasingly prioritizing ESG and sustainability practices."
  },
  {
    question:"CAN I BALANCE THIS COURSE WITH A FULL-TIME JOB?",
    answer:"Yes, the course is designed with flexibility in mind, making it suitable for working professionals. It utilizes an online learning format that allows you to manage your studies alongside professional responsibilities."
  },
  {
    question:"WHAT DOES THE COURSE CURRICULUM INCLUDE?",
    answer:"The curriculum covers comprehensive topics on environmental, social, and governance (ESG) principles, including climate change, ethical governance, diversity and inclusion, and sustainability reporting."
  },
  {
    question:"WHAT PRACTICAL LEARNING EXPERIENCES DOES THE COURSE OFFER?",
    answer:"The course includes interactive live classes, case studies, real-world project work, and simulations to help translate theoretical knowledge into practical skills applicable in various professional settings."
  },
  {
    question:"HOW DOES THIS COURSE HELP IN ADVANCING MY CAREER?",
    answer:"This course equips you with the necessary skills to implement sustainable practices and ESG principles effectively within organizations, enhancing your qualifications for leadership roles in sustainability and governance."
  },
]