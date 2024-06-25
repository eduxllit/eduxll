import Image from "next/image";
import FormUI from "../components/form/FormUI";

const IITKanpur = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/kanpur/banner.webp"}
          alt="banner"
          width={1650}
          height={950}
          className="w-full h-auto"
        />
        <div className="grid grid-cols-2 absolute top-8 w-full sm:px-12 px-4 h-[90%]">
          <div className="max-w-[650px] grid justify-between h-[90%] text-white ">
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
          <div className="grid justify-end relative">
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
          <div>
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
              The institution&apos;s involvement in ESG and Business Sustainability
              exemplifies its commitment to expanding its academic purview into
              critical contemporary areas like sustainability and corporate
              governance. This program underscores IIT Kanpur&apos;s dedication to
              developing forward-thinking leaders capable of integrating ethical
              practices into business strategies, thereby contributing
              positively to global environmental and social challenges.
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
    </div>
  );
};
export default IITKanpur;
