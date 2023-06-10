import React from "react";

import "./vacancyCard.css";

import ThreeDots from "../../../assets/images/three-dots.svg";
import ExpressLogo from "../../../assets/images/express-24-logo.png";
import LocationIcon from "../../../assets/images/small-location-icon.svg";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const VacancyCard = ({
  className,
  title,
  date,
  text,
  company,
  jobType,
  jobTime,
  button,
  experience,
  salary,
  location,
}) => {
  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          {t("save")}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          {t("sharing")}
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          {t("complaining")}
        </a>
      ),
    },
  ];

  return (
    <div className={className}>
      <div className="info__vacancy-card">
        <div className="top__vacancy-card">
          <div>
            <img src={ExpressLogo} alt="ExpressLogo" />
            <span>
              <p className="title__vacancy-card">{title}</p>
              <p className="company__vacancy-card">{company}</p>
            </span>
          </div>
          <span className="three-dots">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow
              trigger={["click"]}
            >
              <Button>
                <img src={ThreeDots} alt="dots icon" />
              </Button>
            </Dropdown>
          </span>
        </div>
        <div className="salary__vacancy-card">
          <p>{salary || "5 000 000 - 12 000 000 so'm"}</p>
        </div>
      </div>
      <span className="location__vacancy-card">
        <img src={LocationIcon} alt="LocationIcon" />
        {location || "O'zbeksiton, Toshkent"}
      </span>
      <span className="footer__vacancy-card">
        <p className="date__vacancy-card">{jobType}</p>
        <p className="date__vacancy-card">{jobTime}</p>
        <p className="date__vacancy-card">{experience || "1-3 yil"}</p>
        <p className="date__vacancy-card">{date}</p>
      </span>
    </div>
  );
};

export default VacancyCard;
