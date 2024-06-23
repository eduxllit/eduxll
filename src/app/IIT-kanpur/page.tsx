import Image from "next/image";

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
        <div className="max-w-[650px] text-white absolute top-8 left-8">
          <div className="flex gap-4 items-center">
            <div>
            <h1 className="text-6xl tracking-wider">IIT KANPUR</h1>
            <p className="tracking-wider">
              Indian Institute of Technology Kanpur
            </p>
            </div>
            <div>
                <Image src={"/kanpur/logo.png"} alt="logo" width={120} height={120} />
            </div>
          </div>
          <h2 className="font-semibold text-xl tracking-wide mt-8">IIT CERTIFIED PROFESSIONAL CERTIFICATE IN
          </h2>
        </div>
      </div>
    </div>
  );
};
export default IITKanpur;
