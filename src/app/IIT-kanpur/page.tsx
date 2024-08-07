import Image from "next/image";
import FormUI from "../components/form/FormUI";
import FaqComponent from "../components/faq/faq-abroad";

const IITKanpur = () => {
  return (
    <div>
      <div
        className="relative bg-[url('/kanpur/banner.webp')] bg-contain py-8"
        style={{ backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
      >
        {/* <Image
          src={"/kanpur/banner.webp"}
          alt="banner"
          width={1650}
          height={950}
          className="w-full h-auto"
        /> */}
        <div className="grid sm:grid-cols-2 top-8 w-full sm:px-12 px-4 h-[90%]">
          <div className="sm:max-w-[650px] grid justify-between h-[90%] text-white ">
            <div className="flex gap-4 ">
              <div>
                <h1 className="text-6xl tracking-wider">IIT KANPUR</h1>
                <p className="tracking-wider">
                  Indian Institute of Technology Kanpur
                </p>
              </div>
              <div className="pt-5px">
                <Image
                  src={"/kanpur/logo.png"}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-xl tracking-wide mt-8">
                IIT CERTIFIED PROFESSIONAL CERTIFICATE IN
              </h2>
              <h3 className="font-bold text-3xl mb-2">
                <span className="text-red-500 ">ESG AND</span>
                <span className="text-green-400">&nbsp; BUSINESS &nbsp;</span>
                <span className="text-pink-300">SUSTAINABILITY</span>
              </h3>
              <p>FOR PRACTITIONERS: CORPORATE MIDDLE MANAGEMENT</p>
            </div>
            <div>
              <h4 className="text-green-600">FACULTY RESOURCES: IIT Kanpur</h4>
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

      <div className="sm:grid grid-cols-3 items-center justify-center text-center text-white ">
        <div className="bg-[#002e5ea6] p-8 h-full">
          {/* <img alt="icon" loading="lazy" width="48" height="48"  className="m-auto "  src="/svg/mask.svg"> */}
          {/* <h3 className="text-2xl font-semibold my-2 mt-6 tracking-wider">FOUNDATION ACTING</h3> */}
          <h6 className="text-[20px] font-[700] text-[#fff] mb-[8px]">
            ELIGIBILITY
          </h6>
          <p className="text-[#fff] text-[16px] font-[400]">
            {" "}
            Graduation with minimum 50% marks and 10 years of experience.
          </p>
        </div>
        <div className="bg-[#002e5e] p-8 h-full">
          {/* <img alt="icon" loading="lazy" width="48" height="48"  className="m-auto "  src="/svg/mask.svg"> */}
          {/* <h3 className="text-2xl font-semibold my-2 mt-6 tracking-wider">FOUNDATION ACTING</h3> */}
          <h6 className="text-[20px] font-[700] text-[#fff] mb-[8px]">
            COURSE DURATION
          </h6>
          <p className="text-[#fff] text-[16px] font-[400]">
            2 Weeks with a total of approximately 12 – 14 hours Weekend/Late
            evening classes{" "}
          </p>
        </div>
        <div className="bg-[#002e5ea6] p-8 h-full">
          {/* <img alt="icon" loading="lazy" width="48" height="48"  className="m-auto "  src="/svg/mask.svg"> */}
          {/* <h3 className="text-2xl font-semibold my-2 mt-6 tracking-wider">FOUNDATION ACTING</h3> */}
          <h6 className="text-[20px] font-[700] text-[#fff] mb-[8px]">
            Download Brochure
          </h6>
          <a
            href="/kanpur/IIT-KANPUR- ESG-Leadership.pdf"
            download
            className="text-[#fff] text-[16px] font-[400]"
            style={{
              display: "block",
              textAlign: "center",
              margin: "auto",
              width: "fit-content",
            }}
          >
            <Image
              src="kanpur/file-pdf-2-line.svg"
              width={50}
              height={50}
              alt="Download Brochure"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 gap-8 items-center sm:px-12 px-4">
          <div className="bg-">
            <p className="mb-4 text-[18px] text-justify">
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
            <p className="text-[18px] text-justify">
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

      <section className="py-[30px]  sm:px-12 px-4 bg-[url('https://bsmedia.business-standard.com/_media/bs/img/article/2018-04/19/full/1524113491-1118.jpg?im=FeatureCrop,size=(826,465)')]      before:w-[100%] before:h-[100%] before:absolute before:bg-[#3b5a77] relative  before:left-[0px] before:top-[0px] z-[9] before:z-[-1] before:opacity-[0.8] before:bg-cover">
        <div className="mb-[30px]">
          <h2 className="text-3xl font-semibold text-white tracking-wider mb-2">
            WHO ARE WE?
          </h2>
          <p className="text-[18px] text-white text-justify">
            Edovu Ventures is a pioneer in shaping the educational landscape,
            providing world-class learning experiences to the students. After a
            successful journey in school education, Edovu Ventures is embarking
            on a new venture in higher education under the name eduXLL. At
            eduXLL, we are redefining the boundaries of online education by
            offering a platform where ambition meets opportunity. Born from a
            vision to make high-quality education accessible to all, eduXLL
            bridges the gap between learners and their aspirations through a
            meticulously curated catalog of online courses. Our mission is to
            empower individuals around the globe by providing them with the
            tools, knowledge, and skills they need to excel in their careers and
            personal development.
          </p>
        </div>

        <div>
          <h2 className="text-3xl text-white font-semibold text-black tracking-wider mb-2">
            ABOUT THE PROGRAM
          </h2>
          <p className="text-[18px] text-white  text-justify">
            The &quot; ESG and Business Sustainability &quot; course, offered by IIT Kanpur
            in collaboration with EduXLL, provides an in-depth understanding of
            how to integrate Environmental, Social, and Governance (ESG)
            principles into core business strategies. This course is designed to
            equip professionals, leaders, and policymakers with the skills
            necessary to foster sustainable and responsible business practices
            that align with global sustainability goals. Through comprehensive
            modules covering the environmental, social, and governance pillars,
            participants will learn to address challenges such as climate
            change, diversity, ethical governance, and sustainability reporting.
            The partnership between IIT Kanpur and EduXLL enriches the
            curriculum with expert instruction and access to a vast network of
            sustainability professionals.
          </p>
        </div>
      </section>

      <div className="grid sm:grid-cols-[60%_40%]">
        <div className="bg-[#3b5a77] p-8 h-full">
          <h2 className="text-3xl font-semibold text-white tracking-wider mb-2">
            KEY HIGHLIGHTS OF THE PROGRAM
          </h2>
          <span className="w-24 h-[3px] bg-[#fff] block"></span>

          <ul className="mt-4">
            <li className=" text-[#fff]">
              <b>Comprehensive ESG Coverage:</b> Explores in-depth the
              environmental, social, and governance aspects of sustainability in
              business.
            </li>
            <li className=" text-[#fff]">
              <b>Practical Application:</b> Emphasizes actionable strategies and
              real-world applications to implement ESG practices effectively.
            </li>
            <li className=" text-[#fff]">
              <b>Expert and Experienced Faculty from IITs and Industries:</b>{" "}
              Learn from seasoned professionals from industries and academicians
              from IIT Kanpur, IIT Delhi and other premium institutes with
              extensive experience in sustainability
            </li>
            <li className=" text-[#fff]">
              <b>Network Building:</b> Gain access to a wide network of
              professionals in the field of sustainability, enhancing career and
              collaboration opportunities.
            </li>
            <li className=" text-[#fff]">
              <b>Flexible Online Format: </b>Allows professionals to balance
              learning with their work commitments effectively, providing a
              global classroom experience.
            </li>
          </ul>
        </div>

        <div className="bg-[#fff] p-8 h-full">
          <h2 className="text-3xl font-semibold text-black tracking-wider mb-2">
            ASSESSMENT & EVALUATION
          </h2>
          <span className="w-24 h-[3px] bg-black block"></span>

          <ul className="mt-4">
            <li>
              <h3 className="font-semibold text-lg text-justify mb-[15px]">
                EVALUATION METHODOLOGY
              </h3>
              <p>
                Faculty discretion determines the evaluation methods, which may
                include online exams, case analyses, and class participation.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-lg text-justify mb-[15px]">
                ASSIGNMENTS AND PROJECTS{" "}
              </h3>
              <p>
                Participants will undertake assignments or projects aimed at
                applying course concepts to practical scenarios.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-lg text-justify mb-[15px]">
                PASSING CRITERIA
              </h3>
              <p>
                Participants need to meet the minimum passing marks in all
                evaluation components.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid sm:grid-cols-[60%_40%]">
        <div>
          <div className="bg-white p-8 h-full">
            <h2 className="text-3xl font-semibold   tracking-wider mb-2">
              LEARNING OUTCOMES
            </h2>
            <span className="w-24 h-[3px] bg-black block"></span>
            <h3 className="mt-4 font-semibold text-lg text-justify">
              At the end of the &quot;ESG and Business Sustainability&quot;
              program, learners should have acquired the following knowledge and
              skills:
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
        <div className="bg-[#5b7ea6]     p-8">
          <h3 className="text-3xl font-semibold text-[#fff] tracking-wider mb-2">
            KEY SKILLS YOU&apos;LL LEARN
          </h3>
          <span className="w-24 h-[3px] bg-[#fff] block"></span>
          <ul className="list-disc mt-4 ">
            {skillsArray?.map((item, index) => {
              return (
                <li className="ml-8 text-[#fff]" key={index}>
                  {item?.list}
                </li>
              );
            })}
          </ul>
          <h3 className="text-3xl font-semibold text-[#fff] tracking-wider mb-2">
            CAREER PROSPECTS
          </h3>

          <span className="w-24 h-[3px] bg-[#fff] block"></span>
          <ul className="list-disc mt-4 ">
            {careerAray?.map((item, index) => {
              return (
                <li className="ml-8 text-[#fff]" key={index}>
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
              <h3 className="text-3xl font-semibold text-black-800 tracking-wider mb-2">
                CURRICULUM
              </h3>
              <span className="w-24 h-[3px] bg-black block mb-4"></span>

              <div className="block max-w-[630px]">
                {curriculumArray?.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="flex mb-4 text-[18px] text-justify"
                    >
                      <span className=" whitespace-nowrap">
                        {item?.heading}:&nbsp;{" "}
                      </span>
                      <span>{item?.content}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-green-100"></div>
        </div>
        <div className="absolute right-8 top-8 sm:block hidden max-w-[477px] min-h-[477px]">
          <Image
            src={"/kanpur/girl.png"}
            alt="girl"
            width={477}
            height={477}
            objectFit="cover"
            className="w-full h-auto"
            style={{
              width: "477px",
              height: "477px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center sm:px-12 px-4 mt-12 bg-green-100 py-12">
        <Image
          src={"/kanpur/certificate.png"}
          alt="certificate"
          width={850}
          height={850}
          className="w-full h-auto rounded-xl"
        />
        <div>
          <h2 className="font-semibold sm:text-6xl text-2xl sm:text-left text-center mb-8">
            CERTIFICATION
          </h2>
          <p className="text-xl mb-4 text-justify">
            Participants who fulfill the evaluation and attendance requirements
            will receive a <b>Certificate of Completion</b>.
          </p>
          <p className="text-xl text-justify">
            Participants who meet the attendance requirements but do not pass
            the evaluation will receive a <b>Participation Certificate</b>.
          </p>
        </div>
      </div>

      {/* faq */}
      <div className="py-12 sm:px-8 px-4 bg-[#18964759] ">
        <h2 className="text-3xl font-semibold text-center text-black-800 tracking-wider mb-2">
          FAQ&apos;s
        </h2>
        <span className="w-24 h-[3px] bg-black block mb-4 mx-auto "></span>
        <div className="faqstyle">
          <FaqComponent faqCollection={faqArray} />
        </div>
      </div>

      <div className="bg-[#000] py-[20px] text-center ">
        <div className="flex justify-center items-center">
          <div className="flex gap-[10px]">
            <div className="flex justify-center items-center">
              <Image
                src={"/kanpur/phone-line.svg"}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="text-[18px] text-white">+91 8448 198 656</div>
          </div>

          <div className="flex gap-[10px]">
            <div className="flex justify-center items-center">
              <Image
                src={"/kanpur/global-line.svg"}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="text-[18px] text-white">www.eduxll.com</div>
          </div>
        </div>
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
    question: "WHAT ARE THE ELIGIBILITY CRITERIA FOR ENROLLING IN THIS COURSE?",
    answer:
      "Applicants should hold a bachelor's degree from a recognized university. A background in business, environmental studies, social sciences, or related fields is helpful but not mandatory.",
  },
  {
    question: "IS THIS COURSE RECOGNIZED INTERNATIONALLY?",
    answer:
      "Yes, the course offered by IIT Kanpur in collaboration with EduXLL is recognized both in India and internationally, making it a valuable credential for global career opportunities.",
  },
  {
    question: "WHAT ARE THE CAREER PROSPECTS AFTER COMPLETING THIS COURSE?",
    answer:
      "Graduates can pursue roles such as Sustainability Consultant, CSR Manager, ESG Analyst, Chief Sustainability Officer, and more, across industries that are increasingly prioritizing ESG and sustainability practices.",
  },
  {
    question: "CAN I BALANCE THIS COURSE WITH A FULL-TIME JOB?",
    answer:
      "Yes, the course is designed with flexibility in mind, making it suitable for working professionals. It utilizes an online learning format that allows you to manage your studies alongside professional responsibilities.",
  },
  {
    question: "WHAT DOES THE COURSE CURRICULUM INCLUDE?",
    answer:
      "The curriculum covers comprehensive topics on environmental, social, and governance (ESG) principles, including climate change, ethical governance, diversity and inclusion, and sustainability reporting.",
  },
  {
    question: "WHAT PRACTICAL LEARNING EXPERIENCES DOES THE COURSE OFFER?",
    answer:
      "The course includes interactive live classes, case studies, real-world project work, and simulations to help translate theoretical knowledge into practical skills applicable in various professional settings.",
  },
  {
    question: "HOW DOES THIS COURSE HELP IN ADVANCING MY CAREER?",
    answer:
      "This course equips you with the necessary skills to implement sustainable practices and ESG principles effectively within organizations, enhancing your qualifications for leadership roles in sustainability and governance.",
  },
];
