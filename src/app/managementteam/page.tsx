import Image from "next/image";
import HeaderLayout from "../components/headerLayout/HeaderLayout";

const ManagementTeam = () => {
  return (
    <>
      <HeaderLayout>
        <div className="bg-[url('https://www.calamp.com/wp-content/uploads/2022/08/Leadership-Team-Banner.jpg')] bg-cover bg-no-repeat w-full">
          <div className="bg-gradient-to-r from-[#052044] to-transparent">
            <div className="text-white font-semibold lg:h-[300px] sm:h-[220px] h-[160px] grid content-center items-center sm:px-32 px-8">
              <h2 className="sm:text-4xl text-2xl block">Management Team</h2>
            </div>
          </div>
        </div>

        <section className="bg-[#fff] py-[50px]">
          <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px]">
            <div className="w-[100%] text-center">
              <h2 className="sm:text-[35px] text-2xl text-black leading-[1.3] font-bold mb-[20px]">
                Management Team
              </h2>
            </div>

            <div className="flex  max-sm:block  gap-[20px]">
              <div className="w-[30%] max-sm:w-[100%]">
                <div
                  className="imagemanagementteam relative w-[fit-content] block before:w-[100%] before:h-[100%] before:block before:bg-[#8f2d05] before:absolute
   before:right-[-30px] before:bottom-[-30px] before:rounded-[8px]"
                >
                  <Image
                    src="/managementteam/1.webp"
                    width={300}
                    height={300}
                    alt=""
                    className="rounded-[8px] relative"
                  />
                </div>
              </div>
              <div className="w-[70%] max-sm:w-[100%] max-sm:mt-[50px]">
                <h2 className="sm:text-[35px] text-2xl text-[#da202f] leading-[1.3] font-bold mb-[10px]">
                  Prof. (Bala) K. R. Balachandran
                </h2>
                <h5 className="text-[16px] font-[500] text-[#21225F] ">
                  Non Executive Chairman
                </h5>
                <p className="text-sm mb-[16px] text-[#333] text-justify">
                  Prof. Bala is a professor of accounting and operations
                  management at New York University Stern School of Business. He
                  teaches courses in management accounting, management control
                  systems and financial accounting. Professor Balachandran
                  joined Stern in 1979. Professor Balachandran has written and
                  published more than 65 articles in leading academic journals
                  of economics, accounting and management science.
                </p>
              </div>
            </div>

            <div className="flex pt-[60px] max-sm:flex-col-reverse max-sm:flex-col gap-[20px] ">
            <div className="w-[70%] max-sm:w-[100%] max-sm:mt-[50px]">
                <h2 className="sm:text-[35px] text-2xl text-[#da202f] leading-[1.3] font-bold mb-[10px]">
                Mr. PK Samal
                </h2>
                <h5 className="text-[16px] font-[500] text-[#21225F] ">
                Founder and MD
                </h5>
                <p className="text-sm mb-[16px] text-[#333] text-justify">
                P K SAMAL, is a techno-management person with over 20 years of extensive experience in strategy planning, liasioning,
international & national tie-ups in different areas, and operations management. He is the person behind setting up
Lancaster University, UK in India. He is in the lead role as Director, Strategic Planning for tying up with Politecnico Di Milano
university, Italy.
                </p>
                <p className="text-sm mb-[16px] text-[#333]">
                He is Instrumental in setting up G.D Goenka University and established G.D Goenka World School as Director Strategy
Planning. He has also experience in other industries like Construction, Five Star Hotels, and big-branded factories.
                </p>
              </div>
              <div className="w-[30%] max-sm:w-[100%]">
                <div
                  className="imagemanagementteam relative w-[fit-content] block before:w-[100%] before:h-[100%] before:block before:bg-[#8f2d05] before:absolute
   before:right-[-30px] before:bottom-[-30px] before:rounded-[8px]"
                >
                  <Image
                    src="/managementteam/2.jpg"
                    width={300}
                    height={300}
                    alt=""
                    className="rounded-[8px] relative"
                  />
                </div>
              </div>
              
            </div>

            <div className="flex pt-[60px]  max-sm:block gap-[20px]">
            <div className="w-[30%] max-sm:w-[100%]">
                <div
                  className="imagemanagementteam relative w-[fit-content] block before:w-[100%] before:h-[100%] before:block before:bg-[#8f2d05] before:absolute
   before:right-[-30px] before:bottom-[-30px] before:rounded-[8px]"
                >
                  <Image
                    src="/managementteam/5.png"
                    width={300}
                    height={300}
                    alt=""
                    className="rounded-[8px] relative"
                  />
                </div>
              </div>
              <div className="w-[70%] max-sm:w-[100%] max-sm:mt-[50px]">
                <h2 className="sm:text-[35px] text-2xl text-[#da202f] leading-[1.3] font-bold mb-[10px]">
                Mr. Vaibhav Shastri
                </h2>
                <h5 className="text-[16px] font-[500] text-[#21225F] ">
                Co Founder
                </h5>
                <p className="text-sm mb-[16px] text-[#333] text-justify">
                An accomplished career spanning over more than two decades in the Telecom & IT sector, and a consistent track record in
planning , managing and executing high-impact business development, sales & marketing strategies for Indian mobile brands.
In the last decade, have played a crucial role in developing business & strategic partnerships for IndusOS start-up, and
contributing to the growth of the company’s business which led to a successful acquisition by PhonePe in 2022. He is the Vice
President of Lal Bahadur Shastri Memorial Foundation which is engaged in social and educational activities.
                </p>
              </div>
            </div>

            <div className="flex pt-[60px] max-sm:flex-col-reverse max-sm:flex-col gap-[20px] ">
            <div className="w-[70%] max-sm:w-[100%]  max-sm:mt-[50px]">
                <h2 className="sm:text-[35px] text-2xl text-[#da202f] leading-[1.3] font-bold mb-[10px]">
                Mr. Parag Goel
                </h2>
                <h5 className="text-[16px] font-[500] text-[#21225F] ">
                Chief Business Officer
                </h5>
                <p className="text-sm mb-[16px] text-[#333] text-justify">
                Parag has 20+ years of industry experience across functions in Consulting, IT, Telecom, Insurance; and has worked for ~10
years with Big 4- in Consulting, Customer Relationship, Strategic Initiatives and Change Management. Parag has done a two
year full-time PGPM from Indian Institute of Management, Lucknow. He has authored a publication in collaboration with CII;
and has also been a visiting faculty and trainer at B-Schools.
                </p>
                 
              </div>
              <div className="w-[30%] max-sm:w-[100%]">
                <div
                  className="imagemanagementteam relative w-[fit-content] block before:w-[100%] before:h-[100%] before:block before:bg-[#8f2d05] before:absolute
   before:right-[-30px] before:bottom-[-30px] before:rounded-[8px]"
                >
                  <Image
                    src="/managementteam/4.jpg"
                    width={300}
                    height={300}
                    alt=""
                    className="rounded-[8px] relative"
                  />
                </div>
              </div>
              
            </div>

            <div className="flex pt-[60px] max-sm:block  gap-[20px]">
              <div className="w-[30%] max-sm:w-[100%]">
                <div
                  className="imagemanagementteam relative w-[fit-content] block before:w-[100%] before:h-[100%] before:block before:bg-[#8f2d05] before:absolute
   before:right-[-30px] before:bottom-[-30px] before:rounded-[8px]"
                >
                  <Image
                    src="/managementteam/3.jpg"
                    width={300}
                    height={300}
                    alt=""
                    className="rounded-[8px] relative"
                  />
                </div>
              </div>
              <div className="w-[70%] max-sm:w-[100%] max-sm:mt-[50px]">
                <h2 className="sm:text-[35px]   text-2xl text-[#da202f]  font-bold mb-[10px]">
                Dr. Ravikesh Srivastava
                </h2>
                <h5 className="text-[16px]  font-[500] text-[#21225F] ">
                Chief Academic Officer and Director General
                </h5>
                <p className="text-sm mb-[16px] text-[#333] text-justify">
                A distinguished educationist with an illustrious career spanning over 30 years, Dr. Srivastava continues to leave an indelible mark
as a Professor and academic administrator. Notably, he has been serving as the Pro Vice chancellor of IMS Unison University
Dehradun. He has earlier served in senior academic and administrative positions at IMT Ghaziabad, FORE School of
Management, IIM Lucknow, SP Jain and other reputed B-Schools. Prof. Ravikesh did his PhD from Banaras Hindu University.

                </p>
              </div>
            </div>
          </div>
        </section>
      </HeaderLayout>
    </>
  );
}
export default ManagementTeam;


