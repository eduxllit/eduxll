import Image from "next/image";

const AchievingCard = () => {
  return (
    <>
      <div className="border bg-white rounded-xl max-w-[230px] p-4">
        <Image src={"/png/quote.png"} alt="quote" width={20} height={20} />
        <p className="text-xs mt-2 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatem molestiae odio ad, exercitationem at quae, 
        </p>
        <div className="flex items-center gap-2">
            <div>
                <Image src={"/png/user.png"} alt="user" width={24} height={24} />
            </div>
            <div className="text-right">
                <h4 className="font-semibold text-xs">Apple Smith</h4>
                <p className="text-[10px]">Technical Co-Founder, CTO</p>
                <p className="font-semibold text-sm text-[#c2c2c2]">Web Services</p>
            </div>
        </div>
            <p className="font-semibold text-sm text-center mt-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-500">View this AWS course</p>
      </div>
    </>
  );
};
export default AchievingCard;
