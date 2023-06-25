import React from "react";
import { Tag } from "antd";

import "./testResult.css";

import BackIconWhite from "../../../assets/images/back-icon-chat.svg";
import WrongIcon from "../../../assets/images/wrong-icon-test.svg";
import TrueIcon from "../../../assets/images/true-icon-test.svg";
import WrongRedIcon from "../../../assets/images/wrong-red-test.svg";

const TestResult = () => {
  return (
    <div className="test-result">
      <span className="header__test-result">
        <img src={BackIconWhite} alt="BackIconWhite" />
        Test natijalar
      </span>
      <div className="cards__test-result">
        <div className="card__test-result">
          <h6>Status</h6>
          <p>Nodir Hoshimov</p>
        </div>
        <div className="card__test-result">
          <h6>Status</h6>
          <Tag color="lime">Jarayonda</Tag>
        </div>
        <div className="card__test-result">
          <h6>Status</h6>
          <p>20 min</p>
        </div>
        <div className="card__test-result">
          <h6>Status</h6>
          <p>12 / 20 (60%)</p>
        </div>
      </div>
      <div className="test-container__test-result">
        <div className="test-card__test-result">
          <div className="top__test-card">
            <p>1 - savol</p>
          </div>
          <div className="header__test-card">
            <p>
              Qaysi narsa UX dizaynerining bajarishi lozim bo'lgan ishlardan
              biri emas?
            </p>
          </div>
          <div className="content__test-card">
            <span>
              <p>A) Foydalanuvchilarni ko'rib chiqish</p>
              <img src={WrongIcon} alt="WrongIcon" />
            </span>{" "}
            <br />
            <span className="right-answer__test-card">
              <p>
                B) Mahsulotni foydalanishni osonlash uchun dizayn
                o'zgartirishlari qilish
              </p>
              <img src={TrueIcon} alt="TrueIcon" />
            </span>
            <br />
            <span>
              <p>C) Estetik dizayn taklif qilish</p>
              <img src={WrongIcon} alt="WrongIcon" />
            </span>
            <br />
            <span>
              <p>D) Mahsulot narxini pastga tushirish uchun dizayn</p>
              <img src={WrongIcon} alt="WrongIcon" />
            </span>
          </div>
          <div className="footer__test-card">
            <p>Ball: 1 / 1</p>
          </div>
        </div>
        <div className="test-card__test-result">
          <div className="top__test-card">
            <p>2 - savol</p>
          </div>
          <div className="header__test-card">
            <p>
              Qaysi narsa UX dizaynerining bajarishi lozim bo'lgan ishlardan
              biri emas?
            </p>
          </div>
          <div className="content__test-card">
            <span>
              <p>A) Foydalanuvchilarni ko'rib chiqish</p>
              <img src={WrongIcon} alt="WrongIcon" />
            </span>{" "}
            <br />
            <span className="wrong-answer__test-card">
              <p>
                B) Mahsulotni foydalanishni osonlash uchun dizayn
                o'zgartirishlari qilish
              </p>
              <img src={WrongRedIcon} alt="WrongRedIcon" />
            </span>
            <br />
            <span>
              <p>C) Estetik dizayn taklif qilish</p>
              <img src={WrongIcon} alt="WrongIcon" />
            </span>
            <br />
            <span>
              <p>D) Mahsulot narxini pastga tushirish uchun dizayn</p>
              <img src={WrongIcon} alt="WrongIcon" />
            </span>
          </div>
          <div className="footer__test-card">
            <p>Ball: 1 / 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
