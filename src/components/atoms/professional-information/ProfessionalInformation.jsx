import React from "react";

import { Button, Col, Input, Row, Select } from "antd";
import "./professionalInformation.css";

import LabeledInput from "../../molecules/labeled-input/LabeledInput";

import Trash from "../../../assets/images/trash-icon.svg";
import Edit from "../../../assets/images/edit-icon.svg";
import AddCircle from "../../../assets/images/add-circle.svg";
import AddTag from "../../molecules/add-tag/AddTag";
import AddTagInput from "../../molecules/add-tag/AddTagInput";

const ProfessionalInformation = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="header__resume">
        <h3>Kasbiy va ta’lim ma’lumotlari</h3>
        <p>O’zingiz haqingizda asosiy ma’lumotlani kiriting</p>
      </div>
      <div className="content__resume">
        <Row gutter={[24, 34]}>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Sohangizni kiring"
              labelFor="profession"
              input={<Input size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Ish tajribangiz"
              labelFor="experience"
              input={
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Input
                    size="large"
                    value="Product designer • NANO Group • Aprel 2022 - Hozirgacha • To‘liq stavka • Masofadan  "
                    suffix={
                      <span className="action-group__resume">
                        <img src={Edit} alt="Edit icon" />
                        <img src={Trash} alt="Trash icon" />
                      </span>
                    }
                  />
                  <Input
                    size="large"
                    placeholder="Qo'shish"
                    prefix={<img src={AddCircle} alt="AddCircle icon" />}
                  />
                </span>
              }
            />
          </Col>
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Ishlamoqchi bo’lgan formatingiz"
              labelFor="jobDirection"
              input={
                <Select
                  defaultValue="masofadan"
                  size="large"
                  onChange={onChange}
                  options={[
                    {
                      value: "masofadan",
                      label: "Masofadan",
                    },
                    {
                      value: "offisda",
                      label: "Offisda",
                    },
                  ]}
                />
              }
            />
          </Col>
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Ishlamoqchi bo’lgan ish turingiz"
              labelFor="jobType"
              input={
                <Select
                  defaultValue="full"
                  size="large"
                  onChange={onChange}
                  options={[
                    {
                      value: "full",
                      label: "To'liq stavka",
                    },
                    {
                      value: "part",
                      label: "Part time",
                    },
                  ]}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Olmoqchi bo’lgan ish haqingiz"
              labelFor="salary"
              input={<Input size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Ta'lim muassasasini kiring"
              labelFor="education"
              input={
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Input
                    size="large"
                    value="Kompyuter injiniring • TUIT • Bakalavr darajasi • 2019-2023"
                    suffix={
                      <span className="action-group__resume">
                        <img src={Edit} alt="Edit icon" />
                        <img src={Trash} alt="Trash icon" />
                      </span>
                    }
                  />
                  <Input
                    size="large"
                    placeholder="Qo'shish"
                    prefix={<img src={AddCircle} alt="AddCircle icon" />}
                  />
                </span>
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Ko’nikmalaringizni kiriting"
              labelFor="skills"
              input={
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "12px",
                  }}
                >
                  <AddTag />
                </span>
              }
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfessionalInformation;
