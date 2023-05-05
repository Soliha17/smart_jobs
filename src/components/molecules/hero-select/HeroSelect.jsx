import React, { ReactNode } from "react";
import { Select, SelectProps } from "antd";
import "./heroSelect.css";

// type HeroSelectProps = SelectProps & {
//   prefixIcon?: ReactNode,
// };

const HeroSelect = ({ prefixIcon, children, ...rest }) => {
  return (
    <div className="hero-select-wrapper">
      {prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
      <Select {...rest} className="select__hero-home" defaultValue={"Toshkent"} bordered={false}>
        {children}
      </Select>
    </div>
  );
};

export default HeroSelect;
