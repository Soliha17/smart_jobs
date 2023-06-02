import React from "react";

import "./counts.css";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const Counts = () => {
  const { t } = useTranslation();

  return (
    <div className="container counts">
      <Row gutter={[40, 8]} className="counts__content">
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">100 000+</p>
            <p className="counts__text">{t("vacancies")}</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">30 000+</p>
            <p className="counts__text">{t("companies")}</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">7 869+</p>
            <p className="counts__text">{t("resumes")}</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">220+</p>
            <p className="counts__text">{t("areas")}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Counts;
