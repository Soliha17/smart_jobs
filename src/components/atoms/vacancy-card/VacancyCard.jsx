import React, { useCallback, useEffect, useState } from "react";

import "./vacancyCard.css";

import ThreeDots from "../../../assets/images/three-dots.svg";
import { Link } from "react-router-dom";

const VacancyCard = ({
  className,
  title,
  date,
  text,
  company,
  jobType,
  jobTime,
}) => {
  const [dots, setDots] = useState(false);

  function handleDots() {
    setDots(!dots);
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = useCallback((event) => {
    const clickedElement = event.target.closest(".three-dots");
    if (!clickedElement) setDots(false);
  }, []);

  return (
    <div className={className}>
      <div className="info__vacancy-card">
        <div className="top__vacancy-card">
          <span>
            <p className="title__vacancy-card">{title}</p>
            <p className="company__vacancy-card">{company}</p>
          </span>
          <span className="three-dots">
            <span>
              <img src={ThreeDots} onClick={handleDots} alt="dots icon" />
            </span>
            <span
              className="dots-content font-style__1417"
              style={dots ? { display: "block" } : { display: "none" }}
            >
              <Link to="">
                {/* <img src={copyIcon} alt="copy icon" /> */}
                Saqlash
              </Link>
              <Link to="">
                {/* <img src={copyIcon} alt="copy icon" /> */}
                Ulashish
              </Link>
              <Link to="">
                {/* <img src={spamIcon} alt="spam icon" /> */}
                Shikoyat qilish
              </Link>
            </span>
          </span>
        </div>
        <div className="bottom__vacancy-card">
          <p>{jobType}</p>
          <p>{jobTime}</p>
        </div>
      </div>
      <p className="text__vacancy-card" style={{ whiteSpace: "pre-line" }}>
        {text}
      </p>
      <p className="date__vacancy-card">E’lon qilingan sana: {date}</p>
    </div>
  );
};

export default VacancyCard;
