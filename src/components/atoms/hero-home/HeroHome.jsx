import React from "react";
import { Button, Col, Input, Row, Select, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

import "./herohome.css";
import LocationIcon from "../../../assets/images/location-icon.svg";
import CompanyIcon from "../../../assets/images/company-icon.svg";
import ResumeIcon from "../../../assets/images/resume-icon.svg";
import VacancyIcon from "../../../assets/images/vacancy-icon.svg";
import { Typography } from "antd";

const HeroHome = () => {
  const { Title } = Typography;
  return (
    <div className="hero-home">
      <div className="content__hero-home">
        <p className="hero__title">Orzudagi ishni birga topamiz !</p>
        <p className="hero__subtitle">
          Smart Jobs sizga ish joyingizni topishda ko’maklashadi
        </p>
        <div className="action__hero-home">
          <div className="input-group__hero-home">
            <Input
              className="input__hero-home"
              size="large"
              placeholder="Lavozim yoki komyaniyani kiriting"
              prefix={<LoadingOutlined />}
            />
            <div className="location-group__hero-home">
              <img src={LocationIcon} alt="LocationIcon" />
              <Space wrap className="select__hero-home">
                <Select
                  defaultValue="Toshkent"
                  style={{
                    width: 120,
                  }}
                  bordered={false}
                  options={[
                    {
                      value: "toshkent",
                      label: "Toshkent",
                    },
                    {
                      value: "buxoro",
                      label: "Buxoro",
                    },
                    {
                      value: "andijon",
                      label: "Andijon",
                    },
                    {
                      value: "xiva",
                      label: "Xiva",
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div>
            <Button
              className="search-btn__hero-home"
              icon={<SearchOutlined />}
              color="white"
            >
              <span>Ish izlash</span>
            </Button>
          </div>
        </div>
        <div className="work-types__hero-home">
          <div className="work-type__hero-home">To‘liq stavka</div>
          <div className="work-type__hero-home">Amaliyot</div>
          <div className="work-type__hero-home">Yarim stavka</div>
          <div className="work-type__hero-home">Frilans</div>
        </div>
      </div>
      <div className="footer__hero-home">
        <div className="footer-item__hero-home">
          <img src={VacancyIcon} alt="vacancy icon" />
          <p>Vokansiyalar</p>
        </div>
        <div className="footer-item__hero-home">
          <img src={CompanyIcon} alt="company icon" />
          <p>Kompaniyalar</p>
        </div>
        <div className="footer-item__hero-home">
          <img src={ResumeIcon} alt="resume icon" />
          <p>Rezyume konstuktor</p>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
