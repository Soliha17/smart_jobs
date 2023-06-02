import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AutoComplete, Input, Select } from "antd";

import "./herohome.css";

import CompanyIcon from "../../../assets/images/company-icon.svg";
import ResumeIcon from "../../../assets/images/resume-icon.svg";
import VacancyIcon from "../../../assets/images/vacancy-icon.svg";
import SearchIcon from "../../../assets/images/hero-search-icon.svg";
import LocationIcon from "../../molecules/HeroSelectLocationIcon";
import HeroSelect from "../../molecules/hero-select/HeroSelect";
import HeroSearchIcon from "../../molecules/HeroSearchIcon";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const HeroHome = () => {
  const [selectedTag, setSelectedTag] = useState("tag0");

  const navigate = useNavigate();

  function navigateFn(page) {
    navigate(page);
  }

  const selectTag = (tag) => {
    setSelectedTag(tag);
  };

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
    <div className="hero-home">
      <div className="content__hero-home">
        <p className="hero__title">{t("weWillFindTheDreamJobTogether")}</p>
        <p className="hero__subtitle">{t("smartJobsWillHelpYouFindYourJob")}</p>
        <div className="action__hero-home">
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
              <img src={SearchIcon} alt="search icon" />

              <span>{t("search")}</span>
            </button>
          </div>
        </div>
        <div className="work-types__hero-home">
          <button
            className={`work-type__hero-home ${
              selectedTag === "tag1" && "selected-tag__hero-home"
            }`}
            onClick={() => selectTag("tag1")}
          >
            {t("fullTime")}
          </button>
          <button
            className={`work-type__hero-home ${
              selectedTag === "tag2" && "selected-tag__hero-home"
            }`}
            onClick={() => selectTag("tag2")}
          >
            {t("practice")}
          </button>
          <button
            className={`work-type__hero-home ${
              selectedTag === "tag3" && "selected-tag__hero-home"
            }`}
            onClick={() => selectTag("tag3")}
          >
            {t("halfRate")}
          </button>
          <button
            className={`work-type__hero-home ${
              selectedTag === "tag4" && "selected-tag__hero-home"
            }`}
            onClick={() => selectTag("tag4")}
          >
            {t("freelance")}
          </button>
        </div>
      </div>
      <div className="footer__hero-home">
        <div
          className="footer-item__hero-home"
          onClick={() => navigateFn("vacancy")}
        >
          <img src={VacancyIcon} alt="vacancy icon" />
          <p>{t("vacancies")}</p>
        </div>
        <div
          className="footer-item__hero-home"
          onClick={() => navigateFn("companies")}
        >
          <img src={CompanyIcon} alt="company icon" />
          <p>{t("companies")}</p>
        </div>

        <div
          className="footer-item__hero-home"
          onClick={() => navigateFn("resume")}
        >
          <img src={ResumeIcon} alt="resume icon" />
          <p>{t("resumeConstructor")}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
