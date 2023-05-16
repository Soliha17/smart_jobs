import React from "react";

import "./additionalInformation.css";
import { Col, Input, Row, Select } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";

import Trash from "../../../assets/images/trash-icon.svg";
import AddCircle from "../../../assets/images/add-circle.svg";

const AdditionalInformation = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="header__resume">
        <h3>Qo’shimcha ma’lumotlar</h3>
        <p>O’zingiz haqingizda asosiy ma’lumotlani kiriting</p>
      </div>
      <div className="content__resume">
        <Row gutter={[24, 34]}>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Biladigan tillaringizni kiriting"
              labelFor="languages"
              input={
                <span className="language-group">
                  <div>
                    <Select
                      defaultValue={"uzb"}
                      size="large"
                      onChange={onChange}
                      options={[
                        {
                          value: "uzb",
                          label: "O'zbek tili",
                        },
                        {
                          value: "russian",
                          label: "Rus tili",
                        },
                        {
                          value: "english",
                          label: "Ingliz tili",
                        },
                      ]}
                    />
                    <Select
                      defaultValue={"b1"}
                      size="large"
                      onChange={onChange}
                      options={[
                        {
                          value: "b1",
                          label: "B1",
                        },
                        {
                          value: "a2",
                          label: "A2",
                        },
                      ]}
                    />
                    <img src={Trash} width={24} alt="Trash icon" />
                  </div>
                  <div>
                    <Select
                      placeholder="Til"
                      size="large"
                      onChange={onChange}
                      options={[
                        {
                          value: "uzb",
                          label: "O'zbek",
                        },
                        {
                          value: "russian",
                          label: "Rus",
                        },
                      ]}
                    />
                    <Select
                      placeholder="Daraja"
                      size="large"
                      onChange={onChange}
                      options={[
                        {
                          value: "b1",
                          label: "B1",
                        },
                        {
                          value: "a2",
                          label: "A2",
                        },
                      ]}
                    />
                  </div>
                </span>
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Akademik natijalar"
              labelFor="languages"
              input={
                <Input
                  size="large"
                  placeholder="Qo'shish"
                  prefix={<img src={AddCircle} alt="AddCircle icon" />}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Litsenizya va sertifikatlar"
              labelFor="languages"
              input={
                <Input
                  size="large"
                  placeholder="Qo'shish"
                  prefix={<img src={AddCircle} alt="AddCircle icon" />}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Oila ma'lumotlari"
              labelFor="languages"
              input={
                <Input
                  size="large"
                  placeholder="Qo'shish"
                  prefix={<img src={AddCircle} alt="AddCircle icon" />}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Portfolio"
              labelFor="languages"
              input={
                <Input
                  size="large"
                  placeholder="Qo'shish"
                  prefix={<img src={AddCircle} alt="AddCircle icon" />}
                />
              }
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdditionalInformation;
