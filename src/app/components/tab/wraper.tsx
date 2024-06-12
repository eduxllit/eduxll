"use client";
import React from "react";
import styles from "./tab.module.css";
interface TabWraperProps {
  bottomline?: true;
}

interface TabWraperProps extends React.ComponentPropsWithRef<"ul"> {}
type Ref = React.Ref<HTMLUListElement>;
const _TabWraper = (
  { bottomline, children, ...rest }: TabWraperProps,
  ref: Ref
) => {
  return (
    <div>
      <ul
        ref={ref}
        {...rest}
        className={`${styles.container} relative   ${rest.className}`}
      >
        {children}
        {bottomline && (
          <>
            <div className={`${styles.bottomfullline}`}></div>
          </>
        )}
      </ul>
    </div>
  );
};

const TabWraper = React.forwardRef(_TabWraper);
export default TabWraper;
