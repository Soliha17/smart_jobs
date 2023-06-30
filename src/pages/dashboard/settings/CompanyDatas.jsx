import React from "react";

import CompaniesFullCard from "../../companies-full/CompaniesFullCard";

import SmsIcon from "../../../assets/images/pen-icon-dashboard.svg";

const CompanyDatas = () => {
  return (
    <div className="company-datas">
      <div className="header__company-datas">
        <h2>Kompaniya ma'lumotlari</h2>
        <button>
          Tahrirlash
          <img src={SmsIcon} alt="SmsIcon" />
        </button>
      </div>
      <CompaniesFullCard />
    </div>
  );
};

export default CompanyDatas;
