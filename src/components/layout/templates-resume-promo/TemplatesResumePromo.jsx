import React, { useState } from "react";
import { Row, Col } from "antd";

import "./templatesResumePromo.css";

import ResumeTemplate from "../../../assets/images/resume-template.png";
import Rectangle from "../../../assets/images/rectangleOfPromo.svg";
import TemplateBg1 from "../../../assets/images/templates-bg-1.png";
import TemplateBg2 from "../../../assets/images/templates-bg-2.png";
import TemplateBg3 from "../../../assets/images/templates-bg-3.png";
import TemplateBg4 from "../../../assets/images/templates-bg-4.png";
import TemplateBg6 from "../../../assets/images/templates-bg-6.png";

const TemplatesResumePromo = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(0);

  function handleResize() {
    setIsScreenSmall(24);
  }

  return (
    <div className="templates__resume-promo">
      <div className="container">
        <h2>Rezyume shablonlari</h2>
        <p className="templates-subtitle">
          Smartjob sizni mukammal rezyume yaratish uchun barcha kerakli
          vositalar bilan qamrab oldi - butunlay bepul. Boshlash uchun sizga eng
          mos keladigan rezyume shablonini tanlang: professional va ATS uchun
          qulayroqdan zamonaviyroq yoki ijodiygacha.
        </p>
        <Row gutter={[20, 32]} wrap="wrap">
          <Col xs={24} sm={24} md={12} xl={8}>
            <div className="card-templates__resume-promo">
              <div className="template-img__resume-promo">
                <img src={TemplateBg1} alt="TemplateBg1" />
              </div>
              <img
                src={ResumeTemplate}
                className="resume-template__resume-promo"
                alt="ResumeTemplate"
              />
              <button className="primary-btn">Shablondan foydalanish</button>
              <div className="rectangle__resume-promo">
                <img src={Rectangle} alt="Rectangle" />
              </div>
              <div className="footer-templates__resume-promo">
                <span>Classic</span>
                <h6>Rezyume shablon 1</h6>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div className="card-templates__resume-promo">
              <div className="template-img__resume-promo">
                <img src={TemplateBg2} alt="TemplateBg1" />
              </div>
              <img
                src={ResumeTemplate}
                className="resume-template__resume-promo"
                alt="ResumeTemplate"
              />
              <button className="primary-btn">Shablondan foydalanish</button>
              <div className="rectangle__resume-promo">
                <img src={Rectangle} alt="Rectangle" />
              </div>
              <div className="footer-templates__resume-promo">
                <span>Classic</span>
                <h6>Rezyume shablon 1</h6>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div className="card-templates__resume-promo">
              <div className="template-img__resume-promo">
                <img src={TemplateBg3} alt="TemplateBg1" />
              </div>
              <img
                src={ResumeTemplate}
                className="resume-template__resume-promo"
                alt="ResumeTemplate"
              />
              <button className="primary-btn">Shablondan foydalanish</button>
              <div className="rectangle__resume-promo">
                <img src={Rectangle} alt="Rectangle" />
              </div>
              <div className="footer-templates__resume-promo">
                <span>Classic</span>
                <h6>Rezyume shablon 1</h6>
              </div>
            </div>
          </Col>
          <Col xs={isScreenSmall} sm={24} md={12} xl={8}>
            <div className="card-templates__resume-promo">
              <div className="template-img__resume-promo">
                <img src={TemplateBg4} alt="TemplateBg1" />
              </div>
              <img
                src={ResumeTemplate}
                className="resume-template__resume-promo"
                alt="ResumeTemplate"
              />
              <button className="primary-btn">Shablondan foydalanish</button>
              <div className="rectangle__resume-promo">
                <img src={Rectangle} alt="Rectangle" />
              </div>
              <div className="footer-templates__resume-promo">
                <span>Classic</span>
                <h6>Rezyume shablon 1</h6>
              </div>
            </div>
          </Col>
          <Col xs={isScreenSmall} sm={24} md={12} xl={8}>
            <div className="card-templates__resume-promo">
              <div className="template-img__resume-promo">
                <img src={TemplateBg1} alt="TemplateBg1" />
              </div>
              <img
                src={ResumeTemplate}
                className="resume-template__resume-promo"
                alt="ResumeTemplate"
              />
              <button className="primary-btn">Shablondan foydalanish</button>
              <div className="rectangle__resume-promo">
                <img src={Rectangle} alt="Rectangle" />
              </div>
              <div className="footer-templates__resume-promo">
                <span>Classic</span>
                <h6>Rezyume shablon 1</h6>
              </div>
            </div>
          </Col>
          <Col xs={isScreenSmall} sm={24} md={12} xl={8}>
            <div className="card-templates__resume-promo">
              <div className="template-img__resume-promo">
                <img src={TemplateBg6} alt="TemplateBg1" />
              </div>
              <img
                src={ResumeTemplate}
                className="resume-template__resume-promo"
                alt="ResumeTemplate"
              />
              <button className="primary-btn">Shablondan foydalanish</button>
              <div className="rectangle__resume-promo">
                <img src={Rectangle} alt="Rectangle" />
              </div>
              <div className="footer-templates__resume-promo">
                <span>Classic</span>
                <h6>Rezyume shablon 1</h6>
              </div>
            </div>
          </Col>
          <button className="see-all__btn" onClick={handleResize}>
            Yana ko'rsatish
          </button>
        </Row>
      </div>
    </div>
  );
};

export default TemplatesResumePromo;
