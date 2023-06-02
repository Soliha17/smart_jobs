import React from "react";
import { useTranslation } from "react-i18next";

import "./aboutHero.css";

import AboutHeroImg from "../../../assets/images/about-hero.svg";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <div className="about-hero container">
      <div className="content__about-hero">
        <h2>{t("aboutTitle")}</h2>
        <div className="tag-group__about-hero">
          <p className="circle-text__vacancy-full">#{t("job_search")}</p>
          <p className="circle-text__vacancy-full">#{t("employee_search")}</p>
          <p className="circle-text__vacancy-full">#{t("high_salaries")}</p>
          <p className="circle-text__vacancy-full">#{t("different_fields")}</p>
          <p className="circle-text__vacancy-full">
            #{t("talented_personnel")}
          </p>
        </div>
        <div className="btn-group__about-hero">
          <button className="primary-btn"> {t("jobSearch")} </button>
          <button className="default-btn"> {t("employeeSearch")} </button>
        </div>
      </div>
      <div className="image__about-hero">
        <img src={AboutHeroImg} alt="AboutHeroImg" />
      </div>
    </div>
  );
};

export default AboutHero;
