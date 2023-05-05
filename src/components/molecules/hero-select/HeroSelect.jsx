import React from "react";
import { Select } from "antd";
import "./heroSelect.css";

const HeroSelect = ({ prefixIcon, children, ...rest }) => {
  return (
    <div className="hero-select-wrapper">
      {prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
      <Select
        {...rest}
        className="select__hero-home"
        defaultValue={"Toshkent"}
        bordered={false}
      >
        {children}
      </Select>
    </div>
  );
};

export default HeroSelect;
