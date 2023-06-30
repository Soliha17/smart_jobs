import React, { useState } from "react";

import "./notifications.css";

import CheckableTag from "antd/es/tag/CheckableTag";
import { Col, Row } from "antd";

import GreenDot from "../../../assets/images/green-point.svg";
import PaginationCompany from "../../../components/molecules/pagination/Pagination";
import NotificationsModal from "../../../components/molecules/modal/NotificationsModal";

const tagsData = ["Barchasi", "Aktiv", "Arxivdagilar"];

const Notifications = () => {
  const [selectedTags, setSelectedTags] = useState(["Barchasi"]);
  const [isNotModalOpen, setIsNotModalOpen] = useState(false);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="notifications">
      <h2 onClick={() => setIsNotModalOpen(!isNotModalOpen)}>
        Bildirishnomalar
      </h2>
      <div className="feed__candidates">
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
      <Row gutter={[24, 20]} className="content__notifications">
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="card__notifications notifications-card">
            <span className="header__notifications-card">
              <img src={GreenDot} alt="GreenDot" />
              Yangi xabar
            </span>
            <h4>Express 24</h4>
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib...
            </p>
            <span className="footer__notifications-card">20.05.2023</span>
          </div>
        </Col>
      </Row>
      <PaginationCompany />
      {<NotificationsModal open={isNotModalOpen} setOpen={setIsNotModalOpen} />}
    </div>
  );
};

export default Notifications;
