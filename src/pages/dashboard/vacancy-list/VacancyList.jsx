import React from "react";

import "./vacancyList.css";
import { useState } from "react";

import RightLayoutIcon from "../../../assets/images/right-layout-btn.svg";
import LeftLayoutIcon from "../../../assets/images/view-list-black-dashboard.svg";
import ShareIcon from "../../../assets/images/share-icon-dashboard.svg";
import StatisticIcon from "../../../assets/images/statistic-icon-dashboard.svg";
import PenIcon from "../../../assets/images/pen-icon-dashboard.svg";
import DownloadIcon from "../../../assets/images/download-icon-dashboard.svg";
import QuestionMark from "../../../assets/images/question-mark-myresumes.svg";

const VacancyList = () => {
  const [selectedBtn, setSelectedBtn] = useState("btn1");

  const selectButton = (btn) => {
    setSelectedBtn(btn);
  };

  return (
    <div className="vacancy-list">
      <div className="header__vacancy-list">
        <div className="text-group__vacancy-list">
          <p className="circle-text__vacancy-list">Aktiv vakansiyalar</p>
          <p className="circle-text__vacancy-list">Arxivlangan vakansiyalar</p>
        </div>
        <div className="btn-group__vacancy-list">
          <div className="select-group__vacancy-list">
            <button
              className={`${
                selectedBtn === "btn1" && "selected-btn__vacancy-list"
              }`}
              onClick={() => selectButton("btn1")}
            >
              <img src={LeftLayoutIcon} alt="LeftLayoutIcon" />
            </button>
            <button
              className={`${
                selectedBtn === "btn2" && "selected-btn__vacancy-list"
              }`}
              onClick={() => selectButton("btn2")}
            >
              <img src={RightLayoutIcon} alt="RightLayoutIcon" />
            </button>
          </div>
          <button className="btn__vacancy-list white-btn">Vakansiya yaratish</button>
        </div>
      </div>
      <div className="content__vacancy-list">
        <div className="card__vacancy-list">
          <h3>Mahsulot menejeri</h3>
          <div className="middle__vacancy-list">
            <div className="left__vacancy-list">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__vacancy-list">
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
            </div>
          </div>
          <div className="footer__vacancy-list">
            <button className="primary-btn">Arizachilarni ko'rish</button>
            <span>
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={StatisticIcon} alt="StatisticIcon" />
              <img src={PenIcon} alt="PenIcon" />
              <img src={DownloadIcon} alt="DownloadIcon" />
            </span>
          </div>
        </div>
        <div className="card__vacancy-list">
          <h3>Mahsulot menejeri</h3>
          <div className="middle__vacancy-list">
            <div className="left__vacancy-list">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__vacancy-list">
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
            </div>
          </div>
          <div className="footer__vacancy-list">
            <button className="primary-btn">Arizachilarni ko'rish</button>
            <span>
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={StatisticIcon} alt="StatisticIcon" />
              <img src={PenIcon} alt="PenIcon" />
              <img src={DownloadIcon} alt="DownloadIcon" />
            </span>
          </div>
        </div>
        <div className="card__vacancy-list">
          <h3>Mahsulot menejeri</h3>
          <div className="middle__vacancy-list">
            <div className="left__vacancy-list">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__vacancy-list">
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
            </div>
          </div>
          <div className="footer__vacancy-list">
            <button className="primary-btn">Arizachilarni ko'rish</button>
            <span>
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={StatisticIcon} alt="StatisticIcon" />
              <img src={PenIcon} alt="PenIcon" />
              <img src={DownloadIcon} alt="DownloadIcon" />
            </span>
          </div>
        </div>
        <div className="card__vacancy-list">
          <div>
            <h3>Mahsulot menejeri</h3>
            <div className="badge__vacancy-list">
              <p> Tizim tomonidan rad etilgan</p>
              <img src={QuestionMark} alt="question mark" />
            </div>
          </div>
          <div className="middle__vacancy-list">
            <div className="left__vacancy-list">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__vacancy-list">
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
              <span>
                <h6>0</h6>
                <p>Qabul qilindi</p>
              </span>
            </div>
          </div>
          <div className="footer__vacancy-list">
            <button className="primary-btn">Arizachilarni ko'rish</button>
            <span>
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={StatisticIcon} alt="StatisticIcon" />
              <img src={PenIcon} alt="PenIcon" />
              <img src={DownloadIcon} alt="DownloadIcon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyList;
