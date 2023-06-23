import { Button, Col, Form, Row, Select, message } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./thirdStep.css";

import QuestionMark from "../../../../assets/images/question-mark-dashboard.svg";
import Edit from "../../../../assets/images/edit-icon.svg";
import Trash from "../../../../assets/images/trash-icon.svg";
import AddCircle from "../../../../assets/images/add-circle.svg";

const ThirdStep = (props) => {
  const [form] = Form.useForm();

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const next = props.next;
  const prev = props.prev;

  const onFinish = (datas) => {
    console.log("Success:", datas);
    message.success("Muvaffaqiyatli saqlandi!");
    next(0);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="header__resume">
        <h3>Vakansiya yaratish </h3>
        <p> {t("enterYourBasicInformation")} </p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          // validateMessages={validateMessages}
          name="basic"
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[0, 24]} style={{ marginBottom: "48px" }}>
            <p className="subtitle__create-vacancy">Foydanlanuvchilar </p>
            <Col xs={24} sm={24}>
              <span className="section-title__create-vacancy">
                Recrutorlar
                <img src={QuestionMark} alt="QuestionMark" />
              </span>
              <div className="field__resume">
                <span>
                  <h4>Karimov Nodirjon Hotamovich</h4>
                  <h4>+923 90 675 00 11</h4>
                  <h4>Rakhimiy@gmail.com</h4>
                </span>
                <span className="action-group__resume">
                  <img src={Edit} alt="Edit icon" />
                  <img src={Trash} alt="Trash icon" />
                </span>
              </div>
              <Button
                block
                size="large"
                // onClick={() => setOpenPortfolioDrawer(true)}
                icon={<img src={AddCircle} alt="AddCircle" />}
                style={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {t("add")}
              </Button>
            </Col>
            <Col xs={24} sm={24}>
              <span className="section-title__create-vacancy">
                Xodimlar (intervyu oluvchilar)
                <img src={QuestionMark} alt="QuestionMark" />
              </span>
              <div className="field__resume">
                <span>
                  <h4>Karimov Nodirjon Hotamovich</h4>
                  <h4>+923 90 675 00 11</h4>
                  <h4>Rakhimiy@gmail.com</h4>
                </span>
                <span className="action-group__resume">
                  <img src={Edit} alt="Edit icon" />
                  <img src={Trash} alt="Trash icon" />
                </span>
              </div>
              <Button
                block
                size="large"
                // onClick={() => setOpenPortfolioDrawer(true)}
                icon={<img src={AddCircle} alt="AddCircle" />}
                style={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {t("add")}
              </Button>
            </Col>
            <Col xs={24} sm={24}>
              <span className="section-title__create-vacancy">
                Tashqi foydalanuvchilar
                <img src={QuestionMark} alt="QuestionMark" />
              </span>
              <div className="field__resume">
                <span>
                  <h4>Karimov Nodirjon Hotamovich</h4>
                  <h4>+923 90 675 00 11</h4>
                  <h4>Rakhimiy@gmail.com</h4>
                </span>
                <span className="action-group__resume">
                  <img src={Edit} alt="Edit icon" />
                  <img src={Trash} alt="Trash icon" />
                </span>
              </div>
              <Button
                block
                size="large"
                // onClick={() => setOpenPortfolioDrawer(true)}
                icon={<img src={AddCircle} alt="AddCircle" />}
                style={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {t("add")}
              </Button>
            </Col>
            <p className="subtitle__create-vacancy">Saralash bosqishlari </p>
            <Col xs={24} sm={24}>
              <Select
                showSearch
                style={{
                  width: "100%",
                }}
                size="large"
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Col>
            <Col xs={24} sm={24}>
              <div className="field__resume">
                <span>
                  <h4>1. Tizimdan tavsiya</h4>
                </span>
              </div>
              <div className="field__resume">
                <span>
                  <h4>2. Topshirilgan</h4>
                </span>
              </div>
              <div className="field__resume">
                <span>
                  <h4>3. Ko'rib chiqilmoqda</h4>
                </span>
              </div>
              <div className="field__resume">
                <span>
                  <h4>4. Suhbatda</h4>
                </span>
              </div>
              <div className="field__resume">
                <span>
                  <h4>5. Ko'rish</h4>
                </span>
              </div>
            </Col>
          </Row>
          <div className="footer__resume">
            <Button size="large" onClick={() => prev(2)}>
              {t("back")}
            </Button>
            <button
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              {t("save")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ThirdStep;
