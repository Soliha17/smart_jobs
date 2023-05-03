import React from "react";

import "./counts.css";
import { Col, Row } from "antd";

const Counts = () => {
  return (
    <div className="container counts">
      <Row gutter={[40, 8]} className="counts__content">
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">100 000+</p>
            <p className="counts__text">Vakansiyalar</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">30 000+</p>
            <p className="counts__text">Kompaniyalar</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">7 869+</p>
            <p className="counts__text">Rezyumerlar</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
          <div className="counts__item">
            <p className="counts__number">220+</p>
            <p className="counts__text">Hududlar</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Counts;
