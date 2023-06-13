import React from "react";
import { Modal } from "antd";

import { useTranslation } from "react-i18next";

import "./finishTestModal.css";

import VerifiedImg from "../../../assets/images/verified-img.svg";
import { useNavigate } from "react-router-dom";

const FinishTestModal = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(open);
  };

  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Modal
      width={820}
      open={open}
      onCancel={handleCancel}
      maskStyle={{ background: " rgba(28, 25, 23, 0.56)" }}
      wrapClassName="test-modal"
      footer={null}
    >
      <div className="modal__take-test">
        <img src={VerifiedImg} alt="VerifiedImg" />
        <div>
          <h2>{t("congratulationsYouGotTheJob")}</h2>
          <p>{t("applyToMultipleJobOpeningsToHelpYouGetHiredFaster")}</p>
        </div>
        <button className="default-btn" onClick={() => navigate("/test")}>
          {t("otherVacancies")}
        </button>
      </div>
    </Modal>
  );
};

export default FinishTestModal;
