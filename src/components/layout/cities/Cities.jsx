import React from "react";

import "./cities.css";
import SectionsHeader from "../../atoms/sections-header/SectionsHeader";
import { Col, Row } from "antd";

import CheckCircle from "../../../assets/images/check-circle.svg";

const Cities = () => {
  return (
    <div className="cities">
      <SectionsHeader
        children={{
          title: "Hududlar",
          text: "Joylashuvlar kesimida ish o’rinlari",
          btnText: "hududlar",
        }}
      />

      <div className="cities__content container">
        <Row gutter={[24, 24]}>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Toshkent</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Baku</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Sirdaryo</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Urganch</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Toshkent</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Baku</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Sirdaryo</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Urganch</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Toshkent</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Baku</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Sirdaryo</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Urganch</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Toshkent</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Baku</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Sirdaryo</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Urganch</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Toshkent</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Baku</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Sirdaryo</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Urganch</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Toshkent</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Baku</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Sirdaryo</p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }} >
            <div className="cities__item">
              <img src={CheckCircle} alt="CheckCircle" />
              <p>Urganch</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cities;
