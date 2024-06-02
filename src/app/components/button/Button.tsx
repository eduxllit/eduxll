import Image from "next/image";

interface buttonProp {
  onClick?: any;
  className?: any;
  text?: String;
  image?: boolean;
  notesImage?: boolean;
  dropdownImage?: boolean;
  searchIcon?: boolean;
}
const Button = ({
  onClick,
  className,
  text,
  image,
  notesImage,
  dropdownImage,
  searchIcon,
}: buttonProp) => {
  return (
    <>
      <button
        className={` border border-red-500 py-2 px-4 h-fit  leading-none flex items-center gap-2 ${className}`}
        onClick={onClick}
      >
        {notesImage && (
          <Image src={"/view.png"} alt="view" width={22} height={24} />
        )}
        {searchIcon && (
          <Image src={"/search.png"} alt="search" width={18} height={18} />
        )}
        {text}
        {image && (
          <Image src="/png/globe.png" alt="globe" width={18} height={18} />
        )}
        {dropdownImage && (
          <Image
            src="/arrow-down-s-line.svg"
            alt="globe"
            width={16}
            height={16}
          />
        )}
      </button>
    </>
  );
};
export default Button;
