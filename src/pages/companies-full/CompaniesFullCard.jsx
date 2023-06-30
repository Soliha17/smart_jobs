import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Col, Modal, Row } from "antd";

import "./companiesFull.css";

import YmapsComponent from "../../components/molecules/yandex-map/YmapsComponent";
import YandexCard from "../../components/molecules/yandex-card/YandexCard";

import PgLogo from "../../assets/images/pg-logo.png";
import Youtube from "../../assets/images/youtube-icon.svg";
import Telegram from "../../assets/images/telegram-icon.svg";
import Instagram from "../../assets/images/instagram-icon.svg";
import Facebook from "../../assets/images/facebook-icon.svg";
import MapIcon from "../../assets/images/show-map-icon.svg";

import { useTranslation } from "react-i18next";

const CompaniesFullCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation();

  return (
    <div className="content__companies-full">
      <div className="header__companies-full">
        <div className="left__companies-full">
          <img src={PgLogo} alt="PgLogo" />
          <h2>Procter&Gamble / P&G / Проктер енд Гембл</h2>
        </div>
        <div className="right__companies-full">
          <Link target="_blank" to={"/"}>
            {" "}
            <img src={Youtube} alt="Youtube" />
          </Link>
          <Link target="_blank" to={"/"}>
            {" "}
            <img src={Telegram} alt="Telegram" />
          </Link>
          <Link target="_blank" to={"/"}>
            <img src={Instagram} alt="Instagram" />
          </Link>
          <Link target="_blank" to={"/"}>
            <img src={Facebook} alt="Facebook" />
          </Link>
        </div>
      </div>
      <Row gutter={[50, 16]} className="info__companies-full">
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className="title__companies-full">{t("numberOfOpenVacancies")}</p>
          <p className="subtitle__companies-full">4</p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className="title__companies-full">
            {t("numberOfEmployeesOfTheCompany")}
          </p>
          <p className="subtitle__companies-full">200-500</p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className="title__companies-full">{t("companyAddress")} </p>
          <p className="subtitle__companies-full" onClick={showModal}>
            Germaniya, Berlin , 7-daha, uy
          </p>
          <Modal
            width={1200}
            bodyStyle={{ height: "500px" }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="yandex-modal">
              <YmapsComponent />
              <YandexCard />
            </div>
          </Modal>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className="title__companies-full">{t("companyWebsite")}</p>
          <Link to={"/"} target="_blank">
            <p className="subtitle__companies-full">www.PG.com</p>
          </Link>
        </Col>
      </Row>
      <div className="description__companies-full">
        <h6>{t("description")}</h6>
        <p>Responsibilities:</p>
        <ul>
          <li>
            Pushing the company forward by building effective business processes
          </li>
          <li>
            Assistance in product development of video identification/video
            monetization software
          </li>
          <li>
            Ensuring successful and timely delivery of our services to clients
          </li>
          <li>
            Working on contracts, agreements, and other account documentation
          </li>
          <li>And any other activities that would boost company performance</li>
        </ul>
        <p>Requirements:</p>
        <ul>
          <li>
            Degree from a leading Russian/Foreign University preferably in STEM
            fields
          </li>
          <li>Excellent understanding of technological products</li>
          <li>
            Full professional near-native command of English is a must (at least
            C1)
          </li>
          <li>
            2-3 years in a similar position in a western company is an advantage
          </li>
          <li>Guru-level of Excel</li>
        </ul>
        <p>We offer:</p>
        <ul>
          <li>
            A chance to work with the Top 10 international media corporations
            and social media platforms
          </li>
          <li>Stable, fast-growing, and fun working environment</li>
          <li>
            Relocation to our beautiful office in Vilnius which is fully covered
            by us
          </li>
        </ul>
      </div>
      <div className="address__companies-full">
        <div>
          <img src={MapIcon} alt="map icon" />
          <p className="address-text__companies-full"> {t("address")}</p>
        </div>
        <Button type="primary" size="medium" onClick={showModal}>
          {t("showOnMap")}
        </Button>
        <Modal
          width={1200}
          bodyStyle={{ height: "500px" }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="yandex-modal">
            <YmapsComponent />
            <YandexCard />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CompaniesFullCard;
