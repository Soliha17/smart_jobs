import React from "react";

import "./vacancyCard.css";

import ThreeDots from "../../../assets/images/three-dots.svg";
import { Link } from "react-router-dom";
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
          <span>
            <p className="title__vacancy-card">{title}</p>
            <p className="company__vacancy-card">{company}</p>
          </span>
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
        <div className="bottom__vacancy-card">
          <p>{jobType}</p>
          <p>{jobTime}</p>
        </div>
      </div>
      <p className="text__vacancy-card" style={{ whiteSpace: "pre-line" }}>
        {text}
      </p>
      {button ? (
        <span className="footer__vacancy-card">
          <p className="date__vacancy-card">{date}</p>
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: "var(--primary-100)" }}
          >
            {t(button)}
          </Button>
        </span>
      ) : (
        <p className="date__vacancy-card">
          {t("dateOfPublication")} {date}
        </p>
      )}
    </div>
  );
};

export default VacancyCard;
