import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const CoursesBox = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:max-w-[1200px] w-[100%] mx-auto px-[15px]">
        {coursesArray?.map((item, index) => {
          return (
            <Link href={item.linkuel} key={index}>
              <div className="bg-[#f5f5f5] hover:bg-[#e7e7e7] hover:shadow-xl transition-all w-full  h-[86px] cursor-pointer rounded-md gap-4 p-4 flex items-center m-auto">
                <div className="w-[36px] h-[36px] ">
                  <Image
                    src={item.imageUrl}
                    alt="image"
                    width={36}
                    height={36}
                  />
                </div>
                <h3
                  className={` text-xl font-semibold text-[#21225F] flex-1   ${item.title}`}
                >
                  {item.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default CoursesBox;
const coursesArray = [
  {
    
    imageUrl: "/svg/code-box-line.svg",
    title: "Computer Applications",
    linkuel: "/product/mca-manipal-university-jaipur",
  },
  
  {
    imageUrl: "/svg/bar-chart-2-line.svg",
    title: "Business Management",
    linkuel: "/product/mba-from-manipal-university-jaipur",
  },
  {
    imageUrl: "/svg/megaphone-line.svg",
    title: "Digital Marketing",
    linkuel: "/product/mba-in-digital-marketing-amity-university",
  },
  {
    imageUrl: "/svg/service-line.svg",
    title: "ESG and Business Sustainability",
    linkuel: "/product/esg-and-business-sustainability-certificate-course-from-iit-kanpur",
  },
  {
    imageUrl: "/svg/handbag-line.svg",
    title: "Public Policy",
    linkuel: "/product/master-of-arts-public-policy-governance-from-amity-university",
  },
  {
    imageUrl: "/svg/database-2-line.svg",
    title: "Augmented and Virtual Reality",
    linkuel: "/product/arvr-consultant-from-nasscome",
  },
  {
    imageUrl: "/svg/cloud-line.svg",
    title: "Cyber Security",
    linkuel: "/product/security-analyst-from-nasscom",
  },
  {
    imageUrl: "/svg/brain-line.svg",
    title: "Blockchain Technology",
    linkuel: "/product/blockchain-strategist-from-nasscom",
  },
];
