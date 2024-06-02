import React from "react";

interface TabWraperProps extends React.ComponentPropsWithRef<"li"> {
  active?: boolean;
  typography?: string;
}
type Ref = React.Ref<HTMLLIElement>;
const _TabItem = ({ children, active, ...rest }: TabWraperProps, ref: Ref) => {
  return (
    <li
      ref={ref}
      {...rest}
      className={`  ${active ? "a" : "b"}    ${rest.className}`}
    >
      {children}
    </li>
  );
};
const TabItem = React.forwardRef(_TabItem);
export default TabItem;
