import React from "react";
import { Modal } from "antd";

import { useTranslation } from "react-i18next";

import "./assignedToWorkModal.css";

import VerifiedImg from "../../../assets/images/verified-img.svg";

const AssignedToWorkModal = ({
  isAssignedToWorkModalOpen,
  setIsAssignedToWorkModalOpen,
}) => {
  const handleCancel = () => {
    setIsAssignedToWorkModalOpen(false);
    console.log("wqdewifhbsedik");
  };

  const { t } = useTranslation();

  return (
    <Modal
      width={653}
      open={isAssignedToWorkModalOpen}
      onCancel={handleCancel}
      maskStyle={{ background: " rgba(28, 25, 23, 0.56)" }}
      wrapClassName="choose-resume-modal"
      footer={null}
    >
      <div className="container__assigned-work-modal modal__take-test">
        <img src={VerifiedImg} alt="VerifiedImg" />
        <div>
          <h2>{t("commissioned")}</h2>
          <p>{t("applyToMultipleJobOpeningsToHelpYouGetHiredFaster")}</p>
        </div>
        <button className="default-btn">{t("otherVacancies")}</button>
      </div>
    </Modal>
  );
};

export default AssignedToWorkModal;
