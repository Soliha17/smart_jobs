import React from "react";

import "./categories.css";
import { Col, Row } from "antd";

import PersonIcon from "../../../assets/images/person-icon.svg";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <p className="title">Kategoriyalar</p>
        <p className="subtitle">
          Ish joylari ichindan o’zinigizga mosini tanlang
        </p>
        <Row className="content__categories" gutter={[8, 16]} wrap="wrap">
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={12} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>

          <Col xs={0} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={0} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={0} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
          <Col xs={0} sm={8} md={6} xl={4}>
            <div className="item__categories gutter-row">
              <img src={PersonIcon} alt="person icon" />
              <p className="category__title">Buxgalteriya va moliya sohasida</p>
              <p className="category__text">3650 vokansiya</p>
            </div>
          </Col>
        </Row>
        <button className="see-all__btn">Barchasini ko’rsatish</button>
      </div>
    </div>
  );
};

export default Categories;
