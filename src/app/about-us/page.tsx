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
            <p className="sm:text-md text-sm font-normal mt-2">
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
            About Eduxll
          </h3>
          <p className="text-sm mb-[16px]">
            At EduXLL, we are redefining the boundaries of online education by
            offering a platform where ambition meets opportunity. Born from a
            vision to make high-quality education accessible to all, EduXLL
            bridges the gap between learners and their aspirations through a
            meticulously curated catalog of online courses. Our mission is to
            empower individuals around the globe by providing them with the
            tools, knowledge, and skills they need to excel in their careers and
            personal development.
          </p>
          
          <p className="text-sm mb-[16px]">
          (eduXLL, a company owned by EDOVU VENTURES PRIVATE LIMITED committed to deliver world class education all over the world.)
          </p>

          <p className="text-sm  mb-[16px]">
            Our unique educational model is built on the foundation of
            partnership with pioneering institutions and distinguished industry
            experts. This collaborative approach ensures our curriculum is not
            just academically rigorous but also rich in real-world relevance. At
            EduXLL, we believe in the power of education to transform lives.
            Thus, our courses are designed to cater to a diverse range of
            interests and career paths, from business and technology to creative
            arts and beyond.
          </p>
          <p className="text-sm">
            What sets EduXLL apart is our commitment to creating an engaging and
            supportive learning environment. Our platform is intuitive,
            user-friendly, and equipped with cutting-edge technology to deliver
            an unparalleled online learning experience. We pride ourselves on
            fostering a global community where students from various backgrounds
            can interact, share ideas, and collaborate on projects, making
            learning with us a truly international experience.
          </p>
          
          <p className="text-sm">
            In a world where continuous learning is the key to success, EduXLL
            stands as a beacon for those who seek to elevate themselves. Join us
            on this journey of discovery and growth. Your future starts here, at
            EduXLL, where learning knows no boundaries.
          </p>

          <button className="bg-green-700 flex md:mx-0 m-auto gap-2 py-3 text-white px-6 rounded-md mt-6">
            <div className="bg-white w-fit p-[3px] rounded-full">
              <Image src={"/svg/check.svg"} alt="view" width={16} height={16} />
            </div>
            <Link href="/contact-us" >

            <span>Enrolled Today</span>
            </Link>
          </button>
          {/* <Button text={"Enrolled Today"} /> */}
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

      <section className="sm:py-[50px] py-[20px] bg-[#FFFDF8]">
        <div className="max-w-[1200px] px-4 m-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[50px] gap-4 items-center flex-1 justify-between">
            <h3 className="sm:text-3xl text-center text-2xl sm:text-left text-center font-semibold mb-0 pr-[30px] border-r-[1px] border-[#000]">
              Key Features
            </h3>

            <ol>
              <li>Global University Network</li>
              <li>Distinguished Faculty</li>
              <li>Comprehensive Courses</li>
              <li>EU-Aligned Curriculum</li>
              <li>International Career Services</li>
              <li>Partnerships with European Employers</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="sm:py-[50px] py-[20px]">
        <div className="max-w-[1200px] px-4 m-auto">
          <div className="grid grid-cols-1 sm:gap-[50px] gap-[30px] flex-1 justify-between">
            <div>
              <h3 className="sm:text-3xl text-center text-2xl sm:text-left text-center font-semibold ">
                Our Vision
              </h3>
              <p>
                EduXLL envisions becoming a pivotal gateway for learners
                worldwide, seeking to unlock their full potential and embark on
                prosperous career paths in Europe. By offering meticulously
                designed courses that are aligned with the European job
                market&apos;s demands, we aim to equip our students with the
                indispensable skills, knowledge, and cultural insights needed
                for seamless integration into European workplaces. Our
                commitment extends beyond education, aiming to bridge the
                cultural divide and provide comprehensive support in navigating
                employment landscapes, thereby empowering our students to not
                only secure rewarding jobs in Europe but also to thrive and
                establish meaningful lives there.
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-left text-center font-semibold ">Our Mission</h3>
              <p className=" ">
                {" "}
                EduXLL is committed to empowering students with the tools and
                knowledge necessary for successful careers and life in Europe.
                Our mission encompasses:
              </p>
              <ul className=" ">
                <li>
                  <b>Access to Quality European-Accredited Education:</b>{" "}
                  Providing students with courses that are recognized and valued
                  across European countries, ensuring smooth academic and
                  professional integration.
                </li>
                <li>
                  <b>Diverse Program Offerings:</b> Offering a wide array of
                  programs that cater to the dynamic needs of the global job
                  market, available anytime and anywhere to accommodate the
                  schedules of all learners.
                </li>
                <li>
                  <b>Blended Learning for the Digital Era:</b> Embracing the
                  shift towards the fourth industrial revolution with a blended
                  learning approach that combines online resources, real-world
                  projects, and interactive platforms.
                </li>
                <li>
                  <b>Expert International Faculty:</b> Connecting students with
                  a network of reputable faculty and industry professionals from
                  India, Europe and beyond, providing insights into the European
                  job market and employment practices.
                </li>
                <li>
                  <b>Global Classroom Experience:</b> Facilitating an
                  international learning environment where students can engage
                  with peers from various backgrounds, preparing them for the
                  diverse workplace culture.
                </li>
                <li>
                  <b>Career Integration Support:</b> Offering tailored career
                  services, including visa guidance, job market orientation, and
                  networking opportunities, to ensure students are well-prepared
                  for employment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-[50px] py-[30px] px-4 bg-[#FFFDF8]">
        <div className="max-w-[1200px]  m-auto">
          <div>
            <h3 className="sm:text-3xl text-2xl sm:text-left text-center font-semibold ">
              Our Aim
            </h3>
            <p>
              EduXLL envisions becoming a pivotal gateway for learners
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
