interface pillsProp{
    heading?: String;
    text?: String;
    active?:boolean;
}
const TabPills = ({heading, text,active}:pillsProp) =>{
    return(
        <>
        <div className={`${active ? "bg-black text-white" : "bg-[#e5e5e5]"} w-fit px-4 rounded-full py-1 cursor-pointer`}>
            <h4 className="font-semibold">{heading}</h4>
            <p className="text-xs">{text}</p>
        </div>
        </>
    )
}
export default TabPills