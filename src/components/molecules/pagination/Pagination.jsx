import React from "react";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";

import "./pagination.css";

import PrevIcon from "../../../assets/images/prev.svg";

const itemRender = (_, type, originalElement) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  if (type === "prev") {
    return (
      <div className="button-group">
        <img src={PrevIcon} className="prev-img" alt="prev icon" />
        <a>{t("previous")}</a>
      </div>
    );
  }
  if (type === "next") {
    return (
      <div className="button-group">
        <a>{t("next")}</a>
        <img src={PrevIcon} alt="prev icon" />
      </div>
    );
  }

  return originalElement;
};

const PaginationCompany = () => (
  <div className="pagination-company">
    <Pagination total={100} responsive={true} itemRender={itemRender} />
  </div>
);

export default PaginationCompany;
