import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import Button from "../components/button/Button";

const AboutUs = () => {
  return (
    <HeaderLayout>
      <div className="bg-[url('/about-us/banner.webp')] bg-cover bg-no-repeat w-full">
        <div className="bg-gradient-to-r from-[#052044] to-transparent">
          <div className="text-white font-semibold lg:h-[300px] sm:h-[220px] h-[160px] grid content-center items-center sm:px-32 px-8">
            <h2 className="sm:text-4xl text-2xl block">About Us</h2>
            <p className="sm:text-md   font-normal mt-2">
              <Link href={"#"}>Home</Link> /{" "}
              <Link href={"#"} className="text-[#97f1b9]">
                About Us
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-6 max-w-[1200px] m-auto md:py-20 sm:py-12 py-8 lg:px-0 px-4">
        <div>
          <h3 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold mb-2">
            About eduXLL
          </h3>
          <p className="  mb-[16px] text-justify">
            At eduXLL, we are redefining the boundaries of online education by
            offering a platform where ambition meets opportunity. Born from a
            vision to make high-quality education accessible to all, eduXLL
            bridges the gap between learners and their aspirations through a
            meticulously curated catalog of online courses. Our mission is to
            empower individuals around the globe by providing them with the
            tools, knowledge, and skills they need to excel in their careers and
            personal development.
          </p>

          <p className="  mb-[16px] text-justify">
            (eduXLL, a company owned by EDOVU VENTURES PRIVATE LIMITED committed
            to deliver world class education all over the world.)
          </p>

          <p className="   mb-[16px] text-justify">
            Our unique educational model is built on the foundation of
            partnership with pioneering institutions and distinguished industry
            experts. This collaborative approach ensures our curriculum is not
            just academically rigorous but also rich in real-world relevance. At
            eduXLL, we believe in the power of education to transform lives.
            Thus, our courses are designed to cater to a diverse range of
            interests and career paths, from business and technology to creative
            arts and beyond.
          </p>
          <p className="   mb-[16px] text-justify">
            What sets eduXLL apart is our commitment to creating an engaging and
            supportive learning environment. Our platform is intuitive,
            user-friendly, and equipped with cutting-edge technology to deliver
            an unparalleled online learning experience. We pride ourselves on
            fostering a global community where students from various backgrounds
            can interact, share ideas, and collaborate on projects, making
            learning with us a truly international experience.
          </p>

          <p className="   mb-[16px] text-justify">
            In a world where continuous learning is the key to success, eduXLL
            stands as a beacon for those who seek to elevate themselves. Join us
            on this journey of discovery and growth. Your future starts here, at
            eduXLL, where learning knows no boundaries.
          </p>

         
        </div>
        <div>
          <Image
            src="/about-us/girl.webp"
            alt="girl"
            width={506}
            height={430}
            className="w-full"
          />
        </div>
      </div>

      <section className="sm:py-[50px] py-[20px]">
        <h3 className="sm:text-3xl text-center text-1xl sm:text-center text-center font-semibold mb-0  ">
          Key Features
        </h3>
        <hr />

        <Image
          src="/about-us/key.webp"
          alt="girl"
          width={700}
          height={530}
          style={{
            margin: "auto",
          }}
          className=""
        />

        {/* <ol>
              <li>Global University Network</li>
              <li>Distinguished Faculty</li>
              <li>Comprehensive Courses</li>
              <li>EU-Aligned Curriculum</li>
              <li>International Career Services</li>
              <li>Partnerships with European Employers</li>
            </ol> */}
        {/*   </div>
        </div> */}
      </section>


            <section className="sm:py-[50px] py-[20px]">
        <div className="max-w-[1200px] px-4 m-auto">
          <div className="grid grid-cols-2 sm:gap-[50px] gap-[30px] flex-1 justify-between">
            <div className="  text-justify p-[25px] bg-[#f3f3f3] rounded-[8px]">
              <h3 className="sm:text-3xl text-center text-2xl sm:text-left text-center font-semibold ">
                Our Vision
              </h3>
              <p className="   mb-[16px] text-justify">
              To create a learner-friendly knowledge platform that ensures and
                facilitate world-class quality of learning & teaching by
                providing curriculum that is personalized, learner-focused,
                flexible and inspiring, thus motivating learners to excel in
                academics and professional environments..
              </p>
            </div>
            <div className="  text-justify  p-[25px] bg-[#f3f3f3] rounded-[8px]">
              <h3 className="text-3xl sm:text-left text-center font-semibold ">
                Our Mission
              </h3>
              <p className="   mb-[16px] text-justify">
                Prosper the spirit of continuous and comprehensive academic
                excellence among all learners, and create courses with
                customized learning opportunities for all participants that
                enable them to achieve their professional goals...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-[50px] py-[30px] px-4 bg-[#FFFDF8]">
        <div className="max-w-[1200px]  m-auto">
          <div>
            <h3 className="sm:text-3xl text-2xl text-justify font-semibold ">
              Our Aim
            </h3>
            <p className="   mb-[16px] text-justify">
            eduXLL envisions becoming a pivotal gateway for learners
              worldwide, seeking to unlock their full potential and embark on
              prosperous career paths in Europe. By offering meticulously
              designed courses that are aligned with the European job
              market&apos;s demands, we aim to equip our students with the
              indispensable skills, knowledge, and cultural insights needed for
              seamless integration into European workplaces. Our commitment
              extends beyond education, aiming to bridge the cultural divide and
              provide comprehensive support in navigating employment landscapes,
              thereby empowering our students to not only secure rewarding jobs
              in Europe but also to thrive and establish meaningful lives there.
            </p>
          </div>
        </div>
      </section>

      <section className="sm:py-[50px] py-[30px] px-4 bg-[#FFFDF8]">
        <div className="max-w-[1200px]  m-auto">
          <div>
            <h3 className="sm:text-3xl text-2xl text-justify font-semibold ">
            About Edovu Ventures
            </h3>
            <p className="   mb-[16px] text-justify">
            At Edovu Ventures, we empower the future through cutting-edge education solutions around the globe.
             As the parent company of K12 Schools, American EduGlobal Schools and eduXLL, we are pioneers in 
            shaping the educational landscape, providing world-class learning experiences to our students.
            </p>
             <button className="bg-blue-700 flex md:mx-0 m-auto gap-2 py-3 text-white px-6 rounded-md mt-6">
            <div className="bg-white w-fit p-[3px] rounded-full">
              <Image src={"/svg/check.svg"} alt="view" width={16} height={16} />
            </div>
            <Link href="https://edovuventures.com/" target="_blank" >

            <span>Read More</span>
            </Link>
          </button> 
          
          </div>
        </div>
      </section>


      {/*  <div className="bg-gradient-to-r from-[#ee2c3c] to-[#da202f] px-6 py-12 text-white font-semibold sm:text-[22px] text-[16px]">
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-0 gap-4 text-center max-w-[1200px] m-auto">
          <div>
            <h2>
              {" "}
              EduXLL Learner Support- (INDIA / Foreign Nations) Talk to our
              experts
            </h2>
            <h2>We’re available 24/7.</h2>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={"/svg/whatsapp.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <div>
              <Image
                src={"/svg/slash.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <div>
              <Image
                src={"/svg/phone-white.svg"}
                alt="whatsapp"
                width={36}
                height={36}
                className="w-full sm:w-[36px] sm:h-[36px]"
              />
            </div>
            <p className="ml-4 sm:text-2xl text-lg">+91 8448 198 656</p>
          </div>
        </div>
      </div> */}
    </HeaderLayout>
  );
};
export default AboutUs;
