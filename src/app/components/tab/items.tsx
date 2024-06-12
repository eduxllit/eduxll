"use client";
import React from "react";
import styles from "./tab.module.css";

interface TabWraperProps extends React.ComponentPropsWithRef<"li"> {
  active?: boolean;
  width?: "auto" | "full";
  borderrounded?: "rounded" | "norounded";
}
type Ref = React.Ref<HTMLLIElement>;
const _TabItem = (
  {
    children,

    active,
    width,
    borderrounded,

    ...rest
  }: TabWraperProps,
  ref: Ref
) => {
  const borderroundedclass = React.useMemo(() => {
    switch (borderrounded) {
      default:
        return "";
      case "rounded":
        return "rounded-100 !border-1 !py-8 !px-12 !lg-py-8 !lg-px-12";
    }
  }, [borderrounded]);

  const widthClass = React.useMemo(() => {
    switch (width) {
      default:
        return "";
      case "auto":
        return "!w-fit !flex-none";
    }
  }, [width]);
  return (
    <li
      ref={ref}
      {...rest}
      className={` ${styles.list} ${
        active ? styles.blue : ""
      } ${borderroundedclass} ${widthClass} ${active ? styles.active : ""}  ${
        rest.className
      }`}
    >
      {children}
    </li>
  );
};
const TabItem = React.forwardRef(_TabItem);
export default TabItem;
