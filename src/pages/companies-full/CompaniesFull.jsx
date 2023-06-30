import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Breadcrumb, Button, Col, Modal, Row } from "antd";

import "./companiesFull.css";

import VacancyCard from "../../components/atoms/vacancy-card/VacancyCard";
import YmapsComponent from "../../components/molecules/yandex-map/YmapsComponent";
import YandexCard from "../../components/molecules/yandex-card/YandexCard";
import Footer from "../../components/layout/footer/Footer";

import PgLogo from "../../assets/images/pg-logo.png";
import Youtube from "../../assets/images/youtube-icon.svg";
import Telegram from "../../assets/images/telegram-icon.svg";
import Instagram from "../../assets/images/instagram-icon.svg";
import Facebook from "../../assets/images/facebook-icon.svg";
import MapIcon from "../../assets/images/show-map-icon.svg";

import { useTranslation } from "react-i18next";
import CompaniesFullCard from "./CompaniesFullCard";

const CompaniesFull = () => {
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
    <>
      <div className="companies-full container">
        <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>{t("homePage")}</Link>,
            },
            {
              title: <Link to={"/companies"}>{t("allCompanies")}</Link>,
            },
            {
              title: "P&G",
            },
          ]}
        />
        <CompaniesFullCard />
        <div className="footer__companies-full">
          <h2> {t("vacanciesAnnouncedByTheCompany")} </h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <VacancyCard
                className={"vacancy-card vacancy-list-card"}
                title={"Mahsulot menejeri"}
                date="13-mart, 2023"
                text={`Rus tilini ishonchli bilish
      Yoshi 18+
      Sizda o'rganish va pul ishlash istagi bor;
      Siz ishonchli kompyuter yoki telefon foydalanuvchisimisiz?
      Mas'uliyat
      `}
                jobType="Masofadan"
                jobTime="To’liq stavka"
                button="submitToWork"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <VacancyCard
                className={"vacancy-card vacancy-list-card"}
                title={"Mahsulot menejeri"}
                date="13-mart, 2023"
                text={`Rus tilini ishonchli bilish
      Yoshi 18+
      Sizda o'rganish va pul ishlash istagi bor;
      Siz ishonchli kompyuter yoki telefon foydalanuvchisimisiz?
      Mas'uliyat
      `}
                jobType="Masofadan"
                jobTime="To’liq stavka"
                button="submitToWork"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <VacancyCard
                className={"vacancy-card vacancy-list-card"}
                title={"Mahsulot menejeri"}
                date="13-mart, 2023"
                text={`Rus tilini ishonchli bilish
      Yoshi 18+
      Sizda o'rganish va pul ishlash istagi bor;
      Siz ishonchli kompyuter yoki telefon foydalanuvchisimisiz?
      Mas'uliyat
      `}
                jobType="Masofadan"
                jobTime="To’liq stavka"
                button="submitToWork"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <VacancyCard
                className={"vacancy-card vacancy-list-card"}
                title={"Mahsulot menejeri"}
                date="13-mart, 2023"
                text={`Rus tilini ishonchli bilish
      Yoshi 18+
      Sizda o'rganish va pul ishlash istagi bor;
      Siz ishonchli kompyuter yoki telefon foydalanuvchisimisiz?
      Mas'uliyat
      `}
                jobType="Masofadan"
                jobTime="To’liq stavka"
                button="submitToWork"
              />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompaniesFull;
