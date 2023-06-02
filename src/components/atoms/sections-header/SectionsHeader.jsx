import React from "react";

import { Link } from "react-router-dom";

import "./sectionsHeader.css";

import RightArrow from "../../../assets/images/right-blue-icon.svg";
import { useTranslation } from "react-i18next";

const SectionsHeader = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="sections-header container">
      <div className="left__sections-header">
        <p className="title">{t(children.title)}</p>
        <p className="subtitle">{t(children.text)}</p>
      </div>
      <Link to={children.link}>
        <button className="btn__sections-header">
          {t("all")} {t(children.btnText).toLocaleLowerCase()}
          <img src={RightArrow} alt="RightArrow icon" />
        </button>
      </Link>
    </div>
  );
};

export default SectionsHeader;
