import React from "react";
import { Input, Select, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./herohome.css";

import LocationIcon from "../../../assets/images/location-icon.svg";
import CompanyIcon from "../../../assets/images/company-icon.svg";
import ResumeIcon from "../../../assets/images/resume-icon.svg";
import VacancyIcon from "../../../assets/images/vacancy-icon.svg";

const HeroHome = () => {
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
              prefix={<SearchOutlined />}
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
            <button className="search-btn__hero-home">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.861 2C15.7523 2 19.722 5.96973 19.722 10.861C19.722 15.7523 15.7523 19.722 10.861 19.722C5.96973 19.722 2 15.7523 2 10.861C2 5.96973 5.96973 2 10.861 2ZM10.861 17.7529C14.6688 17.7529 17.7529 14.6688 17.7529 10.861C17.7529 7.05324 14.6688 3.96911 10.861 3.96911C7.05324 3.96911 3.96911 7.05324 3.96911 10.861C3.96911 14.6688 7.05324 17.7529 10.861 17.7529ZM19.2153 17.8229L22 20.6076L20.6076 22L17.8229 19.2153L19.2153 17.8229Z"
                  fill="white"
                />
              </svg>

              <span>Qidirish</span>
            </button>
          </div>
        </div>
        <div className="work-types__hero-home">
          <div className="work-type__hero-home">To‘liq stavka</div>
          <div className="work-type__hero-home">Amaliyot</div>
          <div className="work-type__hero-home">Yarim stavka</div>
          <div className="work-type__hero-home">Frilans</div>
        </div>
      </div>
      <div className="footer__hero-home container">
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
