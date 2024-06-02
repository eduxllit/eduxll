import Image from "next/image"
import Button from "../button/Button"

const Card = () =>{
    return(
        <>
            <div className="shadow-xl max-w-[330px] rounded-xl">
                <Image src="/1.jpg" alt="college" width={330} height={250} className="rounded-tr-xl rounded-tl-xl" />
                <h4 className="font-semibold bg-pink-100 text-center py-2 text-pink-700">Liverpool Business School</h4>
                <div className="p-4">
                    <h5 className="font-bold text-xs text-purple-800">Integrated with GenAI modules</h5>
                    <h6 className="font-semibold text-sm mt-2 mb-6">MBA from Liverpool Business School</h6>
                    <div className="flex gap-2 mb-2">
                         <Image src="/graduation.png" alt="grad" width={16} height={16} />
                        <p className="text-xs">Masters Degree</p>
                    </div>
                    <div className="flex gap-2 mb-2">
                         <Image src="/calendar.png" alt="calen" width={16} height={16} />
                        <p className="text-xs">18 Months</p>
                    </div>
                    <div className="flex gap-2">
                         <Image src="/favorite.png" alt="fav" width={16} height={16} />
                        <p className="text-xs">WES Recognized</p>
                    </div>
                    <div className="flex justify-between gap-2 mt-4">
                        <Button text="View Program" className={"w-full text-sm"} />
                        <Button text="Syllabus" className={"bg-red-500 text-white w-full text-sm"} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card