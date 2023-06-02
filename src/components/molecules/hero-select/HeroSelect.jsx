import React from "react";
import { Select } from "antd";
import "./heroSelect.css";
import { useTranslation } from "react-i18next";

const HeroSelect = ({ prefixIcon, children, ...rest }) => {
  const { t } = useTranslation();

  return (
    <div className="hero-select-wrapper">
      {prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
      <Select
        {...rest}
        className="select__hero-home"
        defaultValue={t("tashkent")}
        bordered={false}
      >
        {children}
      </Select>
    </div>
  );
};

export default HeroSelect;
