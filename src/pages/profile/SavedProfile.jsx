import React from "react";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

import VacancyCard from "../../components/atoms/vacancy-card/VacancyCard";

const SavedProfile = () => {
  const { t } = useTranslation();

  return (
    <div className="saved-profile container">
      <p className="title">{t("saved")}</p>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <VacancyCard
            className={"vacancy-card profile-card vacancy-list-card"}
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
            className={"vacancy-card profile-card vacancy-list-card"}
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
            className={"vacancy-card profile-card vacancy-list-card"}
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
            className={"vacancy-card profile-card vacancy-list-card"}
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
            className={"vacancy-card profile-card vacancy-list-card"}
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
            className={"vacancy-card profile-card vacancy-list-card"}
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
  );
};

export default SavedProfile;
