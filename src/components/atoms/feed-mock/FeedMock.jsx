import React, { useEffect, useState } from "react";

import "./feedMock.css";

import StartIcon from "../../../assets/images/start-icon-mock.svg";
import { useTranslation } from "react-i18next";

const FeedMock = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 1);
    }, 50); // Adjust the speed of the marquee by changing the interval duration

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className="marquee-container__mock">
      <div
        className="marquee-text__mock"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        <p> {t("productDesign")} </p>
        <img src={StartIcon} alt="StartIcon" />
        <p> {t("frontendProgramming")} </p>
        <img src={StartIcon} alt="StartIcon" />
        <p> {t("mobileProgramming")} </p>
        <img src={StartIcon} alt="StartIcon" />
        <p> {t("frontendProgramming")} </p>
        <img src={StartIcon} alt="StartIcon" />
        <p> {t("mobileProgramming")} </p>
        <img src={StartIcon} alt="StartIcon" />
        <p> {t("backendProgramming")} </p>
        <img src={StartIcon} alt="StartIcon" />
        <p> {t("productDesign")} </p>
        <img src={StartIcon} alt="StartIcon" />
        <p>{t("management")}</p>
        <img src={StartIcon} alt="StartIcon" />
      </div>
    </div>
  );
};

export default FeedMock;
