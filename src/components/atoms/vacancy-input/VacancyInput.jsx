import React from "react";

import "./vacancyInput.css";
import { AutoComplete, Input, Select } from "antd";

import SearchIcon from "../../../assets/images/hero-search-icon.svg";
import HeroSearchIcon from "../../molecules/HeroSearchIcon";
import HeroSelect from "../../molecules/hero-select/HeroSelect";
import LocationIcon from "../../molecules/HeroSelectLocationIcon";

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
              placeholder="Lavozim yoki komyaniyani kiriting"
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
              <Option value="toshkent">Toshkent</Option>
              <Option value="buxoro">Buxoro</Option>
              <Option value="samarqand">Samarqand</Option>
            </HeroSelect>
          </div>
        </div>
        <div>
          <button className="search-btn__hero-home">
            <img src={SearchIcon} alt="SearchIcon" />
            <span className="search-text">Qidirish</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VacancyInput;
