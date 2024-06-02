import React from "react";

interface ThemeBadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  theme?:
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "primary"
    | "outlinestroke"
    | "primaryFilled"
    | "lightgray";
  size?: "small" | "medium" | "large";

  activetheme?: "primary";
}
const BadgeChip = ({
  theme = "default",
  children,
  className,
  size,

  ...rest
}: ThemeBadgeProps) => {
  const sizeClass = React.useMemo(() => {
    switch (size) {
      case "small":
        return "size-small  text-[11px] text-[500]   py-[2px] px-[8px] lg-py-[2px] lg-px-[8px] rounded-[16px]";
      default:
        return "size-medium text-[11px] text-[500]  py-[4px] px-[12px] lg-py-[4px] lg-px-[12px] rounded-[16px]";
      case "large":
        return "size-large text-[11px] text-[500] py-[8px] px-[12px] lg-py-[8px] lg-px-[12px] rounded-[16px]";
    }
  }, [size]);
  const ThemeClass = React.useMemo(() => {
    switch (theme) {
      default:
        return "simply-warning-content";
      case "default":
        return "text-[#08070c] bg-[#E6E6E7] border-[1px] border-[#f6f7fa] ";
      case "outlinestroke":
        return "simply-outlinestroke-content";
      case "success":
        return "simply-success-content";
      case "danger":
        return "simply-danger-content";
      case "primary":
        return "simply-primary-content";
      case "primaryFilled":
        return "simply-primaryFilled-content";
      case "lightgray":
        return "simply-lightgray-content";
    }
  }, [theme]);

  return (
    <div
      {...rest}
      className={` ${sizeClass} ${className} ${ThemeClass}  cursor-pointer width-fit simply-line-clamp-1`}
    >
      {/* {action && (
      <>dss</>
     )} */}
      {/* {action === true ? <><Lock02 /></> : <><><GlobeIcon /></></> } */}

      {/* {!action ? <><GlobeIcon /></> : <><Lock02 /></> }  */}

      {children}
    </div>
  );
};
export default BadgeChip;

// export const BadgeChip = () => {
//   return <div>BadgeChip</div>;
// };
