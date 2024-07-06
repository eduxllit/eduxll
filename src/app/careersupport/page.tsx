import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import Button from "../components/button/Button";

const CareerSupport = () => {
  return (
    <HeaderLayout>
      <div className="bg-[url('/Careers-banner.jpg')] bg-cover bg-no-repeat w-full">
        <div className="bg-gradient-to-r from-[#052044] to-transparent">
          <div className="text-white font-semibold lg:h-[300px] sm:h-[220px] h-[160px] grid content-center items-center sm:px-32 px-8">
            <h2 className="sm:text-4xl text-2xl block mb-2">Career Support</h2>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-6 max-w-[1200px] m-auto md:py-20 sm:py-12 py-8 lg:px-0 px-4">
        <div>
          <h3 className="sm:text-3xl  text-2xl   font-semibold mb-2">
            Comprehensive Career Guidance
          </h3>
          <p className="text-sm mb-[16px]">
            At eduXLL, we are committed to not only providing top-notch online
            education but also ensuring our students are well-prepared for their
            professional journeys. Our comprehensive career support services are
            designed to guide you every step of the way, from the beginning of
            your program to securing your dream job.
          </p>
          <h3 className="sm:text-3xl  text-2xl   font-semibold mb-2">
            Mentoring and Counseling
          </h3>

          <p className="text-sm mb-[16px]">
            Our dedicated team of mentors and counselors are here to support you
            throughout your academic journey. We offer personalized guidance to
            help you navigate through your coursework, overcome challenges, and
            achieve your academic goals. Whether you need advice on time
            management, study strategies, or career planning, our experts are
            always available to assist you.
          </p>
        </div>
        <div>
          <Image
            src="/1641489206600.jpg"
            alt="girl"
            width={400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>

      <section className="pb-[50px]  px-[15px] max-sm:!pb-[0px]">
        <div className="max-w-[1200px] m-auto grid md:grid-cols-2 items-center gap-6 max-sm:flex max-sm:flex-col-reverse ">
          <div>
            <Image
              src="/photo-lead-story.jpg"
              alt="girl"
              width={400}
              height={300}
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div>
            <h3 className="sm:text-3xl   text-2xl   font-semibold mb-2">
              Specialized Training Programs
            </h3>
            <p className="text-sm  mb-[16px]  max-sm:text">
              Choosing the right specialization is crucial for your career
              development. eduXLL provides specialized training programs
              tailored to your interests and career aspirations. Our
              industry-aligned curriculum and expert faculty ensure that you
              acquire the skills and knowledge required to excel in your chosen
              field.
            </p>

            <h3 className="sm:text-3xl  text-2xl   font-semibold mb-2">
              Personality Development
            </h3>

            <p className="text-sm">
              We believe that personal growth is just as important as academic
              achievement. Our personality development programs are designed to
              enhance your soft skills, such as communication, leadership, and
              teamwork. These skills are essential for professional success and
              will give you a competitive edge in the job market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFDF8] py-[50px]  px-[15px] max-sm:pb-[10px]">
        <div className="max-w-[1200px] m-auto">
          <h3 className="sm:text-3xl  text-2xl  m-auto text-center  font-semibold mb-2">
            Placement Support
          </h3>

          <p className="text-sm  max-w-[900px] m-auto text-center">
            After successfully completing your program, our placement support
            services are here to help you transition into the professional
            world. We work closely with a wide network of industry partners to
            provide you with exclusive job opportunities. Our placement support
            includes:
          </p>
        </div>

        <div className="max-w-[1200px] m-auto mt-[20px]">
          <div className="grid grid-cols-4 gap-[30px]   max-sm:grid-cols-1">
            {placementarray.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className=" bg-gradient-to-r  text-center from-[#ee2c3c] to-[#da202f] rounded-lg shadow-cta text-white p-[25px]"
                  >
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.hrading}
                      priority
                      className="m-auto"
                    />
                    <h3 className="text-[20px] mb-[5px] mt-[10px] font-[600]">
                      {item.hrading}
                    </h3>
                    <p className="text-sm ">{item.preag}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" py-[50px]  px-[15px]">
        <div className="max-w-[1200px] m-auto">
          <h3 className="sm:text-3xl  text-2xl   m-auto  font-semibold mb-2">
            Lifelong Learning and Support
          </h3>

          <p className="text-sm ">
            eduXLL is committed to your lifelong success. Even after you
            graduate, you will have access to our career resources and support.
            Stay connected with our alumni network, continue learning through
            our advanced courses, and keep enhancing your skills to stay ahead
            in your career.
            <br />
            At eduXLL, your success is our priority. Join us and take the first
            step towards a bright and successful future.
          </p>
        </div>
      </section>
    </HeaderLayout>
  );
};

export default CareerSupport;

const placementarray = [
  {
    hrading: "Resume Building",
    preag:
      "Craft a professional resume that highlights your skills and achievements.",
    image: "/careersupport/step-by-step-instructions.png",
  },
  {
    hrading: "Interview Preparation",
    preag: "Receive guidance and tips on how to excel in interviews.",
    image: "/careersupport/Interview-Preparation.png",
  },
  {
    hrading: "Job Search Assistance",
    preag: "Get access to job listings and referrals to potential employers.",
    image: "/careersupport/Job-Search-Assistance.png",
  },
  {
    hrading: "Career Fairs and Networking Events",
    preag:
      "Participate in events that connect you with industry leaders and potential employers.",
    image: "/careersupport/job-fair-4671223-3873910.png",
  },
];
