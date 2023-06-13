import React from "react";
import { Modal } from "antd";

import { useTranslation } from "react-i18next";

import "./takeTestModal.css";

import TestImg from "../../../assets/images/take-the-test.png";
import { useNavigate } from "react-router-dom";

const TakeTestModal = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
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
        <img src={TestImg} alt="TestImg" />
        <div>
          <h2>{t("youNeedToFindAShortTestToApplyForThisVacancy")}</h2>
          <p>{t("testSubtitle")}</p>
        </div>
        <button className="primary-btn" onClick={() => navigate("/test")}>
          {t("takeTheTest")}
        </button>
      </div>
    </Modal>
  );
};

export default TakeTestModal;
