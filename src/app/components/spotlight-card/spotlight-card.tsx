import Image from "next/image"

const SpotlightCard = () =>{
    return(
        <>
        <div className="max-w-[230px] border rounded-md p-4">
            <Image src="/uni.png" alt="logo" width={120} height={120} />
            <p className="text-xs font-semibold my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, provident?</p>
            <span className="text-[#a8a8a8]">18 Jan 2024</span>
            <p className="w-fit m-auto text-blue-800 text-sm font-semibold mt-4">Read Articles</p>
        </div>
        </>
    )
}
export default SpotlightCard