import React from "react";

import "./vacancyInput.css";
import { AutoComplete, Input, Select } from "antd";

import SearchIcon from "../../../assets/images/search-icon-black.svg";
import HeroSearchIcon from "../../molecules/HeroSearchIcon";
import HeroSelect from "../../molecules/hero-select/HeroSelect";
import LocationIcon from "../../molecules/HeroSelectLocationIcon";

import { useTranslation } from "react-i18next";

const { Option } = Select;

const VacancyInput = () => {
  const options = [
    {
      value: "Burns Bay Road",
    },
    {
      value: "Downing Street",
    },
    {
      value: "Wall Street",
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="vacancy-input">
      <div className="action__hero-home container">
        <div className="input-group__hero-home">
          <AutoComplete
            options={options}
            className="input-container__hero-home"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          >
            <Input
              className="input__hero-home"
              size="large"
              placeholder={t("enterThePositionOrCompany")}
              prefix={<HeroSearchIcon />}
            />
          </AutoComplete>
          <div className="location-group__hero-home">
            <HeroSelect
              size="large"
              prefixIcon={<LocationIcon />}
              placeholder="Hududni tanlang"
              onChange={(val) => console.log(val)}
            >
              <Option value="toshkent">{t("tashkent")}</Option>
              <Option value="buxoro">{t("bukhara")}</Option>
              <Option value="samarqand">{t("samarkand")}</Option>
            </HeroSelect>
          </div>
        </div>
        <div>
          <button className="search-btn__hero-home">
            <img src={SearchIcon} alt="SearchIcon" />
            <span className="search-text">{t("search")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VacancyInput;
