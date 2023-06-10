import React from "react";
import { Modal } from "antd";

import { useTranslation } from "react-i18next";

import "./takeTheTest.css";

import TestImg from "../../../assets/images/take-the-test.png";

const TakeTheTest = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <Modal
      width={820}
      open={open}
      onCancel={handleCancel}
      maskStyle={{ background: " rgba(28, 25, 23, 0.56)" }}
      wrapClassName="test-modal"
      footer={null}
    >
      <div className="take-test">
        <img src={TestImg}  alt="TestImg" />
        <div>
          <h2>
            Usbu vakasiga topshirish uchun qisqa test topshishingiz kerak.
          </h2>
          <p>
            Ish beruvchi tomonidan ariza qabul qilishda test topshirish majburiy
            qilingan. Sizni rezyumengiz ish beruvchiga ko'rinishi uchun testni
            boshlang.
          </p>
        </div>
        <button className="primary-btn">Test topshirish</button>
      </div>
    </Modal>
  );
};

export default TakeTheTest;
