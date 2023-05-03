import React from "react";

import "./vacancyCard.css";

import ThreeDots from "../../../assets/images/three-dots.svg";

const VacancyCard = ({ id, title, date, text, company, jobType, jobTime }) => {
  return (
    <div className="vacancy-card">
      <div className="info__vacancy-card">
        <div className="top__vacancy-card">
          <span>
            <p className="title__vacancy-card">{title}</p>
            <p className="company__vacancy-card">{company}</p>
          </span>
          <img src={ThreeDots} alt="ThreeDots" />
        </div>
        <div className="bottom__vacancy-card">
          <p>{jobType}</p>
          <p>{jobTime}</p>
        </div>
      </div>
      <p className="text__vacancy-card">{text}</p>
      <p className="date__vacancy-card">E’lon qilingan sana: {date}</p>
    </div>
  );
};

export default VacancyCard;
