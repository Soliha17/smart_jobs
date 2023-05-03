import React from "react";

import "./vacancyInput.css";
import { Input, Select, Space } from "antd";

import LocationIcon from "../../../assets/images/location-icon.svg";
import { SearchOutlined } from "@ant-design/icons";

const VacancyInput = () => {
  return (
    <div className="vacancy-input">
      <div className="action__hero-home container">
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
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.8675 16 16 12.8675 16 9C16 5.1325 12.8675 2 9 2C5.1325 2 2 5.1325 2 9C2 12.8675 5.1325 16 9 16ZM17.4853 16.0711L20.3137 18.8995L18.8995 20.3137L16.0711 17.4853L17.4853 16.0711Z"
                fill="white"
              />
            </svg>  
          </button>
        </div>
      </div>
    </div>
  );
};

export default VacancyInput;
