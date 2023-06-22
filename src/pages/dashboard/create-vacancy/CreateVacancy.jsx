import React from "react";

import "./createVacancy.css";
import { useState } from "react";

import RightLayoutIcon from "../../../assets/images/right-layout-btn.svg";
import LeftLayoutIcon from "../../../assets/images/view-list-black-dashboard.svg";
import ShareIcon from "../../../assets/images/share-icon-dashboard.svg";
import StatisticIcon from "../../../assets/images/statistic-icon-dashboard.svg";
import PenIcon from "../../../assets/images/pen-icon-dashboard.svg";
import DownloadIcon from "../../../assets/images/download-icon-dashboard.svg";
import QuestionMark from "../../../assets/images/question-mark-myresumes.svg";

const CreateVacancy = () => {
  const [selectedBtn, setSelectedBtn] = useState("btn1");

  const selectButton = (btn) => {
    setSelectedBtn(btn);
  };

  return (
    <div className="create-vacancy">
      <div className="header__create-vacancy">
        <div className="text-group__create-vacancy">
          <p className="circle-text__create-vacancy">Aktiv vakansiyalar</p>
          <p className="circle-text__create-vacancy">
            Arxivlangan vakansiyalar
          </p>
        </div>
        <div className="btn-group__create-vacancy">
          <div className="select-group__create-vacancy">
            <button
              className={`${
                selectedBtn === "btn1" && "selected-btn__create-vacancy"
              }`}
              onClick={() => selectButton("btn1")}
            >
              <img src={LeftLayoutIcon} alt="LeftLayoutIcon" />
            </button>
            <button
              className={`${
                selectedBtn === "btn2" && "selected-btn__create-vacancy"
              }`}
              onClick={() => selectButton("btn2")}
            >
              <img src={RightLayoutIcon} alt="RightLayoutIcon" />
            </button>
          </div>
          <button className="btn__create-vacancy">Vakansiya yaratish</button>
        </div>
      </div>
      <div className="content__create-vacancy">
        <div className="card__create-vacancy">
          <h3>Mahsulot menejeri</h3>
          <div className="middle__create-vacancy">
            <div className="left__create-vacancy">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__create-vacancy">
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
          <div className="footer__create-vacancy">
            <button className="primary-btn">Arizachilarni ko'rish</button>
            <span>
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={StatisticIcon} alt="StatisticIcon" />
              <img src={PenIcon} alt="PenIcon" />
              <img src={DownloadIcon} alt="DownloadIcon" />
            </span>
          </div>
        </div>
        <div className="card__create-vacancy">
          <h3>Mahsulot menejeri</h3>
          <div className="middle__create-vacancy">
            <div className="left__create-vacancy">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__create-vacancy">
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
          <div className="footer__create-vacancy">
            <button className="primary-btn">Arizachilarni ko'rish</button>
            <span>
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={StatisticIcon} alt="StatisticIcon" />
              <img src={PenIcon} alt="PenIcon" />
              <img src={DownloadIcon} alt="DownloadIcon" />
            </span>
          </div>
        </div>
        <div className="card__create-vacancy">
          <h3>Mahsulot menejeri</h3>
          <div className="middle__create-vacancy">
            <div className="left__create-vacancy">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__create-vacancy">
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
          <div className="footer__create-vacancy">
            <button className="primary-btn">Arizachilarni ko'rish</button>
            <span>
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={StatisticIcon} alt="StatisticIcon" />
              <img src={PenIcon} alt="PenIcon" />
              <img src={DownloadIcon} alt="DownloadIcon" />
            </span>
          </div>
        </div>
        <div className="card__create-vacancy">
          <div>
            <h3>Mahsulot menejeri</h3>
            <div className="badge__create-vacancy">
              <p> Tizim tomonidan rad etilgan</p>
              <img src={QuestionMark} alt="question mark" />
            </div>
          </div>
          <div className="middle__create-vacancy">
            <div className="left__create-vacancy">
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
              <span>
                <h5>E'lon qilingan sana: </h5>
                <p>13-mart, 2023</p>
              </span>
            </div>
            <div className="right__create-vacancy">
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
          <div className="footer__create-vacancy">
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

export default CreateVacancy;
