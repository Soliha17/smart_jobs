import React, { useState } from "react";

import CompaniesFullCard from "../../companies-full/CompaniesFullCard";

import SmsIcon from "../../../assets/images/pen-icon-dashboard.svg";
import EditCompanyDatasModal from "./EditCompanyDatasModal";

const CompanyDatas = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="company-datas">
      <div className="header__company-datas">
        <h2>Kompaniya ma'lumotlari</h2>
        <button onClick={() => setIsEditModalOpen(!isEditModalOpen)}>
          Tahrirlash
          <img src={SmsIcon} alt="SmsIcon" />
        </button>
      </div>
      <CompaniesFullCard />
      {
        <EditCompanyDatasModal
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
        />
      }
    </div>
  );
};

export default CompanyDatas;
