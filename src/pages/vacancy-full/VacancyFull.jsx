import React, { useState } from "react";

import "./vacancyFull.css";
import { Breadcrumb, Button, Col, Modal, Row } from "antd";

import ShareIcon from "../../assets/images/share-icon.svg";
import ReportIcon from "../../assets/images/report-icon.svg";
import SaveIcon from "../../assets/images/save-icon.svg";
import BalanceIcon from "../../assets/images/balance-icon.svg";
import LocationIcon from "../../assets/images/blue-location-icon.svg";
import AwayIcon from "../../assets/images/location-away-icon.svg";
import SchoolIcon from "../../assets/images/school-icon.svg";
import TranslateIcon from "../../assets/images/translate-icon.svg";
import MapIcon from "../../assets/images/show-map-icon.svg";
import CalendarIcon from "../../assets/images/calendar-icon.svg";
import TimeplaceIcon from "../../assets/images/timeplace-icon.svg";
import PendingActionIcon from "../../assets/images/pending-actions.svg";
import PgCompLogo from "../../assets/images/pg-logo.png";
import YmapsComponent from "../../components/molecules/yandex-map/YmapsComponent";
import YandexCard from "../../components/molecules/yandex-card/YandexCard";

import VacancyCard from "../../components/atoms/vacancy-card/VacancyCard";
import Footer from "../../components/layout/footer/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VacancyFull = () => {
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
      <div className="vacancy-full-wrapper container">
        <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>Bosh sahifa</Link>,
            },
            {
              title: <Link to={"/"}>Boshqaruv yo'nalishi</Link>,
            },
            {
              title: "Mahsulot menejeri",
            },
          ]}
        />
        <div className="vacancy-full">
          <div className="header__vacancy-full">
            <div className="header-bottom__vacancy-full">
              <Button type="primary" size="large">
                {t("submitToWork")}
              </Button>
              <div className="actions-group__vacancy-full">
                <img src={ShareIcon} alt="ShareIcon" />
                <img src={ReportIcon} alt="ReportIcon" />
                <img src={SaveIcon} alt="SaveIcon" />
              </div>
            </div>
          </div>
          <div className="content__vacancy-full">
            <div className="info__vacancy-full-page">
              <div className="header-top__vacancy-full">
                <p className="title__vacancy-full">Mahsulot menejeri</p>
                <p className="company__vacancy-full">Procter&Gamble</p>
              </div>
              <img src={PgCompLogo} width={132} alt="pg company logo" />
            </div>
            <p className="date__vacancy-full">
              {t("dateOfPublication")} 13-mart, 2023
            </p>
            <div className="wrapper__vacancy-content">
              <Row gutter={[25, 25]}>
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <p>{t("place")}</p>
                  </div>
                  <span>Toshkent, O'zbekiston</span>
                </Col>
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={CalendarIcon} alt="CalendarIcon" />
                    <p>{t("applicationDeadline")}</p>
                  </div>
                  <span>25.02.2023</span>
                </Col>

                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={TimeplaceIcon} alt="TimeplaceIcon" />
                    <p>{t("typeOfWork")}</p>
                  </div>
                  <span>To’liq stavka</span>
                </Col>
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={AwayIcon} alt="LocationAwayIcon" />
                    <p>{t("workingFormat")}</p>
                  </div>
                  <span>Gibrid</span>
                </Col>

                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={PendingActionIcon} alt="PendingActionIcon" />
                    <p>{t("experience")}</p>
                  </div>
                  <span>1-3 yil</span>
                </Col>
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={SchoolIcon} alt="SchoolIcon" />
                    <p>{t("levelOfEducation")}</p>
                  </div>
                  <span>-</span>
                </Col>

                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={TranslateIcon} alt="LocationIcon" />
                    <p> {t("requiredLanguages")}</p>
                  </div>
                  <span>Ingliz, Rus</span>
                </Col>

                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="inner-content__vacancy-full"
                >
                  <div>
                    <img src={BalanceIcon} alt="LocationIcon" />
                    <p>{t("salaryRange")}</p>
                  </div>
                  <span>12 000 000 - 18 000 000 </span>
                </Col>
              </Row>
            </div>
          </div>
          <div className="info__vacancy-full">
            <div className="skills__vacancy-full">
              <p className="section-name__vacancy-full">{t("skills")}</p>
              <div className="skills-group__vacancy-full">
                <p className="circle-text__vacancy-full">
                  O’rganishni o’rgana olish
                </p>
                <p className="circle-text__vacancy-full">
                  Jamoada ishlay olish
                </p>
                <p className="circle-text__vacancy-full">Doimiy ishlay olish</p>
                <p className="circle-text__vacancy-full">Strategik fikrlash</p>
                <p className="circle-text__vacancy-full">
                  Jamoada ishlay olish
                </p>
                <p className="circle-text__vacancy-full">Doimiy ishlay olish</p>
                <p className="circle-text__vacancy-full">Strategik fikrlash</p>
              </div>
            </div>

            <div className="directions__vacancy-full">
              <p className="section-name__vacancy-full">{t("directions")}</p>
              <div className="professions-container">
                <p className="circle-text__vacancy-full">Doimiy ishlay olish</p>
                <p className="circle-text__vacancy-full">Strategik fikrlash</p>
              </div>
            </div>
            <div className="description__vacancy-full">
              <h6 className="section-name__vacancy-full">{t("description")}</h6>
              <p>Responsibilities:</p>
              <ul>
                <li>
                  Pushing the company forward by building effective business
                  processes
                </li>
                <li>
                  Assistance in product development of video
                  identification/video monetization software
                </li>
                <li>
                  Ensuring successful and timely delivery of our services to
                  clients
                </li>
                <li>
                  Working on contracts, agreements, and other account
                  documentation
                </li>
                <li>
                  And any other activities that would boost company performance
                </li>
              </ul>
              <p>Requirements:</p>
              <ul>
                <li>
                  Degree from a leading Russian/Foreign University preferably in
                  STEM fields
                </li>
                <li>Excellent understanding of technological products</li>
                <li>
                  Full professional near-native command of English is a must (at
                  least C1)
                </li>
                <li>
                  2-3 years in a similar position in a western company is an
                  advantage
                </li>
                <li>Guru-level of Excel</li>
              </ul>
              <p>We offer:</p>
              <ul>
                <li>
                  A chance to work with the Top 10 international media
                  corporations and social media platforms
                </li>
                <li>Stable, fast-growing, and fun working environment</li>
                <li>
                  Relocation to our beautiful office in Vilnius which is fully
                  covered by us
                </li>
              </ul>
            </div>

            <div className="address__vacancy-full">
              <div>
                <img src={MapIcon} alt="map icon" />
                <p className="address-text__vacancy-full"> {t("address")}</p>
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

          <div className="footer__vacancy-full">
            <Button type="primary" size="large">
              {t("submitToWork")}
            </Button>
            <div className="actions-group__vacancy-full">
              <img src={ShareIcon} alt="ShareIcon" />
              <img src={ReportIcon} alt="ReportIcon" />
              <img src={SaveIcon} alt="SaveIcon" />
            </div>
          </div>
        </div>
        <div className="company-card__vacancy">
          <Row gutter={[55, 23]} justify="space-between" align="bottom">
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={9}
              className="first-col__company-card"
            >
              <img src={PgCompLogo} width={132} alt="pg company logo" />
              <div>
                <h6>Procter&Gamble</h6>
                <p className="title__company-card">{t("companyAddress")} </p>
                <p className="subtitle__company-card">
                  Germaniya, Berlin , 7-daha, uy
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={5}>
              <p className="title__company-card">
                {" "}
                {t("totalNumberOfVacancies")}
              </p>
              <p className="subtitle__company-card">4</p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={5}>
              <div className="third-col__company-card">
                <p className="title__company-card">
                  {t("numberOfEmployeesOfTheCompany")}
                </p>
                <p className="subtitle__company-card">200-500</p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={5}>
              <p className="title__company-card">{t("companyWebsite")}</p>
              <p className="subtitle__company-card">www.PG.com</p>
            </Col>
          </Row>
        </div>

        <div className="same-vacancies">
          <p className="title__vacancy-card">{t("similarVacancies")}</p>
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
                company="Worko"
                jobType="Masofadan"
                jobTime="To’liq stavka"
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
                company="Worko"
                jobType="Masofadan"
                jobTime="To’liq stavka"
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
                company="Worko"
                jobType="Masofadan"
                jobTime="To’liq stavka"
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
                company="Worko"
                jobType="Masofadan"
                jobTime="To’liq stavka"
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
                company="Worko"
                jobType="Masofadan"
                jobTime="To’liq stavka"
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
                company="Worko"
                jobType="Masofadan"
                jobTime="To’liq stavka"
              />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VacancyFull;
