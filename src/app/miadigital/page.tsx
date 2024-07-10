import Image from "next/image";
import FormUI from "../components/form/FormUI";

const MiaDigital = () => {
  return (
    <>
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
                  <div className="pt-5px flex gap-4">
                    <Image
                      src={"/miadigital/logo.png"}
                      alt="logo"
                      width={300}
                      height={300}
                      objectFit="content"
                      className="object-contain"
                    />
                    <Image
                      src={"/miadigital/logo2.png"}
                      alt="logo"
                      width={300}
                      height={300}
                      objectFit="content"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-5xl tracking-wider">GLOBAL ONLINE MBA</h1>
                  <p className="tracking-wider">
                    MASTER IN GLOBAL BUSINESS ADMINISTRATION
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-xl tracking-wide mt-8">
                  DUAL DEGREE PROGRAM AT YOUR DOORSTEP!
                </h2>
                {/* <h3 className="font-bold text-3xl mb-2">
                  <span className="text-red-500 ">ESG AND</span>
                  <span className="text-green-400">&nbsp; BUSINESS &nbsp;</span>
                  <span className="text-pink-300">SUSTAINABILITY</span>
                </h3> */}
                {/* <p>FOR PRACTITIONERS: CORPORATE MIDDLE MANAGEMENT</p> */}
              </div>
              {/* <div>
                <h4 className="text-green-600">
                  FACULTY RESOURCES: IIT Kanpur
                </h4>
              </div> */}
            </div>
            <div className="grid justify-end relative sm:static absolute top-8">
              <div>
                <FormUI formWidth="sm:w-[350px]" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 gap-8   sm:px-12 px-4 py-[50px] ">
            <div className="bg-">
              <h3 className="text-3xl font-semibold   tracking-wider mb-2">
                ABOUT MIA DIGITAL UNIVERSITY
              </h3>
              <p className="mb-4 text-[18px] text-justify">
                MIA – Digital University is a leading international institution
                in online education, offering master and certificate programs in
                a variety of different disciplines, available and accessible
                online. Our mission is to educate the next generation of global
                citizens providing students with the skills needed to succeed in
                today’s evolving job market. The master degree programs in the
                areas of online business, sustainability and cutting-edge
                technologies aimed to prepare the next generation of insightful
                leaders, managers and entrepreneurs. We are a diverse
                international community and we supported students from different
                countries to reach their career goals and ambitions through our
                online education programs. science.
              </p>
              <h3 className="text-3xl font-semibold   tracking-wider mb-2 mt-3 ">
                ABOUT eduXLL
              </h3>
              <p className="text-[18px] text-justify">
                eduXLL Online Higher Education Platform enables
                academic-industry blended curriculum for its various programs
                and caters to students and professionals globally. At eduXLL,
                students gain access to learning from experienced professors of
                prestigious universities and business schools worldwide.
                Incorporating a flexible learning approach and integrating live
                corporate projects into course delivery ensures a practical
                understanding of theoretical concepts, preparing individuals to
                thrive in their respective workplaces.
              </p>
            </div>
            <div>
              <Image
                src={"/miadigital/image1.jpg"}
                alt="iit"
                width={500}
                height={500}
                className="w-full h-auto h-[500px]"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-[50%_50%]">
          <div className="bg-[#3b5a77] p-8 h-full">
            <h2 className="text-3xl font-semibold text-white tracking-wider mb-2">
              CAREER OPPORTUNITIES FOR MBA
            </h2>
            <span className="w-24 h-[3px] bg-[#fff] block"></span>

            <p className="mb-4 text-[18px] text-[#fff] text-justify mt-[16px]">
              There are a number of opportunities a graduate with a Global MBA
              degree could consider from consultant-level roles all the way
              through to managerial and directive roles. Several of the roles
              you may consider include: international trade policy advisor,
              global management consultant, international sales manager,
              business development manager and global marketing manager.
            </p>

            <ul className="mt-4 list-disc ml-[20px]">
              <li className=" text-[#fff]">FINANCIAL AREA DIRECTOR</li>
              <li className=" text-[#fff]">BUSINESS INNOVATION STRATEGIST</li>
              <li className=" text-[#fff]">HEAD OF BUSINESS DEVELOPMENT</li>
              <li className=" text-[#fff]">BUSINESS INTELLIGENCE MANAGER</li>
              <li className=" text-[#fff]">DIGITAL TRANSFORMATION MANAGER</li>
            </ul>
          </div>

          <div className="bg-[#fff] p-8 h-full">
            <h2 className="text-3xl font-semibold text-black tracking-wider mb-2">
              CAREER OPPORTUNITIES FOR MCS
            </h2>
            <span className="w-24 h-[3px] bg-[#000] block"></span>

            <p className="mb-4 text-[18px] text-justify mt-[16px]">
              The job market remains vibrant for computer science professionals.
              Our graduates find employment in ICT R&D, IT management and IT
              consulting, in small companies and major multinationals.
            </p>

            <ul className="mt-4 list-disc ml-[20px]">
              <li className=" text-[#000]">DATA SCIENTIST</li>
              <li className=" text-[#000]">SECURITY ANALYST</li>
              <li className=" text-[#000]">SOFTWARE DEVELOPER</li>
              <li className=" text-[#000]">WEB SERVICE ENGINEER</li>
              <li className=" text-[#000]">VERIFICATION ENGINEER</li>
              <li className=" text-[#000]">(CYBER) SECURITY CONSULTANT</li>
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-[50%_50%]">
          <div className="bg-[#fff] p-8 h-full">
            <h2 className="text-3xl font-semibold text-black tracking-wider mb-2">
              PROGRAM MASTER IN GLOBAL BUSINESS ADMINISTRATION FOR MBA
            </h2>
            <span className="w-24 h-[3px] bg-[#000] block"></span>

            <p className="mb-4 text-[18px] text-justify mt-[16px]">
              The master curriculum offers students the necessary skills and
              tools to advance their career and to improve their managerial and
              decision-making skills. Thanks to international teachers and
              business professionals with a consolidated experience in
              administration and development, the Master offers a global view of
              business strategies, international finance principles, information
              technology management, leadership and human resources management,
              central issues for today’s managers and executives.The theoretical
              classes are accompanied by the practical application through case
              studies and simulations to ensure a comprehensive vision of the
              business management.
            </p>

            <ul className="mt-4 list-disc ml-[20px]">
              <li className=" text-[#000]">BUSINESS ANALYTICS</li>
              <li className=" text-[#000]">INTERNATIONAL BUSINESS</li>
              <li className=" text-[#000]">STRATEGIC MARKETING </li>
              <li className=" text-[#000]">COMPANY ACCOUNTING</li>
              <li className=" text-[#000]">WEB MARKETING AND SOCIAL MEDIA</li>
              <li className=" text-[#000]">RISK MANAGEMENT</li>
              <li className=" text-[#000]">CORPORATE STRATEGY</li>
              <li className=" text-[#000]">
                START-UP AND NEW BUSINESS DEVELOPMENT
              </li>
            </ul>
          </div>

          <div className="bg-[#3b5a77] p-8 h-full">
            <h2 className="text-3xl font-semibold text-white tracking-wider mb-2">
              PROGRAM MASTER IN COMPUTER SCIENCE FOR MCS
            </h2>
            <span className="w-24 h-[3px] bg-[#fff] block"></span>

            <p className="mb-4 text-[18px] text-[#fff] text-justify mt-[16px]">
              The curriculum of the Master covers all the concepts of Data
              Science and Artificial Intelligence enabling students to develop
              the key competencies and skills that companies are seeking
              globally. The core courses of the Master provides the fundamental
              knowledge of software engineering useful to understand data
              science, the mathematics behind it, the principles of smart
              services, and how these fields are related through modern
              information systems. Students will gain theoretical and practical
              experience in using complex data systems and a critical awareness
              of the challenges caused by the data generation processes.
            </p>
            <p className="mb-4 text-[18px] text-[#fff] text-justify mt-[16px]">
              The specialization courses of the Master are related to
              Intelligent web systems, web mining techniques, Neural networks
              and Information systems and cybersecurity, analyzing cryptography,
              formal methods, secure software engineering, and machine learning.
            </p>

            <ul className="mt-4 list-disc ml-[20px]">
              <li className=" text-[#fff]">EVERYTHING IS A SOFTWARE</li>
              <li className=" text-[#fff]">FUNDAMENTALS OF DATA SCIENCE</li>
              <li className=" text-[#fff]">INFORMATION SYSTEM AND SECURITY</li>
              <li className=" text-[#fff]">
                DIGITAL EVOLUTION AND CYBERSECURITY
              </li>
              <li className=" text-[#fff]">ARTIFICIAL INTELLIGENCE</li>
              <li className=" text-[#fff]">PYTHON PROGRAMMING</li>
              <li className=" text-[#fff]">BIG DATA</li>
              <li className=" text-[#fff]">MACHINE LEARNING</li>
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-[50%_50%]">
          <div
            className="before:z-[0] 
          before:bg-[#3b5a77] 
          before:absolute 
          relative
          before:block 
          before:w-[100%] 
          before:opacity-80 
          before:h-[100%] 
          before:left-[0px] 
          before:top-[0px] 
          bg-cover
          z-[9]
          bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZUFe2nfBX2ghGWyZbNqenzucSWFEI9Ub_6qZjDx0TCsXyOmTdlyCtRU-xOh3DN3vFGw&usqp=CAU')] 
          p-8 
          h-full"
          >
            <h2 className="text-3xl font-semibold text-white tracking-wider mb-2 relative z-[9]">
              ADMISSION REQUIRMENTS FOR MBA
            </h2>
            <span className="w-24 h-[3px] bg-[#fff] block relative z-[9]"></span>

            <p className="mb-4 text-[18px] text-[#fff] text-justify mt-[16px] relative z-[9]">
              The Master is addressed to students and professionals holding a
              bachelor degree who want to receive specialized training on the
              major issues related to contemporary global business.
            </p>
            <p className="mb-4 text-[18px] text-[#fff] text-justify mt-[16px] relative z-[9]">
              <b>
                AS A FIRST STEP, STUDENT INTERESTED TO ENROLL MUST SEND TO OUR
                ADMISSIONS OFFICE THE FOLLOWING DOCUMENTS:
              </b>
            </p>
            <ul className="mt-4 list-disc ml-[20px] relative z-[9]">
              <li className=" text-[#fff]">
                Copy of the identity document (possibly a passport or any
                national valid identity document).
              </li>
              <li className=" text-[#fff]">
                CV – Curriculum Vitae or Motivational letter if the student
                doesn’t have any professional experience.
              </li>
              <li className=" text-[#fff]">
                Copy of the bachelors degree and/or transcripts (we accept it in
                the original language).
              </li>
            </ul>

            <div className="grid grid-cols-[50%_50%] gap-[10px] relative z-[9]">
              {requirementsambaarry?.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="bg-[#fff] rounded-[8px] flex flex-col gap-[10px] p-[15px]"
                    >
                      <div className="image m-auto">
                        <img src={item.image} alt={item.title} />
                      </div>

                      <div className="contentbox">
                        <h3 className="mb-0 text-center text-[20px]">
                          {item.title}
                        </h3>
                        <p className="mb-0 text-center text-[14px]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="bg-[#fff] p-8 h-full">
            <h2 className="text-3xl font-semibold text-black tracking-wider mb-2 relative z-[9]">
              ADMISSION REQUIRMENTS FOR MCS
            </h2>
            <span className="w-24 h-[3px] bg-black block relative z-[9]"></span>

            <p className="mb-4 text-[18px] text-black text-justify mt-[16px] relative z-[9]">
              THEMASTERISADDRESSEDTO:
            </p>

            <ul className="mt-4 list-disc ml-[20px] relative z-[9]">
              <li className=" text-black">
                Individuals with a technology background who wantto become
                experts in cybersecurity and artificial intelligence.
              </li>
              <li className=" text-black">
                Individuals with an engineering background and an
                entrepreneurial mindset who wantto starttheir own business in
                the domain ofthreat detection and prevention using data
                analytics.
              </li>
              <li className=" text-black">
                Security professionals who wantto advance their skills in data
                analytics.
              </li>
            </ul>

            <p className="mb-4 text-[18px] text-black text-justify mt-[16px] relative z-[9]">
              AS A FIRST STEP,STUDENT INTERESTED TO ENROLL MUST SEND TO OUR
              ADMISSIONS OFFICE THE FOLLOWING DOCUMENTS:
            </p>

            <ul className="mt-4 list-disc ml-[20px] relative z-[9]">
              <li className=" text-black">
                Copy ofthe identity document (possibly a passport or any
                national valid identity document).
              </li>
              <li className=" text-black">
                CV – Curriculum Vitae or Motivational letterifthe student
                doesn’t have any professional experience.
              </li>
              <li className=" text-black">
                Copy ofthe bachelors degree and/ortranscripts (we acceptitin the
                original language){" "}
              </li>
            </ul>

            <div className="grid grid-cols-[50%_50%] gap-[10px] relative z-[9]">
              {requirementsamcsarry?.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="bg-[#3b5a77] rounded-[8px] flex flex-col gap-[10px] p-[15px]"
                    >
                      <div className="image m-auto">
                        <img src={item.image} alt={item.title} />
                      </div>

                      <div className="contentbox">
                        <h3 className="mb-0 text-[#fff] text-center text-[20px]">
                          {item.title}
                        </h3>
                        <p className="mb-0 text-[#fff] text-center text-[14px]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-center sm:px-12 px-4 mt-12 bg-green-100 py-12">
          <Image
            src={"/miadigital/Capture.jpg"}
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
              <b>ACCREDITATION </b>
              RATINGS World Universities Rankings RANKINGS AND INTERNATIONAL
              RECOGNITION
            </p>
            <p className="text-xl mb-4 text-justify">
              MIA Digital University s master degree programs are accredited
              under the European Higher Education Area (EHEA), awarding students
              60 ECTS, equivalent to 1,500 hours of instruction.
            </p>
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
    </>
  );
};
export default MiaDigital;

const requirementsambaarry = [
  {
    image: "/miadigital/time-fill.svg",
    title: "DURATION",
    content: "12 MONTHS",
  },
  {
    image: "/miadigital/graduation-cap-fill.svg",
    title: "DEGREE AWARDED",
    content: "MASTER GLOBAL MBA",
  },
  {
    image: "/miadigital/money-rupee-circle-fill.svg",
    title: "PROGRAM FEES",
    content: "INR. 2,79,000 + GST",
  },
  {
    image: "/miadigital/global-fill.svg",
    title: "LANGUAGE",
    content: "ENGLISH",
  },
];
const requirementsamcsarry = [
  {
    image: "/miadigital/time-fill.svg",
    title: "DURATION",
    content: "12 MONTHS",
  },
  {
    image: "/miadigital/graduation-cap-fill.svg",
    title: "DEGREE AWARDED",
    content: "Masters in Computer Science",
  },
  {
    image: "/miadigital/money-rupee-circle-fill.svg",
    title: "PROGRAM FEES",
    content: "INR. 2,95,000 + GST",
  },
  {
    image: "/miadigital/global-fill.svg",
    title: "LANGUAGE",
    content: "ENGLISH",
  },
];
